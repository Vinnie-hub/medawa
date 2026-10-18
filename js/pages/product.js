(function(){
const id=+new URLSearchParams(location.search).get('id'),p=PID(id),app=$('#app');
if(!p){app.innerHTML=`<div class="container page"><div class="card empty"><h3>Product not found</h3><p>It may have been removed.</p><a class="btn" href="shop.html">Browse products</a></div></div>`;return}
document.title=p.n+' · Medawa';
store.set('mrv',[p.id,...store.get('mrv',[]).filter(x=>x!==p.id)].slice(0,5));
const RV=store.get('mr',{});
function reviews(){const l=RV[p.id]||[];
 return (l.length?l.map(r=>`<div class="review">${stars(r[1])}<p>${esc(r[2])}</p><b>${esc(r[0])}</b></div>`).join(''):'<p class="muted">No written reviews yet. Be the first to share your experience.</p>')}
const rel=P.filter(x=>x.c===p.c&&x.id!==p.id).concat(P.filter(x=>x.c!==p.c)).slice(0,4);
app.innerHTML=`
<div class="container page">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><a href="shop.html">Shop</a><span>/</span><a href="shop.html?cat=${encodeURIComponent(p.c)}">${esc(p.c)}</a><span>/</span><span>${esc(p.n)}</span></nav>
  <div class="pdp">
    <div class="pdp-media">${art(p)}</div>
    <div>
      <span class="pill${p.rx?' rx':''}">${p.rx?'Prescription required':esc(p.c)}</span>
      <h1>${esc(p.n)}</h1>
      <div class="rate">${stars(p.r)}<span>${p.r} · ${p.rv} ratings</span></div>
      <div class="price" style="margin:14px 0"><b>${K(p.p)}</b>${p.o?`<s>${K(p.o)}</s><span class="tag">-${Math.round(100-p.p/p.o*100)}%</span>`:''}</div>
      <p class="stock ${p.s?'in':'out'}">${ic(p.s?'checkc':'info')} ${p.s?`In stock · ${p.s} available`:'Out of stock'}</p>
      ${p.rx?`<div class="note">${ic('info')}<span><b>Prescription required.</b> Upload a valid prescription at checkout. A Medawa pharmacist will verify it before your order ships.</span></div>`:''}
      <div class="buy-row"><div class="qty"><button aria-label="Decrease" data-q="-1">−</button><span id="qv">1</span><button aria-label="Increase" data-q="1">+</button></div>
        <button class="btn" ${p.s?'':'disabled'} id="addb">Add to cart</button><button class="btn btn-outline" ${p.s?'':'disabled'} id="buyb">Buy now</button>
        <button class="btn btn-outline btn-sm wish-inline" data-wish="${p.id}" style="position:static;width:auto;border-radius:12px;padding:0 14px;min-height:46px;box-shadow:none"><span>${ic('heart')}</span> Save</button></div>
      <div class="perks"><div>${ic('truck')}<span><b>Delivery</b>Same-day in Nairobi for orders before 3pm.</span></div><div>${ic('return')}<span><b>Returns</b>7 days, unopened non-prescription items.</span></div></div>
      <details open><summary>Description</summary><p>Genuine ${esc(p.c.toLowerCase())} product sold and dispatched by Medawa. Always read the leaflet and follow your pharmacist’s advice.</p></details>
      <details><summary>Usage &amp; safety</summary><p>Keep out of reach of children. Store below 25°C. Consult a pharmacist if symptoms persist.</p></details>
    </div>
  </div>
  <section class="section" id="reviews">${sectionHead('Customer reviews')}
    <div class="two-col"><div class="card" id="rl">${reviews()}</div>
    <form class="card" id="rf"><h3>Write a review</h3><div class="field"><label class="f" for="rn">Your name</label><input id="rn" required value="${S.user?esc(S.user.n):''}"></div>
      <div class="field"><label class="f" for="rr">Rating</label><select id="rr"><option value="5">5 – Excellent</option><option value="4">4 – Good</option><option value="3">3 – Okay</option><option value="2">2 – Poor</option><option value="1">1 – Bad</option></select></div>
      <div class="field"><label class="f" for="rt">Your experience</label><textarea id="rt" required style="min-height:90px"></textarea></div><button class="btn btn-block">Post review</button></form></div></section>
  <section class="section">${sectionHead('You may also like')}${grid(rel)}</section>
</div>`;
const qv=()=>+$('#qv').textContent;
document.addEventListener('click',e=>{const b=e.target.closest('[data-q]');if(b)$('#qv').textContent=Math.max(1,qv()+ +b.dataset.q)});
$('#addb').onclick=()=>addToCart(p.id,qv());
$('#buyb').onclick=()=>{if(addToCart(p.id,qv()))location.href='checkout.html'};
$('#rf').onsubmit=e=>{e.preventDefault();(RV[p.id]=RV[p.id]||[]).unshift([$('#rn').value,+$('#rr').value,$('#rt').value]);store.set('mr',RV);$('#rl').innerHTML=reviews();e.target.reset();toast('Review posted')};
})();
