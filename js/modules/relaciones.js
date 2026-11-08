/* Módulo 7: Relaciones laborales, expediente e higiene */
V.rel=()=>head("Módulo 7","Relaciones laborales, expediente digital e higiene industrial","Expedientes y contratos centralizados, cumplimiento normativo y seguimiento de condiciones del entorno físico y protocolos de seguridad.","Bernal Magaña (2017); Fayol y Gilbreth, en Bernal Magaña (2017)")+
  `<div class="card"><h3>Expediente digital</h3><p class="d">Marca los documentos conforme se reciben.</p><div class="scroll"><table><thead><tr><th>Colaborador</th><th>Contrato</th>${S.docNames.map(d=>`<th>${d}</th>`).join("")}<th>Completo</th></tr></thead><tbody>
   ${S.emp.map(x=>`<tr><td><b>${e(x.nombre)}</b></td><td><span class="pill">${x.tipo}</span></td>${x.docs.map((d,i)=>`<td><input type="checkbox" style="width:auto;accent-color:var(--acc)" data-doc="${x.id}:${i}" ${d?"checked":""}></td>`).join("")}<td><span class="pill ${avg(x.docs)===1?"g":"y"}">${Math.round(avg(x.docs)*100)}%</span></td></tr>`).join("")}</tbody></table></div></div>
  <div class="grid g2" style="margin-top:14px">
   <div class="card"><h3>Contratos vigentes</h3><p class="d">Individuales y colectivos</p>${bars(S.contratos.map(c=>[c[0].replace("Contrato ",""),c[1]]),{max:5,color:"var(--vio)"})}</div>
   <div class="card"><h3>Lista de verificación — seguridad e higiene</h3><p class="d">Prevención de fatiga y protección de la salud.</p>
    ${S.higiene.map((h,i)=>`<label class="chk" style="color:#e5e7eb;font-size:13px;margin:0"><input type="checkbox" data-hig="${i}" ${h[1]?"checked":""}>${e(h[0])}</label>`).join("")}
    <p style="margin-top:8px"><span class="pill ${S.higiene.every(h=>h[1])?"g":"y"}">${S.higiene.filter(h=>h[1]).length}/${S.higiene.length} cumplidos</span></p></div></div>
  <div class="card" style="margin-top:14px"><h3>Incidentes y reportes</h3><p class="d">Registro de accidentes y condiciones de riesgo.</p>
   <form class="form" data-form="inc"><div><label>Área</label><select name="area">${DEPTOS.map(d=>`<option>${d}</option>`).join("")}</select></div><div style="grid-column:span 2"><label>Descripción</label><input name="desc" required></div><div><label>Nivel</label><select name="nivel"><option>Leve</option><option>Moderado</option><option>Grave</option></select></div><button class="btn">Reportar</button></form>
   <div class="scroll"><table><thead><tr><th>Fecha</th><th>Área</th><th>Descripción</th><th>Nivel</th><th>Estado</th></tr></thead><tbody>
   ${S.incidentes.map(i=>`<tr><td>${i.fecha}</td><td>${i.area}</td><td>${e(i.desc)}</td><td><span class="pill ${i.nivel==="Grave"?"r":i.nivel==="Moderado"?"y":"g"}">${i.nivel}</span></td><td><span class="pill">${i.estado}</span></td></tr>`).join("")}</tbody></table></div></div>`;

