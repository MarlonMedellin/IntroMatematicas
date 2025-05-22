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