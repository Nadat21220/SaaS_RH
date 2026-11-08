/* Módulo 3: Capacitación y desarrollo */
V.cap=()=>{
  const h=S.cursos.reduce((a,c)=>a+c.horas*c.prog/100,0);
  return head("Módulo 3","Capacitación y desarrollo de competencias","Planes de formación individualizados, seguimiento de cursos y medición del impacto en las tareas operativas.","Deming y Juran, en Bernal Magaña (2017)")+
  `<div class="grid g4" style="margin-bottom:14px">
    <div class="card kpi"><div class="l">Cursos activos</div><div class="v">${S.cursos.filter(c=>c.prog<100).length}</div></div>
    <div class="card kpi"><div class="l">Cursos concluidos</div><div class="v">${S.cursos.filter(c=>c.prog>=100).length}</div></div>
    <div class="card kpi"><div class="l">Horas completadas</div><div class="v">${h.toFixed(0)}</div></div></div>
  <div class="card" style="margin-bottom:14px"><h3>Asignar curso</h3><p class="d">Plan individual por colaborador.</p>
   <form class="form" data-form="curso"><div><label>Colaborador</label><select name="emp">${S.emp.map(x=>`<option value="${x.id}">${e(x.nombre)}</option>`).join("")}</select></div>
   <div><label>Curso</label><input name="curso" required></div><div><label>Tipo</label><select name="tipo"><option>Técnico</option><option>Humano</option></select></div>
   <div><label>Horas</label><input name="horas" type="number" min="1" value="10"></div><button class="btn">Asignar</button></form></div>
  <div class="card"><div class="scroll"><table><thead><tr><th>Colaborador</th><th>Curso</th><th>Tipo</th><th>Avance</th><th>Impacto medido</th><th></th></tr></thead><tbody>
  ${S.cursos.map(c=>`<tr><td>${e(empName(c.emp))}</td><td>${e(c.curso)} <span class="mut">(${c.horas} h)</span></td><td><span class="pill ${c.tipo==="Técnico"?"c":"y"}">${c.tipo}</span></td>
   <td style="min-width:150px"><div class="bar"><i style="width:${c.prog}%"></i></div><small class="mut">${c.prog}%</small></td><td>${e(c.impacto)}</td>
   <td>${c.prog<100?`<button class="btn xs" data-prog="${c.id}">+20%</button>`:`<span class="pill g">Concluido</span>`}</td></tr>`).join("")}</tbody></table></div></div>`;
};

