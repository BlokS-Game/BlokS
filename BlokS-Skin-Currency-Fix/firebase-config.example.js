/*
  BLOKS GOOGLE SIGN-IN SETUP
  1. Create a Firebase project at https://console.firebase.google.com/
  2. Add a Web app and copy its Firebase config into firebase-config.js.
  3. In Firebase Console > Authentication > Sign-in method, enable Google.
  4. In Authentication > Settings > Authorized domains, add your deployed website host.
  5. Run this website from localhost or a real HTTPS host (not by double-clicking index.html).
  IMPORTANT: Firebase web config is not a password. Never put service-account keys or admin secrets
  in browser files. Real S Coins, bans, admin tools, and player inventory need trusted server rules.
*/
export const firebaseConfig = {
  apiKey: "PASTE_YOUR_FIREBASE_API_KEY",
  authDomain: "PASTE_YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_YOUR_PROJECT_ID",
  appId: "PASTE_YOUR_FIREBASE_APP_ID"
};
