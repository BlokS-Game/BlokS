
const SKINS = [{"id":"classic","name":"Classic Starter","category":"free","rarity":"Basic","price":0,"priceLabel":"FREE","description":"A clean violet starter outfit for your first adventure.","colors":["#9b8aff","#6d5ce7","#313453"],"glow":"#313453","design":0},{"id":"mint","name":"Mint Dash","category":"free","rarity":"Basic","price":0,"priceLabel":"FREE","description":"Fresh mint panels and sporty explorer details.","colors":["#79e2c1","#3baf98","#24594f"],"glow":"#24594f","design":1},{"id":"sunny","name":"Sunny Side","category":"free","rarity":"Basic","price":0,"priceLabel":"FREE","description":"Golden yellow layers for bright, cheerful worlds.","colors":["#ffd27c","#df9b37","#644d30"],"glow":"#644d30","design":2},{"id":"night","name":"Night Pixel","category":"free","rarity":"Basic","price":0,"priceLabel":"FREE","description":"A midnight-blue look with crisp pixel accents.","colors":["#9ba8c9","#596783","#252b40"],"glow":"#252b40","design":3},{"id":"sprout","name":"Little Sprout","category":"free","rarity":"Basic","price":0,"priceLabel":"FREE","description":"Leafy colours for curious nature explorers.","colors":["#a7e477","#5aaf49","#315a38"],"glow":"#315a38","design":4},{"id":"berry","name":"Berry Pop","category":"free","rarity":"Basic","price":0,"priceLabel":"FREE","description":"Pink and plum colour blocking with playful energy.","colors":["#f5a5d1","#b84e9d","#582b65"],"glow":"#582b65","design":0},{"id":"tide","name":"Tidepool","category":"free","rarity":"Basic","price":0,"priceLabel":"FREE","description":"Ocean blue basics with a wave-inspired chest mark.","colors":["#8bdcff","#328eb0","#203d64"],"glow":"#203d64","design":1},{"id":"street","name":"Street Spark","category":"money","rarity":"Style","price":400,"priceLabel":"400 Coins","description":"Layered streetwear with bright contrast panels.","colors":["#f4c5a1","#ec6b50","#3a3156"],"glow":"#3a3156","design":1},{"id":"citrus","name":"Citrus Crew","category":"money","rarity":"Style","price":625,"priceLabel":"625 Coins","description":"Lime and forest tones with a sporty silhouette.","colors":["#e9f37c","#9bbd3e","#375344"],"glow":"#375344","design":2},{"id":"denim","name":"Denim Drift","category":"money","rarity":"Style","price":850,"priceLabel":"850 Coins","description":"A casual blue jacket look with clean stitching.","colors":["#b8c9f8","#597bb9","#273b68"],"glow":"#273b68","design":3},{"id":"rose","name":"Rose Circuit","category":"money","rarity":"Style","price":1075,"priceLabel":"1,075 Coins","description":"Rose-coloured panels and polished urban details.","colors":["#ffc1dc","#d45b9c","#55385e"],"glow":"#55385e","design":4},{"id":"desert","name":"Desert Nomad","category":"money","rarity":"Style","price":1300,"priceLabel":"1,300 Coins","description":"Warm sand colours and travel-ready layers.","colors":["#e8c08b","#b8754b","#60443b"],"glow":"#60443b","design":0},{"id":"voltage","name":"Voltage Kid","category":"money","rarity":"Style","price":1525,"priceLabel":"1,525 Coins","description":"Electric yellow details over a dark athletic base.","colors":["#f5ee70","#b6a92b","#30344e"],"glow":"#30344e","design":1},{"id":"cloud","name":"Cloudwave","category":"money","rarity":"Style","price":1750,"priceLabel":"1,750 Coins","description":"Soft cloud colours and a modern oversized jacket.","colors":["#e5e8ff","#899ce4","#454c86"],"glow":"#454c86","design":2},{"id":"racer","name":"Comet Racer","category":"money","rarity":"Style","price":1975,"priceLabel":"1,975 Coins","description":"Racing stripes and bright red trainer accents.","colors":["#ff9e91","#df4f58","#302f52"],"glow":"#302f52","design":3},{"id":"patchwork","name":"Patchwork Hero","category":"money","rarity":"Style","price":2200,"priceLabel":"2,200 Coins","description":"Colour-blocked layers inspired by handmade patches.","colors":["#e9b7ff","#a66ed5","#384f88"],"glow":"#384f88","design":4},{"id":"neon","name":"Neon Courier","category":"money","rarity":"Style","price":2425,"priceLabel":"2,425 Coins","description":"Teal piping and a messenger-ready techwear look.","colors":["#8ef5e7","#328f98","#252e52"],"glow":"#252e52","design":0},{"id":"copper","name":"Copper Fox","category":"money","rarity":"Style","price":2650,"priceLabel":"2,650 Coins","description":"Copper accents and warm brown utility pieces.","colors":["#ffc18a","#b86b46","#49354b"],"glow":"#49354b","design":1},{"id":"glacier","name":"Glacier Club","category":"money","rarity":"Style","price":2875,"priceLabel":"2,875 Coins","description":"Cool blue panels with a frosty sporty finish.","colors":["#d6f7ff","#76bad9","#3c5386"],"glow":"#3c5386","design":2},{"id":"lilac","name":"Lilac Tempo","category":"money","rarity":"Style","price":3100,"priceLabel":"3,100 Coins","description":"Lilac and indigo layers with a rhythm-inspired badge.","colors":["#e4baff","#9874cf","#3d3b6e"],"glow":"#3d3b6e","design":3},{"id":"jungle","name":"Jungle Beat","category":"money","rarity":"Style","price":3325,"priceLabel":"3,325 Coins","description":"Leaf green utility styling with rugged boots.","colors":["#b7e27a","#4c9758","#293e46"],"glow":"#293e46","design":4},{"id":"starlight","name":"Starlight Prep","category":"money","rarity":"Style","price":3550,"priceLabel":"3,550 Coins","description":"A polished navy-and-gold academy-inspired outfit.","colors":["#fff0b3","#d7ad4b","#3e4a79"],"glow":"#3e4a79","design":0},{"id":"pixel","name":"Pixel Pilot","category":"money","rarity":"Style","price":3775,"priceLabel":"3,775 Coins","description":"A pilot jacket look with graphic shoulder panels.","colors":["#a9c7ff","#4c70bd","#30354f"],"glow":"#30354f","design":1},{"id":"candy","name":"Candy Static","category":"money","rarity":"Style","price":4000,"priceLabel":"4,000 Coins","description":"Sweet pink and violet colours with playful shapes.","colors":["#ffb5f1","#c35ab7","#55417f"],"glow":"#55417f","design":2},{"id":"storm","name":"Storm Runner","category":"money","rarity":"Style","price":4225,"priceLabel":"4,225 Coins","description":"Layered slate panels made for moody weather worlds.","colors":["#aab8d3","#526b91","#252b40"],"glow":"#252b40","design":3},{"id":"ember","name":"Ember Street","category":"money","rarity":"Style","price":4450,"priceLabel":"4,450 Coins","description":"Charcoal streetwear warmed by ember-orange accents.","colors":["#ffb080","#e65e4b","#682d46"],"glow":"#682d46","design":4},{"id":"prism","name":"Prism Runner","category":"money","rarity":"Style","price":4675,"priceLabel":"4,675 Coins","description":"A vivid multi-tone runner outfit with reflective panels.","colors":["#f7a9ff","#8d75ee","#3b7cb3"],"glow":"#3b7cb3","design":0},{"id":"cyber","name":"Cyber Pulse","category":"coins","rarity":"Rare","price":1200,"priceLabel":"1,200 S","description":"Electric cyan armour panels and a futuristic visor.","colors":["#62e8fa","#238eae","#173f60"],"glow":"#173f60","design":2},{"id":"emberlord","name":"Ember Warden","category":"coins","rarity":"Epic","price":2200,"priceLabel":"2,200 S","description":"Volcanic plates and glowing ember seams.","colors":["#ffad73","#e65e4b","#682d46"],"glow":"#682d46","design":3},{"id":"frostline","name":"Frostline","category":"coins","rarity":"Epic","price":3000,"priceLabel":"3,000 S","description":"Icy layers with crystalline shoulder guards.","colors":["#c4f4ff","#5bb4e7","#2b477f"],"glow":"#2b477f","design":4},{"id":"void","name":"Void Monarch","category":"coins","rarity":"Legendary","price":6500,"priceLabel":"6,500 S","description":"A dark cosmic coat edged in violet light.","colors":["#d3a2ff","#7244bd","#24183f"],"glow":"#24183f","design":0},{"id":"starforge","name":"Starforge","category":"coins","rarity":"Mythic","price":12000,"priceLabel":"12,000 S","description":"Celestial armour with star-metal trim.","colors":["#fff0a6","#d8a84b","#5940a2"],"glow":"#5940a2","design":1},{"id":"thunder","name":"Thunder Circuit","category":"coins","rarity":"Epic","price":1800,"priceLabel":"1,800 S","description":"Storm-charged panels with electric gold lines.","colors":["#fff080","#8d75e8","#2a3157"],"glow":"#2a3157","design":2},{"id":"deepsea","name":"Abyss Diver","category":"coins","rarity":"Epic","price":2600,"priceLabel":"2,600 S","description":"Deep-sea armour with bioluminescent highlights.","colors":["#71f1e5","#167e91","#142e4d"],"glow":"#142e4d","design":3},{"id":"solar","name":"Solar Flare","category":"coins","rarity":"Legendary","price":5200,"priceLabel":"5,200 S","description":"Radiant sun plates and a fiery back crest.","colors":["#fff1a1","#f28b45","#9c3c55"],"glow":"#9c3c55","design":4},{"id":"moonveil","name":"Moonveil","category":"coins","rarity":"Legendary","price":4800,"priceLabel":"4,800 S","description":"Moonlit layered robes with a silver faceplate.","colors":["#e0dcff","#8a8bd5","#34345e"],"glow":"#34345e","design":0},{"id":"rune","name":"Rune Keeper","category":"coins","rarity":"Epic","price":3200,"priceLabel":"3,200 S","description":"Ancient rune markings glow across this explorer suit.","colors":["#a6f0c2","#418e77","#283f5e"],"glow":"#283f5e","design":1},{"id":"quantum","name":"Quantum Shift","category":"coins","rarity":"Mythic","price":8500,"priceLabel":"8,500 S","description":"Shifting colour panels with a quantum-core chest piece.","colors":["#a0f8ff","#6577f0","#2a2d65"],"glow":"#2a2d65","design":2},{"id":"crystal","name":"Crystal Crown","category":"coins","rarity":"Legendary","price":2800,"priceLabel":"2,800 S","description":"Faceted crystal shoulder pieces and a radiant crown.","colors":["#f9ccff","#b36ee0","#4a367d"],"glow":"#4a367d","design":3},{"id":"ironbloom","name":"Ironbloom","category":"coins","rarity":"Epic","price":6200,"priceLabel":"6,200 S","description":"Forged metal details meet botanical shapes.","colors":["#e8c0a4","#a86d54","#3d4b48"],"glow":"#3d4b48","design":4},{"id":"phantom","name":"Phantom Dash","category":"coins","rarity":"Legendary","price":3900,"priceLabel":"3,900 S","description":"A stealth silhouette with ghostly pale highlights.","colors":["#c9d4ff","#6975aa","#25243f"],"glow":"#25243f","design":0},{"id":"dragonfruit","name":"Dragonfruit Nova","category":"coins","rarity":"Epic","price":3600,"priceLabel":"3,600 S","description":"Magenta energy plates with a sharp lime accent.","colors":["#ff9dc7","#c43f80","#432d68"],"glow":"#432d68","design":1},{"id":"skybreaker","name":"Skybreaker","category":"coins","rarity":"Epic","price":7200,"priceLabel":"7,200 S","description":"Aerial pilot armour with wing-shaped back panels.","colors":["#c6eaff","#5489cf","#303c73"],"glow":"#303c73","design":2},{"id":"magma","name":"Magma Core","category":"coins","rarity":"Legendary","price":5400,"priceLabel":"5,400 S","description":"Molten lines shine through dark volcanic plates.","colors":["#ffc47a","#e24d35","#422640"],"glow":"#422640","design":3},{"id":"aurora","name":"Aurora Drift","category":"coins","rarity":"Legendary","price":4300,"priceLabel":"4,300 S","description":"Northern-light gradients and a flowing luminous scarf.","colors":["#8af0dd","#4d9fc2","#4d3d82"],"glow":"#4d3d82","design":4},{"id":"synthwave","name":"Synthwave Ace","category":"coins","rarity":"Epic","price":2400,"priceLabel":"2,400 S","description":"Retro-future panels with hot pink energy strips.","colors":["#ff9ef5","#8455cc","#252950"],"glow":"#252950","design":0},{"id":"wildwood","name":"Wildwood Guardian","category":"coins","rarity":"Epic","price":3000,"priceLabel":"3,000 S","description":"Moss-green armour and carved wooden details.","colors":["#c9ed8a","#5c9a52","#304b43"],"glow":"#304b43","design":1},{"id":"clockwork","name":"Clockwork Comet","category":"coins","rarity":"Legendary","price":5800,"priceLabel":"5,800 S","description":"Brass gears and a mechanical shoulder mantle.","colors":["#f8d18c","#ad8049","#3b425f"],"glow":"#3b425f","design":2},{"id":"nebulark","name":"Nebulark","category":"coins","rarity":"Mythic","price":14000,"priceLabel":"14,000 S","description":"Nebula gradients and floating shard accessories.","colors":["#bca4ff","#6050a7","#22213f"],"glow":"#22213f","design":3},{"id":"tidal","name":"Tidal Phantom","category":"coins","rarity":"Legendary","price":5100,"priceLabel":"5,100 S","description":"A spectral ocean outfit with wave-like trim.","colors":["#9af7ff","#3d9eb8","#243c64"],"glow":"#243c64","design":4},{"id":"prismguard","name":"Prism Guard","category":"coins","rarity":"Mythic","price":9500,"priceLabel":"9,500 S","description":"Iridescent guard plates split into prism facets.","colors":["#ffe0ff","#9b72e8","#3b477f"],"glow":"#3b477f","design":0},{"id":"eclipse","name":"Eclipse Sovereign","category":"coins","rarity":"Mythic","price":20000,"priceLabel":"20,000 S","description":"A dramatic eclipse cape and glowing solar crest.","colors":["#ffd49b","#8c5fc2","#1e1d38"],"glow":"#1e1d38","design":1},{"id":"celestial","name":"Celestial Sovereign","category":"premium","rarity":"Ultra Exclusive","price":0,"priceLabel":"₹499","description":"A radiant cosmic mantle, floating halo shards, and animated starlight.","colors":["#fff1bf","#d9b3ff","#32265f"],"glow":"#32265f","design":3},{"id":"auric","name":"Auric Overdrive","category":"premium","rarity":"Ultra Exclusive","price":0,"priceLabel":"₹599","description":"Sculpted gold plating with a pulsing amber energy core.","colors":["#fff2a8","#d59a32","#49305f"],"glow":"#49305f","design":4},{"id":"glitchking","name":"Glitch Kingdom","category":"premium","rarity":"Ultra Exclusive","price":0,"priceLabel":"₹699","description":"A prismatic glitch cloak with shifting holographic trim.","colors":["#a9fff4","#f28aff","#24254f"],"glow":"#24254f","design":0},{"id":"stormcrown","name":"Tempest Crown","category":"premium","rarity":"Ultra Exclusive","price":0,"priceLabel":"₹799","description":"A storm halo, layered cloud cape, and electric-blue sparks.","colors":["#e0edff","#7695df","#34304f"],"glow":"#34304f","design":1},{"id":"dreamnova","name":"Dreamnova Ascendant","category":"premium","rarity":"Ultra Exclusive","price":0,"priceLabel":"₹999","description":"A dreamy astral suit with orbiting crystal ornaments.","colors":["#ffd4ee","#a9a1ff","#34255c"],"glow":"#34255c","design":2}];

const EMOTES = [
  {id:"hello",name:"Hello Wave",category:"free",emoji:"👋",description:"A friendly wave to greet the lobby."},
  {id:"handshake",name:"Good Game Handshake",category:"free",emoji:"🤝",description:"Offer a friendly handshake."},
  {id:"thumbsup",name:"Thumbs Up",category:"free",emoji:"👍",description:"Show your approval."},
  {id:"peace",name:"Double Peace",category:"free",emoji:"✌️",description:"Flash a playful two-finger peace sign."},
  {id:"handsup",name:"Hands to the Sky",category:"free",emoji:"🙌",description:"Raise both hands in celebration."},
  {id:"groove",name:"Sidewalk Groove",category:"money",emoji:"🕺",description:"An original bouncy side-step dance.",price:450},
  {id:"robot",name:"Tinbot Shuffle",category:"money",emoji:"🤖",description:"A playful mechanical shuffle.",price:650},
  {id:"heart",name:"Heart Spark",category:"money",emoji:"💖",description:"Make a heart gesture with a sparkling finish.",price:700},
  {id:"laugh",name:"Giggle Burst",category:"money",emoji:"😂",description:"A big laugh with a shoulder bounce.",price:500},
  {id:"clap",name:"Pocket Applause",category:"money",emoji:"👏",description:"A quick double clap and nod.",price:550},
  {id:"shrug",name:"Who Knows?",category:"money",emoji:"🤷",description:"A cheeky shoulder shrug.",price:400},
  {id:"sleepy",name:"Sleepy Stand",category:"money",emoji:"😴",description:"A funny doze-off sway.",price:600},
  {id:"flex",name:"Power Flex",category:"money",emoji:"💪",description:"Show off with an exaggerated flex.",price:850},
  {id:"spin",name:"Orbit Spin",category:"money",emoji:"🌀",description:"A fast turn ending in a pose.",price:950},
  {id:"salute",name:"Star Salute",category:"money",emoji:"🫡",description:"A crisp salute with a confident nod.",price:750},
  {id:"sneak",name:"Sneaky Steps",category:"money",emoji:"🥷",description:"A comic tiptoe and look-around.",price:1000},
  {id:"bounce",name:"Bounce Beat",category:"money",emoji:"🎵",description:"A rhythm bounce with two foot taps.",price:900},
  {id:"taunt",name:"Tiny Triumph",category:"money",emoji:"😎",description:"A relaxed cool pose with a quick lean.",price:800},
  {id:"cheer",name:"Team Cheer",category:"money",emoji:"🎉",description:"A mini celebration for your squad.",price:1100},
  {id:"skate",name:"Air Skate",category:"money",emoji:"🛹",description:"A pretend skate glide ending in a wave.",price:1200},
  {id:"phoenix",name:"Phoenix Rise",category:"coins",emoji:"🔥",description:"Rise into a bold victory pose with a flame aura.",price:1400},
  {id:"galaxy",name:"Galaxy Waltz",category:"coins",emoji:"🌌",description:"A graceful orbiting dance with star-like sparks.",price:2200},
  {id:"thunderclap",name:"Thunder Clap",category:"coins",emoji:"⚡",description:"Clap as a stylised lightning flash bursts around you.",price:2600},
  {id:"crystalbow",name:"Crystal Bow",category:"coins",emoji:"💎",description:"A formal bow with crystalline glints.",price:1800},
  {id:"shadowstep",name:"Shadowstep",category:"coins",emoji:"🌑",description:"A quick shadowy sidestep and reveal.",price:3000},
  {id:"comet",name:"Comet Landing",category:"coins",emoji:"☄️",description:"A superhero-like landing with a comet trail.",price:3600},
  {id:"aurora-dance",name:"Aurora Flow",category:"coins",emoji:"🌈",description:"A flowing dance with aurora-coloured trails.",price:4200},
  {id:"crown",name:"Royal Arrival",category:"coins",emoji:"👑",description:"A grand entrance ending in a crown gesture.",price:5000},
  {id:"dragon",name:"Dragon Roar",category:"coins",emoji:"🐉",description:"A powerful stance with an original dragon-shaped energy arc.",price:6200},
  {id:"cosmic",name:"Cosmic Finale",category:"coins",emoji:"✨",description:"A legendary spin ending in a burst of cosmic particles.",price:8000}
];

const state = {
  coins: Number(localStorage.getItem("bloks_demo_coins") ?? 0),
  money: Number(localStorage.getItem("bloks_demo_money") ?? 5000),
  owned: safeJSON("bloks_demo_owned", ["classic"]),
  ownedEmotes: safeJSON("bloks_demo_emotes", ["hello","handshake","thumbsup","peace","handsup"]),
  equipped: localStorage.getItem("bloks_equipped_skin") || "classic",
  equippedEmote: localStorage.getItem("bloks_equipped_emote") || "hello",
  activeCategory: "all", emoteCategory: "all", search: "",
  claimed: safeJSON("bloks_demo_missions", []),
  friends: safeJSON("bloks_demo_friends", []),
  groups: safeJSON("bloks_demo_groups", []),
  currentGroup: localStorage.getItem("bloks_current_group") || ""
};

function safeJSON(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return Array.isArray(value) ? value : fallback;
  } catch {
    return fallback;
  }
}

const $ = (id) => document.getElementById(id);
const coinFormat = (n) => Number(n).toLocaleString("en-IN");
const categoryName = (category) => ({
  free:"FREE", coins:"S COINS", money:"C COINS", premium:"EXCLUSIVE"
}[category] || category.toUpperCase());

function persist() {
  localStorage.setItem("bloks_demo_coins", String(state.coins));
  localStorage.setItem("bloks_demo_money", String(state.money));
  localStorage.setItem("bloks_demo_owned", JSON.stringify(state.owned));
  localStorage.setItem("bloks_demo_emotes", JSON.stringify(state.ownedEmotes));
  localStorage.setItem("bloks_demo_missions", JSON.stringify(state.claimed));
  localStorage.setItem("bloks_demo_friends", JSON.stringify(state.friends));
  localStorage.setItem("bloks_demo_groups", JSON.stringify(state.groups));
  localStorage.setItem("bloks_equipped_skin", state.equipped);
  localStorage.setItem("bloks_equipped_emote", state.equippedEmote);
  localStorage.setItem("bloks_current_group", state.currentGroup);
}

function showToast(message) {
  const toast = $("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2700);
}

function escapeHTML(v) {
  return String(v).replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[c]));
}

function figureHTML(skin) {
  return `<div class="skin-figure design-${skin.design || 0}" style="--skin:${skin.colors[0]};--skin2:${skin.colors[1]};--skin3:${skin.colors[2]}">
    <div class="skin-head"></div>
    <div class="skin-torso"><span class="figure-mark">${skin.design===1?'✦':skin.design===2?'B':skin.design===3?'◆':skin.design===4?'⚡':'●'}</span></div>
    <div class="skin-arm left"></div>
    <div class="skin-arm right"></div>
    <div class="skin-leg left"></div>
    <div class="skin-leg right"></div>
    <span class="figure-accessory"></span>
  </div>`;
}

/* Add dimensional shading and animated body movement directly from app.js. */
(function installBloksCharacterEffects() {
  if (document.getElementById("bloks-character-effects")) return;

  const style = document.createElement("style");
  style.id = "bloks-character-effects";
  style.textContent = `
    .skin-art,.dialog-skin-art,.member-avatar-scene,.emote-preview,.emote-stage-character {
      perspective:900px;
    }
    .skin-figure {
      position:relative;
      transform-style:preserve-3d;
      filter:drop-shadow(7px 10px 5px #0007);
      isolation:isolate;
    }
    .skin-head {
      border-radius:43% 43% 37% 37%;
      background:linear-gradient(110deg,#ffffff60,transparent 34%),linear-gradient(145deg,var(--skin),var(--skin2));
      box-shadow:inset -5px -5px 0 #0004,inset 3px 3px 0 #ffffff45,3px 4px 0 #0004;
      transform:translateZ(7px) rotateY(-5deg);
    }
    .skin-torso {
      border-radius:9px 9px 12px 12px;
      background:linear-gradient(110deg,#ffffff50,transparent 34%),linear-gradient(145deg,var(--skin2),var(--skin3));
      box-shadow:inset -6px -4px 0 #0004,inset 3px 2px 0 #ffffff30,3px 5px 0 #0004;
      transform:translateZ(5px);
    }
    .skin-arm,.skin-leg {
      transform-style:preserve-3d;
      background:linear-gradient(90deg,#0005,#ffffff38 45%,#0003),linear-gradient(145deg,var(--skin),var(--skin2));
      box-shadow:inset 2px 1px 0 #ffffff35;
    }
    .skin-arm { transform-origin:50% 8%; border-radius:10px; }
    .skin-leg { transform-origin:50% 5%; border-radius:6px 6px 8px 8px; }
    .figure-accessory { filter:drop-shadow(2px 3px 2px #0008); }

    .emote-preview {
      position:relative;
      display:flex;
      align-items:flex-end;
      justify-content:center;
      overflow:hidden;
      isolation:isolate;
      background:radial-gradient(ellipse at 50% 38%,var(--glow,#6250a5),transparent 55%),linear-gradient(145deg,#24253b,#10121b);
    }
    .emote-preview::before {
      content:"";
      position:absolute;
      width:95px;
      height:95px;
      top:8px;
      left:50%;
      transform:translateX(-50%);
      border:1px solid #ffffff20;
      border-radius:50%;
      box-shadow:0 0 30px #a78bfa25;
    }
    .emote-character {
      position:relative;
      z-index:2;
      display:flex;
      align-items:flex-end;
      justify-content:center;
      height:150px;
      transform:scale(.72);
      transform-origin:center bottom;
    }
    .emote-character .skin-figure { transform:scale(1); transform-origin:center bottom; }
    .emote-floor {
      position:absolute;
      z-index:1;
      bottom:7px;
      left:50%;
      width:75px;
      height:15px;
      transform:translateX(-50%);
      border-radius:50%;
      background:#0009;
      filter:blur(5px);
    }
    .emote-play {
      position:absolute;
      z-index:4;
      top:8px;
      right:8px;
      border:1px solid #ffffff22;
      border-radius:20px;
      padding:5px 8px;
      background:#0b0c16cc;
      color:#e6ddff;
      font-size:9px;
      font-weight:800;
      letter-spacing:.5px;
    }
    .emote-preview:hover {
      background:radial-gradient(ellipse at 50% 38%,#8065d3,transparent 58%),linear-gradient(145deg,#302344,#10121b);
    }

    .emote-stage-character {
      position:relative;
      min-height:280px;
      padding:18px 12px;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      overflow:hidden;
    }
    .emote-stage-platform {
      position:absolute;
      bottom:66px;
      left:50%;
      width:150px;
      height:34px;
      transform:translateX(-50%) rotateX(58deg);
      border:1px solid #a78bfa55;
      border-radius:50%;
      background:radial-gradient(ellipse,#8b5cf633,transparent 72%);
      box-shadow:0 0 25px #8b5cf622;
    }
    .emote-stage-figure {
      position:relative;
      z-index:2;
      width:120px;
      height:170px;
      display:flex;
      align-items:flex-start;
      justify-content:center;
      margin:0 auto 6px;
    }
    .emote-stage-figure .skin-figure {
      transform:scale(1.1);
      transform-origin:center top;
    }
    .stage-name { position:relative; z-index:3; margin-top:4px; }
    .stage-caption {
      position:relative;
      z-index:3;
      color:#a6aec3;
      margin-top:5px;
      text-align:center;
    }
    .emote-replay-btn {
      position:relative;
      z-index:3;
      margin-top:12px;
      padding:8px 13px;
      border:1px solid #4b416c;
      border-radius:20px;
      background:#211c35;
      color:#e6ddff;
      font-size:11px;
      font-weight:700;
      cursor:pointer;
    }

    .emote-replay.emote-groove .skin-figure,
    .emote-replay.emote-robot .skin-figure,
    .emote-replay.emote-bounce .skin-figure,
    .emote-replay.emote-spin .skin-figure,
    .emote-replay.emote-skate .skin-figure,
    .emote-replay.emote-galaxy .skin-figure,
    .emote-replay.emote-aurora-dance .skin-figure {
      animation:bloksBodyDance .8s ease-in-out 3;
    }
    .emote-replay.emote-hello .skin-figure,
    .emote-replay.emote-handshake .skin-figure,
    .emote-replay.emote-salute .skin-figure,
    .emote-replay.emote-peace .skin-figure {
      animation:bloksBodyWave .7s ease-in-out 3;
    }
    .emote-replay.emote-handsup .skin-figure,
    .emote-replay.emote-cheer .skin-figure,
    .emote-replay.emote-phoenix .skin-figure,
    .emote-replay.emote-crown .skin-figure,
    .emote-replay.emote-comet .skin-figure,
    .emote-replay.emote-cosmic .skin-figure {
      animation:bloksBodyVictory .8s ease-in-out 3;
    }
    .emote-replay.emote-flex .skin-figure,
    .emote-replay.emote-thunderclap .skin-figure {
      animation:bloksBodyJump .7s ease-in-out 3;
    }
    .emote-replay.emote-sleepy .skin-figure,
    .emote-replay.emote-shrug .skin-figure,
    .emote-replay.emote-sneak .skin-figure {
      animation:bloksBodyIdle .9s ease-in-out 3;
    }
    .emote-replay.emote-laugh .skin-figure,
    .emote-replay.emote-taunt .skin-figure,
    .emote-replay.emote-dragon .skin-figure {
      animation:bloksBodyLaugh .45s ease-in-out 4;
    }
    .emote-replay.emote-hello .skin-arm.right,
    .emote-replay.emote-handshake .skin-arm.right,
    .emote-replay.emote-salute .skin-arm.right {
      animation:bloksArmWave .28s ease-in-out 6 alternate;
    }
    .emote-replay.emote-groove .skin-arm.left,
    .emote-replay.emote-robot .skin-arm.left {
      animation:bloksArmLeft .4s ease-in-out 5 alternate;
    }
    .emote-replay.emote-groove .skin-arm.right,
    .emote-replay.emote-robot .skin-arm.right {
      animation:bloksArmRight .4s ease-in-out 5 alternate;
    }
    .emote-replay.emote-clap .skin-arm {
      animation:bloksClap .32s ease-in-out 5 alternate;
    }
    .emote-replay.emote-handsup .skin-arm,
    .emote-replay.emote-cheer .skin-arm,
    .emote-replay.emote-flex .skin-arm,
    .emote-replay.emote-phoenix .skin-arm {
      animation:bloksRaiseArms .5s ease-in-out 3 alternate;
    }
    .emote-replay.emote-groove .skin-leg.left,
    .emote-replay.emote-skate .skin-leg.left {
      animation:bloksLegStep .35s ease-in-out 5 alternate;
    }
    .emote-replay.emote-groove .skin-leg.right,
    .emote-replay.emote-skate .skin-leg.right {
      animation:bloksLegStep .35s ease-in-out 5 alternate-reverse;
    }

    @keyframes bloksBodyDance {
      0%,100% { transform:rotate(0) translateY(0) scale(1.1); }
      25% { transform:rotate(-10deg) translateY(-5px) scale(1.1); }
      50% { transform:rotate(10deg) translateY(0) scale(1.1); }
      75% { transform:rotate(-5deg) translateY(-3px) scale(1.1); }
    }
    @keyframes bloksBodyWave {
      0%,100% { transform:rotate(0) scale(1.1); }
      30%,70% { transform:rotate(-7deg) scale(1.1); }
    }
    @keyframes bloksBodyVictory {
      0%,100% { transform:translateY(0) rotate(0) scale(1.1); }
      35% { transform:translateY(-11px) rotate(-5deg) scale(1.1); }
      70% { transform:translateY(-4px) rotate(5deg) scale(1.1); }
    }
    @keyframes bloksBodyJump {
      0%,100% { transform:translateY(0) scale(1.1); }
      45% { transform:translateY(-25px) scale(1.1); }
      65% { transform:translateY(-18px) scale(1.1); }
    }
    @keyframes bloksBodyIdle {
      0%,100% { transform:rotate(0) translateY(0) scale(1.1); }
      50% { transform:rotate(5deg) translateY(3px) scale(1.1); }
    }
    @keyframes bloksBodyLaugh {
      0%,100% { transform:rotate(0) translateY(0) scale(1.1); }
      25% { transform:rotate(-5deg) translateY(-2px) scale(1.1); }
      75% { transform:rotate(5deg) translateY(-2px) scale(1.1); }
    }
    @keyframes bloksArmWave {
      from { transform:rotate(-8deg); }
      to { transform:rotate(-115deg); }
    }
    @keyframes bloksArmLeft {
      from { transform:rotate(65deg); }
      to { transform:rotate(-35deg); }
    }
    @keyframes bloksArmRight {
      from { transform:rotate(-65deg); }
      to { transform:rotate(35deg); }
    }
    @keyframes bloksClap {
      from { transform:rotate(-55deg); }
      to { transform:rotate(55deg); }
    }
    @keyframes bloksRaiseArms {
      from { transform:rotate(8deg); }
      to { transform:rotate(-125deg); }
    }
    @keyframes bloksLegStep {
      from { transform:rotate(-8deg); }
      to { transform:rotate(28deg); }
    }
    @media(prefers-reduced-motion:reduce) {
      .emote-replay * { animation-duration:.01ms!important; animation-iteration-count:1!important; }
    }
  `;
  document.head.appendChild(style);
})();

function skinPrice(s) {
  return s.category==="free" ? "FREE"
    : s.category==="coins" ? `${coinFormat(s.price)} S COINS`
    : s.category==="money" ? `${coinFormat(s.price)} C COINS`
    : s.priceLabel;
}

function cardHTML(skin) {
  const owned = state.owned.includes(skin.id);
  const equipped = state.equipped === skin.id;
  const action = owned
    ? (equipped ? "Equipped ✓" : "Equip")
    : skin.category==="free" ? "Unlock free"
    : skin.category==="coins" ? "Buy with S"
    : skin.category==="money" ? "Buy with C"
    : "View exclusive";
  const cls = owned ? "owned"
    : skin.category==="premium" ? "exclusive"
    : skin.category==="money" ? "paid"
    : skin.category==="coins" ? "coin" : "";

  return `<article class="skin-card">
    <button class="skin-art" data-details="${skin.id}" aria-label="Preview ${escapeHTML(skin.name)}" style="--glow:${skin.glow};--skin:${skin.colors[0]}">
      <span class="skin-badge">${categoryName(skin.category)}</span>
      <span class="rarity-dot" style="--rarity-color:${skin.category==="free"?"#75e0bd":skin.category==="coins"?"#c4a0ff":skin.category==="premium"?"#f5d36f":"#80e5d3"}"></span>
      ${figureHTML(skin)}
    </button>
    <div class="skin-info">
      <div class="skin-title-row"><h3>${escapeHTML(skin.name)}</h3><span class="rarity-text">${escapeHTML(skin.rarity)}</span></div>
      <p>${escapeHTML(skin.description)}</p>
      <div class="skin-buy-row"><div class="skin-price">${skinPrice(skin)}</div><button class="skin-action ${cls}" data-action="${skin.id}">${action}</button></div>
    </div>
  </article>`;
}

function renderSkins(target,list) {
  const el = $(target);
  if (!el) return;
  el.innerHTML = list.length
    ? list.map(cardHTML).join("")
    : `<div class="empty-state"><strong>No skins found</strong>Try another search or category.</div>`;
}

function filteredSkins() {
  return SKINS.filter(s =>
    (state.activeCategory==="all" || s.category===state.activeCategory) &&
    (s.name+" "+s.rarity+" "+s.description).toLowerCase().includes(state.search.toLowerCase())
  );
}

function renderEmotes() {
  const grid = $("emoteGrid");
  if (!grid) return;

  const list = EMOTES.filter(e =>
    state.emoteCategory==="all" || e.category===state.emoteCategory
  );
  const skin = SKINS.find(s => s.id===state.equipped) || SKINS[0];

  grid.innerHTML = list.map(e => {
    const owned = state.ownedEmotes.includes(e.id);
    const equipped = state.equippedEmote===e.id;
    const price = e.category==="free" ? "FREE"
      : e.category==="money" ? `${coinFormat(e.price)} C COINS`
      : `${coinFormat(e.price)} S COINS`;

    return `<article class="emote-card">
      <button class="emote-preview emote-${e.id}" data-play-emote="${e.id}" aria-label="Play ${escapeHTML(e.name)}" style="--glow:${skin.glow}">
        <span class="emote-floor"></span>
        <span class="emote-character">${figureHTML(skin)}</span>
        <span class="emote-play">▶ PLAY EMOTE</span>
      </button>
      <div class="emote-info">
        <span class="emote-tier">${categoryName(e.category)}</span>
        <h3>${escapeHTML(e.name)}</h3>
        <p>${escapeHTML(e.description)}</p>
        <div class="emote-foot">
          <strong>${price}</strong>
          <button class="skin-action ${owned?"owned":e.category==="coins"?"coin":""}" data-emote-action="${e.id}">
            ${owned?(equipped?"Equipped ✓":"Equip & Play"):e.category==="free"?"Claim free":"Unlock"}
          </button>
        </div>
      </div>
    </article>`;
  }).join("");

  document.querySelectorAll("[data-emote-category]").forEach(b =>
    b.classList.toggle("selected",b.dataset.emoteCategory===state.emoteCategory)
  );

  const balance = $("emoteBalance");
  if (balance) balance.textContent=`${coinFormat(state.money)} C Coins · ${coinFormat(state.coins)} S Coins`;
}

function renderFriends() {
  const friendList = $("friendList");
  if (friendList) {
    friendList.innerHTML = state.friends.length
      ? state.friends.map((f,i)=>`<div class="person-row"><div class="person-avatar">${escapeHTML(f[0].toUpperCase())}</div><div class="person-main"><strong>${escapeHTML(f)}</strong><small>Added in this browser demo</small></div><button class="ghost-btn compact-btn" data-invite="${i}">Invite</button><button class="remove-friend" data-remove-friend="${i}" aria-label="Remove ${escapeHTML(f)}">×</button></div>`).join("")
      : '<div class="empty-state"><strong>No friends yet</strong>Add a display name above to try the friend interface.</div>';
  }

  const group = state.groups.find(g=>g.code===state.currentGroup);
  const groupPanelHTML = group
    ? `<div class="group-code-box"><span>YOUR GROUP CODE</span><strong>${group.code}</strong><small>${group.members.length}/5 players · creator: ${escapeHTML(group.creator)}</small><button class="ghost-btn full-btn" data-copy-code="${group.code}">Copy group code</button><div class="group-members">${group.members.map((m,i)=>{const member=typeof m==="string"?{name:m,skinId:state.equipped}:m;const look=SKINS.find(s=>s.id===member.skinId)||SKINS[0];return `<div class="member-chip"><div class="member-avatar-scene"><span class="member-name-label">${escapeHTML(member.name)}</span>${figureHTML(look)}</div><span class="member-role">${i===0?"Host":"Player"}</span></div>`;}).join("")}</div><p class="demo-warning">Group members are simulated locally. Online players need a shared backend.</p><button class="ghost-btn full-btn" data-leave-group>Leave group</button></div>`
    : '<div class="empty-state"><strong>You are not in a group</strong>Create a group or join using a five-digit code.</div>';

  if ($("inviteCurrentPanel")) $("inviteCurrentPanel").innerHTML=groupPanelHTML;
  if ($("groupCurrentPanel")) $("groupCurrentPanel").innerHTML=groupPanelHTML;
  if ($("groupList")) {
    $("groupList").innerHTML = state.groups.length
      ? state.groups.map(g=>`<div class="group-list-row"><div><strong>Group ${g.code}</strong><small>${g.members.length}/5 players</small></div><button class="skin-action" data-join-local="${g.code}">Join</button></div>`).join("")
      : '<p class="muted-copy">Groups created in this browser appear here.</p>';
  }
}

function render() {
  if ($("coinBalance")) $("coinBalance").textContent=coinFormat(state.coins);
  if ($("moneyBalance")) $("moneyBalance").textContent=coinFormat(state.money);
  if ($("allCount")) $("allCount").textContent=SKINS.length;

  renderSkins("skinGrid",filteredSkins());
  renderSkins("featuredGrid",[SKINS[7],SKINS[25],SKINS[32],SKINS[52]]);
  renderSkins("inventoryGrid",SKINS.filter(s=>state.owned.includes(s.id)));

  document.querySelectorAll(".category-tab").forEach(b =>
    b.classList.toggle("selected",b.dataset.category===state.activeCategory)
  );

  const equipped = SKINS.find(s=>s.id===state.equipped)||SKINS[0];
  const equippedLook = $("equippedLook");
  if (equippedLook) equippedLook.innerHTML=`${figureHTML(equipped)}<div><strong>${escapeHTML(equipped.name)}</strong><small>Equipped character look</small></div>`;

  renderEmotes();
  renderFriends();
}

function go(view) {
  const target=$(view+"View");
  if (!target) { showToast("This section is not available yet."); return; }

  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active-view"));
  target.classList.add("active-view");
  if ($("crumb")) $("crumb").textContent=view.toUpperCase();
  document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.view===view));
  document.body.classList.remove("mobile-menu-open");

  if (view==="skins") {
    state.activeCategory="all";
    state.search="";
    if ($("skinSearch")) $("skinSearch").value="";
    render();
  } else if (["inventory","discover","friends","groups","emotes"].includes(view)) {
    render();
  }

  window.scrollTo({top:0,behavior:"smooth"});
}

function buySkin(id) {
  const s=SKINS.find(x=>x.id===id);
  if (!s) return;

  if (state.owned.includes(id)) {
    state.equipped=id;
    persist(); render();
    showToast(`${s.name} equipped!`);
    return;
  }

  if (s.category==="free") {
    state.owned.push(id); state.equipped=id;
    persist(); render();
    showToast(`${s.name} unlocked and equipped!`);
    return;
  }

  if (s.category==="coins" || s.category==="money") {
    const wallet=s.category==="coins"?"coins":"money";
    if (state[wallet]<s.price) {
      showToast(`Not enough ${wallet==="coins"?"S Coins":"C Coins"}. You need ${coinFormat(s.price-state[wallet])} more.`);
      return;
    }
    state[wallet]-=s.price;
    state.owned.push(id);
    state.equipped=id;
    persist(); render();
    showToast(`${s.name} bought and equipped!`);
    return;
  }

  openDetails(id,true);
}

function openDetails(id) {
  const s=SKINS.find(x=>x.id===id);
  if (!s) return;
  const owned=state.owned.includes(id);
  const purchaseText=s.category==="premium"?`Real-money exclusive · ${s.priceLabel}`:skinPrice(s);

  $("dialogContent").innerHTML=`<div class="dialog-skin-art" style="--glow:${s.glow}">${figureHTML(s)}</div><div class="eyebrow">${categoryName(s.category)} · ${s.rarity.toUpperCase()}</div><h2>${escapeHTML(s.name)}</h2><p>${escapeHTML(s.description)}</p><div class="dialog-price">${purchaseText}<small>Cosmetic item</small></div>${s.category==="premium"&&!owned?`<button class="primary-btn full-btn" id="checkoutDemo">Continue to purchase · ${s.priceLabel}</button><small>Payment checkout is not connected. No payment will be taken.</small>`:`<button class="primary-btn full-btn" id="dialogAction">${owned?(state.equipped===id?"Currently equipped":"Equip skin"):s.category==="free"?"Unlock free skin":`Buy for ${skinPrice(s)}`}</button>`}<small>Original BlokS character design. Skins are cosmetic only.</small>`;

  $("skinDialog").showModal();
  const action=$("dialogAction");
  if (action) action.addEventListener("click",()=>{$("skinDialog").close();buySkin(id);});
  const checkout=$("checkoutDemo");
  if (checkout) checkout.addEventListener("click",()=>{$("skinDialog").close();showToast("Real-money checkout is not connected. No charge was made.");});
}

function buyEmote(id) {
  const e=EMOTES.find(x=>x.id===id);
  if (!e) return;

  if (state.ownedEmotes.includes(id)) {
    state.equippedEmote=id;
    persist();
    renderEmotes();
    previewEmote(id);
    showToast(`${e.name} equipped!`);
    return;
  }

  if (e.category==="free") {
    state.ownedEmotes.push(id);
    state.equippedEmote=id;
    persist();
    render();
    previewEmote(id);
    showToast(`${e.name} unlocked!`);
    return;
  }

  const wallet=e.category==="coins"?"coins":"money";
  if (state[wallet]<e.price) {
    showToast(`Not enough ${wallet==="coins"?"S Coins":"C Coins"}.`);
    return;
  }

  state[wallet]-=e.price;
  state.ownedEmotes.push(id);
  state.equippedEmote=id;
  persist();
  render();
  previewEmote(id);
  showToast(`${e.name} unlocked and equipped!`);
}

function previewEmote(id) {
  const emote=EMOTES.find(e=>e.id===id);
  const preview=$("emoteStage");
  if (!emote || !preview) return;

  const skin=SKINS.find(s=>s.id===state.equipped)||SKINS[0];
  const owned=state.ownedEmotes.includes(id);

  preview.innerHTML=`<div class="emote-stage-character">
    <div class="emote-stage-platform"></div>
    <div class="emote-stage-figure emote-${id}">
      ${figureHTML(skin)}
    </div>
    <strong class="stage-name">${escapeHTML(emote.name)}</strong>
    <small class="stage-caption">${owned?"Unlocked emote · body animation":"Emote preview · body animation"}</small>
    <button type="button" class="emote-replay-btn">↻ Replay movement</button>
  </div>`;

  const replay=()=>{
    const figure=preview.querySelector(".emote-stage-figure");
    if (!figure) return;
    figure.classList.remove("emote-replay");
    void figure.offsetWidth;
    figure.classList.add("emote-replay");
  };

  preview.querySelector(".emote-replay-btn")?.addEventListener("click",replay);
  replay();
}

function createGroup() {
  const code=String(Math.floor(10000+Math.random()*90000));
  const name=(($("playerName")?.value||"").trim()||"Guest Player").slice(0,24);
  const group={code,creator:name,members:[{name,skinId:state.equipped}],createdAt:Date.now()};
  state.groups.push(group);
  state.currentGroup=code;
  persist(); renderFriends();
  showToast(`Group created! Your code is ${code}.`);
}

function joinGroup(code) {
  code=String(code||"").trim();
  if (!/^\d{5}$/.test(code)) { showToast("Enter a valid five-digit group code."); return; }

  const g=state.groups.find(x=>x.code===code);
  if (!g) { showToast("Group not found in this browser demo. Online group joining needs a backend."); return; }

  const name=(($("playerName")?.value||"").trim()||"Guest Player").slice(0,24);
  if (g.members.some(m=>(typeof m==="string"?m:m.name)===name)) {
    state.currentGroup=code; persist(); renderFriends();
    showToast("You are already in this group."); return;
  }
  if (g.members.length>=5) { showToast("This group is full (maximum 5 players)."); return; }

  g.members.push({name,skinId:state.equipped});
  state.currentGroup=code;
  persist(); renderFriends();
  showToast(`Joined group ${code}!`);
}

function addFriend(name) {
  name=String(name||"").trim().replace(/\s+/g," ").slice(0,24);
  if (name.length<2) { showToast("Enter a display name with at least 2 characters."); return; }
  if (state.friends.some(f=>f.toLowerCase()===name.toLowerCase())) {
    showToast("That friend is already on your list."); return;
  }
  state.friends.push(name);
  persist(); renderFriends();
  showToast(`Friend request demo added for ${name}.`);
}

document.addEventListener("click",e=>{
  const nav=e.target.closest("[data-view]");
  if (nav) { go(nav.dataset.view); return; }

  const goBtn=e.target.closest("[data-go]");
  if (goBtn) { go(goBtn.dataset.go); return; }

  const cat=e.target.closest("[data-category]");
  if (cat) {
    const c=cat.dataset.category;
    if (cat.classList.contains("path-card")) { go("skins"); state.activeCategory=c; render(); }
    else { state.activeCategory=c; render(); }
    return;
  }

  const action=e.target.closest("[data-action]");
  if (action) { buySkin(action.dataset.action); return; }

  const details=e.target.closest("[data-details]");
  if (details) { openDetails(details.dataset.details); return; }

  const emoteCat=e.target.closest("[data-emote-category]");
  if (emoteCat) { state.emoteCategory=emoteCat.dataset.emoteCategory; renderEmotes(); return; }

  const emoteAction=e.target.closest("[data-emote-action]");
  if (emoteAction) { buyEmote(emoteAction.dataset.emoteAction); return; }

  const play=e.target.closest("[data-play-emote]");
  if (play) { previewEmote(play.dataset.playEmote); return; }

  const remove=e.target.closest("[data-remove-friend]");
  if (remove) {
    state.friends.splice(Number(remove.dataset.removeFriend),1);
    persist(); renderFriends(); showToast("Friend removed."); return;
  }

  const invite=e.target.closest("[data-invite]");
  if (invite) {
    const friend=state.friends[Number(invite.dataset.invite)];
    if (!state.currentGroup) { showToast("Create or join a group before inviting friends."); return; }
    showToast(`Demo invite prepared for ${friend} to group ${state.currentGroup}.`); return;
  }

  const copy=e.target.closest("[data-copy-code]");
  if (copy) {
    const code=copy.dataset.copyCode;
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(code).then(()=>showToast("Group code copied!")).catch(()=>showToast(`Group code: ${code}`));
    else showToast(`Group code: ${code}`);
    return;
  }

  if (e.target.closest("[data-leave-group]")) {
    state.currentGroup="";
    persist(); renderFriends(); showToast("You left the group."); return;
  }

  const join=e.target.closest("[data-join-local]");
  if (join) { joinGroup(join.dataset.joinLocal); return; }

  const game=e.target.closest("[data-launch-game]");
  if (game) { showToast("Game launch will be connected when a playable BlokS game is added."); return; }
});

if ($("skinSearch")) {
  $("skinSearch").addEventListener("input",e=>{
    state.search=e.target.value;
    renderSkins("skinGrid",filteredSkins());
  });
}

if ($("dialogClose")) $("dialogClose").addEventListener("click",()=>$("skinDialog").close());
if ($("signInBtn")) $("signInBtn").addEventListener("click",()=>$("signInDialog").showModal());
if ($("signClose")) $("signClose").addEventListener("click",()=>$("signInDialog").close());
if ($("demoSignIn")) $("demoSignIn").addEventListener("click",()=>{$("signInDialog").close();showToast("You are exploring as a demo guest.");});
if ($("mobileMenu")) $("mobileMenu").addEventListener("click",()=>document.body.classList.toggle("mobile-menu-open"));

if ($("addFriendForm")) {
  $("addFriendForm").addEventListener("submit",e=>{
    e.preventDefault();
    addFriend($("friendName").value);
    $("friendName").value="";
  });
}

if ($("createGroupBtn")) $("createGroupBtn").addEventListener("click",createGroup);

if ($("joinGroupForm")) {
  $("joinGroupForm").addEventListener("submit",e=>{
    e.preventDefault();
    joinGroup($("groupCodeInput").value);
    $("groupCodeInput").value="";
  });
}

if ($("inviteCurrentBtn")) {
  $("inviteCurrentBtn").addEventListener("click",()=>{
    if (!state.friends.length) { showToast("Add a friend first to prepare an invite."); return; }
    if (!state.currentGroup) { showToast("Create or join a group first."); return; }
    showToast(`Invite prepared for ${state.friends.length} friend(s).`);
  });
}

if ($("playerName")) {
  $("playerName").addEventListener("change",()=>{
    const name=$("playerName").value.trim();
    if (name) localStorage.setItem("bloks_player_name",name);
  });
}

render();
