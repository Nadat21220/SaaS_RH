/* Módulo 6: Clima, cultura y organización informal */
V.clima=()=>{
  const nodes=[[200,40],[90,110],[310,110],[150,200],[260,200],[50,200],[350,200]];
  const edges=[[0,1],[0,2],[1,3],[2,4],[3,4],[1,5],[2,6],[3,0]];
  const deg=nodes.map((_,i)=>edges.filter(x=>x.includes(i)).length);
  return head("Módulo 6","Diagnóstico de clima, cultura y organización informal","Encuestas de pulso continuas para medir clima, valores y compromiso; y métricas de interacción entre pares que revelan la organización informal.","Ouchi, Katz y Kahn, y Elton Mayo, en Bernal Magaña (2017)")+
  `<div class="grid g2"><div class="card"><h3>Encuesta de pulso — resultados</h3><p class="d">Escala 1-5 · ${S.encuesta[0].v.length} respuestas</p>
   ${bars(S.encuesta.map(q=>[q.q.slice(0,24)+"…",+avg(q.v).toFixed(1),avg(q.v)>=4?"var(--good)":avg(q.v)>=3.3?"var(--acc)":"var(--bad)"]),{max:5})}
   <p class="mut" style="font-size:11px;margin-top:6px">Rojo = área de oportunidad.</p></div>
   <div class="card"><h3>Responder pulso de esta semana</h3><p class="d">Respuesta anónima.</p>
    <form data-form="pulso">${S.encuesta.map((q,i)=>`<div style="margin-bottom:10px"><label style="color:#e5e7eb">${e(q.q)}</label><div class="range"><span class="mut">1</span><input type="range" name="q${i}" min="1" max="5" value="4"><span class="mut">5</span></div></div>`).join("")}<button class="btn">Enviar respuestas</button></form></div></div>
  <div class="card" style="margin-top:14px"><h3>Organización informal</h3><p class="d">Mapa de interacciones entre pares (muestra). Nodos más grandes = mayor influencia informal.</p>
   <svg viewBox="0 0 400 250" width="100%" style="max-height:300px">${edges.map(([a,b])=>`<line x1="${nodes[a][0]}" y1="${nodes[a][1]}" x2="${nodes[b][0]}" y2="${nodes[b][1]}" stroke="rgba(255,255,255,.2)"/>`).join("")}
   ${nodes.map((n,i)=>`<circle cx="${n[0]}" cy="${n[1]}" r="${8+deg[i]*3}" fill="${deg[i]>=4?"var(--acc)":"var(--vio)"}" opacity=".85"/><text x="${n[0]}" y="${n[1]+24+deg[i]*2}" text-anchor="middle">${e(S.emp[i].nombre.split(" ")[0])}</text>`).join("")}</svg></div>`;
};

