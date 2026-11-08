/* Navegación, eventos y arranque de la aplicación */
let cur="inicio";
function render(){
  $("#nav").innerHTML=MODS.map(m=>`${m.sep?`<div class="sep">${m.sep}</div>`:""}<button class="${m.id===cur?"on":""}" data-go="${m.id}"><span class="n">${m.n}</span><span>${m.name}</span></button>`).join("");
  $("#topm").innerHTML=MODS.map(m=>`<button class="${m.id===cur?"on":""}" data-go="${m.id}">${m.n==="•"?"Resumen":m.n}${typeof m.n==="number"?"":""}</button>`).join("");
  $("#view").innerHTML=V[cur]();
}
document.addEventListener("click",ev=>{
  const t=ev.target.closest("[data-go],[data-sel],[data-mv],[data-hire],[data-prog],[data-pay]");if(!t)return;
  const d=t.dataset;
  if(d.go){cur=d.go;S.sel=null;scrollTo(0,0)}
  else if(d.sel){S.sel=+d.sel}
  else if(d.mv){const[id,dir]=d.mv.split(":");const c=S.cands.find(x=>x.id==id);c.etapa+=+dir;if(c.etapa===2&&!c.fecha)c.fecha="2026-11-15 11:00";if(c.etapa===3&&!c.prueba)c.prueba="Pendiente";toast(`${c.nombre} → ${S.etapas[c.etapa]}`)}
  else if(d.hire){const c=S.cands.find(x=>x.id==d.hire);const v=S.vacantes.find(x=>x.id==c.vac);const p=S.puestos.find(x=>x.nombre===v.puesto);
    S.emp.push({id:Date.now(),nombre:c.nombre,puesto:v.puesto,depto:v.depto,salario:20000,ingreso:new Date().toISOString().slice(0,10),tipo:"Prueba",docs:[0,0,0,0,0],score:70});const id=S.emp.at(-1).id;S.kpis[id]=[70,70,70];S.cands=S.cands.filter(x=>x.id!=c.id);toast(`${c.nombre} contratado: expediente creado`)}
  else if(d.prog){const c=S.cursos.find(x=>x.id==d.prog);c.prog=Math.min(100,c.prog+20);if(c.prog===100)toast("Curso concluido")}
  else if("pay" in d){toast("Nómina procesada y recibos generados")}
  render();
});
document.addEventListener("change",ev=>{
  const t=ev.target;
  if(t.dataset.doc){const[id,i]=t.dataset.doc.split(":");S.emp.find(x=>x.id==id).docs[i]=t.checked?1:0;render()}
  if(t.dataset.hig!==undefined){S.higiene[+t.dataset.hig][1]=t.checked?1:0;render()}
});
document.addEventListener("submit",ev=>{
  const f=ev.target.closest("form[data-form]");if(!f)return;ev.preventDefault();
  const v=Object.fromEntries(new FormData(f));const k=f.dataset.form;
  if(k==="puesto"){S.puestos.push({id:Date.now(),nombre:v.nombre,depto:v.depto,reporta:v.reporta,tramo:+v.tramo,tareas:v.tareas.split(",").map(s=>s.trim()).filter(Boolean),req:v.req});toast("Puesto agregado")}
  if(k==="vacante"){const p=S.puestos.find(x=>x.id==v.pid);S.vacantes.push({id:Date.now(),puesto:p.nombre,depto:p.depto,pub:v.pub});toast("Vacante publicada en "+v.pub)}
  if(k==="cand"){if(!S.vacantes.length)return toast("Primero publica una vacante");S.cands.push({id:Date.now(),nombre:v.nombre,vac:+v.vac,etapa:0,exp:v.exp});toast("Candidato registrado")}
  if(k==="curso"){S.cursos.push({id:Date.now(),emp:+v.emp,curso:v.curso,tipo:v.tipo,horas:+v.horas,prog:0,impacto:"En medición"});toast("Curso asignado")}
  if(k==="eval"){S.kpis[v.emp]=[+v.a,+v.b,+v.c];toast("Evaluación guardada")}
  if(k==="benef"){S.beneficios.push(v);toast("Beneficio agregado")}
  if(k==="pulso"){S.encuesta.forEach((q,i)=>q.v.push(+v["q"+i]));toast("¡Gracias! Respuesta registrada")}
  if(k==="inc"){S.incidentes.unshift({id:Date.now(),fecha:new Date().toISOString().slice(0,10),area:v.area,desc:v.desc,nivel:v.nivel,estado:"Abierto"});toast("Incidente reportado")}
  render();
});
render();
