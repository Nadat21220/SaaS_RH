/* Utilidades generales */
const $=(s)=>document.querySelector(s);
const fmt=(n)=>"$"+Math.round(n).toLocaleString("es-MX");
const e=(s)=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const empName=(id)=>S.emp.find(x=>x.id==id)?.nombre||"—";
function toast(m){const d=document.createElement("div");d.textContent=m;$("#toast").append(d);setTimeout(()=>d.remove(),2600)}
const avg=(a)=>a.reduce((x,y)=>x+y,0)/(a.length||1);

