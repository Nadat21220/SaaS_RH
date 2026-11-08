/* Módulo 4: Evaluación del desempeño */
V.des=()=>{
  const rows=S.emp.map(x=>{const k=S.kpis[x.id];return {x,k,tot:Math.round(k[0]*.5+k[1]*.25+k[2]*.25)}}).sort((a,b)=>b.tot-a.tot);
  const lvl=(t)=>t>=90?["Sobresaliente","g"]:t>=80?["Cumple","c"]:t>=70?["Por mejorar","y"]:["Plan de mejora","r"];
  return head("Módulo 4","Evaluación del desempeño","Mide el cumplimiento de metas individuales y departamentales con KPI, matriz de competencias y evaluación 360° para fundamentar ascensos y programas de mejora.","Chiavenato y Drucker, en Bernal Magaña (2017)")+
  `<div class="grid g2"><div class="card"><h3>Calificación final</h3><p class="d">50% metas (KPI) · 25% competencias · 25% evaluación 360°</p>${bars(rows.map(r=>[r.x.nombre,r.tot,r.tot>=90?"var(--good)":r.tot>=80?"var(--acc)":r.tot>=70?"var(--warn)":"var(--bad)"]),{max:100})}</div>
   <div class="card"><h3>Registrar evaluación</h3><p class="d">Actualiza los tres componentes de un colaborador.</p>
    <form class="form" data-form="eval"><div style="grid-column:1/-1"><label>Colaborador</label><select name="emp">${S.emp.map(x=>`<option value="${x.id}">${e(x.nombre)}</option>`).join("")}</select></div>
    <div><label>Metas / KPI (0-100)</label><input name="a" type="number" min="0" max="100" required></div><div><label>Competencias</label><input name="b" type="number" min="0" max="100" required></div><div><label>Evaluación 360°</label><input name="c" type="number" min="0" max="100" required></div><button class="btn">Guardar</button></form></div></div>
  <div class="card" style="margin-top:14px"><div class="scroll"><table><thead><tr><th>Colaborador</th><th>Puesto</th><th>KPI</th><th>Competencias</th><th>360°</th><th>Total</th><th>Resultado</th></tr></thead><tbody>
  ${rows.map(r=>{const l=lvl(r.tot);return `<tr><td><b>${e(r.x.nombre)}</b></td><td class="mut">${e(r.x.puesto)}</td><td>${r.k[0]}</td><td>${r.k[1]}</td><td>${r.k[2]}</td><td><b>${r.tot}</b></td><td><span class="pill ${l[1]}">${l[0]}</span></td></tr>`}).join("")}</tbody></table></div></div>`;
};

