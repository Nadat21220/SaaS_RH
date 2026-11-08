/* Conceptos incluidos en el SaaS */
V.conc=()=>head("Información","Conceptos incluidos en el SaaS","Resumen de los módulos y las teorías administrativas que los fundamentan.","Bernal Magaña (2017); Áreas Administrativas (2026)")+
  `<div class="grid g2">${[
   ["1. Análisis y diseño de puestos","Contenido, tareas, atribuciones, tramo de control y requisitos. Base de datos maestra.","Taylor, Urwick"],
   ["2. Reclutamiento y selección (ATS)","Publicación de vacantes, filtrado de CV, entrevistas y pruebas técnicas.","Taylor, Chiavenato"],
   ["3. Capacitación y desarrollo","Planes individuales, seguimiento de cursos y medición de impacto.","Deming, Juran"],
   ["4. Evaluación del desempeño","Evaluación 360°, matriz de competencias y KPI.","Chiavenato, Drucker"],
   ["5. Compensaciones y nómina","Sueldos, incentivos por rendimiento y beneficios higiénicos/motivadores.","Taylor, Fayol, Maslow, Herzberg"],
   ["6. Clima, cultura y organización informal","Encuestas de pulso, valores, compromiso y mapa de interacciones.","Ouchi, Katz y Kahn, Elton Mayo"],
   ["7. Relaciones laborales, expediente e higiene","Expediente digital, contratos, normatividad, seguridad e higiene industrial.","Fayol, Gilbreth"]
  ].map(c=>`<div class="card"><h3>${c[0]}</h3><p class="d" style="margin:6px 0 10px">${c[1]}</p><span class="pill c">${c[2]}</span></div>`).join("")}</div>
  <p class="mut" style="margin-top:18px;font-size:12px">Referencias: Bernal Magaña (2017); Áreas Administrativas (2026). Los datos mostrados son de muestra.</p>`;

