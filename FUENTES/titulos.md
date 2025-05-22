indicaciones para cada una de las diapositivas que tienen titulos de secciones o las diapositivas de cada seccion

Por favor, genera los siguientes elementos de título para una diapositiva de presentación, aplicando los estilos y comportamientos responsivos que se detallan a continuación:

**1. Título Principal de la Diapositiva:**

* **Texto:** Debe constar de dos líneas.
    * Línea 1: "Descomposición en"
    * Línea 2: "Factores Primos y MCD"
* **Estructura HTML:** Utiliza elementos `<h1>` para cada línea.
* **Estilo del Texto (para ambas líneas):**
    * **Color:** `#172139` (azul oscuro primario).
    * **Fuente:** 'Montserrat', sans-serif.
    * **Grosor:** Negrita (font-weight: 700).
    * **Tamaño Base:** `3rem` (48px) con altura de línea de `1`.
    * **Márgenes Inferiores:**
        * Línea 1: `0.5rem` (8px).
        * Línea 2: `1rem` (16px).
* **Línea Decorativa (debajo del Título Principal):**
    * **Estructura HTML:** Un `<div>`.
    * **Dimensiones:** Ancho de `8rem` (128px), Alto de `0.25rem` (4px).
    * **Color de Fondo:** `#FBBB28` (verde/amarillo terciario).
* **Comportamiento Responsivo del Texto del Título Principal:**
    * **Pantallas hasta 1280px de ancho:** Tamaño de fuente `2.5rem` (40px), altura de línea `2.75rem`.
    * **Pantallas hasta 768px de ancho:** Tamaño de fuente `2rem` (32px), altura de línea `2.25rem`. En este punto, el contenedor del título principal (que también incluye un icono) debe cambiar su dirección de `flex` a `column` y alinear los elementos al inicio (`flex-start`).

**2. Título de Sesión (Formato Etiqueta/Insignia):**

* **Texto:** "Sesión 2"
* **Estructura HTML:** Un `<div>`.
* **Estilo General:**
    * **Visualización:** `inline-block`.
    * **Color de Fondo:** `#172139` (azul oscuro primario).
    * **Color de Texto:** `#ffffff` (blanco).
    * **Fuente:** 'Montserrat', sans-serif.
    * **Grosor:** Medio (font-weight: 500).
    * **Tamaño de Fuente Base:** `1.25rem` (20px) con altura de línea de `1.75rem`.
    * **Relleno (Padding):**
        * Horizontal (izquierda y derecha): `1.5rem` (24px).
        * Vertical (arriba y abajo): `0.5rem` (8px).
    * **Bordes Redondeados:** Solo en el lado derecho, completamente redondeado (ej. `border-top-right-radius: 9999px; border-bottom-right-radius: 9999px;`).
* **Comportamiento Responsivo del Título de Sesión:**
    * **Pantallas hasta 768px de ancho:**
        * Tamaño de fuente: `0.875rem` (14px).
        * Relleno Horizontal: `1rem` (16px).
        * Relleno Vertical: `0.25rem` (4px).

Asegúrate de que todos los elementos utilicen la familia de fuentes 'Montserrat', sans-serif, como base. El diseño debe ser limpio y profesional, similar al de una presentación moderna.

indicaciones para la primer diapositiva en la que se pone el titulo del modulo

---
Aquí tienes un prompt para que una IA recree la página HTML, centrándose en sus propiedades visuales y estructurales:

Genera el código HTML y CSS para una página web de una sola diapositiva titulada 'Criterios de Divisibilidad'. La página debe coincidir visualmente con las siguientes especificaciones detalladas, incluyendo la adaptabilidad (responsiveness) para anchos de pantalla de hasta 1280px y 768px. Presta especial atención al posicionamiento, tamaño, colores, fuentes y elementos decorativos.

### Estructura y Diseño General:

* **Contenedor Principal de Títulos (`.title-content-container`):**
    * Posicionamiento absoluto, cubriendo todo el espacio del contenedor padre (`slide`).
    * **Flexbox:** Contenido centrado vertical y horizontalmente.
    * **Relleno (escritorio):** `4rem` horizontal, `160px` superior.
    * `box-sizing: border-box;`
    * `z-index: 2;`
    * `text-align: center;`
    * **Responsivo:**
        * **Máx. 1280px:** `padding-left: 2rem; padding-right: 2rem; padding-top: 140px;`
        * **Máx. 768px:** `padding-left: 1rem; padding-right: 1rem; padding-top: 100px;`

### Encabezado y Títulos:

* **Barra de Encabezado (`.header-bar`):**
    * Elemento `div`.
    * Posicionamiento absoluto: `top: 0; left: 0;`
    * `width: 100%;`
    * **Altura (escritorio):** `160px;`
    * **Color de Fondo:** `#172139;`
    * `z-index: 1;`
    * **Responsivo (Máx. 768px):** `height: 100px;`
* **Título Principal (`h1`): "Criterios de Divisibilidad"**
    * **Color de Texto:** `#172139;`
    * **Tamaño de Fuente (escritorio):** `4.5rem (72px);`
    * `line-height: 1;`
    * **Grosor de Fuente:** `700;`
    * **Familia de Fuentes:** Heredada (asumir 'Montserrat', sans-serif).
    * **Responsivo:**
        * **Máx. 1280px:** `font-size: 3rem; line-height: 1.1;`
        * **Máx. 768px:** `font-size: 2.25rem;`
* **Línea de Acento (`.accent-line`):**
    * Elemento `div`, colocado entre el título y el subtítulo.
    * **Márgenes (escritorio):** `margin-top: 1.5rem; margin-bottom: 1rem;`
    * **Dimensiones (escritorio):** `height: 6px; width: 320px;`
    * **Fondo:** `linear-gradient(90deg, #B4C42C 0%, #E9901E 50%, #FBBB28 100%);`
    * **Responsivo:**
        * **Máx. 1280px:** `width: 250px;`
        * **Máx. 768px:** `width: 180px; margin-top: 1rem; margin-bottom: 0.75rem;`
* **Subtítulo (`h2`): "Matemáticas Básicas"**
    * **Color de Texto:** `#195855;`
    * **Tamaño de Fuente (escritorio):** `2.25rem (36px);`
    * `line-height: 2.5rem;`
    * **Grosor de Fuente:** `500;`
    * **Familia de Fuentes:** Heredada.
    * **Responsivo:**
        * **Máx. 1280px:** `font-size: 1.75rem; line-height: 1.2;`
        * **Máx. 768px:** `font-size: 1.25rem;`

### Elementos Decorativos (Fondo y Primer Plano):

* **Formas Circulares Decorativas (`.shape`):** Dos elementos `div`.
    * **CSS Común:** `position: absolute; border-radius: 50%; opacity: 0.2; z-index: 0;`
    * **Instancia 1 (Turquesa):**
        * **Dimensiones (escritorio):** `180px x 180px;`
        * **Color de Fondo:** `#00AEAC;`
        * **Posición (escritorio):** `top: 450px; left: -60px;`
        * **Responsivo (Máx. 768px):** `width: 90px; height: 90px; top: 350px; left: -30px;`
    * **Instancia 2 (Amarillo):**
        * **Dimensiones (escritorio):** `120px x 120px;`
        * **Color de Fondo:** `#FBBB28;`
        * **Posición (escritorio):** `top: 180px; right: -40px;`
        * **Responsivo (Máx. 768px):** `width: 90px; height: 90px; top: 120px; right: -20px;`
* **Cuadrícula de Patrón de Fondo (`.pattern-grid`):**
    * Elemento `div`.
    * Posicionamiento absoluto: `bottom: 0; right: 0;`
    * **Dimensiones (escritorio):** `300px x 300px;`
    * `opacity: 0.1;`
    * **Imagen de Fondo:** `linear-gradient(#172139 1px, transparent 1px), linear-gradient(90deg, #172139 1px, transparent 1px);`
    * `background-size: 20px 20px;`
    * `transform: rotate(15deg);`
    * `z-index: 0;`
    * **Responsivo (Máx. 768px):** `width: 150px; height: 150px;`
* **Números Flotantes Decorativos (`.floating-numbers`):** Múltiples elementos `div`.
    * **CSS Común:** `position: absolute; font-weight: bold; opacity: 0.5; animation: float 10s infinite ease-in-out; z-index: 1;`
    * **Animación (`@keyframes float`):** `0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); }`
    * **Las instancias individuales variarán por:** tamaño de fuente (ej. `text-5xl`, `text-6xl`, `text-4xl`), color de texto (ej. `#B4C42C`), `top`, `left`, `animation-delay`.
    * **Responsivo:**
        * **Máx. 1280px:** `opacity: 0.3;`
        * **Máx. 768px:** `display: none;`
* **Símbolos Matemáticos de Fondo (`.math-symbol`):** Múltiples elementos `div`.
    * **CSS Común:** `position: absolute; font-weight: bold; opacity: 0.1; color: #195855; z-index: 0;`
    * **Las instancias individuales variarán por:** contenido (ej. '÷', '%', '='), tamaño de fuente (ej. `text-8xl`, `text-9xl`), `top`, `left`/`right`.
    * **Responsivo:**
        * **Máx. 1280px:** `opacity: 0.05;`
        * **Máx. 768px:** `display: none;`
* **Iconos Matemáticos Inferiores:**
    * **Contenedor (`div`):**
        * **Posicionamiento (escritorio):** Absoluto, `bottom: 3rem; left: 4rem;`
        * **Diseño:** `display: flex; align-items: center;`
        * `z-index: 1;`
        * **Responsivo (Máx. 768px):** `bottom: 1rem; left: 50%; transform: translateX(-50%); padding: 0.5rem;`
    * **Iconos (`i` elementos):** Tres instancias usando Font Awesome Solid (`fas fa-divide`, `fas fa-equals`, `fas fa-percentage`).
        * **Color:** `#108181;`
        * **Tamaño (escritorio):** `text-5xl;`
        * **Margen Derecho (primeros dos):** `1.5rem;`
        * **Responsivo (Máx. 768px):** `font-size: 2rem; margin-right: 0.5rem !important;`

La salida debe ser un archivo HTML completo con CSS incrustado, listo para ser renderizado en un navegador web. Asume una estructura básica de HTML5 y que una librería de Font Awesome está enlazada para los iconos. Usa nombres de clase y estilos en línea apropiados como se indica en las descripciones.