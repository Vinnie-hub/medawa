(function(){
const app=$('#app'),t=S.subtotal();
if(!t){app.innerHTML=`<div class="container page"><div class="card empty form-card"><h2>Your cart is empty</h2><p>Add products before checking out.</p><a class="btn" href="shop.html">Browse products</a></div></div>`;return}
const d=t*S.promo,sh=S.shipping(t),total=t-d+sh,rx=S.hasRx();
const items=Object.keys(S.cart).map(i=>PID(i));
app.innerHTML=`<div class="container page"><h1>Checkout</h1><div class="two-col" style="margin-top:18px">
<form class="card" id="cf">
 <div class="checkout-block"><h3>1. Delivery details</h3>
  <div class="row2"><div class="field"><label class="f" for="n">Full name</label><input id="n" required autocomplete="name" value="${S.user?esc(S.user.n):''}"></div>
  <div class="field"><label class="f" for="ph">Phone</label><input id="ph" type="tel" required placeholder="07xx xxx xxx" autocomplete="tel"></div></div>
  <div class="row2"><div class="field"><label class="f" for="co">County</label><select id="co"><option>Nairobi</option><option>Kisumu</option><option>Mombasa</option><option>Nakuru</option><option>Uasin Gishu</option></select></div>
  <div class="field"><label class="f" for="ar">Area / street</label><input id="ar" required autocomplete="street-address"></div></div></div>
 ${rx?`<div class="checkout-block"><h3>2. Prescription</h3><div class="note">${ic('info')}<span>Your order includes prescription items. Upload a clear photo or PDF of your prescription. A Medawa pharmacist will verify it and may call you before dispatch.</span></div><input type="file" id="rxf" accept="image/*,.pdf" required aria-label="Prescription file"></div>`:''}
 <div class="checkout-block"><h3>${rx?'3':'2'}. Payment method</h3>
  <div class="pay-opts"><label><input type="radio" name="m" value="M-Pesa" checked><span>M-Pesa<small>Pay with your phone</small></span></label>
  <label><input type="radio" name="m" value="Card"><span>Card<small>Visa or Mastercard</small></span></label>
  <label><input type="radio" name="m" value="Cash on delivery"><span>Cash on delivery<small>Pay when your order arrives</small></span></label></div></div>
 <button class="btn btn-block" style="margin-top:22px">Place order · ${K(total)}</button></form>
<aside class="card summary"><h3>Your order</h3>${items.map(p=>`<div class="ln"><span>${esc(p.n)} × ${S.cart[p.id]}</span><span>${K(p.p*S.cart[p.id])}</span></div>`).join('')}
 <div class="ln" style="border-top:1px solid var(--border);margin-top:8px"><span>Subtotal</span><span>${K(t)}</span></div>
 ${d?`<div class="ln"><span>Promo (10%)</span><span>−${K(d)}</span></div>`:''}<div class="ln"><span>Delivery</span><span>${sh?K(sh):'Free'}</span></div>
 <div class="ln total"><span>Total</span><span>${K(total)}</span></div><a class="link-arrow" href="cart.html">Edit cart</a></aside></div></div>`;
$('#cf').onsubmit=e=>{e.preventDefault();
 const id='MD'+Math.floor(1000+Math.random()*9000);
 items.forEach(p=>p.s=Math.max(0,p.s-S.cart[p.id]));
 S.orders.unshift({id,t:Date.now(),total,n:S.count(),rx,pay:document.querySelector('[name=m]:checked').value,to:$('#ar').value+', '+$('#co').value,lines:items.map(p=>[p.n,S.cart[p.id]])});
 S.cart={};S.promo=0;S.save();location.href='orders.html?id='+id};
})();
