# Shipping Raster Inventory

El artefacto publica nueve rásteres: siete activos institucionales o retratos preexistentes y dos texturas físicas producidas para el mundo visual aprobado. Los PNG preexistentes conservan su procedencia en un bloque `tEXt` llamado `origin`; los WebP conservan el prompt completo embebido y además viajan con un sidecar JSON legible.

| ID | Ruta | Uso | Estrategia | Dimensiones | Formato | Transparencia | Procedencia embebida | QA |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| team-angel-vargas | `public/avatars/angel-vargas.png` | Retrato real del integrante en la ruta de equipo | direct | 400×400 | PNG RGBA | Sí | Activo preexistente suministrado por el proyecto GRUSLIN; retrato real; no generado | Verificado |
| team-emmanuel-palacios | `public/avatars/emmanuel-palacios.png` | Retrato real del integrante en la ruta de equipo | direct | 400×400 | PNG RGBA | Sí | Activo preexistente suministrado por el proyecto GRUSLIN; retrato real; no generado | Verificado |
| team-jhon-zapata | `public/avatars/jhon-zapata.png` | Retrato real del integrante en la ruta de equipo | direct | 400×400 | PNG RGBA | Sí | Activo preexistente suministrado por el proyecto GRUSLIN; retrato real; no generado | Verificado |
| team-jose-rivera | `public/avatars/jose-rivera.png` | Retrato real del integrante en la ruta de equipo | direct | 400×400 | PNG RGBA | Sí | Activo preexistente suministrado por el proyecto GRUSLIN; retrato real; no generado | Verificado |
| team-pablo-hernandez | `public/avatars/pablo-hernandez.png` | Retrato real del integrante en la ruta de equipo | direct | 400×400 | PNG RGBA | Sí | Activo preexistente suministrado por el proyecto GRUSLIN; retrato real; no generado | Verificado |
| unad-alta-calidad | `public/unad-acreditada-logo.png` | Firma institucional visible en el pie | direct | 412×105 | PNG RGBA | Sí | Activo institucional oficial preexistente suministrado por el proyecto GRUSLIN; no generado | Verificado |
| unad-oficial | `public/unad-official-logo.png` | Firma institucional disponible para superficies del producto | direct | 120×81 | PNG RGBA | Sí | Activo institucional oficial preexistente suministrado por el proyecto GRUSLIN; no generado | Verificado |
| texture-fired-enamel | `public/textures/enamel.webp` | Textura repetible de esmalte azul nocturno para `surface-enamel` y `enamel-panel` | produce | 640×640 | WebP | No | Prompt completo embebido; sidecar `public/textures/enamel.webp.json`; creado el 2026-08-24 | Verificado |
| texture-station-porcelain | `public/textures/porcelain.webp` | Textura repetible de porcelana cálida para `surface-porcelain` | produce | 640×640 | WebP | No | Prompt completo embebido; sidecar `public/textures/porcelain.webp.json`; creado el 2026-08-24 | Verificado |

## Texture provenance sidecars

- `public/textures/enamel.webp.json` conserva el prompt exacto de producción y la fecha de creación del esmalte vítreo nocturno.
- `public/textures/porcelain.webp.json` conserva el prompt exacto de producción y la fecha de creación de la porcelana cálida.
- Cada sidecar es parte del mismo activo que su WebP. No debe renombrarse, moverse o eliminarse por separado.

## Semantic media

El mapa metropolitano, sus estaciones, las rutas, los indicadores y los iconos permanecen como SVG/HTML/CSS semánticos. No deben rasterizarse: necesitan escalar, animarse, responder a estados y conservar accesibilidad.

## Verification

Último escaneo de procedencia: `SCAN: 9 rasters, 0 missing`.
