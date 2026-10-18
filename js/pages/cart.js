(function(){
const app=$('#app');
function summary(){const t=S.subtotal(),d=t*S.promo,sh=S.shipping(t);
 return `<aside class="card summary"><h3>Order summary</h3>
 <div class="ln"><span>Subtotal</span><span>${K(t)}</span></div>
 ${d?`<div class="ln"><span>Promo (10%)</span><span>−${K(d)}</span></div>`:''}
 <div class="ln"><span>Delivery</span><span>${sh?K(sh):'Free'}</span></div>
 ${t&&t<2500?`<p class="muted" style="font-size:.84rem;margin:2px 0 0">Add ${K(2500-t)} more for free delivery.</p>`:''}
 <div class="ln total"><span>Total</span><span>${K(t-d+sh)}</span></div>
 <form class="promo-form" id="pf"><label class="sr-only" for="pc">Promo code</label><input id="pc" placeholder="Promo code (MEDAWA10)"><button class="btn btn-outline btn-sm">Apply</button></form>
 <a class="btn btn-block" href="checkout.html">Proceed to checkout</a>
 ${S.hasRx()?`<div class="note">${ic('info')}<span>Your cart has prescription items. You’ll upload your prescription at checkout.</span></div>`:''}</aside>`}
function render(){
 const ks=Object.keys(S.cart);
 if(!ks.length){app.innerHTML=`<div class="container page"><div class="card empty form-card"><h2>Your cart is empty</h2><p>Find something you need in our shop.</p><a class="btn" href="shop.html">Start shopping</a></div></div>`;return}
 app.innerHTML=`<div class="container page"><h1>Your cart</h1><div class="two-col" style="margin-top:18px"><div class="card">${ks.map(i=>{const p=PID(i);return `<div class="cart-item">${art(p)}<div><h4><a href="${pLink(p)}" style="color:var(--text)">${esc(p.n)}</a></h4><small>${esc(p.c)}${p.rx?' · Prescription required':''} · ${K(p.p)} each</small></div>
 <div class="line-end"><b>${K(p.p*S.cart[i])}</b><div style="display:flex;gap:14px;align-items:center"><div class="qty"><button aria-label="Decrease" data-qty="${i}:-1">−</button><span>${S.cart[i]}</span><button aria-label="Increase" data-qty="${i}:1">+</button></div><button class="link-btn" data-rm="${i}">${ic('trash')}Remove</button></div></div></div>`}).join('')}</div>${summary()}</div></div>`;
 $('#pf').onsubmit=e=>{e.preventDefault();S.promo=$('#pc').value.trim().toUpperCase()==='MEDAWA10'?.1:0;S.save();toast(S.promo?'Promo applied':'Invalid promo code');render()};
}
document.addEventListener('click',e=>{
 const q=e.target.closest('[data-qty]');if(q){const[i,d]=q.dataset.qty.split(':');addToCart(+i,+d);return}
 const r=e.target.closest('[data-rm]');if(r){delete S.cart[r.dataset.rm];S.save();refreshBadges();render()}
});
window.onCartChange=render;render();
})();
