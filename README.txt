BLOKS — ORIGINAL SKINS, EMOTES & SOCIAL UI
==========================================

WHAT IS INCLUDED IN THIS BUILD
- Responsive BlokS website for mobile and desktop.
- 57 original CSS-rendered block-character skin designs:
  * 7 Free skins
  * 20 Money Shop skins bought with earnable in-game Coins
  * 25 S Coin skins bought with the separate S Coins wallet
  * 5 Real-money Exclusive skins
- 30 original emote concepts:
  * 5 free gestures
  * 15 Money Shop emotes
  * 10 S Coin emotes
- Skin previews, unlock/equip buttons, local demo inventory, and separate wallets.
- Daily missions that award normal in-game Coins in this prototype.
- Play Games concept hub with sample game cards.
- Friend list prototype, invite UI, create/join group screens, random five-digit group codes,
  group capacity checks for a maximum of five players, and group member character/name previews.
- Google sign-in scaffold using Firebase Authentication.

IMPORTANT LIMITATIONS
- This is a front-end prototype, not a finished multiplayer platform or 3D game.
- Skin and emote previews use original CSS-rendered block characters and simple preview effects.
  Full skeletal animations and synced in-game emotes require a 3D game client.
- Money, S Coins, inventory, friends, and groups are saved only in the current browser. They are
  demo data, can be edited by the user, and do not sync across devices or players.
- Group codes are randomly generated and the 5-player limit is checked in the browser demo.
  A real online service must generate/check codes and enforce membership/capacity on the server.
- Game cards are concepts; they do not launch playable games yet.
- Real-money checkout is intentionally not connected. Exclusive skin prices are display-only;
  no payment will be taken.
- Google sign-in will work only after Firebase is configured.

ENABLE GOOGLE SIGN-IN
1. Open https://console.firebase.google.com/ and create a Firebase project for BlokS.
2. Add a Web app (</> icon) and copy the Firebase web config.
3. Copy firebase-config.example.js to firebase-config.js and replace the PASTE_ values with your
   Firebase config. Keep the property names apiKey, authDomain, projectId, and appId.
4. In Firebase Console > Build > Authentication > Get started.
5. In Authentication > Sign-in method, enable Google and save.
6. In Authentication > Settings > Authorized domains, add localhost and your real hosting domain.
7. Run from a local web server or deploy to HTTPS; do not just double-click index.html.

TEST LOCALLY
- Open a terminal in this folder and run: python -m http.server 8000
- Visit http://localhost:8000

NEXT STEPS BEFORE PUBLIC LAUNCH
1. Add Firebase/Firestore player profiles and security rules.
2. Move all wallet changes, item ownership, group membership, and group-code validation to trusted
   backend code; never trust client-side balances or prices.
3. Build and host a playable original game and real-time multiplayer server.
4. Connect a compliant payment provider only after age/parental, refund, privacy, tax, and regional
   requirements are reviewed.

SECURITY NOTES
- Never put Firebase service-account keys, private API secrets, or admin passwords in browser files.
- Google sign-in verifies identity; it does not secure client-side currency or inventory.
- Never decide admin permissions only by checking an email address in browser JavaScript.
