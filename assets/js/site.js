
(function(){
  const box=document.getElementById('lightbox');
  const img=document.getElementById('lightbox-img');
  const closeBtn=document.getElementById('lightbox-close');
  function open(src,alt){img.src=src;img.alt=alt||'';box.classList.add('open');closeBtn.focus();}
  function close(){box.classList.remove('open');img.removeAttribute('src');}
  document.querySelectorAll('[data-full]').forEach(a=>{
    a.addEventListener('click',e=>{e.preventDefault();open(a.getAttribute('data-full'),a.getAttribute('data-alt')||'');});
  });
  closeBtn.addEventListener('click',close);
  box.addEventListener('click',e=>{if(e.target===box)close();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
})();
