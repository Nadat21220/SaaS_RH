/* Catálogo de módulos y componentes de interfaz reutilizables */
const MODS=[
 {id:"inicio",n:"•",name:"Resumen general"},
 {id:"puestos",n:1,name:"Análisis y diseño de puestos",sep:"Módulos"},
 {id:"ats",n:2,name:"Reclutamiento y selección (ATS)"},
 {id:"cap",n:3,name:"Capacitación y desarrollo"},
 {id:"des",n:4,name:"Evaluación del desempeño"},
 {id:"nom",n:5,name:"Compensaciones y nómina"},
 {id:"clima",n:6,name:"Clima, cultura y organización informal"},
 {id:"rel",n:7,name:"Relaciones laborales, expediente e higiene"},
 {id:"conc",n:"i",name:"Conceptos del SaaS",sep:"Información"},
];
function head(eyebrow,title,desc,theory,action=""){
  return `<div class="head"><div><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p class="sub">${desc}</p>${theory?`<span class="theory">Fundamento: ${theory}</span>`:""}</div>${action}</div>`;
}
const bars=(data,{max,color="var(--acc)",w=420}={})=>{
  max=max||Math.max(...data.map(d=>d[1]),1);
  const h=data.length*30+6;
  return `<svg viewBox="0 0 ${w} ${h}" width="100%">${data.map((d,i)=>{
    const bw=(w-170)*d[1]/max;
    return `<text x="0" y="${i*30+18}">${e(d[0])}</text><rect x="150" y="${i*30+6}" rx="5" width="${Math.max(bw,2)}" height="16" fill="${d[2]||color}"/><text x="${156+bw}" y="${i*30+18}" style="fill:#e5e7eb">${d[1]}</text>`}).join("")}</svg>`;
};

const V={};
