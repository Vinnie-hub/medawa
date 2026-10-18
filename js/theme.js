/* Applies the saved (or system) colour theme before first paint. Loaded in <head>. */
(function(){
  var r=document.documentElement,saved=null;
  try{saved=localStorage.getItem('medawa_theme')}catch(e){}
  var mq=window.matchMedia?matchMedia('(prefers-color-scheme: dark)'):null;
  r.dataset.theme=saved||(mq&&mq.matches?'dark':'light');
  if(mq&&mq.addEventListener)mq.addEventListener('change',function(e){
    var s=null;try{s=localStorage.getItem('medawa_theme')}catch(x){}
    if(!s)r.dataset.theme=e.matches?'dark':'light';
  });
  window.toggleTheme=function(){
    var n=r.dataset.theme==='dark'?'light':'dark';r.dataset.theme=n;
    try{localStorage.setItem('medawa_theme',n)}catch(e){}
    var b=document.querySelectorAll('[data-theme-toggle]');
    b.forEach(function(x){x.setAttribute('aria-label',n==='dark'?'Switch to light mode':'Switch to dark mode')});
  };
})();
