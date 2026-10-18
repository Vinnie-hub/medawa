(function(){
const hero=[3,14,6,8].map(PID);
const recent=store.get('mrv',[]).map(PID).filter(Boolean);
$('#app').innerHTML=`
<section class="hero"><div class="container">
  <div><span class="eyebrow">Online pharmacy &amp; healthcare store</span>
    <h1>Your pharmacy, delivered to your door.</h1>
    <p class="lead">Shop vitamins, skincare, first-aid supplies and authorised medicines from Medawa. Prescription items are checked by our pharmacists before they ship.</p>
    <div class="hero-cta"><a class="btn btn-light" href="shop.html">Shop now ${ic('arrow')}</a><a class="btn btn-ghost-light" href="prescription.html">Upload prescription</a></div>
    <div class="hero-points"><span>${ic('shield')}Pharmacist-checked</span><span>${ic('truck')}Same-day in Nairobi</span><span>${ic('phone')}Pay with M-Pesa</span></div></div>
  <aside class="hero-panel" aria-label="Popular products"><h3>Popular right now</h3>
    ${hero.map(p=>`<a class="hero-item" href="${pLink(p)}">${art(p)}<span><b>${esc(p.n)}</b><small>${K(p.p)}</small></span></a>`).join('')}</aside>
</div></section>
<div class="container">
  <div class="strip">
    <div>${ic('shield')}<p><b>Pharmacist-checked</b><span>Prescriptions verified before dispatch.</span></p></div>
    <div>${ic('truck')}<p><b>Fast delivery</b><span>Same-day in Nairobi, 1–3 days elsewhere.</span></p></div>
    <div>${ic('phone')}<p><b>Pay your way</b><span>M-Pesa, card or cash on delivery.</span></p></div>
    <div>${ic('return')}<p><b>Easy returns</b><span>7 days on eligible items.</span></p></div>
  </div>
  <section class="section">${sectionHead('Shop by category','Everything for your health and home.','All products','shop.html')}
    <div class="cats">${CATS.map(c=>`<a class="cat" href="shop.html?cat=${encodeURIComponent(c.name)}"><i>${ic(c.icon)}</i>${esc(c.name)}</a>`).join('')}</div></section>
  <section class="section">${sectionHead('Special offers','Savings on everyday essentials.','See all offers','shop.html?sale=1')}${grid(P.filter(p=>p.o).slice(0,5))}</section>
  <section class="section"><div class="promo">
    <div class="promo-card promo-a"><span class="eyebrow" style="color:#9af0b8">Prescriptions</span><h3>Upload your prescription, we’ll handle the rest.</h3><p>A Medawa pharmacist checks every prescription before your order ships.</p><a class="btn btn-light btn-sm" href="prescription.html">Upload now</a></div>
    <div class="promo-card promo-b"><span class="eyebrow" style="color:#c9d6ff">Free advice</span><h3>Talk to a licensed pharmacist today.</h3><p>Questions about a medicine or symptom? Book a quick consultation.</p><a class="btn btn-light btn-sm" href="consult.html">Book consultation</a></div>
  </div></section>
  <section class="section">${sectionHead('How Medawa works','From browsing to your doorstep in four steps.')}
    <div class="steps">
      <div class="step"><b>Browse</b><span>Vitamins, skincare, first aid and authorised medicines.</span></div>
      <div class="step"><b>Add to cart</b><span>Build your order in a single cart.</span></div>
      <div class="step"><b>Checkout</b><span>Enter delivery details and choose how to pay.</span></div>
      <div class="step"><b>We check &amp; deliver</b><span>Pharmacists review prescriptions, then we dispatch.</span></div></div></section>
  <section class="section">${sectionHead('Best sellers','Most popular with Medawa customers.','View all','shop.html')}${grid([...P].sort((a,b)=>b.rv-a.rv).slice(0,8))}</section>
  ${recent.length?`<section class="section">${sectionHead('Recently viewed')}${grid(recent)}</section>`:''}
  <section class="section">${sectionHead('What customers say','Sample feedback shown for demonstration.')}
    <div class="grid g3">${[['Wanjiru, Nairobi','Ordered in the morning, had my baby’s diapers by evening. Easy.'],['Otieno, Kisumu','The pharmacist called to confirm my prescription before dispatch. I felt safe.'],['Amina, Mombasa','Uploading my prescription took a minute. Highly recommend.']].map(r=>`<figure class="quote" style="margin:0">${stars(5)}<p>“${r[1]}”</p><b>${r[0]}</b></figure>`).join('')}</div></section>
  <section class="newsletter"><div><h2>Health tips and offers, weekly</h2><p>Join the Medawa newsletter. Unsubscribe any time.</p></div>
    <form data-success="Thanks for subscribing" data-detail="Look out for our next health tips email."><label class="sr-only" for="nl">Email</label><input id="nl" type="email" placeholder="you@email.com" required><button class="btn">Subscribe</button></form></section>
</div>`;
})();
