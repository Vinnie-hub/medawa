(function(){
const app=$('#app'),id=(new URLSearchParams(location.search).get('id')||'').toUpperCase();
function trk(o){const s=Math.min(3,Math.floor((Date.now()-o.t)/20000)),steps=['Order placed',o.rx?'Pharmacist check':'Processing','Out for delivery','Delivered'];
 return `<article class="card" style="margin-bottom:18px"><div class="order-head"><div><h3 style="margin:0">Order ${esc(o.id)}</h3><span class="muted" style="font-size:.88rem">${new Date(o.t).toLocaleString('en-KE',{dateStyle:'medium',timeStyle:'short'})} · ${esc(o.pay||'')}</span></div><b>${K(o.total)}</b></div>
 <div class="tracker" aria-label="Order progress">${steps.map((x,i)=>`<div class="${i<=s?'on':''}">${x}</div>`).join('')}</div>
 ${o.lines?`<p class="muted" style="margin:22px 0 0;font-size:.9rem">${o.lines.map(l=>esc(l[0])+' × '+l[1]).join(' · ')}</p>`:''}
 ${o.to?`<p class="muted" style="margin:6px 0 0;font-size:.9rem">Delivering to ${esc(o.to)}</p>`:''}</article>`}
const o=S.orders.find(x=>x.id===id);
app.innerHTML=`<div class="container page" style="max-width:860px">
 ${id&&o&&new URLSearchParams(location.search).get('id')?`<div class="note ok">${ic('checkc')}<span><b>Thank you.</b> Your order ${esc(o.id)} has been received${o.rx?'. A Medawa pharmacist will now check your prescription.':'.'}</span></div>`:''}
 <h1>Track your order</h1>
 <form class="card" id="tf" style="margin:18px 0;display:flex;gap:10px;flex-wrap:wrap"><label class="sr-only" for="oi">Order number</label><input id="oi" placeholder="Order number, e.g. MD1234" value="${esc(id)}" style="flex:1;min-width:200px"><button class="btn">Track</button></form>
 ${id?(o?trk(o):'<div class="card empty"><h3>No order found</h3><p>Check the order number and try again.</p></div>'):(S.orders.length?S.orders.map(trk).join(''):`<div class="card empty"><h3>No orders yet</h3><p>Orders you place will appear here.</p><a class="btn" href="shop.html">Start shopping</a></div>`)}
 <p class="muted" style="font-size:.82rem">Demo: order progress advances automatically for illustration.</p></div>`;
$('#tf').onsubmit=e=>{e.preventDefault();location.href='orders.html?id='+encodeURIComponent($('#oi').value.trim())};
})();
