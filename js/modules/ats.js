/* Módulo 2: Reclutamiento y selección (ATS) */
V.ats=()=>head("Módulo 2","Reclutamiento y selección técnica (ATS)","Publica vacantes, filtra hojas de vida, programa entrevistas y da seguimiento a pruebas técnicas de aptitud.","Taylor y Chiavenato, en Bernal Magaña (2017)")+
  `<div class="grid g2" style="margin-bottom:14px">
   <div class="card"><h3>Publicar vacante</h3><p class="d">Selecciona un puesto del Módulo 1.</p>
    <form class="form" data-form="vacante"><div><label>Puesto</label><select name="pid">${S.puestos.map(p=>`<option value="${p.id}">${e(p.nombre)}</option>`).join("")}</select></div>
    <div><label>Medios de publicación</label><input name="pub" value="LinkedIn, OCC"></div><button class="btn">Publicar</button></form>
    ${S.vacantes.map(v=>`<span class="pill y" style="margin:0 6px 6px 0">${e(v.puesto)} · ${e(v.pub)}</span>`).join("")}</div>
   <div class="card"><h3>Registrar candidato</h3><p class="d">Entra a la etapa "Postulado".</p>
    <form class="form" data-form="cand"><div><label>Nombre</label><input name="nombre" required></div><div><label>Vacante</label><select name="vac">${S.vacantes.map(v=>`<option value="${v.id}">${e(v.puesto)}</option>`).join("")}</select></div>
    <div><label>Experiencia</label><input name="exp" value="2 años"></div><button class="btn">Registrar</button></form></div></div>
  <div class="kan">${S.etapas.map((et,i)=>`<div class="col"><h4>${et}<span>${S.cands.filter(c=>c.etapa===i).length}</span></h4>
   ${S.cands.filter(c=>c.etapa===i).map(c=>`<div class="cand"><b>${e(c.nombre)}</b><small>${e(S.vacantes.find(v=>v.id==c.vac)?.puesto||"")} · ${e(c.exp)}</small>
     ${c.fecha?`<div><span class="pill c" style="margin-top:6px">Entrevista ${c.fecha}</span></div>`:""}${c.prueba?`<div><span class="pill y" style="margin-top:6px">Prueba: ${c.prueba}</span></div>`:""}
     <div class="row">${i>0?`<button class="btn s xs" data-mv="${c.id}:-1">←</button>`:""}${i<4?`<button class="btn xs" data-mv="${c.id}:1">Avanzar →</button>`:`<button class="btn xs" data-hire="${c.id}">Contratar</button>`}</div></div>`).join("")||`<p class="mut" style="padding:6px">Sin candidatos</p>`}</div>`).join("")}</div>`;

