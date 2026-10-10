BLOKS UPDATED PROTOTYPE

Files: index.html, styles.css, app.js
Open index.html in a modern browser to test the local prototype.

Included in this update:
- Play Games item and concept game hub
- 11 mission cards with C Coin rewards
- Skin/friend-count mission checks; game-time/game-count missions explicitly require real tracking
- Group lobby panel, local browser-only chat, and owned-emote picker
- Existing skin shop, emote shop, profile, inventory, and other UI retained

IMPORTANT LIMITATIONS
This is still a front-end prototype. Friends/groups/chat are stored in localStorage in one browser and do NOT connect different users or devices. Username validation against registered accounts, online/offline presence, cross-device multiplayer lobby/chat, game play, and authoritative mission tracking require a deployed backend and actual game implementation. The game cards are concept previews, not playable games. Firebase Auth setup alone does not implement these services.
Do not use local demo coins as real currency. Test before publishing.
