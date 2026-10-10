import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {
  getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { firebaseConfig } from "./firebase-config.js";

const $ = (id) => document.getElementById(id);
const signInBtn = $("googleSignInBtn");
const signOutBtn = $("signOutBtn");
const profile = $("signedInProfile");
const message = $("authMessage");
const dialog = $("signInDialog");

function configReady() {
  return firebaseConfig.apiKey && !firebaseConfig.apiKey.startsWith("PASTE_") &&
    firebaseConfig.projectId && !firebaseConfig.projectId.startsWith("PASTE_") &&
    firebaseConfig.appId && !firebaseConfig.appId.startsWith("PASTE_");
}
let auth = null;
if (!configReady()) {
  message.textContent = "Setup needed: copy firebase-config.example.js to firebase-config.js and paste your Firebase web app config. Follow README.txt.";
  signInBtn.addEventListener("click", () => {
    message.textContent = "Google sign-in is not connected yet. Finish the Firebase steps in README.txt, then reload this page.";
  });
} else {
  try {
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    signInBtn.addEventListener("click", async () => {
      signInBtn.disabled = true;
      message.textContent = "Opening Google sign-in…";
      try {
        await signInWithPopup(auth, provider);
        message.textContent = "Signed in successfully.";
        dialog.close();
      } catch (err) {
        message.textContent = friendlyError(err.code);
      } finally {
        signInBtn.disabled = false;
      }
    });

    signOutBtn.addEventListener("click", async () => {
      try { await signOut(auth); message.textContent = "You have signed out."; }
      catch { message.textContent = "Sign-out failed. Please try again."; }
    });

    onAuthStateChanged(auth, (user) => {
      if (user) {
        profile.hidden = false;
        profile.replaceChildren();
        if (user.photoURL) {
          const img = document.createElement("img");
          img.src = user.photoURL; img.alt = "Google profile photo";
          profile.appendChild(img);
        }
        const text = document.createElement("div");
        const name = document.createElement("strong");
        name.textContent = user.displayName || "BlokS player";
        const email = document.createElement("small");
        email.textContent = user.email || "";
        text.append(name, email); profile.appendChild(text);
        signInBtn.textContent = "Account";
        signOutBtn.hidden = false;
        message.textContent = "Google account connected.";
        const miniName = document.querySelector(".profile-mini strong");
        if (miniName) miniName.textContent = user.displayName || "BlokS Player";
        const miniAvatar = document.querySelector(".avatar-small");
        if (miniAvatar) miniAvatar.textContent = (user.displayName || "B").slice(0,1).toUpperCase();
      } else {
        profile.hidden = true;
        signOutBtn.hidden = true;
        signInBtn.textContent = "↗ Sign in";
      }
    });
  } catch (err) {
    message.textContent = "Firebase setup error. Check firebase-config.js and the README setup steps.";
  }
}

function friendlyError(code) {
  const messages = {
    "auth/popup-closed-by-user": "Google sign-in was closed before finishing.",
    "auth/unauthorized-domain": "This website host is not allowed yet. Add it in Firebase Authentication > Settings > Authorized domains.",
    "auth/popup-blocked": "Your browser blocked the sign-in popup. Allow popups for this website and try again.",
    "auth/network-request-failed": "Network problem. Check your connection and try again."
  };
  return messages[code] || "Could not sign in. Check Firebase Google sign-in settings and try again.";
}
