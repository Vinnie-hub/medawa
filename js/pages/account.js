(function(){
const app=$('#app');
function render(){
 if(!S.user){app.innerHTML=`<div class="container page"><div class="card form-card" style="max-width:460px"><h2>Sign in or join</h2><p class="muted">Enter your details to save your wishlist and orders on this device.</p>
 <form id="sf"><div class="field"><label class="f" for="an">Full name</label><input id="an" required autocomplete="name"></div><div class="field"><label class="f" for="ae">Email</label><input id="ae" type="email" required autocomplete="email"></div><button class="btn btn-block">Continue</button></form></div></div>`;
  $('#sf').onsubmit=e=>{e.preventDefault();S.user={n:$('#an').value,e:$('#ae').value};S.save();refreshBadges();toast('Welcome to Medawa');render()};return}
 app.innerHTML=`<div class="container page"><div class="card profile"><div class="avatar">${esc(S.user.n[0].toUpperCase())}</div><div style="flex:1"><h2 style="margin:0">Hello, ${esc(S.user.n)}</h2><span class="muted">${esc(S.user.e)}</span></div><button class="btn btn-outline btn-sm" id="so">Sign out</button></div>
 <div class="stat"><a href="orders.html"><b>${S.orders.length}</b>Orders</a><a href="wishlist.html"><b>${S.wish.length}</b>Saved items</a><a href="cart.html"><b>${S.count()}</b>In cart</a></div>
 ${sectionHead('Quick links')}<div class="grid g3"><a class="cat" href="prescription.html"><i>${ic('upload')}</i>Upload prescription</a><a class="cat" href="consult.html"><i>${ic('chat')}</i>Consult a pharmacist</a><a class="cat" href="orders.html"><i>${ic('truck')}</i>Track an order</a></div></div>`;
 $('#so').onclick=()=>{S.user=null;S.save();refreshBadges();render()};
}
render();
})();
