/* Medawa · shared layout: header, navigation, mobile menu, tab bar, footer, cookie notice */
(function(){
  const page=document.body.dataset.page||'';
  const NAV=[
    ['index.html','Home','home','home'],['shop.html','Shop','package','shop'],
    ['prescription.html','Prescription','upload','prescription'],['consult.html','Consult a pharmacist','chat','consult'],
    ['health-hub.html','Health Hub','book','health-hub'],['orders.html','Track order','truck','orders'],
    ['about.html','About','info','about'],['contact.html','Contact','mail','contact'],['help.html','Help & FAQs','help','help']];
  const logo=`<a class="logo" href="index.html" aria-label="Medawa – Pharmacy and Health Care, home"><img src="assets/medawa-logo.webp" srcset="assets/medawa-logo-sm.webp 450w, assets/medawa-logo.webp 900w" sizes="(max-width:860px) 152px, 184px" width="184" height="46" alt="Medawa – Pharmacy and Health Care" decoding="async"></a>`;
  const footLogo=`<a class="logo" href="index.html" aria-label="Medawa home"><img src="assets/medawa-logo-footer.webp" width="132" height="113" alt="Medawa – Pharmacy and Health Care" loading="lazy" decoding="async"></a>`;
  const on=k=>k===page?' on':'';

  const header=`
  <div class="topbar"><div class="container"><span class="tb-msg">${ic('truck')} Free delivery above KES 2,500 · Same-day in Nairobi</span>
    <span><a href="prescription.html">Upload prescription</a><a href="orders.html">Track order</a><a href="contact.html">Contact</a><a href="help.html">Help</a></span></div></div>
  <header class="site-header"><div class="container header-row">
    <button class="icon-btn menu-btn" data-menu-open aria-label="Open menu" aria-controls="drawer">${ic('menu')}</button>
    ${logo}
    <form class="search" action="shop.html" method="get" role="search">
      <label class="sr-only" for="hq">Search products</label>
      <select name="cat" aria-label="Category"><option value="">All</option>${CATS.map(c=>`<option>${esc(c.name)}</option>`).join('')}</select>
      <input id="hq" name="q" type="search" placeholder="Search medicines, vitamins, skincare…" autocomplete="off" list="hq-list">
      <datalist id="hq-list">${P.map(p=>`<option value="${esc(p.n)}">`).join('')}</datalist>
      <button aria-label="Search">${ic('search')}</button>
    </form>
    <div class="header-actions">
      <button class="icon-btn hide-m" data-theme-toggle aria-label="Toggle dark mode"><span data-sun>${ic('sun')}</span><span data-moon>${ic('moon')}</span></button>
      <a class="icon-btn hide-m" href="account.html" aria-label="Account">${ic('user')}</a>
      <a class="icon-btn" href="wishlist.html" aria-label="Wishlist">${ic('heart')}<span class="badge-n" data-wish-count></span></a>
      <a class="icon-btn" href="cart.html" aria-label="Cart">${ic('cart')}<span class="badge-n" data-cart-count></span></a>
    </div></div>
    <nav class="main-nav" aria-label="Main"><div class="container">${NAV.filter(n=>n[3]!=='about'||true).map(n=>`<a class="${on(n[3]).trim()}" href="${n[0]}">${n[1]}</a>`).join('')}</div></nav>
  </header>
  <div class="drawer-overlay" data-menu-close></div>
  <aside class="drawer" id="drawer" aria-label="Menu" aria-hidden="true">
    <div class="drawer-head">${logo}<button class="icon-btn" data-menu-close aria-label="Close menu">${ic('close')}</button></div>
    <div class="drawer-body">
      ${NAV.slice(0,6).map(n=>`<a class="${on(n[3]).trim()}" href="${n[0]}">${ic(n[2])}${n[1]}</a>`).join('')}
      <h5>Shop by category</h5>
      ${CATS.map(c=>`<a href="shop.html?cat=${encodeURIComponent(c.name)}">${ic(c.icon)}${esc(c.name)}</a>`).join('')}
      <h5>Account & company</h5>
      <a class="${on('account').trim()}" href="account.html">${ic('user')}<span data-user-name>Sign in</span></a>
      <a class="${on('cart').trim()}" href="cart.html">${ic('cart')}Cart</a>
      <a class="${on('wishlist').trim()}" href="wishlist.html">${ic('heart')}Wishlist</a>
      ${NAV.slice(6).map(n=>`<a class="${on(n[3]).trim()}" href="${n[0]}">${ic(n[2])}${n[1]}</a>`).join('')}
      <a class="${on('legal').trim()}" href="legal.html">${ic('doc')}Terms & privacy</a>
    </div>
    <div class="drawer-foot"><button class="btn btn-outline btn-block" data-theme-toggle>${ic('moon')} Dark / light mode</button></div>
  </aside>`;

  const tabs=[['index.html','Home','home','home'],['shop.html','Shop','package','shop'],['prescription.html','Rx','upload','prescription'],['cart.html','Cart','cart','cart'],['account.html','Account','user','account']];
  const tabbar=`<nav class="tabbar" aria-label="Quick navigation">${tabs.map(t=>`<a class="${on(t[3]).trim()}" href="${t[0]}" ${t[3]===page?'aria-current="page"':''}>${ic(t[2])}${t[1]}${t[3]==='cart'?'<span class="badge-n" data-cart-count></span>':''}</a>`).join('')}</nav>`;

  const footer=`<footer class="site-footer"><div class="container">
    <div class="footer-grid">
      <div>${footLogo}<p>An online pharmacy and healthcare store. Vitamins, skincare, first aid and authorised medicines, pharmacist-checked and delivered to your door.</p></div>
      <div><h4>Shop</h4><a href="shop.html">All products</a><a href="shop.html?cat=Supplements">Vitamins &amp; supplements</a><a href="shop.html?cat=Skin%20Care">Skin care</a><a href="shop.html?cat=First%20Aid">First aid</a><a href="shop.html?cat=Medicines">Medicines</a></div>
      <div><h4>Services</h4><a href="prescription.html">Upload prescription</a><a href="consult.html">Consult a pharmacist</a><a href="orders.html">Track your order</a><a href="account.html">My account</a><a href="wishlist.html">Wishlist</a></div>
      <div><h4>Company</h4><a href="about.html">About Medawa</a><a href="health-hub.html">Health Hub</a><a href="contact.html">Contact</a><a href="help.html">Help &amp; FAQs</a><a href="legal.html">Terms &amp; privacy</a></div>
    </div>
    <div class="footer-bottom"><span>© 2026 Medawa. Demo site with sample data; no real orders are processed.</span><span class="pay-chips"><span>M-Pesa</span><span>Card</span><span>Cash on delivery</span></span></div>
  </div></footer>
  <button class="to-top" aria-label="Back to top">${ic('arrow').replace('<svg','<svg style="transform:rotate(-90deg)"')}</button>`;

  document.getElementById('site-header').innerHTML=header;
  document.getElementById('site-footer').innerHTML=tabbar+footer;

  /* theme icon state */
  const sync=()=>{const d=document.documentElement.dataset.theme==='dark';
    $$('[data-sun]').forEach(e=>e.style.display=d?'':'none');$$('[data-moon]').forEach(e=>e.style.display=d?'none':'');};
  sync();new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});

  /* search box reflects the current query */
  const sp=new URLSearchParams(location.search);
  if(page==='shop'){const q=sp.get('q'),c=sp.get('cat');if(q)$('#hq').value=q;if(c)$('.search select').value=c}

  /* mobile menu */
  const dr=$('#drawer'),ov=$('.drawer-overlay');
  const open=o=>{dr.classList.toggle('open',o);ov.classList.toggle('open',o);dr.setAttribute('aria-hidden',!o);document.body.style.overflow=o?'hidden':''};
  document.addEventListener('click',e=>{if(e.target.closest('[data-menu-open]'))open(true);else if(e.target.closest('[data-menu-close]'))open(false);else if(dr.classList.contains('open')&&e.target.closest('#drawer a'))open(false)});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')open(false)});

  /* back to top */
  const tt=$('.to-top');tt.onclick=()=>scrollTo({top:0});
  addEventListener('scroll',()=>tt.classList.toggle('show',scrollY>700),{passive:true});

  /* cookie notice */
  if(!store.get('mck',0)){
    const c=document.createElement('div');c.className='cookie';c.setAttribute('role','dialog');
    c.innerHTML='<span>We use cookies to remember your cart and preferences. <a href="legal.html#cookies">Learn more</a></span><button class="btn btn-sm">Accept</button>';
    c.querySelector('button').onclick=()=>{store.set('mck',1);c.remove()};document.body.appendChild(c);
  }
  refreshBadges();
})();
