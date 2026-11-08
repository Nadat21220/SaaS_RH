# Talento360 — SaaS de Recursos Humanos

Plataforma web para administrar el capital humano de una empresa. Se abre con doble clic en `index.html` (no requiere instalación ni servidor).

## Módulos

| # | Módulo | Archivo |
|---|--------|---------|
| 1 | Análisis y diseño de puestos | `js/modules/puestos.js` |
| 2 | Reclutamiento y selección técnica (ATS) | `js/modules/ats.js` |
| 3 | Capacitación y desarrollo de competencias | `js/modules/capacitacion.js` |
| 4 | Evaluación del desempeño | `js/modules/desempeno.js` |
| 5 | Compensaciones y nómina | `js/modules/nomina.js` |
| 6 | Clima, cultura y organización informal | `js/modules/clima.js` |
| 7 | Relaciones laborales, expediente digital e higiene industrial | `js/modules/relaciones.js` |

## Estructura

```
index.html        Página principal
css/styles.css    Estilos
js/data.js        Datos de muestra compartidos
js/utils.js       Funciones auxiliares
js/core.js        Catálogo de módulos y componentes de UI
js/modules/       Un archivo por módulo
js/app.js         Navegación, eventos y arranque
```

## Notas
- Los datos son de muestra y se reinician al recargar la página.
- Fundamento teórico: Bernal Magaña (2017); Áreas Administrativas (2026).
