/* Módulo 5: Compensaciones y nómina */
const calc=(x)=>{const inc=S.incentivos[x.id]||0;const bruto=x.salario+inc;const isr=bruto*(bruto>40000?.24:bruto>20000?.16:.08);const imss=x.salario*.0275;return {inc,bruto,isr,imss,neto:bruto-isr-imss}};
V.nom=()=>{
  const t=S.emp.map(calc);const sum=(k)=>t.reduce((a,x)=>a+x[k],0);
  return head("Módulo 5","Administración de compensaciones y nómina","Automatiza sueldos, salarios e incentivos proporcionales al rendimiento, y gestiona beneficios higiénicos y motivadores para reducir la rotación.","Taylor, Fayol, Maslow y Herzberg, en Bernal Magaña (2017)")+
  `<div class="grid g4" style="margin-bottom:14px">
   <div class="card kpi"><div class="l">Percepciones brutas</div><div class="v">${fmt(sum("bruto"))}</div></div>
   <div class="card kpi"><div class="l">Deducciones (ISR + IMSS)</div><div class="v">${fmt(sum("isr")+sum("imss"))}</div></div>
   <div class="card kpi"><div class="l">Neto a pagar</div><div class="v up">${fmt(sum("neto"))}</div></div>
   <div style="display:flex;align-items:center"><button class="btn" data-pay>Procesar nómina quincenal</button></div></div>
  <div class="card"><h3>Nómina mensual</h3><p class="d">Incentivo = % del salario según calificación de desempeño (Módulo 4). Cálculo ilustrativo de ISR/IMSS.</p><div class="scroll"><table><thead><tr><th>Colaborador</th><th>Salario base</th><th>Incentivo</th><th>Bruto</th><th>ISR</th><th>IMSS</th><th>Neto</th></tr></thead><tbody>
   ${S.emp.map((x,i)=>{const c=t[i];return `<tr><td><b>${e(x.nombre)}</b></td><td>${fmt(x.salario)}</td><td class="up">${fmt(c.inc)}</td><td>${fmt(c.bruto)}</td><td class="dn">−${fmt(c.isr)}</td><td class="dn">−${fmt(c.imss)}</td><td><b>${fmt(c.neto)}</b></td></tr>`}).join("")}</tbody></table></div></div>
  <div class="grid g2" style="margin-top:14px"><div class="card"><h3>Beneficios</h3><p class="d">Factores higiénicos previenen el descontento; motivadores impulsan el compromiso.</p>
   ${S.beneficios.map(b=>`<div class="chk"><span class="pill ${b.t==="Higiénico"?"y":"g"}" style="width:84px;text-align:center">${b.t}</span>${e(b.n)}</div>`).join("")}
   <form class="form" data-form="benef" style="margin-top:12px"><div><label>Nuevo beneficio</label><input name="n" required></div><div><label>Tipo</label><select name="t"><option>Higiénico</option><option>Motivador</option></select></div><button class="btn">Agregar</button></form></div>
   <div class="card"><h3>Costo por departamento</h3><p class="d">Percepciones brutas mensuales</p>${bars(DEPTOS.map(d=>[d,S.emp.reduce((a,x,i)=>a+(x.depto===d?t[i].bruto:0),0)]).filter(x=>x[1]).map(x=>[x[0],Math.round(x[1]/1000)]),{color:"var(--vio)"})}<p class="mut" style="font-size:11px">Miles de pesos</p></div></div>`;
};

