const SKINS = [{"id":"classic","name":"Classic Starter","category":"free","rarity":"Basic","price":0,"priceLabel":"FREE","description":"Clean purple starter fit.","style":"classic","colors":["#9b8aff","#6d5ce7","#313453"],"glow":"#44356f"},{"id":"mint","name":"Mint Dash","category":"free","rarity":"Basic","price":0,"priceLabel":"FREE","description":"Fresh mint hoodie and sporty layers.","style":"hoodie","colors":["#79e2c1","#3baf98","#24594f"],"glow":"#214c4a"},{"id":"sunny","name":"Sunny Side","category":"free","rarity":"Basic","price":0,"priceLabel":"FREE","description":"Golden streetwear for bright adventures.","style":"sport","colors":["#ffd27c","#df9b37","#644d30"],"glow":"#59431f"},{"id":"night","name":"Night Pixel","category":"free","rarity":"Basic","price":0,"priceLabel":"FREE","description":"Midnight jacket with stealth details.","style":"stealth","colors":["#9ba8c9","#596783","#252b40"],"glow":"#30394e"},{"id":"sprout","name":"Little Sprout","category":"free","rarity":"Basic","price":0,"priceLabel":"FREE","description":"Nature-inspired casual gear.","style":"nature","colors":["#a7e477","#5aaf49","#315a38"],"glow":"#304d2d"},{"id":"berry","name":"Berry Pop","category":"free","rarity":"Basic","price":0,"priceLabel":"FREE","description":"Pink and violet pop-culture style.","style":"pop","colors":["#f5a5d1","#b84e9d","#582b65"],"glow":"#57254e"},{"id":"denim","name":"Denim Rookie","category":"free","rarity":"Basic","price":0,"priceLabel":"FREE","description":"Classic blue denim and white sneakers.","style":"denim","colors":["#62e8fa","#238eae","#173f60"],"glow":"#164f68"},{"id":"c1","name":"Street Runner","category":"money","rarity":"Rare","price":450,"priceLabel":"450 C","description":"Original street runner outfit with layered clothing, signature accessories and matching shoes.","style":"hoodie","colors":["#79e2c1","#3baf98","#24594f"],"glow":"#214c4a"},{"id":"c2","name":"Neon Skater","category":"money","rarity":"Rare","price":650,"priceLabel":"650 C","description":"Original neon skater outfit with layered clothing, signature accessories and matching shoes.","style":"skater","colors":["#ffd27c","#df9b37","#644d30"],"glow":"#59431f"},{"id":"c3","name":"Shadow Ninja","category":"money","rarity":"Rare","price":800,"priceLabel":"800 C","description":"Original shadow ninja outfit with layered clothing, signature accessories and matching shoes.","style":"ninja","colors":["#9ba8c9","#596783","#252b40"],"glow":"#30394e"},{"id":"c4","name":"Cloud Hoodie","category":"money","rarity":"Rare","price":950,"priceLabel":"950 C","description":"Original cloud hoodie outfit with layered clothing, signature accessories and matching shoes.","style":"cloud","colors":["#a7e477","#5aaf49","#315a38"],"glow":"#304d2d"},{"id":"c5","name":"Crimson Guard","category":"money","rarity":"Rare","price":1100,"priceLabel":"1,100 C","description":"Original crimson guard outfit with layered clothing, signature accessories and matching shoes.","style":"guard","colors":["#f5a5d1","#b84e9d","#582b65"],"glow":"#57254e"},{"id":"c6","name":"Arctic Scout","category":"money","rarity":"Rare","price":1250,"priceLabel":"1,250 C","description":"Original arctic scout outfit with layered clothing, signature accessories and matching shoes.","style":"arctic","colors":["#62e8fa","#238eae","#173f60"],"glow":"#164f68"},{"id":"c7","name":"Desert Ranger","category":"money","rarity":"Rare","price":1400,"priceLabel":"1,400 C","description":"Original desert ranger outfit with layered clothing, signature accessories and matching shoes.","style":"ranger","colors":["#ffad73","#e65e4b","#682d46"],"glow":"#6b2c35"},{"id":"c8","name":"Pixel Pirate","category":"money","rarity":"Rare","price":1600,"priceLabel":"1,600 C","description":"Original pixel pirate outfit with layered clothing, signature accessories and matching shoes.","style":"pirate","colors":["#c4f4ff","#5bb4e7","#2b477f"],"glow":"#214d80"},{"id":"c9","name":"Galaxy Drifter","category":"money","rarity":"Rare","price":1800,"priceLabel":"1,800 C","description":"Original galaxy drifter outfit with layered clothing, signature accessories and matching shoes.","style":"galaxy","colors":["#d3a2ff","#7244bd","#24183f"],"glow":"#45215f"},{"id":"c10","name":"Cyber Samurai","category":"money","rarity":"Rare","price":2000,"priceLabel":"2,000 C","description":"Original cyber samurai outfit with layered clothing, signature accessories and matching shoes.","style":"samurai","colors":["#fff0a6","#d8a84b","#5940a2"],"glow":"#5d4380"},{"id":"c11","name":"Toxic Racer","category":"money","rarity":"Epic","price":2200,"priceLabel":"2,200 C","description":"Original toxic racer outfit with layered clothing, signature accessories and matching shoes.","style":"toxic","colors":["#9b8aff","#6d5ce7","#313453"],"glow":"#44356f"},{"id":"c12","name":"Royal Knight","category":"money","rarity":"Epic","price":2400,"priceLabel":"2,400 C","description":"Original royal knight outfit with layered clothing, signature accessories and matching shoes.","style":"knight","colors":["#79e2c1","#3baf98","#24594f"],"glow":"#214c4a"},{"id":"c13","name":"Jungle Phantom","category":"money","rarity":"Epic","price":2600,"priceLabel":"2,600 C","description":"Original jungle phantom outfit with layered clothing, signature accessories and matching shoes.","style":"jungle","colors":["#ffd27c","#df9b37","#644d30"],"glow":"#59431f"},{"id":"c14","name":"Retro Gamer","category":"money","rarity":"Epic","price":2800,"priceLabel":"2,800 C","description":"Original retro gamer outfit with layered clothing, signature accessories and matching shoes.","style":"retro","colors":["#9ba8c9","#596783","#252b40"],"glow":"#30394e"},{"id":"c15","name":"Lava Beast","category":"money","rarity":"Epic","price":3000,"priceLabel":"3,000 C","description":"Original lava beast outfit with layered clothing, signature accessories and matching shoes.","style":"lava","colors":["#a7e477","#5aaf49","#315a38"],"glow":"#304d2d"},{"id":"c16","name":"Moon Walker","category":"money","rarity":"Epic","price":3300,"priceLabel":"3,300 C","description":"Original moon walker outfit with layered clothing, signature accessories and matching shoes.","style":"moon","colors":["#f5a5d1","#b84e9d","#582b65"],"glow":"#57254e"},{"id":"c17","name":"Storm Chaser","category":"money","rarity":"Epic","price":3600,"priceLabel":"3,600 C","description":"Original storm chaser outfit with layered clothing, signature accessories and matching shoes.","style":"storm","colors":["#62e8fa","#238eae","#173f60"],"glow":"#164f68"},{"id":"c18","name":"Crystal Mage","category":"money","rarity":"Epic","price":3900,"priceLabel":"3,900 C","description":"Original crystal mage outfit with layered clothing, signature accessories and matching shoes.","style":"crystal","colors":["#ffad73","#e65e4b","#682d46"],"glow":"#6b2c35"},{"id":"c19","name":"Mecha Pilot","category":"money","rarity":"Epic","price":4300,"priceLabel":"4,300 C","description":"Original mecha pilot outfit with layered clothing, signature accessories and matching shoes.","style":"mecha","colors":["#c4f4ff","#5bb4e7","#2b477f"],"glow":"#214d80"},{"id":"c20","name":"Golden Striker","category":"money","rarity":"Epic","price":4800,"priceLabel":"4,800 C","description":"Original golden striker outfit with layered clothing, signature accessories and matching shoes.","style":"striker","colors":["#d3a2ff","#7244bd","#24183f"],"glow":"#45215f"},{"id":"s1","name":"Prism Phantom","category":"coins","rarity":"Legendary","price":1200,"priceLabel":"1,200 S","description":"High-tier prism phantom design with premium armor, glowing accents and a distinctive silhouette.","style":"prism","colors":["#62e8fa","#238eae","#173f60"],"glow":"#164f68"},{"id":"s2","name":"Void Monarch","category":"coins","rarity":"Legendary","price":1800,"priceLabel":"1,800 S","description":"High-tier void monarch design with premium armor, glowing accents and a distinctive silhouette.","style":"void","colors":["#ffad73","#e65e4b","#682d46"],"glow":"#6b2c35"},{"id":"s3","name":"Starforge Titan","category":"coins","rarity":"Legendary","price":2400,"priceLabel":"2,400 S","description":"High-tier starforge titan design with premium armor, glowing accents and a distinctive silhouette.","style":"star","colors":["#c4f4ff","#5bb4e7","#2b477f"],"glow":"#214d80"},{"id":"s4","name":"Aurora Warden","category":"coins","rarity":"Legendary","price":3000,"priceLabel":"3,000 S","description":"High-tier aurora warden design with premium armor, glowing accents and a distinctive silhouette.","style":"aurora","colors":["#d3a2ff","#7244bd","#24183f"],"glow":"#45215f"},{"id":"s5","name":"Dragon Circuit","category":"coins","rarity":"Legendary","price":3600,"priceLabel":"3,600 S","description":"High-tier dragon circuit design with premium armor, glowing accents and a distinctive silhouette.","style":"dragon","colors":["#fff0a6","#d8a84b","#5940a2"],"glow":"#5d4380"},{"id":"s6","name":"Eclipse Ronin","category":"coins","rarity":"Legendary","price":4200,"priceLabel":"4,200 S","description":"High-tier eclipse ronin design with premium armor, glowing accents and a distinctive silhouette.","style":"eclipse","colors":["#9b8aff","#6d5ce7","#313453"],"glow":"#44356f"},{"id":"s7","name":"Quantum Knight","category":"coins","rarity":"Legendary","price":5000,"priceLabel":"5,000 S","description":"High-tier quantum knight design with premium armor, glowing accents and a distinctive silhouette.","style":"quantum","colors":["#79e2c1","#3baf98","#24594f"],"glow":"#214c4a"},{"id":"s8","name":"Nova Reaper","category":"coins","rarity":"Legendary","price":5800,"priceLabel":"5,800 S","description":"High-tier nova reaper design with premium armor, glowing accents and a distinctive silhouette.","style":"nova","colors":["#ffd27c","#df9b37","#644d30"],"glow":"#59431f"},{"id":"s9","name":"Glacier Emperor","category":"coins","rarity":"Legendary","price":6600,"priceLabel":"6,600 S","description":"High-tier glacier emperor design with premium armor, glowing accents and a distinctive silhouette.","style":"glacier","colors":["#9ba8c9","#596783","#252b40"],"glow":"#30394e"},{"id":"s10","name":"Solar Sentinel","category":"coins","rarity":"Legendary","price":7500,"priceLabel":"7,500 S","description":"High-tier solar sentinel design with premium armor, glowing accents and a distinctive silhouette.","style":"solar","colors":["#a7e477","#5aaf49","#315a38"],"glow":"#304d2d"},{"id":"s11","name":"Spectral Ace","category":"coins","rarity":"Legendary","price":8500,"priceLabel":"8,500 S","description":"High-tier spectral ace design with premium armor, glowing accents and a distinctive silhouette.","style":"spectral","colors":["#f5a5d1","#b84e9d","#582b65"],"glow":"#57254e"},{"id":"s12","name":"Rift Walker","category":"coins","rarity":"Legendary","price":9500,"priceLabel":"9,500 S","description":"High-tier rift walker design with premium armor, glowing accents and a distinctive silhouette.","style":"rift","colors":["#62e8fa","#238eae","#173f60"],"glow":"#164f68"},{"id":"s13","name":"Celestial Oni","category":"coins","rarity":"Legendary","price":11000,"priceLabel":"11,000 S","description":"High-tier celestial oni design with premium armor, glowing accents and a distinctive silhouette.","style":"oni","colors":["#ffad73","#e65e4b","#682d46"],"glow":"#6b2c35"},{"id":"s14","name":"Thunder Sovereign","category":"coins","rarity":"Legendary","price":12500,"priceLabel":"12,500 S","description":"High-tier thunder sovereign design with premium armor, glowing accents and a distinctive silhouette.","style":"thunder","colors":["#c4f4ff","#5bb4e7","#2b477f"],"glow":"#214d80"},{"id":"s15","name":"Obsidian King","category":"coins","rarity":"Legendary","price":14000,"priceLabel":"14,000 S","description":"High-tier obsidian king design with premium armor, glowing accents and a distinctive silhouette.","style":"obsidian","colors":["#d3a2ff","#7244bd","#24183f"],"glow":"#45215f"},{"id":"s16","name":"Astral Samurai","category":"coins","rarity":"Mythic","price":16000,"priceLabel":"16,000 S","description":"High-tier astral samurai design with premium armor, glowing accents and a distinctive silhouette.","style":"astral","colors":["#fff0a6","#d8a84b","#5940a2"],"glow":"#5d4380"},{"id":"s17","name":"Hypernova Hero","category":"coins","rarity":"Mythic","price":18000,"priceLabel":"18,000 S","description":"High-tier hypernova hero design with premium armor, glowing accents and a distinctive silhouette.","style":"hypernova","colors":["#9b8aff","#6d5ce7","#313453"],"glow":"#44356f"},{"id":"s18","name":"Phantom Crown","category":"coins","rarity":"Mythic","price":20000,"priceLabel":"20,000 S","description":"High-tier phantom crown design with premium armor, glowing accents and a distinctive silhouette.","style":"phantom","colors":["#79e2c1","#3baf98","#24594f"],"glow":"#214c4a"},{"id":"s19","name":"Cosmic Leviathan","category":"coins","rarity":"Mythic","price":22500,"priceLabel":"22,500 S","description":"High-tier cosmic leviathan design with premium armor, glowing accents and a distinctive silhouette.","style":"cosmic","colors":["#ffd27c","#df9b37","#644d30"],"glow":"#59431f"},{"id":"s20","name":"Neon Valkyrie","category":"coins","rarity":"Mythic","price":25000,"priceLabel":"25,000 S","description":"High-tier neon valkyrie design with premium armor, glowing accents and a distinctive silhouette.","style":"valkyrie","colors":["#9ba8c9","#596783","#252b40"],"glow":"#30394e"},{"id":"s21","name":"Chrono Breaker","category":"coins","rarity":"Mythic","price":28000,"priceLabel":"28,000 S","description":"High-tier chrono breaker design with premium armor, glowing accents and a distinctive silhouette.","style":"chrono","colors":["#a7e477","#5aaf49","#315a38"],"glow":"#304d2d"},{"id":"s22","name":"Mythic Kitsune","category":"coins","rarity":"Mythic","price":31000,"priceLabel":"31,000 S","description":"High-tier mythic kitsune design with premium armor, glowing accents and a distinctive silhouette.","style":"kitsune","colors":["#f5a5d1","#b84e9d","#582b65"],"glow":"#57254e"},{"id":"s23","name":"Dark Matter Lord","category":"coins","rarity":"Mythic","price":35000,"priceLabel":"35,000 S","description":"High-tier dark matter lord design with premium armor, glowing accents and a distinctive silhouette.","style":"matter","colors":["#62e8fa","#238eae","#173f60"],"glow":"#164f68"},{"id":"s24","name":"Infinity Sentinel","category":"coins","rarity":"Mythic","price":40000,"priceLabel":"40,000 S","description":"High-tier infinity sentinel design with premium armor, glowing accents and a distinctive silhouette.","style":"infinity","colors":["#ffad73","#e65e4b","#682d46"],"glow":"#6b2c35"},{"id":"s25","name":"Singularity Prime","category":"coins","rarity":"Mythic","price":50000,"priceLabel":"50,000 S","description":"High-tier singularity prime design with premium armor, glowing accents and a distinctive silhouette.","style":"singularity","colors":["#c4f4ff","#5bb4e7","#2b477f"],"glow":"#214d80"},{"id":"x1","name":"Founder Gold","category":"premium","rarity":"Exclusive","price":0,"priceLabel":"₹149","description":"Limited BlokS exclusive: founder gold style with deluxe detailing.","style":"founder","colors":["#ffd27c","#df9b37","#644d30"],"glow":"#59431f"},{"id":"x2","name":"Royal Eclipse","category":"premium","rarity":"Exclusive","price":0,"priceLabel":"₹199","description":"Limited BlokS exclusive: royal eclipse style with deluxe detailing.","style":"royal","colors":["#9ba8c9","#596783","#252b40"],"glow":"#30394e"},{"id":"x3","name":"Diamond Overlord","category":"premium","rarity":"Exclusive","price":0,"priceLabel":"₹249","description":"Limited BlokS exclusive: diamond overlord style with deluxe detailing.","style":"diamond","colors":["#a7e477","#5aaf49","#315a38"],"glow":"#304d2d"},{"id":"x4","name":"Galaxy Crown","category":"premium","rarity":"Exclusive","price":0,"priceLabel":"₹299","description":"Limited BlokS exclusive: galaxy crown style with deluxe detailing.","style":"galaxy","colors":["#f5a5d1","#b84e9d","#582b65"],"glow":"#57254e"},{"id":"x5","name":"Eternal Legend","category":"premium","rarity":"Exclusive","price":0,"priceLabel":"₹399","description":"Limited BlokS exclusive: eternal legend style with deluxe detailing.","style":"eternal","colors":["#62e8fa","#238eae","#173f60"],"glow":"#164f68"}];

const state = {
  money: Number(localStorage.getItem("bloks_money") || 5000),
  sCoins: 0,
  owned: JSON.parse(localStorage.getItem("bloks_demo_owned") || '["classic"]'),
  activeCategory: "all",
  search: "",
  claimed: JSON.parse(localStorage.getItem("bloks_demo_missions") || "[]")
};
const $ = (id) => document.getElementById(id);
const coinFormat = (n) => n.toLocaleString("en-IN");
const categoryName = (category) => ({free:"FREE",coins:"S COINS",money:"COINS",premium:"EXCLUSIVE"}[category] || category.toUpperCase());

function persist() {
  localStorage.setItem("bloks_money", String(state.money));
  localStorage.setItem("bloks_scoins", "0");
  localStorage.setItem("bloks_demo_owned", JSON.stringify(state.owned));
  localStorage.setItem("bloks_demo_missions", JSON.stringify(state.claimed));
}
function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2600);
}
function figureHTML(skin) {
  return `<div class="skin-figure" style="--skin:${skin.colors[0]};--skin2:${skin.colors[1]};--skin3:${skin.colors[2]};--fit:${skin.style}"><div class="skin-head"></div><div class="skin-hair"></div><div class="skin-torso"></div><div class="skin-arm left"></div><div class="skin-arm right"></div><div class="skin-leg left"></div><div class="skin-leg right"></div><div class="skin-accessory"></div><div class="skin-shoes"></div></div>`;
}
function cardHTML(skin) {
  const owned = state.owned.includes(skin.id);
  const action = owned ? "Owned" : skin.category === "free" ? "Unlock free" : skin.category === "premium" ? "View exclusive" : `Buy with ${skin.category === "coins" ? "S Coins" : "C Coins"}`;
  const actionClass = owned ? "owned" : skin.category === "premium" ? "paid" : skin.category === "coins" ? "coin" : "";
  const price = skin.category === "free" ? "FREE" : skin.category === "premium" ? skin.priceLabel : `<span style="color:#f7d98b">◉</span> ${coinFormat(skin.price)} <small>${skin.category === "coins" ? "S COINS" : "C COINS"}</small>`;
  return `<article class="skin-card">
    <button class="skin-art" data-details="${skin.id}" aria-label="View ${skin.name}" style="--glow:${skin.glow};--skin:${skin.colors[0]}">
      <span class="skin-badge">${categoryName(skin.category)}</span><span class="rarity-dot" style="--rarity-color:${skin.category==='free'?'#75e0bd':skin.category==='coins'?'#c4a0ff':skin.category==='premium'?'#f7c873':'#75e0bd'}"></span>${figureHTML(skin)}
    </button>
    <div class="skin-info"><div class="skin-title-row"><h3>${skin.name}</h3><span class="rarity-text">${skin.rarity}</span></div>
      <p>${skin.description}</p><div class="skin-buy-row"><div class="skin-price">${price}</div><button class="skin-action ${actionClass}" data-action="${skin.id}">${action}</button></div>
    </div></article>`;
}
function renderSkins(target, list) {
  $(target).innerHTML = list.length ? list.map(cardHTML).join("") : `<div class="empty-state"><strong>No skins found</strong>Try another search or category.</div>`;
}
function filteredSkins() {
  return SKINS.filter(s => (state.activeCategory === "all" || s.category === state.activeCategory) && (s.name + " " + s.rarity + " " + s.description).toLowerCase().includes(state.search.toLowerCase()));
}
function render() {
  $("moneyBalance").textContent = coinFormat(state.money);
  $("coinBalance").textContent = coinFormat(state.sCoins);
  $("allCount").textContent = SKINS.length;
  renderSkins("skinGrid", filteredSkins());
  renderSkins("featuredGrid", [SKINS[6], SKINS[9], SKINS[11], SKINS[14]]);
  const ownedSkins = SKINS.filter(s => state.owned.includes(s.id));
  renderSkins("inventoryGrid", ownedSkins);
  document.querySelectorAll(".category-tab").forEach(b => b.classList.toggle("selected", b.dataset.category === state.activeCategory));
}
function go(view) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active-view"));
  $(view + "View").classList.add("active-view");
  $("crumb").textContent = view.toUpperCase();
  document.querySelectorAll(".nav-item").forEach(b => b.classList.toggle("active", b.dataset.view === view));
  document.body.classList.remove("mobile-menu-open");
  if (view === "skins") { state.activeCategory = "all"; state.search = ""; $("skinSearch").value = ""; render(); }
  if (view === "inventory" || view === "discover") render();
  window.scrollTo({top:0,behavior:"smooth"});
}
function buySkin(id) {
  const skin = SKINS.find(s => s.id === id);
  if (!skin) return;
  if (state.owned.includes(id)) { showToast(`${skin.name} is already in your collection.`); return; }
  if (skin.category === "free") {
    state.owned.push(id); persist(); render(); showToast(`${skin.name} unlocked! Added to My Skins.`); return;
  }
  if (skin.category === "coins") {
    if (state.sCoins < skin.price) { showToast("You start with 0 S Coins. S Coin skins are for S Coins earned or granted later."); return; }
    state.sCoins -= skin.price; state.owned.push(id); persist(); render(); showToast(`${skin.name} purchased with S Coins!`); return;
  }
  if (skin.category === "money") {
    if (state.money < skin.price) { showToast(`Not enough C Coins. Earn ${coinFormat(skin.price - state.money)} more by playing missions.`); return; }
    state.money -= skin.price; state.owned.push(id); persist(); render(); showToast(`${skin.name} purchased with C Coins!`); return;
  }
  openDetails(id, true);
}
function openDetails(id, purchaseMode=false) {
  const skin = SKINS.find(s => s.id === id);
  if (!skin) return;
  const owned = state.owned.includes(id);
  const price = skin.category === "free" ? "Free" : skin.category === "premium" ? skin.priceLabel : `${coinFormat(skin.price)} ${skin.category === "coins" ? "S Coins" : "C Coins"}`;
  $("dialogContent").innerHTML = `<div class="dialog-skin-art" style="--glow:${skin.glow}">${figureHTML(skin)}</div>
    <div class="eyebrow">${categoryName(skin.category)} · ${skin.rarity.toUpperCase()}</div><h2>${skin.name}</h2><p>${skin.description}</p>
    <div class="dialog-price">${price}<small>Cosmetic item</small></div>
    ${skin.category === "premium" && !owned ? `<button class="primary-btn full-btn" id="checkoutDemo">Continue to purchase · ${skin.priceLabel}</button><small>Demo only: payment checkout is not connected. No payment will be taken.</small>` : `<button class="primary-btn full-btn" id="dialogAction">${owned ? "Already in My Skins" : skin.category === "free" ? "Unlock free skin" : `Buy for ${coinFormat(skin.price)} ${skin.category === "coins" ? "S Coins" : "C Coins"}`}</button>`}
    <small>Skins change appearance only and do not increase gameplay power.</small>`;
  $("skinDialog").showModal();
  const action = $("dialogAction");
  if (action && !owned) action.addEventListener("click", () => { $("skinDialog").close(); buySkin(id); });
  const checkout = $("checkoutDemo");
  if (checkout) checkout.addEventListener("click", () => { $("skinDialog").close(); showToast("Payment setup comes later. No charge was made."); });
}
document.addEventListener("click", (e) => {
  const nav = e.target.closest("[data-view]");
  if (nav) { go(nav.dataset.view); return; }
  const goBtn = e.target.closest("[data-go]");
  if (goBtn) { go(goBtn.dataset.go); return; }
  const cat = e.target.closest("[data-category]");
  if (cat) {
    const category = cat.dataset.category;
    if (cat.classList.contains("path-card")) { go("skins"); state.activeCategory = category; render(); }
    else { state.activeCategory = category; render(); }
    return;
  }
  const action = e.target.closest("[data-action]");
  if (action) { buySkin(action.dataset.action); return; }
  const details = e.target.closest("[data-details]");
  if (details) openDetails(details.dataset.details);
});
$("skinSearch").addEventListener("input", (e) => { state.search = e.target.value; renderSkins("skinGrid", filteredSkins()); });
$("dialogClose").addEventListener("click", () => $("skinDialog").close());
$("signInBtn").addEventListener("click", () => $("signInDialog").showModal());
$("signClose").addEventListener("click", () => $("signInDialog").close());
$("demoSignIn").addEventListener("click", () => { $("signInDialog").close(); showToast("You're exploring as a demo guest."); });
$("mobileMenu").addEventListener("click", () => document.body.classList.toggle("mobile-menu-open"));
document.querySelectorAll("[data-mission]").forEach(btn => btn.addEventListener("click", () => {
  const id = btn.dataset.mission;
  const rewards = {visit:150,collect:300,explore:250};
  if (state.claimed.includes(id)) { showToast("You already claimed this demo reward."); return; }
  if (id === "collect" && !state.owned.some(skinId => SKINS.find(s => s.id === skinId)?.category === "free")) { showToast("Unlock a free skin first to complete this mission."); return; }
  state.claimed.push(id); state.money += rewards[id]; persist(); render();
  btn.textContent = "Reward claimed ✓"; btn.disabled = true;
  showToast(`You earned ${rewards[id]} C Coins!`);
}));
function syncMissions() {
  document.querySelectorAll("[data-mission]").forEach(btn => {
    if (state.claimed.includes(btn.dataset.mission)) { btn.textContent = "Reward claimed ✓"; btn.disabled = true; }
  });
}
render(); syncMissions();
