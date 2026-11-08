/* Módulo 1: Análisis y diseño de puestos */
V.puestos=()=>{
  const p=S.puestos.find(x=>x.id===S.sel);
  return head("Módulo 1","Análisis y diseño de puestos","Define contenido, tareas, atribuciones, tramo de control y requisitos de cada cargo. Es la base de datos maestra del resto de módulos.","Taylor y Urwick, en Bernal Magaña (2017)")+
  `<div class="card" style="margin-bottom:14px"><h3>Nuevo puesto</h3><p class="d">Se agrega al organigrama y queda disponible para vacantes, capacitación y nómina.</p>
   <form class="form" data-form="puesto">
    <div><label>Nombre del cargo</label><input name="nombre" required></div>
    <div><label>Departamento</label><select name="depto">${DEPTOS.map(d=>`<option>${d}</option>`).join("")}</select></div>
    <div><label>Reporta a</label><input name="reporta" required></div>
    <div><label>Tramo de control</label><input name="tramo" type="number" min="0" value="0"></div>
    <div><label>Tareas (separadas por coma)</label><input name="tareas" required></div>
    <div><label>Requisitos</label><input name="req" required></div>
    <button class="btn">Agregar puesto</button></form></div>
  <div class="card"><div class="scroll"><table><thead><tr><th>Cargo</th><th>Departamento</th><th>Reporta a</th><th>Tramo</th><th>Ocupantes</th></tr></thead><tbody>
   ${S.puestos.map(x=>`<tr class="click" data-sel="${x.id}"><td><b>${e(x.nombre)}</b></td><td>${e(x.depto)}</td><td>${e(x.reporta)}</td><td>${x.tramo}</td><td><span class="pill c">${S.emp.filter(m=>m.puesto===x.nombre).length}</span></td></tr>`).join("")}
  </tbody></table></div>
  ${p?`<div class="det"><h3>${e(p.nombre)}</h3><p class="mut" style="margin:4px 0 8px">${e(p.depto)} · reporta a ${e(p.reporta)} · tramo de control: ${p.tramo}</p><b>Tareas y atribuciones</b><ul>${p.tareas.map(t=>`<li>${e(t)}</li>`).join("")}</ul><p style="margin-top:8px"><b>Requisitos:</b> ${e(p.req)}</p></div>`:`<p class="mut" style="margin-top:12px">Haz clic en un cargo para ver su descripción completa.</p>`}</div>`;
};

