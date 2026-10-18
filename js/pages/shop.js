(function(){
const sp=new URLSearchParams(location.search);
const F={c:CATS.some(c=>c.name===sp.get('cat'))?sp.get('cat'):'All',q:sp.get('q')||'',max:20000,s:'pop',rx:sp.get('rx')==='1',sale:sp.get('sale')==='1'};
$('#app').innerHTML=`
<div class="container page">
  <nav class="chips" aria-label="Categories" id="chips"></nav>
  <div class="shop-layout">
    <aside class="filters" id="filters" aria-label="Filters">
      <h4>Category</h4><div id="catopts"></div>
      <h4>Type</h4>
      <label class="opt"><input type="checkbox" id="frx"> Prescription items only</label>
      <label class="opt"><input type="checkbox" id="fsale"> On offer</label>
      <h4>Max price: <span id="mx"></span></h4><input type="range" id="fmax" min="200" max="20000" step="100" value="20000" aria-label="Maximum price">
      <button class="btn btn-outline btn-sm btn-block" id="reset" style="margin-top:18px">Reset filters</button>
    </aside>
    <section><div class="toolbar"><h2 id="rh" aria-live="polite"></h2>
      <div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn btn-outline btn-sm filter-toggle" id="ft">${ic('filter')} Filters</button>
      <label class="sr-only" for="sort">Sort</label><select id="sort"><option value="pop">Most popular</option><option value="lo">Price: low to high</option><option value="hi">Price: high to low</option><option value="rt">Top rated</option></select></div></div>
      <div id="pg"></div></section>
  </div>
</div>`;
function render(){
  const ql=F.q.toLowerCase();
  let l=P.filter(p=>(F.c==='All'||p.c===F.c)&&(!F.rx||p.rx)&&(!F.sale||p.o)&&p.p<=F.max&&(p.n+' '+p.c).toLowerCase().includes(ql));
  l.sort({pop:(a,b)=>b.rv-a.rv,lo:(a,b)=>a.p-b.p,hi:(a,b)=>b.p-a.p,rt:(a,b)=>b.r-a.r}[F.s]);
  $('#rh').textContent=(F.q?`“${F.q}” in `:'')+(F.c==='All'?'All products':F.c)+` (${l.length})`;
  $('#pg').innerHTML=l.length?grid(l):`<div class="empty card"><h3>No products match</h3><p>Try a different search or reset the filters.</p><button class="btn btn-sm" id="reset2">Reset filters</button></div>`;
  $('#chips').innerHTML=['All',...CATS.map(c=>c.name)].map(c=>`<a class="chip${F.c===c?' on':''}" href="#" data-cat="${esc(c)}">${esc(c)}</a>`).join('');
  $('#catopts').innerHTML=['All',...CATS.map(c=>c.name)].map(c=>`<label class="opt"><input type="radio" name="cat" value="${esc(c)}" ${F.c===c?'checked':''}> ${esc(c)}</label>`).join('');
  $('#frx').checked=F.rx;$('#fsale').checked=F.sale;$('#mx').textContent=K(F.max);$('#fmax').value=F.max;$('#sort').value=F.s;
  const u=new URLSearchParams();if(F.c!=='All')u.set('cat',F.c);if(F.q)u.set('q',F.q);if(F.rx)u.set('rx','1');if(F.sale)u.set('sale','1');
  history.replaceState(null,'',location.pathname+(u.toString()?'?'+u:''));
}
document.addEventListener('click',e=>{
  const c=e.target.closest('[data-cat]');if(c){e.preventDefault();F.c=c.dataset.cat;render();return}
  if(e.target.id==='reset'||e.target.id==='reset2'){Object.assign(F,{c:'All',q:'',max:20000,rx:false,sale:false});$('#hq').value='';render()}
  if(e.target.closest('#ft'))$('#filters').classList.toggle('open');
});
document.addEventListener('change',e=>{
  if(e.target.name==='cat'){F.c=e.target.value}else if(e.target.id==='frx')F.rx=e.target.checked;else if(e.target.id==='fsale')F.sale=e.target.checked;else if(e.target.id==='sort')F.s=e.target.value;else return;render();
});
$('#fmax').addEventListener('input',e=>{F.max=+e.target.value;$('#mx').textContent=K(F.max);render()});
render();
})();
