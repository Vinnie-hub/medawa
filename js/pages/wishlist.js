(function(){
function render(){
 $('#app').innerHTML=`<div class="container page"><h1>My wishlist</h1><div style="margin-top:20px">${S.wish.length?grid(S.wish.map(PID).filter(Boolean)):`<div class="card empty form-card"><h3>Nothing saved yet</h3><p>Tap the heart on any product to save it here.</p><a class="btn" href="shop.html">Browse products</a></div>`}</div></div>`;
}
window.onWishChange=render;render();
})();
