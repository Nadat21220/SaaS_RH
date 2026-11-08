/* Datos de muestra compartidos por todos los módulos */
const DEPTOS=["Dirección","Operaciones","Ventas","Finanzas","Tecnología","Recursos Humanos"];
const S={
  puestos:[
    {id:1,nombre:"Director General",depto:"Dirección",reporta:"Consejo",tramo:5,tareas:["Definir estrategia","Aprobar presupuesto","Representar a la empresa"],req:"Licenciatura + 10 años de experiencia directiva"},
    {id:2,nombre:"Gerente de Operaciones",depto:"Operaciones",reporta:"Director General",tramo:6,tareas:["Planear producción","Controlar costos","Supervisar calidad"],req:"Ingeniería industrial + 6 años"},
    {id:3,nombre:"Ejecutivo de Ventas",depto:"Ventas",reporta:"Gerente de Ventas",tramo:0,tareas:["Prospección","Cierre de ventas","Seguimiento postventa"],req:"Bachillerato o licenciatura trunca + 2 años"},
    {id:4,nombre:"Contador General",depto:"Finanzas",reporta:"Director General",tramo:3,tareas:["Contabilidad","Declaraciones fiscales","Estados financieros"],req:"Contaduría pública + cédula"},
    {id:5,nombre:"Desarrollador Full-Stack",depto:"Tecnología",reporta:"Líder Técnico",tramo:0,tareas:["Desarrollar módulos","Code review","Pruebas"],req:"Ing. en sistemas + 3 años"},
    {id:6,nombre:"Analista de RH",depto:"Recursos Humanos",reporta:"Director General",tramo:0,tareas:["Reclutamiento","Expedientes","Nómina"],req:"Psicología o Administración + 2 años"},
  ],
  emp:[
    {id:1,nombre:"Ana Torres",puesto:"Director General",depto:"Dirección",salario:68000,ingreso:"2019-03-04",tipo:"Indeterminado",docs:[1,1,1,1,1],score:92,fortaleza:"Liderazgo"},
    {id:2,nombre:"Luis Pérez",puesto:"Gerente de Operaciones",depto:"Operaciones",salario:42000,ingreso:"2020-08-17",tipo:"Indeterminado",docs:[1,1,1,1,0],score:84,fortaleza:"Planeación"},
    {id:3,nombre:"María Cano",puesto:"Ejecutivo de Ventas",depto:"Ventas",salario:18000,ingreso:"2023-01-09",tipo:"Determinado",docs:[1,1,0,1,0],score:78,fortaleza:"Negociación"},
    {id:4,nombre:"Jorge Ek",puesto:"Contador General",depto:"Finanzas",salario:35000,ingreso:"2021-05-24",tipo:"Indeterminado",docs:[1,1,1,1,1],score:88,fortaleza:"Análisis"},
    {id:5,nombre:"Sofía Chan",puesto:"Desarrollador Full-Stack",depto:"Tecnología",salario:38000,ingreso:"2022-11-02",tipo:"Indeterminado",docs:[1,0,1,1,0],score:81,fortaleza:"Innovación"},
    {id:6,nombre:"Diego Mena",puesto:"Ejecutivo de Ventas",depto:"Ventas",salario:17500,ingreso:"2024-02-12",tipo:"Prueba",docs:[1,1,1,0,0],score:69,fortaleza:"Comunicación"},
    {id:7,nombre:"Paola Ruiz",puesto:"Analista de RH",depto:"Recursos Humanos",salario:22000,ingreso:"2022-06-01",tipo:"Indeterminado",docs:[1,1,1,1,1],score:90,fortaleza:"Empatía"},
  ],
  docNames:["Identificación","Contrato firmado","Constancia fiscal (RFC)","Alta IMSS","Examen médico"],
  vacantes:[
    {id:1,puesto:"Ejecutivo de Ventas",depto:"Ventas",pub:"LinkedIn, OCC"},
    {id:2,puesto:"Desarrollador Full-Stack",depto:"Tecnología",pub:"LinkedIn"},
  ],
  etapas:["Postulado","Filtro de CV","Entrevista","Prueba técnica","Oferta"],
  cands:[
    {id:1,nombre:"Carlos Vera",vac:2,etapa:0,exp:"4 años"},{id:2,nombre:"Elena Díaz",vac:2,etapa:1,exp:"3 años"},
    {id:3,nombre:"Rubén Pool",vac:1,etapa:2,exp:"2 años",fecha:"2026-11-12 10:00"},{id:4,nombre:"Lucía Mora",vac:2,etapa:3,exp:"5 años",prueba:"Pendiente"},
    {id:5,nombre:"Iván Salas",vac:1,etapa:0,exp:"1 año"},{id:6,nombre:"Nora Beltrán",vac:1,etapa:4,exp:"3 años"},
  ],
  cursos:[
    {id:1,emp:2,curso:"Lean Manufacturing",tipo:"Técnico",horas:20,prog:70,impacto:"+8% eficiencia"},
    {id:2,emp:3,curso:"Negociación avanzada",tipo:"Humano",horas:12,prog:40,impacto:"+5% cierres"},
    {id:3,emp:5,curso:"Arquitectura cloud",tipo:"Técnico",horas:30,prog:100,impacto:"−12% incidencias"},
    {id:4,emp:6,curso:"Atención al cliente",tipo:"Humano",horas:8,prog:20,impacto:"—"},
    {id:5,emp:4,curso:"Reforma fiscal 2026",tipo:"Técnico",horas:10,prog:100,impacto:"0 multas"},
  ],
  kpis:{1:[95,90,92],2:[85,80,86],3:[75,80,79],4:[90,86,88],5:[82,78,83],6:[65,70,72],7:[92,88,90]}, // metas, competencias, 360
  incentivos:{1:12000,2:6000,3:4500,4:3000,5:3500,6:1000,7:2000},
  beneficios:[
    {n:"Seguro de gastos médicos",t:"Higiénico"},{n:"Vales de despensa",t:"Higiénico"},{n:"Fondo de ahorro",t:"Higiénico"},
    {n:"Reconocimiento mensual",t:"Motivador"},{n:"Plan de carrera",t:"Motivador"},{n:"Bono por desempeño",t:"Motivador"},
  ],
  encuesta:[
    {q:"Me siento comprometido con los valores de la empresa",v:[4,5,4,3,5,4,5]},
    {q:"Mi jefe me da retroalimentación útil",v:[5,4,3,3,4,3,5]},
    {q:"Tengo las herramientas para hacer bien mi trabajo",v:[4,4,3,4,3,2,5]},
    {q:"La carga de trabajo es razonable",v:[3,3,2,3,4,2,4]},
    {q:"Recomendaría esta empresa como lugar de trabajo",v:[5,4,4,4,5,3,5]},
  ],
  incidentes:[
    {id:1,fecha:"2026-10-03",area:"Operaciones",desc:"Resbalón en pasillo de almacén",nivel:"Leve",estado:"Cerrado"},
    {id:2,fecha:"2026-10-21",area:"Tecnología",desc:"Reporte de fatiga visual por pantallas",nivel:"Moderado",estado:"En seguimiento"},
  ],
  higiene:[["Extintores vigentes",1],["Señalización de rutas de evacuación",1],["Ergonomía en estaciones de trabajo",0],["Iluminación ≥ 300 lux en oficinas",1],["Pausas activas implementadas",0],["Botiquín completo",1]],
  contratos:[["Contrato individual — Indeterminado",4],["Contrato individual — Determinado",1],["Periodo de prueba",1],["Contrato colectivo",0]],
  sel:null,
};
