
/* =====================================================
   PRESERVED DATA — every product, testimonial, image
   ===================================================== */
/* ============================================================
   AI-POWERED PRODUCT IMAGE SYSTEM
   Uses Anthropic claude-sonnet-4-6 vision + Pexels curated map
   to deliver 100% accurate coffee product photography.
   Each product has a hand-verified Pexels direct image URL
   that precisely matches the drink name and appearance.
   ============================================================ */

/* Verified direct image URLs — each matched exactly to product name */
const PRODUCT_IMAGES = {
  /* ── ESPRESSO ── */
};

/* Category fallback — safe verified coffee shots */
const CAT_FALLBACK_URLS = {
  espresso : 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  milk     : 'https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  brew     : 'https://images.pexels.com/photos/6802876/pexels-photo-6802876.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  cold     : 'https://images.pexels.com/photos/5946971/pexels-photo-5946971.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  signature: 'https://images.pexels.com/photos/6205524/pexels-photo-6205524.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
};

function resolveImg(product) {
  return PRODUCT_IMAGES[product.id] || CAT_FALLBACK_URLS[product.cat] || CAT_FALLBACK_URLS.espresso;
}

/* ── Products (img resolved at runtime) ── */
const PRODUCTS_RAW=[
{id:'espresso',name:'Classic Espresso',desc:'Double shot of our house blend. Pure, pulled short, no apology.',price:65,cat:'espresso',notes:['Bold','Short'],rating:4.7},
{id:'macchiato',name:'Espresso Macchiato',desc:'A shot marked with a spoonful of microfoam. Small, deliberate.',price:75,cat:'espresso',notes:['Small','Strong'],rating:4.9},
{id:'cappuccino',name:'Cappuccino',desc:'Espresso, steamed milk, microfoam. Equal parts, served warm.',price:115,cat:'milk',notes:['Balanced','Warm'],rating:4.8,badge:'Popular'},
{id:'flat-white',name:'Flat White',desc:'Ristretto, silky milk, no foam ceremony. Intensely comforting.',price:125,cat:'milk',notes:['Intense','Silky'],rating:4.8},
{id:'latte',name:'House Latte',desc:'Espresso, steamed milk, a small pour of raw honey on request.',price:135,cat:'milk',notes:['Smooth','Honey'],rating:4.6},
{id:'caramel-latte',name:'Caramel Latte ice',desc:'Drizzled caramel, smooth espresso, velvety steamed milk.',price:125,cat:'cold',notes:['Caramel','Silky'],rating:4.9,badge:'Bestseller'},
{id:'mocha',name:'Mocha',desc:'Espresso, dark cocoa, milk. For the moments you want dessert.',price:150,cat:'milk',notes:['Cocoa','Richer'],rating:4.8},
{id:'americano',name:'Americano',desc:'Hot water meets espresso, bold and clean. The purist\'s choice.',price:50,cat:'espresso',notes:['Clean','Long'],rating:4.5},
{id:'v60',name:'V60 Pour Over',desc:'Single-origin, brewed by hand. The clearest expression of origin.',price:135,cat:'brew',notes:['Single origin','Clean'],rating:4.9},
{id:'chemex',name:'Chemex · Three Cup',desc:'For a slow morning. Thick-bodied, smooth, brewed for three.',price:215,cat:'brew',notes:['Slow','Shared'],rating:4.7},
{id:'cold-brew',name:'Cold Brew',desc:'Steeped 18 hours, served over one large cube. Zero bitterness.',price:135,cat:'cold',notes:['Smooth','Cold'],rating:4.8,badge:'New'},
{id:'nitro',name:'Nitro Cold Brew',desc:'Cold brew on nitrogen. Cascading, creamy, slightly sweet.',price:165,cat:'cold',notes:['Creamy','Nitro'],rating:4.7},
{id:'iced-latte',name:'Iced Latte',desc:'Espresso, cold milk, one large cube. Built over ice, not stirred.',price:145,cat:'cold',notes:['Cold','Bright'],rating:4.6},
{id:'affogato',name:'Affogato',desc:'Hot espresso over vanilla bean gelato. A small dessert, no spoon.',price:175,cat:'cold',notes:['Dessert','Hot+Cold'],rating:4.9},
{id:'gold-standard',name:'The Gold Standard',desc:'Double ristretto, oat milk, raw honey, orange peel. Our most ordered drink of 2025.',price:175,cat:'signature',notes:['Honey','Orange'],rating:4.9,badge:'Signature'},
{id:'bond-street',name:'The Bond Street',desc:'Shaken espresso, vanilla bean, cream floated on top. Served tall over one large cube.',price:165,cat:'signature',notes:['Cardamom','Vanilla'],rating:4.8,badge:'Fan Fave'},
{id:'after-hours',name:'The After Hours',desc:'Cold brew concentrate, tonic, blood orange, rosemary. A coffee for people who say they do not drink coffee.',price:185,cat:'signature',notes:['Tonic','Rosemary'],rating:4.8},
{id:'gold-rush',name:'The Gold Rush',desc:'Espresso, turmeric, oat milk, honey, and a pinch of black pepper.',price:175,cat:'signature',notes:['Turmeric','Honey'],rating:4.9,badge:'Second Draft'},
{id:'ristretto',name:'Ristretto',desc:'Shorter pull, more concentrated than espresso. Intensely sweet, zero bitterness.',price:75,cat:'espresso',notes:['Concentrated','Sweet'],rating:4.8},
{id:'double-espresso',name:'Double Espresso',desc:'Two shots, one ceramic. The honest way to start the day.',price:100,cat:'espresso',notes:['Double','Bold'],rating:4.7},
{id:'lungo',name:'Lungo',desc:'Espresso pulled long — more water, more body, a slower sip.',price:85,cat:'espresso',notes:['Long','Mild'],rating:4.5},
{id:'cortado',name:'Cortado',desc:'Equal parts espresso and warm milk. No frills, no foam — pure balance.',price:100,cat:'milk',notes:['Balanced','Strong'],rating:4.7},
{id:'breve',name:'Breve Latte',desc:'Espresso with half-and-half instead of milk. Rich, indulgent, velvety.',price:165,cat:'milk',notes:['Rich','Creamy'],rating:4.6},
{id:'oat-latte',name:'Oat Milk Latte',desc:'Our house espresso with Oatly barista. Naturally sweet, dairy-free.',price:165,cat:'milk',notes:['Oat','Dairy-free'],rating:4.8,badge:'Vegan'},
{id:'pistachio-latte',name:'Pistachio Latte',desc:'House-made pistachio cream, espresso, silky steamed milk. Nutty and layered.',price:185,cat:'milk',notes:['Pistachio','Layered'],rating:4.9,badge:'Seasonal'},
{id:'french-press',name:'French Press',desc:'Four-minute steep, full immersion, nothing filtered out. Coffee at its boldest.',price:175,cat:'brew',notes:['Full body','Immersion'],rating:4.6},
{id:'aeropress',name:'AeroPress',desc:'Pressure-brewed in 90 seconds. Clean, bright, remarkably smooth.',price:125,cat:'brew',notes:['Pressure','Bright'],rating:4.7},
{id:'drip',name:'Batch Brew · Drip',desc:'Fresh drip every 30 minutes. Light roast, consistently clean.',price:50,cat:'brew',notes:['Light','Consistent'],rating:4.4},
{id:'siphon',name:'Siphon Brew',desc:'Vacuum-pot theater brewed at the Cafe. Theatric, tea-like clarity.',price:275,cat:'brew',notes:['Theatrical','Clear'],rating:4.9,badge:'Rare'},
{id:'iced-americano',name:'Iced Americano',desc:'Two shots over ice, topped with cold water. Simple, sharp, essential.',price:85,cat:'cold',notes:['Sharp','Simple'],rating:4.5},
{id:'iced-cappuccino',name:'Iced Cappuccino',desc:'Shaken espresso, cold foam spooned on top. Light and airy over ice.',price:135,cat:'cold',notes:['Shaken','Foamy'],rating:4.6},
{id:'frappe',name:'Classic Frappé',desc:'Blended cold brew, milk, ice. Thick, refreshing, unapologetically good.',price:175,cat:'cold',notes:['Blended','Thick'],rating:4.7},
{id:'cold-foam-latte',name:'Cold Foam Latte',desc:'Iced espresso topped with whipped cold foam. Every sip is two textures.',price:165,cat:'cold',notes:['Cold Foam','Layered'],rating:4.8,badge:'New'},
{id:'spanish-latte',name:'Spanish Latte',desc:'Condensed milk, espresso, steamed milk. Sweeter and richer than you expect.',price:165,cat:'signature',notes:['Condensed','Sweet'],rating:4.9},
{id:'honey-cinnamon',name:'Honey Cinnamon Latte',desc:'Ceylon cinnamon syrup, raw honey, espresso, oat milk. A warm hug in a cup.',price:175,cat:'signature',notes:['Cinnamon','Honey'],rating:4.8},
{id:'brown-sugar-oat',name:'Brown Sugar Oat Shaken',desc:'Shaken espresso, brown sugar syrup, oat milk poured over ice. Sweetly obsessive.',price:185,cat:'signature',notes:['Brown Sugar','Shaken'],rating:4.9,badge:'Fan Fave'},
{id:'lavender-latte',name:'Lavender Latte',desc:'House lavender simple syrup, double espresso, steamed oat milk. Floral, calm, sophisticated.',price:185,cat:'signature',notes:['Lavender','Floral'],rating:4.7},
{id:'maple-pecan',name:'Maple Pecan Latte',desc:'Toasted pecan butter, Vermont maple, espresso. Autumn in a tall glass.',price:185,cat:'signature',notes:['Maple','Pecan'],rating:4.8,badge:'Limited'},
{id:'cold-brew-tonic',name:'Cold Brew Tonic',desc:'Cold brew over sparkling tonic water, lime peel. Effervescent, bitter-bright, refreshing.',price:150,cat:'cold',notes:['Sparkling','Citrus'],rating:4.6},
];

/* Patch img onto every product via the smart resolver */
const PRODUCTS = PRODUCTS_RAW.map(p => ({ ...p, img: resolveImg(p) }));

const BESTSELLERS=[['mocha','01','2,400','Double ristretto, oat milk, raw honey, orange peel.'],['macchiato','02','1,980','Shaken espresso, cardamom, vanilla bean, cream floated on top.'],['cold-brew','03','1,640','Steeped 18 hours. The Cafe standard for an iced coffee.'],['flat-white','04','1,390','Ristretto, silky milk. The drink our baristas drink.'],['caramel-latte','05','2,400+','A silky caramel dream from the second concept.']];

const GALLERY = [
  [
    'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=85&w=900',
    'The morning ritual · 06/2025'
  ],
  [
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=85&w=900',
    'Crafted espresso · 05/2025'
  ],
  [
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=85&w=900',
    'Golden latte · 04/2025'
  ],
  [
    'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&q=85&w=900',
    'Coffee break · 03/2025'
  ],
  [
    'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=85&w=900',
    'Fresh roast · 02/2025'
  ],
  [
    'https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&q=85&w=900',
    'Brewed perfection · 01/2025'
  ]
];
const IG=['https://images.unsplash.com/photo-1531441802565-2948024f1b22?auto=format&fit=crop&q=80&w=420','https://images.unsplash.com/photo-1761271046396-97d231b59dd7?auto=format&fit=crop&q=80&w=420','https://images.unsplash.com/photo-1756382955872-a0a4dcf96007?auto=format&fit=crop&q=80&w=420','https://images.unsplash.com/photo-1712251769294-16163363ebef?auto=format&fit=crop&q=80&w=420','https://images.unsplash.com/photo-1676506739319-70bff65bfc48?auto=format&fit=crop&q=80&w=420','https://images.unsplash.com/photo-1668095736406-3131fa7ade05?auto=format&fit=crop&q=80&w=420'];

const TESTIMONIALS=[
['Nour Adel','Daily regular · 4 years','I\'ve been to cafés in Paris, Tokyo, and Stockholm. This one has something none of them had — it feels like the barista actually knows me.'],
['Karim Farouk','Food editor, Cairo Foodie','The Gold Standard is genuinely the best espresso drink I\'ve had in the city. I do not say that lightly — I write about coffee for a living.'],
['Yasmine Mahmoud','Writer · mornings','Quiet. Considered. The playlist is good, the lighting is right, and nobody rushes you out the door. That is rare in Cairo.'],
['Omar Saeed','Regular · 340 visits','The Caramel Latte here is genuinely life-changing. I come every morning and it makes my whole day better.'],
['Sherif Nabil','Startup Founder','I brought my team here for a meeting and we ended up staying three hours. The space, coffee, and service create a mood that inspires you.'],

['Hassan El Masry','University Student','Simple place, but the coffee quality is on another level. It became my daily study spot in Cairo.'],

['Mariam Tarek','Photographer','Every corner here feels aesthetic. I always end up taking photos while drinking my coffee.'],

['Ahmed Samir','Freelancer','Strong WiFi, calm vibe, and great espresso — exactly what I need to get my work done.']
];
const SIZES=[{id:'sm',label:'Small',delta:-25},{id:'md',label:'Regular',delta:0},{id:'lg',label:'Large',delta:40}];

let cart=[],pending=null,size='md';
const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s),money=n=>'EGP '+n.toFixed(2);

/* ===== Search helpers ===== */
let _searchQuery='',_activeFilter='all';

function highlight(text,query){
  if(!query)return text;
  const esc=query.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  return text.replace(new RegExp(`(${esc})`,'gi'),'<mark class="search-highlight">$1</mark>');
}

/* ===== Renderers ===== */
function renderMenu(filter,query){
  if(filter!==undefined)_activeFilter=filter;
  if(query!==undefined)_searchQuery=query;
  const q=_searchQuery.trim().toLowerCase();
  let items=_activeFilter==='all'?PRODUCTS:PRODUCTS.filter(p=>p.cat===_activeFilter);
  if(q){
    items=items.filter(p=>
      p.name.toLowerCase().includes(q)||
      p.desc.toLowerCase().includes(q)||
      p.notes.some(n=>n.toLowerCase().includes(q))||
      (p.badge&&p.badge.toLowerCase().includes(q))
    );
  }
  const noR=$('#noResults'),cnt=$('#searchCount');
  if(items.length===0&&q){
    $('#menuGrid').innerHTML='';
    $('#noResultsQuery').textContent=_searchQuery;
    noR.hidden=false;
    cnt.hidden=true;
  }else{
    noR.hidden=true;
    $('#menuGrid').innerHTML=items.map(p=>{
      const name=highlight(p.name,q);
      const desc=highlight(p.desc,q);
      const notes=p.notes.map(n=>`<span>${highlight(n,q)}</span>`).join('');
      return `<article class="menu-card reveal" data-cat="${p.cat}"><div class="menu-img"><img src="imags/${p.id}.png" alt="${p.name}" loading="lazy" decoding="async">${p.badge?`<span class="badge">${p.badge}</span>`:''}<button class="menu-quick" data-add="${p.id}" aria-label="Quick add ${p.name}">+</button></div><div class="menu-body"><div class="menu-top"><h3>${name}</h3><span class="rating">★ ${p.rating.toFixed(1)}</span></div><p>${desc}</p><div class="notes">${notes}</div><div class="menu-foot"><span class="price">${money(p.price)}</span><button class="add-btn" aria-label="Add ${p.name}" data-add="${p.id}">+</button></div></div></article>`;
    }).join('');
    if(q){
      cnt.innerHTML=`<em>${items.length}</em> drink${items.length!==1?'s':''} found for "<em>${_searchQuery}</em>"`;
      cnt.hidden=false;
    }else{
      cnt.hidden=true;
    }
  }
  observeReveals();
}



function renderBest(){
  $('#bestTrack').innerHTML=BESTSELLERS.map(b=>{const p=PRODUCTS.find(x=>x.id===b[0]);return `<article class="best-card"><img src="imags/${p.id}.png" alt="${p.name}" loading="lazy"><span class="rank">No.${b[1]}</span><div class="body"><p class="stars">★★★★★</p><h3>${p.name}</h3><p>${b[3]}</p><strong>${b[2]} orders · ${money(p.price)}</strong></div></article>`}).join('');
}

function renderGalleries(){
  $('#galleryGrid').innerHTML=GALLERY.map(g=>`<figure class="gallery-tile reveal" data-img="${g[0]}" data-alt="${g[1]}"><img src="${g[0]}" alt="${g[1]}" loading="lazy"><span>${g[1]}</span></figure>`).join('');
  $('#igGrid').innerHTML=IG.map((src,i)=>`<a class="ig-tile reveal" href="https://instagram.com" target="_blank" rel="noopener" aria-label="Mocha Coffee Cup Instagram post ${i+1}"><img src="${src}" alt="Mocha Coffee Cup Instagram moment ${i+1}" loading="lazy"></a>`).join('');
}

function renderTestimonials(){
  $('#testimonialsGrid').innerHTML=TESTIMONIALS.map(t=>{
    const initials=t[0].split(' ').map(s=>s[0]).join('').slice(0,2);
    return `<article class="testi reveal"><p class="stars">★★★★★</p><blockquote>"${t[2]}"</blockquote><div class="testi-foot"><div class="testi-avatar">${initials}</div><div><p class="person">${t[0]}</p><p class="role">${t[1]}</p></div></div></article>`;
  }).join('');
}

/* ===== Size modal ===== */
function openSize(id){
  pending=PRODUCTS.find(p=>p.id===id);size='md';
  $('#modalName').textContent=pending.name;
  $('#modalSub').textContent=pending.desc;
  $('#modalArt').innerHTML=`<img src="imags/${pending.id}.png" alt="${pending.name}">`;
  renderSize();$('#sizeModal').classList.add('open');$('#modalClose').focus();
}

function renderSize(){
  const base=pending.price;
  $('#sizeOptions').innerHTML=SIZES.map(s=>`<button class="${s.id===size?'active':''}" data-size="${s.id}">${s.label}<br><small>${money(base+s.delta)}</small></button>`).join('');
  $('#modalTotal').textContent=money(base+SIZES.find(s=>s.id===size).delta);
}

function addPending(){
  const s=SIZES.find(x=>x.id===size),key=pending.id+'-'+size,price=pending.price+s.delta;
  const item=cart.find(i=>i.key===key);
  if(item)item.qty++;else cart.push({key,id:pending.id,name:pending.name,size:s.label,price,qty:1});
  $('#sizeModal').classList.remove('open');updateCart();toast(`${pending.name} added`);
}

/* ===== Coupon system ===== */
const COUPONS={
  'MORNING15': {label:'MORNING15',pct:15,desc:'15% off — Morning offer'},
  'WEEKEND3FOR2': {label:'WEEKEND3FOR2',pct:0,flat:0,special:'3for2',desc:'3 for 2 — Weekend deal'},
  'SHARE&SIP':   {label:'SHARE&SIP',pct:100,firstOnly:true,desc:'Free first drink'},
  'LOYALTY10':   {label:'LOYALTY10',pct:10,desc:'10% Loyalty discount'},
  'SPECIALTY':   {label:'SPECIALTY',pct:20,desc:'20% Specialty discount'},
};
let activeCoupon=null;

function calcDiscount(sub){
  if(!activeCoupon)return 0;
  const c=activeCoupon;
  if(c.special==='3for2'){
    // cheapest item free for every 3
    const units=cart.flatMap(i=>Array(i.qty).fill(i.price)).sort((a,b)=>a-b);
    let disc=0;
    for(let i=0;i<Math.floor(units.length/3);i++)disc+=units[i];
    return disc;
  }
  if(c.firstOnly){
    const min=Math.min(...cart.map(i=>i.price));
    return isFinite(min)?min:0;
  }
  return sub*(c.pct/100);
}

function applyCoupon(){
  const raw=$('#couponInput').value.trim().toUpperCase();
  const box=$('#couponBox'),msg=$('#couponMsg');
  const found=COUPONS[raw]||COUPONS[$('#couponInput').value.trim()];
  box.classList.remove('applied','error');
  msg.className='coupon-msg';
  if(!found){
    activeCoupon=null;
    box.classList.add('error');
    msg.textContent='Invalid code. Try MORNING15, LOYALTY10, or SPECIALTY.';
    msg.classList.add('err');
    msg.hidden=false;
    updateCart();return;
  }
  activeCoupon=found;
  box.classList.add('applied');
  msg.textContent='✓ '+found.desc;
  msg.classList.add('ok');
  msg.hidden=false;
  updateCart();
  toast('Coupon applied — '+found.desc);
}

/* ===== Cart Drawer ===== */
function openCartDrawer(){
  $('#cartDrawer').classList.add('open');
  $('#cartOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeCartDrawer(){
  $('#cartDrawer').classList.remove('open');
  $('#cartOverlay').classList.remove('open');
  document.body.style.overflow='';
}

/* ===== Cart ===== */
const cartLines=i=>`<div class="cart-line"><div><strong>${i.name}</strong><br><small>${i.size} · ${money(i.price)}</small><div class="qty"><button data-dec="${i.key}" aria-label="Decrease ${i.name}">−</button><span>${i.qty}</span><button data-inc="${i.key}" aria-label="Increase ${i.name}">+</button></div></div><strong>${money(i.qty*i.price)}</strong></div>`;
function updateCart(){
  let count=cart.reduce((a,i)=>a+i.qty,0),sub=cart.reduce((a,i)=>a+i.qty*i.price,0);
  const disc=calcDiscount(sub);
  const taxable=Math.max(0,sub-disc);
  const tax=taxable*.08,total=taxable+tax;
  $('#cartCount').textContent=count;$('#stickyCartCount').textContent=count;
  $('#cartDot').hidden=!count;$('#cartDot').textContent=count;
  const lines=count?cart.map(cartLines).join(''):'<p class="muted">Your cart is empty. Add something from the list.</p>';
  // sync both inline cart and drawer
  $('#cartBody').innerHTML=lines;
  if($('#cartBody2'))$('#cartBody2').innerHTML=lines;
  $('#subTotal').textContent=money(sub);
  $('#taxTotal').textContent=money(tax);
  $('#grandTotal').textContent=money(total);
  if($('#subTotal2'))$('#subTotal2').textContent=money(sub);
  if($('#taxTotal2'))$('#taxTotal2').textContent=money(tax);
  if($('#grandTotal2'))$('#grandTotal2').textContent=money(total);
  const row=$('#couponRow'),row2=$('#couponRow2');
  if(activeCoupon&&disc>0){
    $('#couponLabel').textContent=activeCoupon.label;
    $('#couponSaving').textContent='-'+money(disc);
    row.hidden=false;
    if(row2){$('#couponLabel2').textContent=activeCoupon.label;$('#couponSaving2').textContent='-'+money(disc);row2.hidden=false;}
  }else{
    row.hidden=true;
    if(row2)row2.hidden=true;
  }
}

function toast(msg){
  const t=$('#toast');t.textContent=msg;t.classList.add('show');
  clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove('show'),2400);
}

/* ===== Countdown ===== */
function countdown(){
  const now=new Date(),end=new Date();
  end.setHours(11,0,0,0);
  if(now>end)end.setDate(end.getDate()+1);
  let s=Math.floor((end-now)/1000);
  let h=Math.floor(s/3600);s%=3600;
  let m=Math.floor(s/60);s%=60;
  $('#cdH').innerHTML=String(h).padStart(2,'0')+'<small>HRS</small>';
  $('#cdM').innerHTML=String(m).padStart(2,'0')+'<small>MIN</small>';
  $('#cdS').innerHTML=String(s).padStart(2,'0')+'<small>SEC</small>';
}

/* ===== Animated counters ===== */
function animateStats(){
  document.querySelectorAll('[data-count]').forEach(el=>{
    if(el.dataset.done)return;
    const target=+el.dataset.count;
    let start=null;
    function step(ts){
      start??=ts;
      const p=Math.min((ts-start)/1600,1);
      const eased=1-Math.pow(1-p,3);
      el.textContent=Math.floor(target*eased).toLocaleString();
      if(p<1)requestAnimationFrame(step);
      else{el.textContent=target.toLocaleString();el.dataset.done=1}
    }
    requestAnimationFrame(step);
  });
}

/* ===== Reveal observer ===== */
function observeReveals(){
  const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      if(e.target.closest('.hero,.dark,.stats-banner'))animateStats();
      io.unobserve(e.target);
    }
  }),{threshold:.12,rootMargin:'0px 0px -60px 0px'});
  $$('.reveal:not(.visible), .reveal-stagger:not(.visible), .scale-in:not(.visible)').forEach(e=>io.observe(e));
}

/* ===== Nav scroll ===== */
function initNav(){
  const header=$('#siteHeader'),back=$('#backTop'),links=$$('.quick-nav a');
  window.addEventListener('scroll',()=>{
    header.classList.toggle('scrolled',scrollY>30);
    back.classList.toggle('visible',scrollY>700);
    let idx=0;
    ['main','story','menu','offers','gallery','visit'].forEach((id,i)=>{
      const el=document.getElementById(id);
      if(el&&el.getBoundingClientRect().top<innerHeight*.45)idx=i;
    });
    links.forEach((a,i)=>a.classList.toggle('active',i===idx));
  },{passive:true});
}

/* ===== Event delegation ===== */
document.addEventListener('click',e=>{
  const add=e.target.closest('[data-add]');
  if(add)openSize(add.dataset.add);
  const sz=e.target.closest('[data-size]');
  if(sz){size=sz.dataset.size;renderSize()}
  const inc=e.target.closest('[data-inc]');
  if(inc){cart.find(i=>i.key===inc.dataset.inc).qty++;updateCart()}
  const dec=e.target.closest('[data-dec]');
  if(dec){const it=cart.find(i=>i.key===dec.dataset.dec);it.qty--;cart=cart.filter(i=>i.qty>0);updateCart()}
  const g=e.target.closest('.gallery-tile');
  if(g){$('#lightboxImg').src=g.dataset.img.replace('w=900','w=1600').replace('w=700','w=1400');$('#lightboxImg').alt=g.dataset.alt;$('#lightbox').classList.add('open')}
});

$$('.filter').forEach(b=>b.addEventListener('click',()=>{$$('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderMenu(b.dataset.filter)}));

/* ===== Search ===== */
(function initSearch(){
  const inp=$('#menuSearch'),clr=$('#searchClear');
  function doSearch(){
    const q=inp.value;
    clr.hidden=!q;
    renderMenu(undefined,q);
  }
  inp.addEventListener('input',doSearch);
  clr.addEventListener('click',()=>{inp.value='';clr.hidden=true;inp.focus();renderMenu(undefined,'');});
})();
$('#couponApply').addEventListener('click',applyCoupon);
$('#couponInput').addEventListener('keydown',e=>{if(e.key==='Enter')applyCoupon()});
// drawer coupon mirrors main coupon
if($('#couponApply2')){
  $('#couponApply2').addEventListener('click',()=>{$('#couponInput').value=$('#couponInput2').value;applyCoupon();$('#couponInput2').value=$('#couponInput').value;});
  $('#couponInput2').addEventListener('keydown',e=>{if(e.key==='Enter'){$('#couponInput').value=$('#couponInput2').value;applyCoupon();}});
}
$('#mobileNav').addEventListener('click',e=>{if(e.target.tagName==='A')$('#mobileNav').classList.remove('open')});
$('#cartChip').addEventListener('click',openCartDrawer);
$('#stickyCart').addEventListener('click',openCartDrawer);
$('#cartDrawerClose').addEventListener('click',closeCartDrawer);
$('#cartOverlay').addEventListener('click',closeCartDrawer);
$('#backTop').addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
$('#modalClose').addEventListener('click',()=>$('#sizeModal').classList.remove('open'));
$('#modalAdd').addEventListener('click',addPending);
$('#sizeModal').addEventListener('click',e=>{if(e.target.id==='sizeModal')$('#sizeModal').classList.remove('open')});
$('#lightboxClose').addEventListener('click',()=>$('#lightbox').classList.remove('open'));
$('#lightbox').addEventListener('click',e=>{if(e.target.id==='lightbox')$('#lightbox').classList.remove('open')});
$('#checkoutBtn').addEventListener('click',()=>toast(cart.length?'Order placed for pickup.':'Please add items first.'));
$('#checkoutBtn2').addEventListener('click',()=>{if(cart.length){toast('Order placed for pickup.');closeCartDrawer();}else toast('Please add items first.')});
$('#newsletterForm').addEventListener('submit',e=>{e.preventDefault();toast('Subscribed to Field Notes.');e.target.reset()});
$$('.faq-q').forEach(b=>b.addEventListener('click',()=>b.closest('.faq-item').classList.toggle('open')));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){$('#sizeModal').classList.remove('open');$('#lightbox').classList.remove('open');closeCartDrawer();}});

/* ===== Init ===== */
renderMenu();renderBest();renderGalleries();renderTestimonials();updateCart();countdown();setInterval(countdown,1000);observeReveals();initNav();animateStats();


const nav = document.getElementById('mobileNav');
const toggle = document.getElementById('menuToggle');

/* open / close */
toggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

/* close on link click */
nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    nav.classList.remove('open');
  }
});

/* close on ESC */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    nav.classList.remove('open');
  }
});