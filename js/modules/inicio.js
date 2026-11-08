/* Resumen */
V.inicio=()=>{
  const plan=S.emp.reduce((a,x)=>a+x.salario+(S.incentivos[x.id]||0),0);
  const docs=avg(S.emp.map(x=>avg(x.docs)))*100;
  const dep=DEPTOS.map(d=>[d,S.emp.filter(x=>x.depto===d).length]).filter(x=>x[1]);
  const cl=avg(S.encuesta.flatMap(q=>q.v))/5*100;
  return head("Panel principal","Resumen de capital humano","Vista consolidada de los siete módulos de la plataforma. Todos los módulos comparten la misma base de datos de puestos y empleados.","Gestión del capital humano (Bernal Magaña, 2017)")+
  `<div class="grid g4">
    <div class="card kpi"><div class="l">Plantilla activa</div><div class="v">${S.emp.length}</div><div class="t mut">${S.puestos.length} puestos definidos</div></div>
    <div class="card kpi"><div class="l">Vacantes abiertas</div><div class="v">${S.vacantes.length}</div><div class="t mut">${S.cands.length} candidatos en proceso</div></div>
    <div class="card kpi"><div class="l">Desempeño promedio</div><div class="v">${avg(S.emp.map(x=>x.score)).toFixed(0)}</div><div class="t up">de 100</div></div>
    <div class="card kpi"><div class="l">Costo mensual de nómina</div><div class="v">${fmt(plan)}</div><div class="t mut">salario + incentivos</div></div>
    <div class="card kpi"><div class="l">Índice de clima laboral</div><div class="v">${cl.toFixed(0)}%</div><div class="t ${cl>=75?"up":"dn"}">${cl>=75?"saludable":"requiere atención"}</div></div>
    <div class="card kpi"><div class="l">Expedientes completos</div><div class="v">${docs.toFixed(0)}%</div><div class="t mut">documentos entregados</div></div>
  </div>
  <div class="grid g2" style="margin-top:14px">
    <div class="card"><h3>Plantilla por departamento</h3><p class="d">Personas activas</p>${bars(dep)}</div>
    <div class="card"><h3>Accesos rápidos</h3><p class="d">Entra a cada módulo</p>
      ${MODS.filter(m=>typeof m.n==="number").map(m=>`<button class="btn s" style="margin:0 6px 8px 0" data-go="${m.id}">${m.n}. ${m.name}</button>`).join("")}</div>
  </div>`;
};

