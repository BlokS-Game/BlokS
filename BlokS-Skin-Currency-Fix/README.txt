BLOKS STARTER — WEBSITE + GOOGLE SIGN-IN SCAFFOLD
================================================

WHAT IS INCLUDED
- Responsive BlokS website UI for mobile and desktop
- Original placeholder skins: FREE, S Coins, and Money categories
- Skin shop, local demo inventory, and demo missions
- Google sign-in integration scaffold using Firebase Authentication
- Payment is intentionally not connected yet

IMPORTANT HONEST LIMITATIONS
This is a website starter, not yet a finished multiplayer platform or 3D game.
Until Firebase is configured, Google sign-in will display setup instructions.
Demo S Coins and unlocked skins are stored in this browser only and can be changed
by the user. Do not sell these demo coins as real or secure currency.
There is no real payment, cloud inventory, moderation system, owner/admin panel,
or multiplayer server yet.

ENABLE GOOGLE SIGN-IN
1. Open https://console.firebase.google.com/ and create a Firebase project for BlokS.
2. In Project Overview, add a Web app (</> icon). Copy the Firebase web config.
3. In the BlokS folder, make a copy of firebase-config.example.js named
   firebase-config.js. Replace the PASTE_ values with the config from Firebase.
   Keep the property names apiKey, authDomain, projectId, and appId.
4. In Firebase Console > Build > Authentication > Get started.
5. In Authentication > Sign-in method, enable Google and save.
6. In Authentication > Settings > Authorized domains, add the host you use
   (for example, localhost for local testing and your actual hosting domain).
7. Run the site through a local web server or deploy it to HTTPS. Do not simply
   double-click index.html because browser module imports may be blocked.

TEST LOCALLY
If you have Python installed:
- Open a terminal/command prompt in this folder.
- Run: python -m http.server 8000
- Visit http://localhost:8000
If the browser says localhost is unauthorized, add localhost in Firebase's
Authorized domains. Do not share your Firebase console password with anyone.

NEXT BUILD STEPS
1. Set up Firebase Authentication and test Google sign-in.
2. Add Firestore database rules and server-validated player profiles.
3. Build a trusted backend for S Coins, admin grants, bans, and inventory.
4. Build the first playable original game, then multiplayer.
5. Connect payments only after the account, security, age/parental, and refund
   requirements are reviewed.

SECURITY NOTES
- Never put Firebase service-account keys, private API secrets, or admin passwords
  in HTML or JavaScript shipped to the browser.
- Google sign-in proves the player's identity; it does not make client-side coins,
  bans, or admin privileges secure by itself.
- Never decide that someone is an admin based only on a browser-side email check.
  Admin permissions must be checked by trusted backend code and database rules.


Currency and skin update: players start with 0 S Coins and 0 C Coins. C Coins are earned from missions; the Money Shop spends C Coins. S Coin skins are a separate high-tier category and do not grant a starting S Coin balance. The skin collection contains 7 free, 20 C Coin, 25 S Coin, and 5 real-money exclusive concepts. Exclusive checkout remains a demo and does not take payment.
