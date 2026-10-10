const SKINS = [{"id":"classic","name":"Classic Starter","category":"free","rarity":"Basic","price":0,"description":"A free original BlokS outfit for your next adventure.","colors":["#b8a6ff","#7860df","#302847"],"glow":"#7860df","gender":"boy","style":"streetwear"},{"id":"mint","name":"Mint Dash","category":"free","rarity":"Basic","price":0,"description":"A free original BlokS outfit for your next adventure.","colors":["#a2f1d7","#36b99a","#174d48"],"glow":"#36b99a","gender":"boy","style":"sport"},{"id":"sunny","name":"Sunny Side","category":"free","rarity":"Basic","price":0,"description":"A free original BlokS outfit for your next adventure.","colors":["#ffe09b","#e9a73f","#62401f"],"glow":"#e9a73f","gender":"boy","style":"casual"},{"id":"night","name":"Night Pixel","category":"free","rarity":"Basic","price":0,"description":"A free original BlokS outfit for your next adventure.","colors":["#c4cce9","#58688d","#20253c"],"glow":"#58688d","gender":"boy","style":"ninja"},{"id":"sprout","name":"Little Sprout","category":"free","rarity":"Basic","price":0,"description":"A free original BlokS outfit for your next adventure.","colors":["#c2f58a","#5ea84d","#25452b"],"glow":"#5ea84d","gender":"girl","style":"nature"},{"id":"berry","name":"Berry Pop","category":"free","rarity":"Basic","price":0,"description":"A free original BlokS outfit for your next adventure.","colors":["#ffb9df","#d75aa8","#54254f"],"glow":"#d75aa8","gender":"girl","style":"cute"},{"id":"cloud","name":"Cloud Club","category":"free","rarity":"Basic","price":0,"description":"A free original BlokS outfit for your next adventure.","colors":["#f0f2ff","#9aadee","#454b78"],"glow":"#9aadee","gender":"boy","style":"casual"},{"id":"coin-1","name":"Cherry Street","category":"money","rarity":"Rare","price":650,"description":"Original streetwear outfit with layered details and a distinct silhouette.","colors":["#ffb2d1","#e94f91","#462548"],"glow":"#e94f91","gender":"girl","style":"streetwear"},{"id":"coin-2","name":"Moonlight Idol","category":"money","rarity":"Rare","price":850,"description":"Original fantasy outfit with layered details and a distinct silhouette.","colors":["#e7c6ff","#9862d9","#32204f"],"glow":"#9862d9","gender":"girl","style":"fantasy"},{"id":"coin-3","name":"Pastel Skater","category":"money","rarity":"Rare","price":1000,"description":"Original sport outfit with layered details and a distinct silhouette.","colors":["#a8f4e7","#42bda9","#1b3d4b"],"glow":"#42bda9","gender":"girl","style":"sport"},{"id":"coin-4","name":"Crimson Queen","category":"money","rarity":"Rare","price":1200,"description":"Original royal outfit with layered details and a distinct silhouette.","colors":["#ffc0c7","#c63d63","#3b1c37"],"glow":"#c63d63","gender":"girl","style":"royal"},{"id":"coin-5","name":"Cyber Bloom","category":"money","rarity":"Rare","price":1450,"description":"Original cyber outfit with layered details and a distinct silhouette.","colors":["#9af4ff","#4b8fe5","#241f53"],"glow":"#4b8fe5","gender":"girl","style":"cyber"},{"id":"coin-6","name":"Neon Drifter","category":"money","rarity":"Rare","price":1600,"description":"Original cyber outfit with layered details and a distinct silhouette.","colors":["#9cf4ff","#287fc2","#162544"],"glow":"#287fc2","gender":"boy","style":"cyber"},{"id":"coin-7","name":"Shadow Ninja","category":"money","rarity":"Rare","price":1800,"description":"Original ninja outfit with layered details and a distinct silhouette.","colors":["#b6b9d5","#4c506e","#161a2b"],"glow":"#4c506e","gender":"boy","style":"ninja"},{"id":"coin-8","name":"Urban Legend","category":"money","rarity":"Rare","price":2000,"description":"Original streetwear outfit with layered details and a distinct silhouette.","colors":["#f2c69c","#bd6749","#29283b"],"glow":"#bd6749","gender":"boy","style":"streetwear"},{"id":"coin-9","name":"Frost Runner","category":"money","rarity":"Epic","price":2200,"description":"Original sport outfit with layered details and a distinct silhouette.","colors":["#d9f8ff","#72bde8","#243b6c"],"glow":"#72bde8","gender":"boy","style":"sport"},{"id":"coin-10","name":"Golden Striker","category":"money","rarity":"Epic","price":2400,"description":"Original sport outfit with layered details and a distinct silhouette.","colors":["#fff0a8","#c99635","#49321e"],"glow":"#c99635","gender":"boy","style":"sport"},{"id":"coin-11","name":"Midnight Hacker","category":"money","rarity":"Epic","price":2600,"description":"Original cyber outfit with layered details and a distinct silhouette.","colors":["#b4a0ff","#6250bd","#201b3b"],"glow":"#6250bd","gender":"boy","style":"cyber"},{"id":"coin-12","name":"Desert Nomad","category":"money","rarity":"Epic","price":2800,"description":"Original fantasy outfit with layered details and a distinct silhouette.","colors":["#eac59b","#a56c47","#3e302c"],"glow":"#a56c47","gender":"boy","style":"fantasy"},{"id":"coin-13","name":"Retro Racer","category":"money","rarity":"Epic","price":3000,"description":"Original sport outfit with layered details and a distinct silhouette.","colors":["#ffb47f","#e94c57","#3c2446"],"glow":"#e94c57","gender":"boy","style":"sport"},{"id":"coin-14","name":"Forest Guardian","category":"money","rarity":"Epic","price":3200,"description":"Original nature outfit with layered details and a distinct silhouette.","colors":["#c8f09b","#5e9a50","#243d35"],"glow":"#5e9a50","gender":"boy","style":"nature"},{"id":"coin-15","name":"Storm Captain","category":"money","rarity":"Epic","price":3500,"description":"Original fantasy outfit with layered details and a distinct silhouette.","colors":["#b4d5ff","#527fc8","#1d2948"],"glow":"#527fc8","gender":"boy","style":"fantasy"},{"id":"coin-16","name":"Chrome Rebel","category":"money","rarity":"Epic","price":3800,"description":"Original cyber outfit with layered details and a distinct silhouette.","colors":["#e2e8f5","#7c8ba9","#252b3b"],"glow":"#7c8ba9","gender":"boy","style":"cyber"},{"id":"coin-17","name":"Crimson Ronin","category":"money","rarity":"Epic","price":4200,"description":"Original ninja outfit with layered details and a distinct silhouette.","colors":["#ffb1a2","#c84748","#351d36"],"glow":"#c84748","gender":"boy","style":"ninja"},{"id":"coin-18","name":"Skyline Pro","category":"money","rarity":"Epic","price":4600,"description":"Original streetwear outfit with layered details and a distinct silhouette.","colors":["#a9e5ff","#3e92c7","#1e3155"],"glow":"#3e92c7","gender":"boy","style":"streetwear"},{"id":"coin-19","name":"Phantom Ace","category":"money","rarity":"Epic","price":5000,"description":"Original fantasy outfit with layered details and a distinct silhouette.","colors":["#d9c4ff","#7756b8","#241a3b"],"glow":"#7756b8","gender":"boy","style":"fantasy"},{"id":"coin-20","name":"Lava Breaker","category":"money","rarity":"Epic","price":5500,"description":"Original fantasy outfit with layered details and a distinct silhouette.","colors":["#ffc08c","#ed633e","#4b202d"],"glow":"#ed633e","gender":"boy","style":"fantasy"},{"id":"scoin-1","name":"Starlight Empress","category":"coins","rarity":"Legendary","price":2500,"description":"High-tier royal look with premium colourwork and standout accessories.","colors":["#ffd8fa","#bb70e9","#39204e"],"glow":"#bb70e9","gender":"girl","style":"royal"},{"id":"scoin-2","name":"Galaxy Witch","category":"coins","rarity":"Legendary","price":3500,"description":"High-tier fantasy look with premium colourwork and standout accessories.","colors":["#c6b5ff","#7751c8","#21173d"],"glow":"#7751c8","gender":"girl","style":"fantasy"},{"id":"scoin-3","name":"Aurora Valkyrie","category":"coins","rarity":"Legendary","price":4500,"description":"High-tier fantasy look with premium colourwork and standout accessories.","colors":["#b7fff1","#4cabb7","#203b55"],"glow":"#4cabb7","gender":"girl","style":"fantasy"},{"id":"scoin-4","name":"Ruby Phantom","category":"coins","rarity":"Legendary","price":6000,"description":"High-tier ninja look with premium colourwork and standout accessories.","colors":["#ffb9cb","#d33f75","#35182f"],"glow":"#d33f75","gender":"girl","style":"ninja"},{"id":"scoin-5","name":"Celestial Popstar","category":"coins","rarity":"Legendary","price":7500,"description":"High-tier cute look with premium colourwork and standout accessories.","colors":["#fff0b8","#e6a3e8","#48305f"],"glow":"#e6a3e8","gender":"girl","style":"cute"},{"id":"scoin-6","name":"Void Monarch","category":"coins","rarity":"Legendary","price":9000,"description":"High-tier fantasy look with premium colourwork and standout accessories.","colors":["#d3a2ff","#7244bd","#24183f"],"glow":"#7244bd","gender":"boy","style":"fantasy"},{"id":"scoin-7","name":"Starforge Knight","category":"coins","rarity":"Legendary","price":10500,"description":"High-tier fantasy look with premium colourwork and standout accessories.","colors":["#fff0a6","#d8a84b","#5940a2"],"glow":"#d8a84b","gender":"boy","style":"fantasy"},{"id":"scoin-8","name":"Quantum Samurai","category":"coins","rarity":"Legendary","price":12000,"description":"High-tier ninja look with premium colourwork and standout accessories.","colors":["#b5efff","#4c70db","#1a234b"],"glow":"#4c70db","gender":"boy","style":"ninja"},{"id":"scoin-9","name":"Dragon Circuit","category":"coins","rarity":"Legendary","price":14000,"description":"High-tier cyber look with premium colourwork and standout accessories.","colors":["#ffc18b","#ec5a4f","#39203f"],"glow":"#ec5a4f","gender":"boy","style":"cyber"},{"id":"scoin-10","name":"Obsidian Titan","category":"coins","rarity":"Legendary","price":16000,"description":"High-tier armor look with premium colourwork and standout accessories.","colors":["#b4bfd9","#505a7d","#171a2a"],"glow":"#505a7d","gender":"boy","style":"armor"},{"id":"scoin-11","name":"Solar Overdrive","category":"coins","rarity":"Mythic","price":18000,"description":"High-tier cyber look with premium colourwork and standout accessories.","colors":["#fff1a4","#ef8c39","#4e2740"],"glow":"#ef8c39","gender":"boy","style":"cyber"},{"id":"scoin-12","name":"Glacier Warden","category":"coins","rarity":"Mythic","price":20000,"description":"High-tier armor look with premium colourwork and standout accessories.","colors":["#d7ffff","#68a9e8","#253e70"],"glow":"#68a9e8","gender":"boy","style":"armor"},{"id":"scoin-13","name":"Eclipse Hunter","category":"coins","rarity":"Mythic","price":22000,"description":"High-tier ninja look with premium colourwork and standout accessories.","colors":["#d7c1ff","#7755a8","#1c1834"],"glow":"#7755a8","gender":"boy","style":"ninja"},{"id":"scoin-14","name":"Royal Thunder","category":"coins","rarity":"Mythic","price":24000,"description":"High-tier royal look with premium colourwork and standout accessories.","colors":["#ffe2a6","#b58b42","#2c2850"],"glow":"#b58b42","gender":"boy","style":"royal"},{"id":"scoin-15","name":"Mecha Phantom","category":"coins","rarity":"Mythic","price":26000,"description":"High-tier cyber look with premium colourwork and standout accessories.","colors":["#b8ffff","#4f9eae","#20283e"],"glow":"#4f9eae","gender":"boy","style":"cyber"},{"id":"scoin-16","name":"Inferno Beast","category":"coins","rarity":"Mythic","price":28000,"description":"High-tier armor look with premium colourwork and standout accessories.","colors":["#ffc2a0","#e34e3e","#401b2b"],"glow":"#e34e3e","gender":"boy","style":"armor"},{"id":"scoin-17","name":"Astral Voyager","category":"coins","rarity":"Mythic","price":30000,"description":"High-tier fantasy look with premium colourwork and standout accessories.","colors":["#c7d7ff","#7774db","#26234c"],"glow":"#7774db","gender":"boy","style":"fantasy"},{"id":"scoin-18","name":"Titan Circuit X","category":"coins","rarity":"Mythic","price":33000,"description":"High-tier cyber look with premium colourwork and standout accessories.","colors":["#d2f5ff","#578cae","#1c2638"],"glow":"#578cae","gender":"boy","style":"cyber"},{"id":"scoin-19","name":"Shadow Sovereign","category":"coins","rarity":"Mythic","price":36000,"description":"High-tier royal look with premium colourwork and standout accessories.","colors":["#d6c6f9","#5c467e","#171421"],"glow":"#5c467e","gender":"boy","style":"royal"},{"id":"scoin-20","name":"Neon Overlord","category":"coins","rarity":"Mythic","price":39000,"description":"High-tier cyber look with premium colourwork and standout accessories.","colors":["#a7fff2","#2c9eaa","#171d39"],"glow":"#2c9eaa","gender":"boy","style":"cyber"},{"id":"scoin-21","name":"Prism Dragon","category":"coins","rarity":"Mythic","price":42000,"description":"High-tier fantasy look with premium colourwork and standout accessories.","colors":["#ffd1f4","#b14fca","#2b1c51"],"glow":"#b14fca","gender":"boy","style":"fantasy"},{"id":"scoin-22","name":"Stormborn Elite","category":"coins","rarity":"Mythic","price":46000,"description":"High-tier armor look with premium colourwork and standout accessories.","colors":["#c5d9ff","#5979c5","#202844"],"glow":"#5979c5","gender":"boy","style":"armor"},{"id":"scoin-23","name":"Phoenix Vanguard","category":"coins","rarity":"Mythic","price":50000,"description":"High-tier armor look with premium colourwork and standout accessories.","colors":["#ffd5a3","#e16a48","#42233d"],"glow":"#e16a48","gender":"boy","style":"armor"},{"id":"scoin-24","name":"Deep Space Ace","category":"coins","rarity":"Mythic","price":55000,"description":"High-tier cyber look with premium colourwork and standout accessories.","colors":["#c6eaff","#526bb7","#171b3e"],"glow":"#526bb7","gender":"boy","style":"cyber"},{"id":"scoin-25","name":"Legend Zero","category":"coins","rarity":"Mythic","price":60000,"description":"High-tier streetwear look with premium colourwork and standout accessories.","colors":["#f7e6ff","#a27ed6","#27203f"],"glow":"#a27ed6","gender":"boy","style":"streetwear"},{"id":"exclusive-1","name":"Diamond Monarch","category":"premium","rarity":"Exclusive","price":149,"description":"An exclusive cosmetic concept. Real payment checkout is not connected in this demo.","colors":["#fff1b8","#d7b34f","#4c326d"],"glow":"#d7b34f","gender":"boy","style":"royal"},{"id":"exclusive-2","name":"Rose Eclipse","category":"premium","rarity":"Exclusive","price":199,"description":"An exclusive cosmetic concept. Real payment checkout is not connected in this demo.","colors":["#ffd2ec","#cb6ba9","#38224e"],"glow":"#cb6ba9","gender":"girl","style":"fantasy"},{"id":"exclusive-3","name":"Apex Cyberlord","category":"premium","rarity":"Exclusive","price":249,"description":"An exclusive cosmetic concept. Real payment checkout is not connected in this demo.","colors":["#c5ffff","#45a5c6","#1b2345"],"glow":"#45a5c6","gender":"boy","style":"cyber"},{"id":"exclusive-4","name":"Ember Sovereign","category":"premium","rarity":"Exclusive","price":299,"description":"An exclusive cosmetic concept. Real payment checkout is not connected in this demo.","colors":["#ffd0a5","#eb684d","#411e32"],"glow":"#eb684d","gender":"boy","style":"armor"},{"id":"exclusive-5","name":"Prism Goddess","category":"premium","rarity":"Exclusive","price":349,"description":"An exclusive cosmetic concept. Real payment checkout is not connected in this demo.","colors":["#f6d5ff","#a879ed","#342052"],"glow":"#a879ed","gender":"girl","style":"royal"}];

const EMOTES = [
  {id:'wave',name:'Wave Hello',emoji:'👋',category:'free',price:0,description:'A friendly hello for new friends.'},
  {id:'handshake',name:'Handshake',emoji:'🤝',category:'free',price:0,description:'Show respect and make a connection.'},
  {id:'thumbs',name:'Thumbs Up',emoji:'👍',category:'free',price:0,description:'Give your squad some approval.'},
  {id:'peace',name:'Peace Sign',emoji:'✌️',category:'free',price:0,description:'Stay cool and keep the peace.'},
  {id:'handsup',name:'Hands Up',emoji:'🙌',category:'free',price:0,description:'Celebrate a win with both hands.'},
  {id:'dance',name:'Victory Dance',emoji:'🕺',category:'money',price:250,description:'A little celebration after a great round.'},
  {id:'clap',name:'Big Applause',emoji:'👏',category:'money',price:350,description:'Give a player a round of applause.'},
  {id:'laugh',name:'Laugh Out',emoji:'😂',category:'money',price:450,description:'Share a laugh with your friends.'},
  {id:'flex',name:'Flex',emoji:'💪',category:'money',price:550,description:'Show off your confidence.'},
  {id:'heart',name:'Heart Hands',emoji:'🫶',category:'money',price:650,description:'Send a little love to your squad.'},
  {id:'shrug',name:'The Shrug',emoji:'🤷',category:'money',price:750,description:'Sometimes you just do not know.'},
  {id:'sleep',name:'Sleepy',emoji:'😴',category:'money',price:850,description:'A relaxed emote for a quiet moment.'},
  {id:'think',name:'Big Brain',emoji:'🤔',category:'money',price:950,description:'Think through your next move.'},
  {id:'cool',name:'Too Cool',emoji:'😎',category:'money',price:1100,description:'A smooth look for a smooth player.'},
  {id:'fire',name:'Fire Up',emoji:'🔥',category:'money',price:1250,description:'Bring the energy to your team.'},
  {id:'sparkle',name:'Sparkle Spin',emoji:'✨',category:'money',price:1400,description:'A magical little moment.'},
  {id:'cry',name:'Tiny Violin',emoji:'🥲',category:'money',price:1550,description:'Playfully dramatic disappointment.'},
  {id:'robot',name:'Robot Mode',emoji:'🤖',category:'money',price:1750,description:'Act like a machine.'},
  {id:'sunglasses',name:'Shades Drop',emoji:'🕶️',category:'money',price:1950,description:'Drop into style.'},
  {id:'star',name:'Star Pose',emoji:'🌟',category:'coins',price:1500,description:'A shining pose for standout players.'},
  {id:'crown',name:'Crown Moment',emoji:'👑',category:'coins',price:2500,description:'Take your royal moment.'},
  {id:'lightning',name:'Lightning Charge',emoji:'⚡',category:'coins',price:3500,description:'Power up with an electric burst.'},
  {id:'dragon',name:'Dragon Roar',emoji:'🐉',category:'coins',price:5000,description:'Unleash a mythical roar.'},
  {id:'galaxy',name:'Galaxy Portal',emoji:'🌌',category:'coins',price:6500,description:'Call on the stars.'},
  {id:'meteor',name:'Meteor Crash',emoji:'☄️',category:'coins',price:8000,description:'Make an explosive entrance.'},
  {id:'phoenix',name:'Phoenix Rise',emoji:'🪽',category:'coins',price:10000,description:'Rise up in legendary style.'},
  {id:'aura',name:'Aura Burst',emoji:'💫',category:'coins',price:12500,description:'Let your energy shine.'},
  {id:'shadow',name:'Shadow Blink',emoji:'🌑',category:'coins',price:15000,description:'Vanish into the shadows.'},
  {id:'cosmic',name:'Cosmic Victory',emoji:'🌠',category:'coins',price:18000,description:'A cosmic celebration for elite players.'},
  {id:'legend',name:'Legend Pose',emoji:'🏆',category:'coins',price:22000,description:'Celebrate like a champion.'}
];

const STORAGE = {money:'bloks_demo_money',scoins:'bloks_demo_scoins',owned:'bloks_demo_owned_v2',missions:'bloks_demo_missions_v2',emotes:'bloks_demo_emotes',friends:'bloks_demo_friends',groups:'bloks_demo_groups',player:'bloks_demo_player'};

function readJSON(key,fallback){
  try {
    const v=localStorage.getItem(key);
    return v===null?fallback:JSON.parse(v);
  } catch {
    return fallback;
  }
}

const state={
  money:Number(localStorage.getItem(STORAGE.money) ?? 5000),
  scoins:Number(localStorage.getItem(STORAGE.scoins) ?? 0),
  owned:readJSON(STORAGE.owned,['classic']),
  activeCategory:'all',
  search:'',
  claimed:readJSON(STORAGE.missions,[]),
  ownedEmotes:readJSON(STORAGE.emotes,['wave','handshake','thumbs','peace','handsup']),
  activeEmoteCategory:'all',
  friends:readJSON(STORAGE.friends,[]),
  groups:readJSON(STORAGE.groups,[]),
  currentGroup:null,
  player:localStorage.getItem(STORAGE.player)||'Guest Player'
};

const $=id=>document.getElementById(id);
const fmt=n=>Number(n).toLocaleString('en-IN');
const categoryName=c=>({free:'FREE',money:'C COINS',coins:'S COINS',premium:'EXCLUSIVE'}[c]||c.toUpperCase());

function persist(){
  localStorage.setItem(STORAGE.money,String(state.money));
  localStorage.setItem(STORAGE.scoins,String(state.scoins));
  localStorage.setItem(STORAGE.owned,JSON.stringify(state.owned));
  localStorage.setItem(STORAGE.missions,JSON.stringify(state.claimed));
  localStorage.setItem(STORAGE.emotes,JSON.stringify(state.ownedEmotes));
  localStorage.setItem(STORAGE.friends,JSON.stringify(state.friends));
  localStorage.setItem(STORAGE.groups,JSON.stringify(state.groups));
  localStorage.setItem(STORAGE.player,state.player);
}

function toast(msg){
  const el=$('toast');
  if(!el)return;
  el.textContent=msg;
  el.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer=setTimeout(()=>el.classList.remove('show'),2800);
}

function escapeHTML(v){
  return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

/* BlokS avatar: glowing S with a smaller R accent on the hoodie */
function figureHTML(s){
  return `
    <div class="skin-figure gender-${s.gender||'boy'} style-${s.style||'streetwear'}"
         style="--skin:${s.colors[0]};--skin2:${s.colors[1]};--skin3:${s.colors[2]};--glow:${s.glow}">
      <div class="skin-shadow"></div>
      <div class="skin-hair"></div>
      <div class="skin-head">
        <i class="skin-eye eye-left"></i>
        <i class="skin-eye eye-right"></i>
        <i class="skin-mouth"></i>
      </div>
      <div class="skin-neck"></div>
      <div class="skin-arm left"></div>
      <div class="skin-arm right"></div>
      <div class="skin-torso">
        <i class="skin-jacket"></i>
        <i class="skin-shirt-mark" aria-label="S R logo"
           style="color:#fff;text-shadow:0 0 4px #fff,0 0 9px #e879ff,0 0 18px #a100ff">
          S<span style="font-size:.42em;vertical-align:sub;margin-left:1px;color:#e8b5ff;text-shadow:0 0 5px #d500ff">R</span>
        </i>
        <i class="skin-belt"></i>
      </div>
      <div class="skin-leg left"></div>
      <div class="skin-leg right"></div>
      <div class="skin-shoe left"></div>
      <div class="skin-shoe right"></div>
      <div class="skin-accessory"></div>
    </div>`;
}

function skinCard(s){
  const owned=state.owned.includes(s.id);
  let price=s.category==='free'
    ?'FREE'
    :s.category==='money'
      ?`🟡 ${fmt(s.price)} <small>C COINS</small>`
      :s.category==='coins'
        ?`✦ ${fmt(s.price)} <small>S COINS</small>`
        :`₹${s.price}`;

  let action=owned
    ?'Owned'
    :s.category==='free'
      ?'Unlock free'
      :s.category==='money'
        ?'Buy with C'
        :s.category==='coins'
          ?'Buy with S'
          :'View exclusive';

  return `
    <article class="skin-card">
      <button class="skin-art" data-details="${s.id}"
        aria-label="Preview ${escapeHTML(s.name)}"
        style="--glow:${s.glow};--skin:${s.colors[0]}">
        <span class="skin-badge">${categoryName(s.category)}</span>
        <span class="skin-gender">${s.gender==='girl'?'♀ GIRL':'♂ BOY'}</span>
        <span class="rarity-dot"
          style="--rarity-color:${s.category==='free'?'#75e0bd':s.category==='money'?'#f4d078':s.category==='coins'?'#c4a0ff':'#ff91d8'}"></span>
        ${figureHTML(s)}
      </button>
      <div class="skin-info">
        <div class="skin-title-row">
          <h3>${escapeHTML(s.name)}</h3>
          <span class="rarity-text">${s.rarity}</span>
        </div>
        <p>${escapeHTML(s.description)}</p>
        <div class="skin-buy-row">
          <div class="skin-price">${price}</div>
          <button class="skin-action ${owned?'owned':s.category==='money'?'money-action':s.category==='coins'?'coin':'paid'}"
            data-action="${s.id}">${action}</button>
        </div>
      </div>
    </article>`;
}

function renderSkins(target,list){
  const el=$(target);
  if(!el)return;
  el.innerHTML=list.length
    ?list.map(skinCard).join('')
    :'<div class="empty-state"><strong>No skins found</strong>Try another search or category.</div>';
}

function filteredSkins(){
  return SKINS.filter(s=>
    (state.activeCategory==='all'||s.category===state.activeCategory)&&
    (s.name+' '+s.rarity+' '+s.description+' '+s.gender+' '+s.style)
      .toLowerCase().includes(state.search.toLowerCase())
  );
}

function renderWallet(){
  if($('moneyBalance'))$('moneyBalance').textContent=fmt(state.money);
  if($('coinBalance'))$('coinBalance').textContent=fmt(state.scoins);
  if($('emoteBalance')){
    $('emoteBalance').innerHTML=
      `<span>🟡 ${fmt(state.money)} C Coins</span> <span>✦ ${fmt(state.scoins)} S Coins</span>`;
  }
}

function render(){
  renderWallet();
  if($('allCount'))$('allCount').textContent=SKINS.length;
  renderSkins('skinGrid',filteredSkins());
  renderSkins('featuredGrid',[SKINS[7],SKINS[26],SKINS[32],SKINS[53]]);
  renderSkins('inventoryGrid',SKINS.filter(s=>state.owned.includes(s.id)));
  document.querySelectorAll('.category-tab[data-category]').forEach(b=>
    b.classList.toggle('selected',b.dataset.category===state.activeCategory)
  );
  renderEmotes();
  renderFriends();
  renderGroups();
  renderEquipped();
}

function go(view){
  const target=$(view+'View');
  if(!target){
    toast('That section is not available.');
    return;
  }

  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active-view'));
  target.classList.add('active-view');

  if($('crumb'))$('crumb').textContent=view.toUpperCase();

  document.querySelectorAll('.nav-item').forEach(b=>
    b.classList.toggle('active',b.dataset.view===view)
  );

  document.body.classList.remove('mobile-menu-open');

  if(view==='skins'){
    state.activeCategory='all';
    state.search='';
    if($('skinSearch'))$('skinSearch').value='';
  }

  render();
  window.scrollTo({top:0,behavior:'smooth'});
}

function buySkin(id){
  const s=SKINS.find(x=>x.id===id);
  if(!s)return;

  if(state.owned.includes(id)){
    toast(`${s.name} is already in My Skins.`);
    return;
  }

  if(s.category==='free'){
    state.owned.push(id);
    persist();
    render();
    toast(`${s.name} unlocked!`);
    return;
  }

  if(s.category==='money'||s.category==='coins'){
    const wallet=s.category==='money'?'money':'scoins';

    if(state[wallet]<s.price){
      toast(`Not enough ${wallet==='money'?'C Coins':'S Coins'} — you need ${fmt(s.price-state[wallet])} more.`);
      return;
    }

    state[wallet]-=s.price;
    state.owned.push(id);
    persist();
    render();
    toast(`${s.name} purchased with ${wallet==='money'?'C Coins':'S Coins'}!`);
    return;
  }

  openDetails(id);
}

function openDetails(id){
  const s=SKINS.find(x=>x.id===id);
  if(!s||!$('dialogContent')||!$('skinDialog'))return;

  const owned=state.owned.includes(id);
  const price=s.category==='free'
    ?'Free'
    :s.category==='money'
      ?`${fmt(s.price)} C Coins`
      :s.category==='coins'
        ?`${fmt(s.price)} S Coins`
        :`₹${s.price}`;

  $('dialogContent').innerHTML=`
    <div class="dialog-skin-art" style="--glow:${s.glow}">${figureHTML(s)}</div>
    <div class="eyebrow">${categoryName(s.category)} · ${s.rarity.toUpperCase()} · ${s.gender.toUpperCase()}</div>
    <h2>${escapeHTML(s.name)}</h2>
    <p>${escapeHTML(s.description)}</p>
    <div class="dialog-price">${price}<small>Cosmetic item</small></div>
    ${s.category==='premium'&&!owned
      ?`<button class="primary-btn full-btn" id="checkoutDemo">Continue to purchase · ₹${s.price}</button><small>Demo only: payment checkout is not connected. No payment will be taken.</small>`
      :`<button class="primary-btn full-btn" id="dialogAction">${owned?'Already in My Skins':s.category==='free'?'Unlock free skin':`Buy for ${price}`}</button>`
    }
    <small>Original BlokS avatar concept. Skins do not increase gameplay power.</small>`;

  $('skinDialog').showModal();

  const a=$('dialogAction');
  if(a&&!owned){
    a.addEventListener('click',()=>{
      $('skinDialog').close();
      buySkin(id);
    });
  }

  const c=$('checkoutDemo');
  if(c){
    c.addEventListener('click',()=>{
      $('skinDialog').close();
      toast('Checkout is not connected; no payment was taken.');
    });
  }
}

function renderEmotes(){
  const grid=$('emoteGrid');
  if(!grid)return;

  const list=EMOTES.filter(e=>
    state.activeEmoteCategory==='all'||e.category===state.activeEmoteCategory
  );

  grid.innerHTML=list.map(e=>{
    const owned=state.ownedEmotes.includes(e.id);
    const price=e.category==='free'
      ?'FREE'
      :e.category==='money'
        ?`🟡 ${fmt(e.price)} C`
        :`✦ ${fmt(e.price)} S`;

    return `
      <article class="emote-card">
        <button class="emote-preview" data-preview-emote="${e.id}"
          aria-label="Preview ${escapeHTML(e.name)}">
          <span>${e.emoji}</span>
        </button>
        <div class="emote-copy">
          <h3>${escapeHTML(e.name)}</h3>
          <p>${escapeHTML(e.description)}</p>
          <div class="emote-buy">
            <b>${price}</b>
            <button class="skin-action ${owned?'owned':''}" data-emote-buy="${e.id}">
              ${owned?'Owned':e.category==='free'?'Unlock':'Buy'}
            </button>
          </div>
        </div>
      </article>`;
  }).join('');

  document.querySelectorAll('[data-emote-category]').forEach(b=>
    b.classList.toggle('selected',b.dataset.emoteCategory===state.activeEmoteCategory)
  );
}

function buyEmote(id){
  const e=EMOTES.find(x=>x.id===id);
  if(!e)return;

  if(state.ownedEmotes.includes(id)){
    previewEmote(id);
    return;
  }

  if(e.category==='free'){
    state.ownedEmotes.push(id);
  }else{
    const wallet=e.category==='money'?'money':'scoins';

    if(state[wallet]<e.price){
      toast(`Not enough ${wallet==='money'?'C Coins':'S Coins'}.`);
      return;
    }

    state[wallet]-=e.price;
    state.ownedEmotes.push(id);
  }

  persist();
  render();
  previewEmote(id);
  toast(`${e.name} unlocked!`);
}

function previewEmote(id){
  const e=EMOTES.find(x=>x.id===id);
  if(!e||!$('emoteStage'))return;

  $('emoteStage').innerHTML=`
    <div class="emote-stage-character">
      <div class="emote-stage-emoji">${e.emoji}</div>
      <div class="emote-stage-label">${escapeHTML(e.name)}</div>
      <div class="emote-stage-sub">${state.ownedEmotes.includes(id)?'Unlocked emote':'Preview · unlock to own'}</div>
    </div>`;

  $('emoteStage').classList.remove('emote-playing');
  void $('emoteStage').offsetWidth;
  $('emoteStage').classList.add('emote-playing');
}

function renderFriends(){
  const list=$('friendList');

  if(list){
    list.innerHTML=state.friends.length
      ?state.friends.map((n,i)=>`
        <div class="person-row">
          <span class="person-avatar">${escapeHTML(n.slice(0,1).toUpperCase())}</span>
          <div>
            <strong>${escapeHTML(n)}</strong>
            <small>Local demo friend</small>
          </div>
          <button class="text-btn" data-remove-friend="${i}">Remove</button>
        </div>`).join('')
      :'<p class="muted-copy">No friends added yet. Add a display name above.</p>';
  }

  if($('friendCount')){
    $('friendCount').textContent=`${state.friends.length} friend${state.friends.length===1?'':'s'}`;
  }
}

function renderEquipped(){
  const el=$('equippedLook');
  if(!el)return;

  const equipped=SKINS.find(s=>state.owned.includes(s.id))||SKINS[0];

  el.innerHTML=`
    <div class="equipped-avatar">${figureHTML(equipped)}</div>
    <div>
      <strong>${escapeHTML(state.player)}</strong>
      <small>Wearing ${escapeHTML(equipped.name)}</small>
    </div>`;

  if($('playerName')&&document.activeElement!==$('playerName')){
    $('playerName').value=state.player;
  }
}

function currentGroup(){
  return state.groups.find(g=>g.code===state.currentGroup)||null;
}

function renderGroupCard(g){
  return `
    <div class="group-card">
      <div class="group-card-top">
        <div>
          <span class="eyebrow">GROUP CODE</span>
          <strong class="group-code">${g.code}</strong>
        </div>
        <span class="group-capacity">${g.members.length}/5 PLAYERS</span>
      </div>
      <div class="group-players">
        ${g.members.map(m=>`
          <div class="group-player">
            <div class="group-player-avatar">${figureHTML(SKINS.find(s=>s.id===m.skin)||SKINS[0])}</div>
            <strong>${escapeHTML(m.name)}</strong>
          </div>`).join('')}
      </div>
    </div>`;
}

function renderGroups(){
  const g=currentGroup();

  if($('groupCurrentPanel')){
    $('groupCurrentPanel').innerHTML=g
      ?renderGroupCard(g)
      :'<p class="muted-copy">You are not in a group yet.</p>';
  }

  if($('inviteCurrentPanel')){
    $('inviteCurrentPanel').innerHTML=g
      ?`${renderGroupCard(g)}<p class="muted-copy">Invite preview: ${state.friends.length?state.friends.map(escapeHTML).join(', '):'add friends first in Friends Hub'}.</p>`
      :'<p class="muted-copy">Create or join a group to prepare invites.</p>';
  }

  if($('groupList')){
    $('groupList').innerHTML=state.groups.length
      ?state.groups.map(x=>`
        <button class="group-list-item" data-select-group="${x.code}">
          <strong>${x.code}</strong>
          <span>${x.members.length}/5 players</span>
        </button>`).join('')
      :'<p class="muted-copy">No groups in this browser yet.</p>';
  }
}

function createGroup(){
  const code=String(Math.floor(10000+Math.random()*90000));
  const skin=SKINS.find(s=>state.owned.includes(s.id))||SKINS[0];
  const g={code,members:[{name:state.player,skin:skin.id}]};

  state.groups.push(g);
  state.currentGroup=code;
  persist();
  renderGroups();
  toast(`Group created! Code: ${code}`);
}

function joinGroup(code){
  const g=state.groups.find(x=>x.code===code);

  if(!g){
    toast('That group code was not found in this browser demo.');
    return;
  }

  if(g.members.some(m=>m.name.toLowerCase()===state.player.toLowerCase())){
    state.currentGroup=code;
    renderGroups();
    toast('You are already in this group.');
    return;
  }

  if(g.members.length>=5){
    toast('This group is full (maximum 5 players).');
    return;
  }

  const skin=SKINS.find(s=>state.owned.includes(s.id))||SKINS[0];
  g.members.push({name:state.player,skin:skin.id});
  state.currentGroup=code;
  persist();
  renderGroups();
  toast(`Joined group ${code}.`);
}

function claimMission(id,btn){
  if(state.claimed.includes(id)){
    toast('You already claimed this reward.');
    return;
  }

  if(id==='collect'&&!state.owned.some(sid=>SKINS.find(s=>s.id===sid)?.category==='free')){
    toast('Unlock a free skin first.');
    return;
  }

  const rewards={visit:150,collect:300,explore:250};
  state.claimed.push(id);
  state.money+=rewards[id]||0;
  persist();
  render();
  toast(`You earned ${fmt(rewards[id])} C Coins!`);
}

function syncMissions(){
  document.querySelectorAll('[data-mission]').forEach(b=>{
    if(state.claimed.includes(b.dataset.mission)){
      b.textContent='Reward claimed ✓';
      b.disabled=true;
    }
  });
}

document.addEventListener('click',e=>{
  const nav=e.target.closest('[data-view]');
  if(nav){
    go(nav.dataset.view);
    return;
  }

  const goBtn=e.target.closest('[data-go]');
  if(goBtn){
    go(goBtn.dataset.go);
    return;
  }

  const cat=e.target.closest('[data-category]');
  if(cat){
    const c=cat.dataset.category;
    if(cat.classList.contains('path-card'))go('skins');
    state.activeCategory=c;
    render();
    return;
  }

  const action=e.target.closest('[data-action]');
  if(action){
    buySkin(action.dataset.action);
    return;
  }

  const details=e.target.closest('[data-details]');
  if(details){
    openDetails(details.dataset.details);
    return;
  }

  const emCat=e.target.closest('[data-emote-category]');
  if(emCat){
    state.activeEmoteCategory=emCat.dataset.emoteCategory;
    renderEmotes();
    return;
  }

  const emPreview=e.target.closest('[data-preview-emote]');
  if(emPreview){
    previewEmote(emPreview.dataset.previewEmote);
    return;
  }

  const emBuy=e.target.closest('[data-emote-buy]');
  if(emBuy){
    buyEmote(emBuy.dataset.emoteBuy);
    return;
  }

  const rm=e.target.closest('[data-remove-friend]');
  if(rm){
    state.friends.splice(Number(rm.dataset.removeFriend),1);
    persist();
    renderFriends();
    return;
  }

  const sg=e.target.closest('[data-select-group]');
  if(sg){
    state.currentGroup=sg.dataset.selectGroup;
    renderGroups();
    return;
  }

  if(e.target.closest('[data-launch-game]')){
    toast('This game is a concept preview; playable game integration is still needed.');
  }
});

if($('skinSearch')){
  $('skinSearch').addEventListener('input',e=>{
    state.search=e.target.value;
    renderSkins('skinGrid',filteredSkins());
  });
}

if($('dialogClose')){
  $('dialogClose').addEventListener('click',()=>$('skinDialog').close());
}

if($('signInBtn')){
  $('signInBtn').addEventListener('click',()=>$('signInDialog').showModal());
}

if($('signClose')){
  $('signClose').addEventListener('click',()=>$('signInDialog').close());
}

if($('demoSignIn')){
  $('demoSignIn').addEventListener('click',()=>{
    $('signInDialog').close();
    toast('You are exploring as a demo guest.');
  });
}

if($('mobileMenu')){
  $('mobileMenu').addEventListener('click',()=>{
    document.body.classList.toggle('mobile-menu-open');
  });
}

if($('createGroupBtn')){
  $('createGroupBtn').addEventListener('click',createGroup);
}

if($('inviteCurrentBtn')){
  $('inviteCurrentBtn').addEventListener('click',()=>{
    renderGroups();
    toast(state.friends.length
      ?'Invite preview prepared. Online sending is not connected.'
      :'Add friends first, then prepare invites.');
  });
}

if($('addFriendForm')){
  $('addFriendForm').addEventListener('submit',e=>{
    e.preventDefault();

    const name=$('friendName').value.trim();
    if(!name)return;

    if(name.toLowerCase()===state.player.toLowerCase()){
      toast('That is your own display name.');
      return;
    }

    if(state.friends.some(x=>x.toLowerCase()===name.toLowerCase())){
      toast('That friend is already listed.');
      return;
    }

    state.friends.push(name);
    persist();
    $('friendName').value='';
    renderFriends();
    toast(`${name} added to your local friends list.`);
  });
}

if($('playerName')){
  $('playerName').addEventListener('change',e=>{
    state.player=e.target.value.trim().slice(0,24)||'Guest Player';
    persist();
    renderEquipped();
    renderGroups();
  });
}

if($('joinGroupForm')){
  $('joinGroupForm').addEventListener('submit',e=>{
    e.preventDefault();
    joinGroup($('groupCodeInput').value.trim());
  });
}

document.querySelectorAll('[data-mission]').forEach(btn=>{
  btn.addEventListener('click',()=>claimMission(btn.dataset.mission,btn));
});

render();
syncMissions();


/* BLOKS: DAILY 30 C COINS REWARD */
(function giveDailyCCoins() {
  const now = new Date();
  const dateKey = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0")
  ].join("-");

  const rewardKey = "bloks_c_daily_reward_date";
  const lastReward = localStorage.getItem(rewardKey);

  if (lastReward === dateKey) return;

  state.money += 30;
  localStorage.setItem(rewardKey, dateKey);

  persist();
  render();
  toast("🎉 Daily reward: +30 C Coins!");
})();

