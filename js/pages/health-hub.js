(function(){
const id=+new URLSearchParams(location.search).get('id'),a=ARTICLES.find(x=>x.id===id),app=$('#app');
const tile=(x,ratio)=>`<div class="art" style="--h:${x.h}"><span aria-hidden="true">${x.e}</span></div>`;
if(a){document.title=a.t+' · Medawa';
 app.innerHTML=`<div class="container page"><nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><a href="health-hub.html">Health Hub</a><span>/</span><span>${esc(a.tag)}</span></nav>
 <article class="article">${tile(a)}<span class="pill">${esc(a.tag)}</span><h1 style="margin-top:12px">${esc(a.t)}</h1><p>${esc(a.b)}</p>
 <p class="muted" style="font-size:.9rem">This article is general information, not medical advice. Speak to a pharmacist or doctor about your own situation.</p>
 <div style="display:flex;gap:10px;flex-wrap:wrap"><a class="btn" href="consult.html">Ask a pharmacist</a><a class="btn btn-outline" href="health-hub.html">More articles</a></div></article></div>`;return}
app.innerHTML=`<section class="page-head"><div class="container"><nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><span>Health Hub</span></nav><h1>Health Hub</h1><p>Practical, plain-language health advice from the Medawa pharmacy team.</p></div></section>
<div class="container page"><div class="grid g3">${ARTICLES.map(x=>`<a class="post" href="health-hub.html?id=${x.id}">${tile(x)}<div class="b"><span class="pill">${esc(x.tag)}</span><h3>${esc(x.t)}</h3><span class="link-arrow">Read more ${ic('arrow')}</span></div></a>`).join('')}</div></div>`;
})();
