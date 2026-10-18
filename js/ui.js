/* Medawa · shared UI helpers: icons, cards, toast, global click handlers */
const ICONS={
search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
cart:'<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.7 12.4a1 1 0 0 0 1 .8h8.6a1 1 0 0 0 1-.8L20 7H6"/>',
heart:'<path d="M20.8 5.6a5.2 5.2 0 0 0-7.4 0L12 7l-1.4-1.4a5.2 5.2 0 0 0-7.4 7.4L12 21.6l8.8-8.6a5.2 5.2 0 0 0 0-7.4z"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
close:'<path d="M6 6l12 12M18 6 6 18"/>',
sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
truck:'<path d="M1 6h13v10H1zM14 10h4l3 3v3h-7"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
shield:'<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/><path d="m9 12 2 2 4-4"/>',
phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
upload:'<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',
chat:'<path d="M21 12a8 8 0 0 1-11.7 7L3 21l2-5.3A8 8 0 1 1 21 12z"/>',
package:'<path d="M21 8 12 3 3 8v8l9 5 9-5zM3 8l9 5 9-5M12 13v8"/>',
return:'<path d="M9 14 4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/>',
pill:'<path d="M10.5 20.5 3.5 13.5a4.9 4.9 0 0 1 7-7l7 7a4.9 4.9 0 0 1-7 7z"/><path d="m8.5 8.5 7 7"/>',
drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
smile:'<circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>',
leaf:'<path d="M11 20A7 7 0 0 1 4 13c0-6 7-10 16-10 0 9-4 16-9 16zM4 21c3-5 6-8 11-10"/>',
sparkle:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/>',
pulse:'<path d="M3 12h4l3-8 4 16 3-8h4"/>',
thermo:'<path d="M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0z"/>',
plus:'<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 8v8M8 12h8"/>',
check:'<path d="M5 12l5 5 9-10"/>',
checkc:'<circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/>',
pin:'<path d="M12 22s7-6.3 7-12a7 7 0 0 0-14 0c0 5.7 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
home:'<path d="M3 11 12 3l9 8v10h-6v-6H9v6H3z"/>',
trash:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
book:'<path d="M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4zM20 4h-6a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h7z"/>',
help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h.01"/>',
filter:'<path d="M3 5h18M6 12h12M10 19h4"/>',
star:'<path d="m12 2 3.1 6.6 7 .7-5.2 4.7 1.4 7-6.3-3.5L5.8 21l1.4-7L2 9.3l7-.7z"/>',
doc:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h6"/>'
};
const ic=(n,cls)=>`<svg class="ic${cls?' '+cls:''}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n]||''}</svg>`;
const stars=r=>`<span class="stars" role="img" aria-label="${r} out of 5">${[1,2,3,4,5].map(i=>`<svg class="ic fill${i<=Math.round(r)?'':' off'}" viewBox="0 0 24 24">${ICONS.star}</svg>`).join('')}</span>`;

const art=p=>`<div class="art" style="--h:${CAT(p.c).hue}"><span aria-hidden="true">${p.e}</span><img src="${ph(IMG[p.c][p.id%3])}" alt="${esc(p.n)}" loading="lazy" onerror="this.remove()"></div>`;
const pLink=p=>`product.html?id=${p.id}`;
const pcard=p=>`<article class="pcard"><div class="pcard-media"><div class="tag-row">${p.o?`<span class="tag">-${Math.round(100-p.p/p.o*100)}%</span>`:''}${p.rx?'<span class="tag rx">Rx</span>':''}</div>
<button class="wish${S.wish.includes(p.id)?' on':''}" data-wish="${p.id}" aria-label="Save to wishlist">${ic('heart')}</button><a href="${pLink(p)}" aria-label="${esc(p.n)}">${art(p)}</a></div>
<div class="pcard-body"><span class="pcard-cat">${esc(p.c)}</span><h3><a href="${pLink(p)}">${esc(p.n)}</a></h3>
<div class="rate">${stars(p.r)}<span>(${p.rv})</span></div>
<div class="price"><b>${K(p.p)}</b>${p.o?`<s>${K(p.o)}</s>`:''}</div>
<button class="btn btn-sm" ${p.s?'':'disabled'} data-add="${p.id}">${p.s?'Add to cart':'Out of stock'}</button></div></article>`;
const grid=l=>`<div class="products">${l.map(pcard).join('')}</div>`;
const sectionHead=(t,sub,linkText,href)=>`<div class="section-head"><div><h2>${t}</h2>${sub?`<p>${sub}</p>`:''}</div>${linkText?`<a class="link-arrow" href="${href}">${linkText} ${ic('arrow')}</a>`:''}</div>`;
const pageHead=(crumb,title,sub)=>`<section class="page-head"><div class="container"><nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><span>${crumb}</span></nav><h1>${title}</h1>${sub?`<p>${sub}</p>`:''}</div></section>`;

/* ---- toast ---- */
function toast(msg,link){
  let t=$('#toast');if(!t){t=document.createElement('div');t.id='toast';t.className='toast';t.setAttribute('role','status');document.body.appendChild(t)}
  t.innerHTML=esc(msg)+(link?` <a href="${link[1]}">${link[0]}</a>`:'');t.classList.add('show');
  clearTimeout(toast.i);toast.i=setTimeout(()=>t.classList.remove('show'),2800);
}

/* ---- state helpers ---- */
function refreshBadges(){
  const c=S.count(),w=S.wish.length;
  $$('[data-cart-count]').forEach(e=>{e.textContent=c||'';e.dataset.n=c});
  $$('[data-wish-count]').forEach(e=>{e.textContent=w||'';e.dataset.n=w});
  $$('[data-user-name]').forEach(e=>e.textContent=S.user?S.user.n.split(' ')[0]:'Sign in');
}
function addToCart(id,q){
  const p=PID(id);if(!p)return;const n=(S.cart[id]||0)+q;
  if(n>p.s){toast('Only '+p.s+' in stock');return false}
  if(n<=0)delete S.cart[id];else S.cart[id]=n;
  S.save();refreshBadges();
  if(q>0)toast('Added to cart',['View cart','cart.html']);
  if(window.onCartChange)window.onCartChange();
  return true;
}
function toggleWish(id){
  S.wish=S.wish.includes(id)?S.wish.filter(x=>x!==id):[...S.wish,id];S.save();refreshBadges();
  $$(`[data-wish="${id}"]`).forEach(b=>b.classList.toggle('on',S.wish.includes(id)));
  if(window.onWishChange)window.onWishChange();
}

/* ---- global delegated clicks & forms ---- */
document.addEventListener('click',e=>{
  const a=e.target.closest('[data-add]');if(a){addToCart(+a.dataset.add,1);return}
  const w=e.target.closest('[data-wish]');if(w){toggleWish(+w.dataset.wish);return}
  const t=e.target.closest('[data-theme-toggle]');if(t){toggleTheme();return}
});
document.addEventListener('submit',e=>{
  const f=e.target.closest('form[data-success]');if(!f)return;
  e.preventDefault();
  const done=`<div class="success">${ic('checkc')}<h3>${esc(f.dataset.success)}</h3><p class="muted">${esc(f.dataset.detail||'')}</p>${f.dataset.next?`<a class="btn btn-outline" href="${f.dataset.next}">${esc(f.dataset.nextLabel||'Continue')}</a>`:''}</div>`;
  if(f.dataset.inline!==undefined){toast(f.dataset.success);f.reset()}else f.outerHTML=done;
});
