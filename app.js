const SKINS = [
  {id:"classic",name:"Classic Starter",category:"free",rarity:"Basic",price:0,priceLabel:"FREE",description:"Your first BlokS look: clean, bright, and ready for any world.",colors:["#9b8aff","#6d5ce7","#313453"],glow:"#44356f"},
  {id:"mint",name:"Mint Dash",category:"free",rarity:"Basic",price:0,priceLabel:"FREE",description:"Fresh mint colours for a quick and cheerful explorer.",colors:["#79e2c1","#3baf98","#24594f"],glow:"#214c4a"},
  {id:"sunny",name:"Sunny Side",category:"free",rarity:"Basic",price:0,priceLabel:"FREE",description:"A bright golden outfit made for sunny adventures.",colors:["#ffd27c","#df9b37","#644d30"],glow:"#59431f"},
  {id:"night",name:"Night Pixel",category:"free",rarity:"Basic",price:0,priceLabel:"FREE",description:"A simple midnight look with a little pixel attitude.",colors:["#9ba8c9","#596783","#252b40"],glow:"#30394e"},
  {id:"sprout",name:"Little Sprout",category:"free",rarity:"Basic",price:0,priceLabel:"FREE",description:"Leaf-inspired colours for nature-loving players.",colors:["#a7e477","#5aaf49","#315a38"],glow:"#304d2d"},
  {id:"berry",name:"Berry Pop",category:"free",rarity:"Basic",price:0,priceLabel:"FREE",description:"A playful pink and purple look you can earn for free.",colors:["#f5a5d1","#b84e9d","#582b65"],glow:"#57254e"},
  {id:"cyber",name:"Cyber Pulse",category:"coins",rarity:"Rare",price:1200,priceLabel:"1,200 S",description:"Electric cyan details and a high-energy futuristic style.",colors:["#62e8fa","#238eae","#173f60"],glow:"#164f68"},
  {id:"ember",name:"Ember Rush",category:"coins",rarity:"Epic",price:3500,priceLabel:"3,500 S",description:"Warm ember colours for players who love bold looks.",colors:["#ffad73","#e65e4b","#682d46"],glow:"#6b2c35"},
  {id:"frost",name:"Frostline",category:"coins",rarity:"Epic",price:6500,priceLabel:"6,500 S",description:"Icy blue layers with a crisp frost glow.",colors:["#c4f4ff","#5bb4e7","#2b477f"],glow:"#214d80"},
  {id:"void",name:"Void Monarch",category:"coins",rarity:"Legendary",price:18000,priceLabel:"18,000 S",description:"A top-level dark cosmic look with violet highlights.",colors:["#d3a2ff","#7244bd","#24183f"],glow:"#45215f"},
  {id:"starforge",name:"Starforge",category:"coins",rarity:"Mythic",price:42000,priceLabel:"42,000 S",description:"A rare celestial outfit reserved for dedicated collectors.",colors:["#fff0a6","#d8a84b","#5940a2"],glow:"#5d4380"},
  {id:"aurora",name:"Aurora Drift",category:"money",rarity:"Premium",price:0,priceLabel:"₹149",money:149,description:"A polished teal-and-violet outfit with a premium streetwear feel.",colors:["#8af0dd","#4d9fc2","#4d3d82"],glow:"#245c71"},
  {id:"golden",name:"Golden Hour",category:"money",rarity:"Premium",price:0,priceLabel:"₹199",money:199,description:"A warm gold-accented outfit for a standout everyday look.",colors:["#ffe0a0","#c58d3a","#5d3c36"],glow:"#66502b"},
  {id:"cloud",name:"Cloudwave",category:"money",rarity:"Premium",price:0,priceLabel:"₹249",money:249,description:"Soft cloud colours and a clean, modern premium style.",colors:["#e5e8ff","#899ce4","#454c86"],glow:"#3a467b"},
  {id:"prism",name:"Prism Runner",category:"money",rarity:"Premium+",price:0,priceLabel:"₹299",money:299,description:"A vivid multi-tone runner outfit made to pop in the lobby.",colors:["#f7a9ff","#8d75ee","#3b7cb3"],glow:"#563b86"}
];

const state = {
  coins: Number(localStorage.getItem("bloks_demo_coins") || 2500),
  owned: JSON.parse(localStorage.getItem("bloks_demo_owned") || '["classic"]'),
  activeCategory: "all",
  search: "",
  claimed: JSON.parse(localStorage.getItem("bloks_demo_missions") || "[]")
};
const $ = (id) => document.getElementById(id);
const coinFormat = (n) => n.toLocaleString("en-IN");
const categoryName = (category) => ({free:"FREE",coins:"S COINS",money:"MONEY"}[category] || category.toUpperCase());

function persist() {
  localStorage.setItem("bloks_demo_coins", String(state.coins));
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
  return `<div class="skin-figure" style="--skin:${skin.colors[0]};--skin2:${skin.colors[1]};--skin3:${skin.colors[2]}"><div class="skin-head"></div><div class="skin-torso"></div><div class="skin-leg left"></div><div class="skin-leg right"></div></div>`;
}
function cardHTML(skin) {
  const owned = state.owned.includes(skin.id);
  const action = owned ? "Equipped / Owned" : skin.category === "free" ? "Unlock free" : skin.category === "coins" ? "Buy with S" : "View purchase";
  const actionClass = owned ? "owned" : skin.category === "money" ? "paid" : skin.category === "coins" ? "coin" : "";
  const price = skin.category === "free" ? "FREE" : skin.category === "coins" ? `<span style="color:#f7d98b">◉</span> ${coinFormat(skin.price)} <small>S COINS</small>` : skin.priceLabel;
  return `<article class="skin-card">
    <button class="skin-art" data-details="${skin.id}" aria-label="View ${skin.name}" style="--glow:${skin.glow};--skin:${skin.colors[0]}">
      <span class="skin-badge">${categoryName(skin.category)}</span><span class="rarity-dot" style="--rarity-color:${skin.category==='free'?'#75e0bd':skin.category==='coins'?'#c4a0ff':'#f7c873'}"></span>${figureHTML(skin)}
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
  $("coinBalance").textContent = coinFormat(state.coins);
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
    if (state.coins < skin.price) { showToast(`Not enough S Coins. You need ${coinFormat(skin.price - state.coins)} more.`); return; }
    state.coins -= skin.price; state.owned.push(id); persist(); render(); showToast(`${skin.name} purchased with S Coins!`); return;
  }
  openDetails(id, true);
}
function openDetails(id, purchaseMode=false) {
  const skin = SKINS.find(s => s.id === id);
  if (!skin) return;
  const owned = state.owned.includes(id);
  const price = skin.category === "free" ? "Free" : skin.category === "coins" ? `${coinFormat(skin.price)} S Coins` : skin.priceLabel;
  $("dialogContent").innerHTML = `<div class="dialog-skin-art" style="--glow:${skin.glow}">${figureHTML(skin)}</div>
    <div class="eyebrow">${categoryName(skin.category)} · ${skin.rarity.toUpperCase()}</div><h2>${skin.name}</h2><p>${skin.description}</p>
    <div class="dialog-price">${price}<small>Cosmetic item</small></div>
    ${skin.category === "money" && !owned ? `<button class="primary-btn full-btn" id="checkoutDemo">Continue to purchase · ${skin.priceLabel}</button><small>Demo only: payment checkout is not connected. No payment will be taken.</small>` : `<button class="primary-btn full-btn" id="dialogAction">${owned ? "Already in My Skins" : skin.category === "free" ? "Unlock free skin" : `Buy for ${coinFormat(skin.price)} S Coins`}</button>`}
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
  const rewards = {visit:100,collect:150,explore:50};
  if (state.claimed.includes(id)) { showToast("You already claimed this demo reward."); return; }
  if (id === "collect" && !state.owned.some(skinId => SKINS.find(s => s.id === skinId)?.category === "free")) { showToast("Unlock a free skin first to complete this mission."); return; }
  state.claimed.push(id); state.coins += rewards[id]; persist(); render();
  btn.textContent = "Reward claimed ✓"; btn.disabled = true;
  showToast(`You earned ${rewards[id]} demo S Coins!`);
}));
function syncMissions() {
  document.querySelectorAll("[data-mission]").forEach(btn => {
    if (state.claimed.includes(btn.dataset.mission)) { btn.textContent = "Reward claimed ✓"; btn.disabled = true; }
  });
}
render(); syncMissions();
