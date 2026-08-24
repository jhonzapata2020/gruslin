---
name: GRUSLIN Nodo Neiva
description: Una red regional de conocimiento en movimiento, trazada como un mapa metropolitano nocturno.
colors:
  ink: "#00142f"
  ink-deep: "#000c20"
  ink-raised: "#062348"
  porcelain: "#f4f1e9"
  muted: "#b9c8d8"
  route-blue: "#1577e8"
  route-cyan: "#38bdf8"
  route-gold: "#f0b429"
  route-green: "#25a866"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(4.2rem, 8vw, 7.5rem)"
    fontWeight: 600
    lineHeight: 0.78
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(3.8rem, 7vw, 6.2rem)"
    fontWeight: 600
    lineHeight: 0.84
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "0.025em"
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.18em"
rounded:
  chip: "0.375rem"
  control: "0.75rem"
  panel: "0.875rem"
  dialog: "1rem"
  map: "1.25rem"
  station: "9999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  container-mobile: "1rem"
  container-desktop: "2rem"
  section: "clamp(5rem, 10vw, 9rem)"
components:
  button-primary:
    backgroundColor: "{colors.route-gold}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.7rem 1rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "#ffc84f"
    textColor: "{colors.ink-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.7rem 1rem"
    height: "3rem"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.porcelain}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.7rem 1rem"
    height: "3rem"
  field-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.porcelain}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1rem"
  panel-enamel:
    backgroundColor: "{colors.ink-raised}"
    textColor: "{colors.porcelain}"
    rounded: "{rounded.panel}"
    padding: "2rem"
  surface-enamel:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.porcelain}"
  surface-porcelain:
    backgroundColor: "{colors.porcelain}"
    textColor: "{colors.ink}"
---

# Design System: GRUSLIN Nodo Neiva

## Overview

**Creative North Star: "La Red Regional en Movimiento"**

GRUSLIN vive como un mapa metropolitano nocturno de conocimiento: una red activa donde líneas de investigación, proyectos, formación, personas, publicaciones y trayectoria son destinos conectados, no tarjetas intercambiables. El azul esmalte crea el campo institucional; la porcelana aporta contraste y materialidad; las rutas cian, dorada, verde y azul convierten el recorrido en una forma de orientación.

La interfaz combina señalización pública con rigor académico. La tipografía condensada da dirección y escala, mientras Barlow mantiene la lectura humana y estable. La composición alterna campos nocturnos y superficies claras físicamente texturizadas, con estaciones circulares, líneas continuas y divisores que hacen visible la estructura sin convertirla en un dashboard. El centro editorial local extiende el mismo mundo como una sala de control sobria: administra lo que circula en la landing sin fingir que existe un CMS remoto.

**Key Characteristics:**

- Mapa de conocimiento como sistema espacial y narrativo.
- Azul esmalte profundo contra porcelana cálida.
- Cuatro rutas cromáticas con funciones reconocibles.
- Estaciones circulares, trazos rectos y rótulos condensados.
- Evidencia institucional integrada al recorrido, no aislada en tarjetas.
- Esmalte y porcelana físicos mediante texturas raster sutiles y repetibles.
- Contenido público editable localmente con estado de persistencia siempre visible.

## Colors

La paleta une noche institucional, porcelana legible y cuatro señales de ruta de alta claridad.

### Primary

- **Azul Esmalte:** campo principal de navegación, hero, proyectos y controles oscuros; establece continuidad institucional y profundidad.
- **Porcelana de Estación:** texto de máximo contraste, estaciones, fondos editoriales y superficies de evidencia.

### Secondary

- **Ruta Dorada:** acción primaria, conexión entre manifiesto y mapa, hitos y acentos de decisión.
- **Ruta Cian:** orientación, etiquetas de red, software libre y señal activa.

### Tertiary

- **Ruta Verde:** participación, estado operativo, equipo y ciencia abierta.
- **Ruta Azul:** cuarta línea del mapa, innovación y segmentos de evidencia cuantitativa.

### Neutral

- **Noche Profunda:** pie, fondo de scrollbar y estrato más oscuro del sistema.
- **Azul Elevado:** superficie secundaria para separar zonas nocturnas sin romper la continuidad.
- **Bruma Informativa:** texto secundario sobre fondos oscuros; conserva jerarquía sin perder legibilidad.

### Named Rules

**The Route Authority Rule.** Cada color de ruta debe señalar una conexión, un estado o un destino; nunca se usa como confeti decorativo.

**The Porcelain Exchange Rule.** La porcelana alterna entre texto luminoso y campo editorial, pero siempre conserva el contraste azul tinta que hace reconocible el sistema.

## Typography

**Display Font:** Barlow Condensed (con `sans-serif` como respaldo)  
**Body Font:** Barlow (con `system-ui, sans-serif` como respaldo)  
**Label Font:** Barlow Condensed (con `sans-serif` como respaldo)

**Character:** La pareja tipográfica toma la compresión y autoridad de la señalización metropolitana sin perder el tono abierto de una comunidad académica. Los titulares son directos, monumentales y en mayúsculas; el cuerpo permanece amplio, sereno y fácil de leer.

### Hierarchy

- **Display** (semibold, escala fluida, línea muy compacta): reservado para el manifiesto de apertura; no más de unas pocas palabras por línea.
- **Headline** (semibold, escala fluida, línea compacta): abre destinos principales y mantiene una silueta vertical consistente.
- **Title** (semibold, compacto, tracking abierto): nombres de proyectos, integrantes e hitos que funcionan como rótulos de estación.
- **Body** (regular, ritmo de lectura generoso): explicación, evidencia y contenido institucional; limitar la medida habitual a unas 60–68 letras.
- **Label** (semibold, espaciado amplio, mayúsculas): estado, métrica, código de ruta y metadatos breves.

### Named Rules

**The Sign Before Paragraph Rule.** Todo destino importante empieza con una señal condensada clara antes de entrar en texto explicativo.

**The Compression Rule.** La compresión pertenece a títulos y rótulos; los párrafos nunca adoptan el ancho ni el espaciado extremo de la señalización.

## Layout

El contenedor principal mide como máximo 88rem y conserva una canaleta de 1rem en móvil y 2rem desde 768px. Las secciones respiran con una separación vertical fluida entre 5rem y 9rem. La página alterna composiciones asimétricas de dos columnas con recorridos lineales: el manifiesto se apoya a la izquierda y el mapa activo domina la derecha en escritorio; en móvil, el mapa se condensa y se inserta inmediatamente después del titular para conservar la historia.

La estructura cambia en tres umbrales observados: 640px amplía controles y contenido compacto, 768px activa composiciones y recorridos de dos columnas, y 1024px presenta la navegación completa y el mapa hero de gran formato. En móvil, proyectos y rutas formativas no pierden la metáfora: una espina vertical de 4px permanece visible a la izquierda, las tarjetas se desplazan para liberar esa vía y cada destino conserva su estación circular; desde 768px la espina crece y las estaciones ganan diámetro y anillo. Las líneas verticales, estaciones y divisores conectan bloques sucesivos; los bordes no crean una cuadrícula de tarjetas independientes.

El panel editorial se abre como una superficie separada mediante `?panel=admin`. Su navegación usa una cuadrícula compacta en móvil y una columna lateral fija desde escritorio; los editores de colecciones se apilan antes de pasar a selector y formulario en dos columnas amplias. El contenido largo del panel puede partir palabras para impedir desbordes.

**The Continuous Journey Rule.** El scroll debe sentirse como una ruta que pasa por líneas, proyectos, equipo, trayectoria y participación; cada transición conserva al menos una señal compartida.

## Elevation & Depth

El sistema es plano por defecto y construye profundidad con cambios tonales, bordes translúcidos, campos de color y dos materiales raster físicos. `surface-enamel` combina el campo tinta con `public/textures/enamel.webp` bajo velos nocturnos y mezcla `soft-light`; `surface-porcelain` combina porcelana con `public/textures/porcelain.webp` bajo un velo claro y mezcla `multiply`. `enamel-panel` reutiliza la textura de esmalte sobre azul elevado a una escala más cerrada. Las texturas aportan poro, cocción y variación microscópica: nunca deben convertirse en patrones protagonistas ni reducir el contraste del contenido.

Las sombras aparecen únicamente donde un objeto necesita separarse del fondo: mapa principal, paneles esmaltados, estaciones superpuestas y modal. El desenfoque se reserva para la cabecera fija y el velo del diálogo.

### Shadow Vocabulary

- **Panel suspendido** (`0 20px 48px -32px rgba(0, 0, 0, 0.75)`): separación ambiental de proyectos sobre el campo azul.
- **Mapa principal** (`0 30px 70px -38px rgba(0, 0, 0, 0.9)`): ancla el diagrama como instrumento central del primer viewport.
- **Diálogo enfocado** (`0 30px 90px -30px rgba(0, 0, 0, 0.95)`): única elevación dominante; separa la postulación del recorrido subyacente.
- **Anillo de estación** (`0 0 0 2px #f4f1e9` o `0 0 0 2px #00142f`): delimita nodos sobre fondos oscuros o claros.

### Named Rules

**The Flat Network Rule.** Las rutas, registros y secciones permanecen planas; la sombra sólo separa instrumentos o estados que flotan de verdad.

**The Real Material Rule.** Esmalte y porcelana se expresan con sus texturas raster de procedencia registrada; no se sustituyen por gradientes decorativos ni ruido CSS genérico.

## Shapes

La geometría mezcla líneas ortogonales de mapa con curvas controladas. Los botones y campos usan esquinas suavemente redondeadas; los paneles tienen un radio moderado; las estaciones y estados son círculos completos. Los bordes son finos y translúcidos sobre azul, o tinta atenuada sobre porcelana. La retícula de fondo del mapa es amplia y tenue para que las rutas mantengan prioridad.

**The Station Circle Rule.** Los círculos representan nodos, orden, estado o conexión. No se convierten en adornos de fondo ni en contenedores arbitrarios.

## Components

### Buttons

- **Shape:** control compacto de esquina suave y altura táctil mínima.
- **Primary:** ruta dorada sobre noche profunda; se reserva para recorrer, conectar, enviar o abrir un destino principal.
- **Hover / Focus:** asciende 2px con una transición de 220ms; el foco usa un anillo doble tinta/dorado visible.
- **Quiet:** transparente con borde porcelana; al pasar el cursor se invierte a porcelana sobre tinta.
- **Disabled:** conserva la forma, reduce opacidad y elimina la expectativa de interacción mediante cursor no disponible.

### Chips

- **Style:** etiquetas pequeñas con borde claro translúcido, texto informativo y esquinas discretas.
- **State:** los estados operativos añaden una estación verde; los códigos de ruta usan el color correspondiente sin llenar toda la etiqueta.

### Cards / Containers

- **Corner Style:** panel esmaltado de radio moderado; el mapa usa una curva ligeramente mayor.
- **Background:** `enamel-panel` superpone la textura física de esmalte sobre azul elevado; `surface-enamel` cubre regiones nocturnas completas y `surface-porcelain` materializa los campos editoriales claros.
- **Shadow Strategy:** sólo los paneles nocturnos que necesitan separación usan la elevación ambiental.
- **Border:** trazo claro translúcido sobre azul; tinta atenuada sobre porcelana.
- **Internal Padding:** de 1.5rem a 2.5rem según el tamaño del destino.

### Inputs / Fields

- **Style:** azul tinta, borde porcelana translúcido, texto claro y esquinas de control.
- **Focus:** el borde cambia a dorado y el anillo global mantiene contraste consistente.
- **Error / Disabled:** el error utiliza rosa únicamente para validación; las acciones bloqueadas bajan opacidad sin ocultar su etiqueta.

### Navigation

La cabecera fija funciona como línea institucional: marca-estación a la izquierda, destinos con puntos de ruta al centro y conexión dorada a la derecha. En móvil, los destinos pasan a una lista de ancho completo con divisores; la acción principal cierra el recorrido. Los enlaces cambian de bruma a porcelana en hover, sin píldoras ni cajas individuales.

### Knowledge Map

El mapa es la firma del sistema. Cuatro rutas ortogonales nacen del nodo GRUSLIN, contienen estaciones de porcelana y se distinguen por cian, dorado, verde y azul. Una línea clara segmentada avanza lentamente sobre cada ruta; con movimiento reducido, la animación se detiene. La versión móvil conserva las cuatro direcciones y el nodo central en un diagrama compacto.

### Route Timeline

Líneas de trabajo, proyectos, rutas formativas, integrantes e hitos reutilizan una columna de estaciones conectadas. Cada nodo fija orden, color y estado; el contenido se despliega al lado sin encerrarse en una cuadrícula repetitiva. La espina y sus estaciones se conservan desde móvil: no son un adorno exclusivo del breakpoint de escritorio.

### Project Service Routes

Los proyectos se dividen en dos carriles editoriales explícitos. **Servicios operativos / Ruta A** contiene evidencia pública y capacidades verificables, con estados verdes. **Conceptos en exploración / Ruta B** contiene propuestas demostrativas, capacidades propuestas y estados dorados; debe explicar que no son servicios activos ni resultados entregados. Ambos carriles comparten la misma espina y numeración continua, pero nunca comparten lenguaje de verificación.

### Team Profiles

La lista de integrantes funciona como selector de estación y abre un perfil completo debajo. El detalle incluye retrato, cargo, titular profesional, biografía, enlace de LinkedIn cuando exista, áreas que enseña o acompaña, áreas de enfoque y una acción de contacto dirigida. La selección usa `aria-pressed`; no se navega a una ficha vacía ni se reduce a nombre y cargo.

### Learning, Recordings & Blog

**Learning** presenta cuatro niveles como estaciones sobre una espina de porcelana, con nombre, nivel, descripción y temas. **Recordings** es un registro editorial filtrado por `published`; muestra duración, nivel, resumen y distingue una grabación reproducible de un enlace aún pendiente. **Blog** sólo publica entradas marcadas como visibles, identifica contenidos de muestra y alterna resumen/cuerpo mediante lectura expandible. Estas colecciones prolongan la historia de la red: formación, archivo y circulación de ideas son destinos, no anexos genéricos.

### Local Editorial Panel

El panel se abre con `?panel=admin` y administra Resumen, Integrantes, Proyectos, Formación, Grabaciones y Blog. Los formularios editan las cinco colecciones compartidas por la landing; proyectos, grabaciones y entradas permiten crear y eliminar, mientras importación, exportación y restablecimiento hacen explícito el control de la copia local.

La persistencia usa `localStorage` bajo un modelo local-first. Cada cambio pasa por los estados `saving`, `saved` o `error`, representados respectivamente por señal dorada, verde o rosa y texto mediante una región `aria-live`; el error ofrece reintento y recomienda exportar una copia. Esta herramienta no sincroniza entre navegadores, dispositivos o usuarios, no reemplaza un backend y no debe presentarse como CMS multiusuario. El JSON exportado es el mecanismo portátil de respaldo y transferencia.

**The Honest Persistence Rule.** La interfaz siempre dice “en este navegador”; nunca insinúa publicación remota, colaboración en tiempo real o sincronización que el producto no ofrece.

## Do's and Don'ts

### Do:

- **Do** construir nuevos destinos como extensiones de una ruta continua, con una señal compartida visible.
- **Do** reservar el dorado para acciones y conexiones decisivas, el cian para orientación, el verde para participación o actividad y el azul para la cuarta línea de conocimiento.
- **Do** alternar azul esmalte y porcelana para cambiar el ritmo sin abandonar el mismo mundo visual.
- **Do** mantener titulares condensados y cuerpos amplios, con foco visible y movimiento reducido respetado.
- **Do** mantener separados los servicios operativos y los conceptos demostrativos, con estados y lenguaje de evidencia inequívocos.
- **Do** preservar la espina y las estaciones en móvil, y mantener visibles los estados de guardado del panel editorial.
- **Do** conservar `enamel.webp`, `porcelain.webp` y sus sidecars de procedencia como una sola unidad de material.

### Don't:

- **Don't** convertir la página en una landing tecnológica de tarjetas repetidas o una cuadrícula bento.
- **Don't** usar degradados brillantes, neón genérico o glows como sustituto de la materialidad esmaltada.
- **Don't** aplicar colores de ruta al azar o introducir una nueva ruta cromática sin una función persistente.
- **Don't** encerrar navegación, evidencia o equipo en píldoras decorativas independientes.
- **Don't** reemplazar estaciones, rutas y divisores por iconografía genérica que borre la metáfora de red regional.
- **Don't** presentar un concepto en exploración como servicio activo, capacidad verificada o resultado institucional.
- **Don't** describir el panel local como CMS remoto, multiusuario o sincronizado entre dispositivos.
- **Don't** aplanar las superficies físicas a colores sólidos cuando la textura raster puede conservarse con contraste seguro.
