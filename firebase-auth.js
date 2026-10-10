
/* =========================================
   BLOKS — FIREBASE GOOGLE SIGN-IN
   File: firebase-auth.js
========================================= */

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  signOut,
  setPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

/* 1. YOUR FIREBASE CONFIGURATION */

const firebaseConfig = {
  apiKey: "AIzaSyCx3OgYIu5eu4M8TTyMtktuhsMq3E6ieFc",
  authDomain: "bloks77777.firebaseapp.com",
  projectId: "bloks77777",
  storageBucket: "bloks77777.firebasestorage.app",
  messagingSenderId: "476742027829",
  appId: "1:476742027829:web:b13c6c212929cfc066ff7c",
  measurementId: "G-DLE2T9QZBM"
};

/* 2. INITIALIZE FIREBASE */

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
});

let currentUser = null;
let authReady = false;
let authActionRunning = false;

const $ = id => document.getElementById(id);

/* 3. HELPERS */

function showMessage(message) {
  const element = $("authMessage");

  if (element) {
    element.textContent = message;
  } else {
    console.log("[BlokS Auth]", message);
  }
}

function notify(message) {
  const element = $("toast");

  if (!element) {
    console.log("[BlokS]", message);
    return;
  }

  element.textContent = message;
  element.classList.add("show");

  clearTimeout(notify.timer);

  notify.timer = setTimeout(() => {
    element.classList.remove("show");
  }, 3000);
}

function closeSignInDialog() {
  const dialog = $("signInDialog");
  if (!dialog) return;

  if (typeof dialog.close === "function" && dialog.open) {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function setVisible(id, visible) {
  const element = $(id);
  if (element) element.hidden = !visible;
}

function updateAccountButtons(user) {
  setVisible("signedInProfile", Boolean(user));
  setVisible("signOutBtn", Boolean(user));
  setVisible("googleSignInBtn", !user);
  setVisible("demoSignIn", !user);

  const signInButton = $("signInBtn");

  if (signInButton) {
    signInButton.textContent = user ? "My Account" : "Sign in";
  }
}

function getLocalProfile() {
  try {
    return JSON.parse(
      localStorage.getItem("bloks_player_profile_v1") || "{}"
    );
  } catch {
    return {};
  }
}

/* 4. SHOW PLAYER ACCOUNT */

function showUser(user, profile = {}) {
  const name =
    profile.name ||
    profile.displayName ||
    user.displayName ||
    user.email?.split("@")[0] ||
    "BlokS Player";

  if ($("sidebarPlayerName")) {
    $("sidebarPlayerName").textContent = name;
  }

  if ($("sidebarAvatar")) {
    if (user.photoURL) {
      $("sidebarAvatar").innerHTML =
        `<img class="user-avatar-image" src="${escapeHTML(user.photoURL)}" alt="">`;
    } else {
      $("sidebarAvatar").textContent = name.charAt(0).toUpperCase();
    }
  }

  if ($("signedInName")) {
    $("signedInName").textContent = name;
  }

  if ($("signedInEmail")) {
    $("signedInEmail").textContent = user.email || "";
  }

  if ($("signedInAvatar")) {
    if (user.photoURL) {
      $("signedInAvatar").innerHTML =
        `<img class="user-avatar-image" src="${escapeHTML(user.photoURL)}" alt="">`;
    } else {
      $("signedInAvatar").textContent = name.charAt(0).toUpperCase();
    }
  }

  if ($("profileName") && !$("profileName").value.trim()) {
    $("profileName").value = name;
  }

  if (typeof window.bloksOnSignedIn === "function") {
    window.bloksOnSignedIn(user, profile);
  }
}

/* 5. LOAD OR CREATE CLOUD PROFILE */

async function loadUserProfile(user) {
  const userRef = doc(db, "users", user.uid);
  const snapshot = await getDoc(userRef);

  if (snapshot.exists()) {
    const cloudProfile = snapshot.data();
    const localProfile = getLocalProfile();

    const profile = {
      ...localProfile,
      ...cloudProfile,
      name:
        cloudProfile.name ||
        localProfile.name ||
        user.displayName ||
        "BlokS Player"
    };

    try {
      localStorage.setItem(
        "bloks_player_profile_v1",
        JSON.stringify(profile)
      );

      localStorage.setItem(
        "bloks_demo_player",
        profile.name
      );
    } catch (error) {
      console.warn("Could not cache player profile:", error);
    }

    return profile;
  }

  const profile = {
    uid: user.uid,
    name: user.displayName || "BlokS Player",
    displayName: user.displayName || "BlokS Player",
    email: user.email || "",
    photoURL: user.photoURL || "",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  };

  await setDoc(userRef, profile, { merge: true });

  return {
    uid: user.uid,
    name: profile.name,
    displayName: profile.displayName,
    email: profile.email,
    photoURL: profile.photoURL
  };
}

/* 6. GOOGLE SIGN-IN */

async function googleSignIn() {
  if (!authReady) {
    showMessage("Firebase is connecting. Please try again shortly.");
    return;
  }

  if (authActionRunning) return;
  authActionRunning = true;

  const button = $("googleSignInBtn");

  if (button) button.disabled = true;

  showMessage("Connecting to Google…");

  try {
    await signInWithPopup(auth, googleProvider);

    closeSignInDialog();
    showMessage("");
    notify("Google sign-in successful!");
  } catch (error) {
    console.error("Google sign-in error:", error);

    if (
      error.code === "auth/popup-blocked" ||
      error.code === "auth/popup-closed-by-user"
    ) {
      if (error.code === "auth/popup-blocked") {
        try {
          await signInWithRedirect(auth, googleProvider);
          return;
        } catch (redirectError) {
          console.error("Redirect sign-in error:", redirectError);
          showMessage(getErrorMessage(redirectError));
        }
      } else {
        showMessage("Sign-in was cancelled. Please try again.");
      }
    } else {
      showMessage(getErrorMessage(error));
    }
  } finally {
    authActionRunning = false;
    if (button) button.disabled = false;
  }
}

/* 7. SIGN OUT */

async function googleSignOut() {
  try {
    await signOut(auth);
    closeSignInDialog();
    notify("You have signed out.");
  } catch (error) {
    console.error("Sign-out error:", error);
    notify("Could not sign out. Please try again.");
  }
}

/* 8. FIRESTORE PROFILE SAVE */

async function saveUserProfile() {
  if (!currentUser) {
    notify("Sign in with Google to save your profile online.");
    return;
  }

  const local = getLocalProfile();

  const name = (
    $("profileName")?.value.trim() ||
    local.name ||
    currentUser.displayName ||
    "BlokS Player"
  ).slice(0, 24);

  const profile = {
    name,
    displayName: name,
    email: currentUser.email || "",
    photoURL: currentUser.photoURL || "",
    gender: local.gender || "",
    country: local.country || "",
    language: local.language || "English",
    accent: local.accent || "#9b8aff",
    bio: (local.bio || "").slice(0, 160),
    showCountry: Boolean(local.showCountry),
    updatedAt: serverTimestamp()
  };

  try {
    await setDoc(
      doc(db, "users", currentUser.uid),
      profile,
      { merge: true }
    );

    localStorage.setItem(
      "bloks_player_profile_v1",
      JSON.stringify({
        ...local,
        ...profile,
        updatedAt: new Date().toISOString()
      })
    );

    if ($("sidebarPlayerName")) {
      $("sidebarPlayerName").textContent = name;
    }

    notify("Your online profile has been saved!");
  } catch (error) {
    console.error("Profile save error:", error);
    notify(getErrorMessage(error));
  }
}

/* 9. ERROR MESSAGES */

function getErrorMessage(error) {
  switch (error?.code) {
    case "auth/unauthorized-domain":
      return "Add bloks-game.github.io under Firebase Authorized domains.";

    case "auth/operation-not-allowed":
      return "Enable Google in Firebase Authentication sign-in providers.";

    case "auth/invalid-api-key":
      return "Firebase API key is invalid. Check your configuration.";

    case "auth/network-request-failed":
      return "Network error. Check your internet connection.";

    case "permission-denied":
    case "firestore/permission-denied":
      return "Firestore permission denied. Check your database rules.";

    default:
      return error?.message || "Something went wrong. Please try again.";
  }
}

/* 10. AUTHENTICATION STATE */

async function handleAuthState(user) {
  currentUser = user || null;
  updateAccountButtons(currentUser);

  if (!user) {
    showMessage("");
    return;
  }

  showMessage("Loading your player account…");

  try {
    const profile = await loadUserProfile(user);
    showUser(user, profile);
    showMessage("");
  } catch (error) {
    console.error("Could not load cloud profile:", error);
    showUser(user, {});
    showMessage(
      "Signed in, but the online profile could not load. Check Firestore rules."
    );
  }
}

/* 11. INITIALIZE AUTHENTICATION */

async function initializeAuthentication() {
  try {
    await setPersistence(auth, browserLocalPersistence);

    try {
      await getRedirectResult(auth);
    } catch (error) {
      console.error("Redirect result error:", error);
      showMessage(getErrorMessage(error));
    }

    authReady = true;
    onAuthStateChanged(auth, handleAuthState);
  } catch (error) {
    console.error("Firebase initialization error:", error);
    showMessage(
      "Firebase setup failed. Check your firebaseConfig and database."
    );
  }
}

/* 12. CONNECT EXISTING HTML BUTTONS */

$("googleSignInBtn")?.addEventListener("click", googleSignIn);

$("signOutBtn")?.addEventListener("click", googleSignOut);

$("signInBtn")?.addEventListener("click", () => {
  if (currentUser) {
    if (typeof window.go === "function") {
      window.go("profile");
    }
    return;
  }

  const dialog = $("signInDialog");

  if (dialog && typeof dialog.showModal === "function") {
    dialog.showModal();
  } else if (dialog) {
    dialog.setAttribute("open", "");
  }
});

/* app.js saves the local profile first; then sync it online. */
$("profileForm")?.addEventListener("submit", () => {
  setTimeout(() => {
    saveUserProfile();
  }, 150);
});

/* Public helpers for other BlokS code */
window.bloksFirebase = {
  getCurrentUser: () => currentUser,
  signIn: googleSignIn,
  signOut: googleSignOut,
  saveUserProfile
};

initializeAuthentication();
