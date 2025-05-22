¡Excelente! Continuemos entonces con el **Módulo 2: Números Primos, MCM y MCD**.

---

**Módulo 2: Números Primos, Mínimo Común Múltiplo (MCM) y Máximo Común Divisor (MCD)**

**Nombre del Tema:** Números Primos, Mínimo Común Múltiplo (MCM) y Máximo Común Divisor (MCD): Herramientas Fundamentales para la Descomposición y Relación entre Números.

**Introducción del módulo:**
En este módulo profundizaremos en los Números Primos y los criterios de divisibilidad (2, 3, 5, 7, 11), aprenderemos la descomposición factorial de números compuestos y dominaremos el cálculo del Máximo Común Divisor (MCD) y el Mínimo Común Múltiplo (MCM). Resolveremos problemas prácticos que integren estos conceptos y comprobaremos su utilidad en la simplificación de fracciones y en la planificación de tareas. Este contenido refuerza el núcleo de formación básica del primer semestre.

**Motivación del módulo:**
La capacidad para descomponer números, identificar primos y calcular MCD y MCM es esencial en ámbitos como la ingeniería, la arquitectura y la salud, donde la distribución uniforme de recursos o la simplificación de datos resultan críticas. Este módulo aporta competencias aplicadas, pertinentes para resolver ejercicios académicos y desafíos profesionales. Al reforzar estos fundamentos numéricos, los estudiantes adquieren la solidez matemática necesaria para su éxito en el Colegio Mayor de Antioquia.

**(Aquí se insertaría visualmente en Moodle un mapa conceptual con los términos: Números primos, Criterios de divisibilidad (2, 3, 5, 7, 11), Descomposición en factores primos, Máximo Común Divisor (MCD), Mínimo Común Múltiplo (MCM), Resolución de problemas.)**

---

**DESARROLLO TEMÁTICO**

---

**Sesión 1: Números primos y criterios de divisibilidad**

**Objetivo de aprendizaje:**
Identificar números primos y aplicar correctamente los criterios de divisibilidad (por 2, 3, 5, 7, 11) para facilitar la descomposición de números y la resolución de problemas en diversos contextos profesionales y académicos.

**● Contenido 1: Números Primos y Compuestos**

**Texto con explicación completa:**
Dentro del conjunto de los números enteros (especialmente los positivos), encontramos dos categorías muy importantes según la cantidad de divisores que poseen: los números primos y los números compuestos. Un **divisor** de un número es aquel que lo divide exactamente, sin dejar residuo.

*   **Número Primo:** Es un número natural mayor que 1 que tiene únicamente dos divisores distintos: él mismo y el número 1.
    *   Ejemplos de números primos: $$2, 3, 5, 7, 11, 13, 17, 19, 23, ...$$
    *   El número $$2$$ es el único número primo par. Todos los demás números primos son impares.
    *   El número $$1$$ no se considera primo porque solo tiene un divisor (él mismo).
    *   *Aplicación en Tecnología en Seguridad y Salud en el Trabajo:* Aunque no directo, la idea de "indivisibilidad" o "unidad básica" de los primos puede ser una analogía para elementos fundamentales en protocolos de seguridad que no pueden subdividirse más sin perder su esencia.

*   **Número Compuesto:** Es un número natural mayor que 1 que tiene más de dos divisores. Es decir, además de ser divisible por 1 y por sí mismo, es divisible por al menos otro número.
    *   Ejemplos de números compuestos: $$4, 6, 8, 9, 10, 12, 14, 15, ...$$
    *   Por ejemplo, $$12$$ es compuesto porque sus divisores son $$1, 2, 3, 4, 6, 12$$.
    *   *Aplicación en Administración de Empresas Turísticas:* Un paquete turístico podría estar compuesto por varios servicios (transporte, hotel, tour). Cada servicio es un "componente", y el paquete es "compuesto".

Entender la diferencia entre números primos y compuestos es el primer paso para la descomposición factorial, una herramienta muy útil en matemáticas.
*(Fuente: Adaptado de Arcila Vanegas & Gómez Noreña, 2016, p. 7)*

**● Contenido 2: Concepto de Potencia (Repaso Breve)**

**Texto con explicación completa:**
Antes de adentrarnos completamente en la descomposición factorial, es útil recordar brevemente el concepto de **potencia**, ya que los factores primos a menudo se repiten.
Una potencia es una forma abreviada de escribir una multiplicación de factores iguales. Se compone de una **base** (el número que se multiplica) y un **exponente** (el número de veces que se multiplica la base por sí misma).
$$a^n = \underbrace{a \times a \times a \times \dots \times a}_{n \text{ veces}}$$
Donde '$$a$$' es la base y '$$n$$' es el exponente.
Ejemplos:
*   $$2^3 = 2 \times 2 \times 2 = 8$$ (Base 2, exponente 3)
*   $$5^2 = 5 \times 5 = 25$$ (Base 5, exponente 2)
*   $$3^4 = 3 \times 3 \times 3 \times 3 = 81$$ (Base 3, exponente 4)
Este concepto será fundamental cuando expresemos números como producto de sus factores primos, por ejemplo, $$12 = 2 \times 2 \times 3 = 2^2 \times 3$$.
*(Fuente: Adaptado de Arcila Vanegas & Gómez Noreña, 2016, p. 32, Capítulo 2 sobre Potenciación, como concepto previo necesario)*

**● Contenido 3: Criterios de Divisibilidad**

**Texto con explicación completa:**
Los **criterios de divisibilidad** son reglas prácticas que nos permiten saber si un número entero es divisible por otro (generalmente un número primo pequeño) sin necesidad de realizar la división completa. Son herramientas muy útiles para la descomposición en factores primos.

*   **Divisibilidad por 2:** Un número es divisible por 2 si su última cifra es par ($$0, 2, 4, 6, 8$$).
    *   Ejemplo: $$34\underline{8}$$ es divisible por 2 porque termina en 8. $$15\underline{0}$$ es divisible por 2. $$77\underline{1}$$ no es divisible por 2.
    *   *Aplicación en Gastronomía:* Un chef necesita dividir 124 fresas en partes iguales para dos postres. Como 124 es par, sabe que puede hacerlo.

*   **Divisibilidad por 3:** Un número es divisible por 3 si la suma de sus cifras es un múltiplo de 3.
    *   Ejemplo: $$123$$ es divisible por 3 porque $$1+2+3=6$$, y 6 es múltiplo de 3 ($$3 \times 2 = 6$$). $$541$$ no es divisible por 3 porque $$5+4+1=10$$, y 10 no es múltiplo de 3.
    *   *Aplicación en Planeación y Desarrollo Social:* Se quieren formar grupos de 3 personas con 117 voluntarios para un proyecto comunitario. Se suma $$1+1+7=9$$. Como 9 es múltiplo de 3, es posible formar los grupos exactamente.

*   **Divisibilidad por 5:** Un número es divisible por 5 si su última cifra es $$0$$ o $$5$$.
    *   Ejemplo: $$78\underline{5}$$ es divisible por 5. $$123\underline{0}$$ es divisible por 5. $$45\underline{3}$$ no es divisible por 5.
    *   *Aplicación en Ingeniería Comercial:* Una empresa tiene $$\$1.250.000$$ para bonos y quiere dar bonos de $$\$5.000$$ o $$\$50.000$$. Como el monto termina en 0, es divisible por 5.

*   **Divisibilidad por 7:** (Este criterio es un poco más elaborado) Un número es divisible por 7 si al separar la última cifra, multiplicarla por 2 y restar este producto del número que queda (sin la última cifra), el resultado es 0 o un múltiplo de 7. Si el número obtenido aún es grande, se puede repetir el proceso.
    *   Ejemplo: ¿Es $$343$$ divisible por 7?
        1.  Separamos la última cifra: 3. El número que queda es 34.
        2.  Multiplicamos la última cifra por 2: $$3 \times 2 = 6$$.
        3.  Restamos: $$34 - 6 = 28$$.
        4.  Como 28 es múltiplo de 7 ($$7 \times 4 = 28$$), entonces 343 es divisible por 7.
    *   Ejemplo: ¿Es $$482$$ divisible por 7?
        1.  Última cifra: 2. Queda: 48.
        2.  $$2 \times 2 = 4$$.
        3.  $$48 - 4 = 44$$.
        4.  44 no es múltiplo de 7, entonces 482 no es divisible por 7.

*   **Divisibilidad por 11:** Un número es divisible por 11 si la diferencia entre la suma de las cifras que ocupan posiciones impares y la suma de las cifras que ocupan posiciones pares (contando de derecha a izquierda) es 0 o un múltiplo de 11.
    *   Ejemplo: ¿Es $$1353$$ divisible por 11?
        1.  Cifras en posición impar (1ª y 3ª de derecha a izquierda): 3 y 3. Suma: $$3+3=6$$.
        2.  Cifras en posición par (2ª y 4ª de derecha a izquierda): 5 y 1. Suma: $$5+1=6$$.
        3.  Diferencia: $$6 - 6 = 0$$.
        4.  Como la diferencia es 0, 1353 es divisible por 11.
    *   Ejemplo: ¿Es $$9254$$ divisible por 11?
        1.  Suma impares (4 y 2): $$4+2=6$$.
        2.  Suma pares (5 y 9): $$5+9=14$$.
        3.  Diferencia: $$14 - 6 = 8$$ (o $$6-14 = -8$$). El valor absoluto es 8.
        4.  Como 8 no es 0 ni múltiplo de 11, 9254 no es divisible por 11.
    *   *Aplicación en Arquitectura:* Al verificar códigos de identificación de materiales o lotes, si estos códigos deben seguir un patrón de divisibilidad por 11 para su validación.

*(Fuente: Adaptado de Arcila Vanegas & Gómez Noreña, 2016, pp. 7-9)*

**Aplicaciones por programa:**

*   **Tecnología en Gestión Comercial:** Un comerciante recibe un lote de 240 camisetas y quiere hacer paquetes de 2, 3 o 5 camisetas sin que sobren. Aplicando los criterios, sabe que 240 es divisible por 2 (termina en 0), por 3 ($$2+4+0=6$$), y por 5 (termina en 0).
*   **Tecnología en Gestión de Servicios Gastronómicos:** Se preparan 165 bocadillos para un evento. Se quieren servir en bandejas con la misma cantidad. ¿Se pueden poner 3, 5 u 11 bocadillos por bandeja sin que sobren?
    *   Por 3: $$1+6+5=12$$ (múltiplo de 3). Sí.
    *   Por 5: Termina en 5. Sí.
    *   Por 11: Suma impares ($$5+1=6$$), Suma pares ($$6$$). Diferencia $$6-6=0$$. Sí.
*   **Tecnología en Delineante de Arquitectura e Ingeniería:** Para dibujar una cuadrícula en un plano de 187cm x 121cm, se quiere saber si se pueden hacer divisiones exactas cada 11cm. Ambos números son divisibles por 11.
*   **Biotecnología:** En un experimento se tienen 1001 muestras. ¿Se pueden agrupar de 7 en 7 o de 11 en 11?
    *   Por 7: $$100 - (1 \times 2) = 98$$. $$9 - (8 \times 2) = 9-16 = -7$$. Sí, es divisible por 7.
    *   Por 11: Impares ($$1+0=1$$). Pares ($$0+1=1$$). Diferencia $$1-1=0$$. Sí, es divisible por 11.

**Cuestionario (retroalimentación automática)**

1.  ¿Cuál de los siguientes números es un número primo?
    *   a) 9
    *   b) 15
    *   c) 29 ✅ *(Retro: Correcto. 29 solo es divisible por 1 y por 29.)*
    *   d) 33
2.  Un estudiante de Gastronomía tiene 132 huevos y quiere saber si puede hacer tortillas usando exactamente 3 huevos para cada una sin que le sobren. ¿Es posible?
    *   a) Sí, porque 132 es par.
    *   b) Sí, porque la suma de las cifras de 132 ($$1+3+2=6$$) es múltiplo de 3. ✅ *(Retro: ¡Exacto! Ese es el criterio de divisibilidad por 3.)*
    *   c) No, porque 132 no termina en 0 o 5.
    *   d) No, porque 132 es un número grande.
3.  El número 275 es divisible por:
    *   a) Solo por 5.
    *   b) Por 5 y por 11. ✅ *(Retro: Correcto. Termina en 5, y para el 11: (5+2) - 7 = 0.)*
    *   c) Solo por 3.
    *   d) Por 2 y por 5.

**Tarea Moodle (resolución con retroalimentación automática)**

1.  **Clasifica los siguientes números como primos o compuestos: 7, 12, 23, 35, 41, 51.**
    *   *Instrucción para Moodle: Pregunta de emparejamiento o de opción múltiple por cada número.*
    *   7: Primo ✅ *(Retro: Correcto, solo divisible por 1 y 7)*
    *   12: Compuesto ✅ *(Retro: Correcto, divisible por 1, 2, 3, 4, 6, 12)*
    *   23: Primo ✅ *(Retro: Correcto, solo divisible por 1 y 23)*
    *   35: Compuesto ✅ *(Retro: Correcto, divisible por 1, 5, 7, 35)*
    *   41: Primo ✅ *(Retro: Correcto, solo divisible por 1 y 41)*
    *   51: Compuesto ✅ *(Retro: Correcto, divisible por 1, 3, 17, 51. Suma de cifras 5+1=6, múltiplo de 3)*
2.  **Un ingeniero ambiental necesita dividir un terreno de 154 metros de frente en parcelas iguales que tengan un frente de 7 metros cada una. ¿Es esto posible sin que sobre terreno? Justifica usando el criterio de divisibilidad.**
    *   *Instrucción para Moodle: Pregunta de ensayo con retroalimentación detallada.*
    *   ✅ Respuesta: Sí, es posible. Aplicando el criterio de divisibilidad por 7 a 154: separamos el 4, lo duplicamos ($$4 \times 2 = 8$$). Restamos este valor del número restante: $$15 - 8 = 7$$. Como 7 es múltiplo de 7, entonces 154 es divisible por 7.
    *   *(Retroalimentación: ¡Excelente! Tu aplicación del criterio es correcta. El terreno se puede dividir exactamente en parcelas de 7 metros de frente.)*

**Juego Moodle sugerido**
"Ahorcado" o "Sopa de Letras" con los términos:
*   Primo
*   Compuesto
*   Divisor
*   Divisible
*   Criterio
*   Potencia
*   Exponente

**Cita APA 7**
Arcila Vanegas, M. D., & Gómez Noreña, Y. E. (2016). *Aritmética: Teoría, ejemplos y problemas* (1a ed., pp. 7-9). Instituto Tecnológico Metropolitano – ITM, Colegio Mayor de Antioquia.

---
(Continuaré con la Sesión 2 del Módulo 2)


¡Fantástico! Prosigamos con la **Sesión 2 del Módulo 2**.

---

**Sesión 2: Descomposición en factores primos y Máximo Común Divisor (MCD)**

**Objetivo de aprendizaje:**
Realizar la descomposición de números en sus factores primos y calcular el Máximo Común Divisor (MCD) de dos o más números, aplicando estos conceptos para simplificar problemas y optimizar recursos en contextos profesionales y cotidianos.

**● Contenido 1: Descomposición en Factores Primos (Factorización)**

**Texto con explicación completa:**
La **descomposición en factores primos**, también conocida como **factorización prima**, es el proceso de expresar un número compuesto como un producto único de números primos. Cada número compuesto tiene una sola combinación de factores primos (sin importar el orden en que se escriban). Esta es una idea fundamental en la teoría de números, conocida como el Teorema Fundamental de la Aritmética.

**Procedimiento para descomponer un número en factores primos:**
1.  Se toma el número que se desea descomponer.
2.  Se empieza a dividir por el menor número primo ($$2$$) tantas veces como sea posible (es decir, mientras el cociente sea exacto). Se anotan los factores primos encontrados.
3.  Si ya no es divisible por $$2$$, se intenta con el siguiente número primo ($$3$$), y se repite el proceso.
4.  Se continúa con los siguientes números primos ($$5, 7, 11, ...$$) hasta que el cociente final sea $$1$$.
5.  El número original es igual al producto de todos los factores primos encontrados. Si un factor primo se repite, se puede expresar usando potencias.

**Ejemplo 1: Descomponer el número 20 en factores primos.**
```
20 | 2   (20 ÷ 2 = 10)
10 | 2   (10 ÷ 2 = 5)
 5 | 5   (5 ÷ 5 = 1)
 1 |
```
Por lo tanto, la descomposición de $$20$$ es $$2 \times 2 \times 5$$, que se puede escribir como $$2^2 \times 5$$.

**Ejemplo 2: Descomponer el número 420 en factores primos.**
```
420 | 2
210 | 2
105 | 3  (Suma de cifras 1+0+5=6, divisible por 3)
 35 | 5
  7 | 7
  1 |
```
La descomposición de $$420$$ es $$2 \times 2 \times 3 \times 5 \times 7 = 2^2 \times 3 \times 5 \times 7$$.
*(Aplicación en Arquitectura/Ingeniería Civil:* Un arquitecto tiene una viga de 420 cm y necesita cortarla en el mayor número posible de segmentos iguales, cada uno de longitud entera. La descomposición le ayuda a entender las posibles longitudes de los segmentos.)
*(Fuente: Adaptado de Arcila Vanegas & Gómez Noreña, 2016, pp. 8-9)*

**● Contenido 2: Máximo Común Divisor (MCD)**

**Texto con explicación completa:**
El **Máximo Común Divisor (MCD)** de dos o más números enteros es el mayor número entero positivo que los divide a todos exactamente (sin dejar residuo).

**Procedimiento para calcular el MCD usando la descomposición en factores primos:**
1.  Se descompone cada número en sus factores primos.
2.  Se identifican los factores primos que son **comunes** a todas las descomposiciones.
3.  El MCD es el producto de estos factores primos comunes, cada uno elevado al **menor exponente** con el que aparece en cualquiera de las descomposiciones.

**Ejemplo 1: Calcular el MCD de 20 y 30.**
1.  Descomposición de 20: $$2^2 \times 5$$
2.  Descomposición de 30: $$2 \times 3 \times 5$$
3.  Factores primos comunes: $$2$$ y $$5$$.
4.  Menor exponente para 2: $$2^1$$ (de la descomposición de 30).
5.  Menor exponente para 5: $$5^1$$ (aparece con exponente 1 en ambas).
6.  MCD(20, 30) = $$2^1 \times 5^1 = 2 \times 5 = 10$$.
    Esto significa que 10 es el número más grande que divide exactamente tanto a 20 como a 30.

**Ejemplo 2: Calcular el MCD de 12, 18 y 42.**
1.  $$12 = 2^2 \times 3$$
2.  $$18 = 2 \times 3^2$$
3.  $$42 = 2 \times 3 \times 7$$
4.  Factores primos comunes a los tres números: $$2$$ y $$3$$.
5.  Menor exponente para 2: $$2^1$$.
6.  Menor exponente para 3: $$3^1$$.
7.  MCD(12, 18, 42) = $$2^1 \times 3^1 = 2 \times 3 = 6$$.

*(Aplicación en Gastronomía:* Un repostero tiene 12 litros de leche, 18 kg de harina y 42 huevos. Quiere hacer el mayor número posible de lotes idénticos de una receta usando estas cantidades proporcionalmente sin que sobre nada de ningún ingrediente. El MCD (6) le indicaría que puede hacer 6 lotes idénticos.)
*(Fuente: Adaptado de Arcila Vanegas & Gómez Noreña, 2016, pp. 10-11)*

**● Contenido 3: Método Abreviado para Hallar el MCD (Descomposición Simultánea)**

**Texto con explicación completa:**
Existe un método más directo para calcular el MCD de varios números, que consiste en descomponerlos simultáneamente, considerando solo los factores primos que dividen a todos los números al mismo tiempo.

**Procedimiento:**
1.  Se escriben los números en una fila.
2.  Se busca el menor número primo que divida a todos los números de la fila. Se realiza la división y se escriben los cocientes debajo.
3.  Se repite el proceso con los nuevos cocientes, hasta que ya no haya un factor primo común a todos ellos.
4.  El MCD es el producto de los factores primos comunes encontrados en el lado derecho.

**Ejemplo: Calcular el MCD de 20 y 30 usando el método abreviado.**
```
20   30 | 2  (Ambos son divisibles por 2)
10   15 | 5  (Ambos son divisibles por 5)
 2    3 |    (Ya no hay un factor primo común a 2 y 3)
```
Los factores primos comunes son 2 y 5.
MCD(20, 30) = $$2 \times 5 = 10$$.

**Ejemplo: Calcular el MCD de 72, 108 y 60.**
```
72   108   60 | 2
36    54   30 | 2
18    27   15 | 3
 6     9    5 |   (No hay más factores comunes a 6, 9 y 5)
```
MCD(72, 108, 60) = $$2 \times 2 \times 3 = 2^2 \times 3 = 12$$.
*(Fuente: Adaptado de Arcila Vanegas & Gómez Noreña, 2016, p. 10)*

**Aplicaciones por programa:**

*   **Administración de Empresas Turísticas:** Se tienen 3 grupos de turistas de 24, 36 y 48 personas. Se quieren formar subgrupos más pequeños, todos del mismo tamaño y lo más grandes posible, sin mezclar los grupos originales. El MCD(24, 36, 48) = 12, indica que se pueden formar subgrupos de 12 personas.
*   **Ingeniería Ambiental:** Se tienen tres contenedores con 120, 150 y 180 litros de diferentes residuos líquidos que se pueden mezclar. Se quieren trasvasar a recipientes más pequeños, todos de la misma capacidad y que sea la mayor posible, para llenarlos exactamente. MCD(120, 150, 180) = 30. Se pueden usar recipientes de 30 litros.
*   **Tecnología en Gestión Catastral:** Para delimitar un terreno rectangular de 90m x 75m con postes equidistantes, y que haya un poste en cada esquina, ¿cuál es la máxima distancia posible entre postes? MCD(90, 75) = 15 metros.
*   **Bacteriología y Laboratorio Clínico:** Se tienen 3 soluciones con volúmenes de 48 ml, 60 ml y 72 ml. Se quieren tomar alícuotas (muestras) del mismo volumen, el mayor posible, de cada solución. MCD(48, 60, 72) = 12 ml.

**Cuestionario (retroalimentación automática)**

1.  ¿Cuál es la descomposición en factores primos de 60?
    *   a) $$2 \times 3 \times 10$$
    *   b) $$4 \times 3 \times 5$$
    *   c) $$2^2 \times 3 \times 5$$ ✅ *(Retro: ¡Correcto! 60 = 4 x 15 = (2x2) x (3x5).)*
    *   d) $$2 \times 6 \times 5$$
2.  El MCD de 18 y 24 es:
    *   a) 2
    *   b) 3
    *   c) 6 ✅ *(Retro: ¡Muy bien! 18 = 2 x 3² y 24 = 2³ x 3. Los comunes con menor exponente son 2¹ y 3¹, su producto es 6.)*
    *   d) 12
3.  Un carpintero quiere cortar dos listones de madera de 40 cm y 50 cm en trozos iguales y del mayor tamaño posible. ¿De qué longitud deben ser los trozos?
    *   a) 5 cm
    *   b) 10 cm ✅ *(Retro: ¡Exacto! Estás buscando el MCD de 40 y 50, que es 10 cm.)*
    *   c) 20 cm
    *   d) 40 cm

**Tarea Moodle (resolución con retroalimentación automática)**

1.  **Descompón en factores primos los siguientes números: a) 84, b) 130.**
    *   *Instrucción para Moodle: Pregunta de respuesta corta para cada número.*
    *   a) 84: $$2^2 \times 3 \times 7$$ ✅ *(Retroalimentación: 84 | 2 -> 42 | 2 -> 21 | 3 -> 7 | 7 -> 1)*
    *   b) 130: $$2 \times 5 \times 13$$ ✅ *(Retroalimentación: 130 | 2 -> 65 | 5 -> 13 | 13 -> 1)*
2.  **Un estudiante de Tecnología en Gestión de Procesos de Repostería y Panificación tiene tres sacos de harina de 36 kg, 48 kg y 60 kg. Quiere reenvasar la harina en bolsas más pequeñas, todas del mismo peso y el mayor posible, sin mezclar las harinas de los diferentes sacos. ¿Cuál debe ser el peso de cada bolsa?**
    *   *Instrucción para Moodle: Pregunta calculada o de ensayo.*
    *   ✅ Respuesta: Se debe calcular el MCD(36, 48, 60).
        *   $$36 = 2^2 \times 3^2$$
        *   $$48 = 2^4 \times 3$$
        *   $$60 = 2^2 \times 3 \times 5$$
        *   MCD = $$2^2 \times 3 = 4 \times 3 = 12$$ kg.
    *   *(Retroalimentación: ¡Correcto! El peso de cada bolsa debe ser de 12 kg. Has encontrado el Máximo Común Divisor de las tres cantidades de harina.)*

**Juego Moodle sugerido**
"Crucigrama" o "Millonario" con términos y conceptos como:
*   Factor primo
*   Descomposición
*   Divisor
*   MCD (o Máximo Común Divisor)
*   Común
*   Exponente

**Cita APA 7**
Arcila Vanegas, M. D., & Gómez Noreña, Y. E. (2016). *Aritmética: Teoría, ejemplos y problemas* (1a ed., pp. 8-11). Instituto Tecnológico Metropolitano – ITM, Colegio Mayor de Antioquia.

---
(Continuaré con la Sesión 3 del Módulo 2)


¡Perfecto! Vamos con la **Sesión 3 del Módulo 2**.

---

**Sesión 3: Mínimo Común Múltiplo (MCM) y Solución de Problemas**

**Objetivo de aprendizaje:**
Calcular el Mínimo Común Múltiplo (MCM) de dos o más números y aplicar tanto el MCM como el MCD en la resolución de problemas prácticos, identificando cuándo usar cada concepto según el contexto del problema.

**● Contenido 1: Mínimo Común Múltiplo (MCM)**

**Texto con explicación completa:**
El **Mínimo Común Múltiplo (MCM)** de dos o más números enteros es el menor número entero positivo que es múltiplo de todos ellos. Un **múltiplo** de un número es el resultado de multiplicar ese número por cualquier entero positivo ($$1, 2, 3, ...$$).

**Ejemplo para entender el concepto:**
Múltiplos de 6: $$6, 12, 18, \underline{24}, 30, 36, 42, \underline{48}, ...$$
Múltiplos de 8: $$8, 16, \underline{24}, 32, 40, \underline{48}, 56, ...$$
Los múltiplos comunes de 6 y 8 son $$24, 48, ...$$
El menor de estos múltiplos comunes es $$24$$. Por lo tanto, MCM(6, 8) = $$24$$.

**Procedimiento para calcular el MCM usando la descomposición en factores primos:**
1.  Se descompone cada número en sus factores primos.
2.  Se identifican todos los factores primos que aparecen en **cualquiera** de las descomposiciones (comunes y no comunes).
3.  El MCM es el producto de estos factores primos, cada uno elevado al **mayor exponente** con el que aparece en cualquiera de las descomposiciones.

**Ejemplo 1: Calcular el MCM de 6 y 8.**
1.  Descomposición de 6: $$2 \times 3$$
2.  Descomposición de 8: $$2^3$$
3.  Factores primos que aparecen: $$2$$ y $$3$$.
4.  Mayor exponente para 2: $$2^3$$ (de la descomposición de 8).
5.  Mayor exponente para 3: $$3^1$$ (de la descomposición de 6).
6.  MCM(6, 8) = $$2^3 \times 3^1 = 8 \times 3 = 24$$.

**Ejemplo 2: Calcular el MCM de 12, 18 y 42.**
1.  $$12 = 2^2 \times 3$$
2.  $$18 = 2 \times 3^2$$
3.  $$42 = 2 \times 3 \times 7$$
4.  Factores primos que aparecen: $$2, 3$$ y $$7$$.
5.  Mayor exponente para 2: $$2^2$$.
6.  Mayor exponente para 3: $$3^2$$.
7.  Mayor exponente para 7: $$7^1$$.
8.  MCM(12, 18, 42) = $$2^2 \times 3^2 \times 7^1 = 4 \times 9 \times 7 = 36 \times 7 = 252$$.

*(Aplicación en Tecnología en Gestión Turística (Virtual):* Tres buses turísticos salen de la misma terminal. El primero sale cada 6 horas, el segundo cada 8 horas y el tercero cada 12 horas. Si todos salen juntos a las 6:00 a.m., ¿a qué hora volverán a coincidir en la terminal? Se busca el MCM(6, 8, 12) = 24 horas. Volverán a coincidir a las 6:00 a.m. del día siguiente.)
*(Fuente: Adaptado de Arcila Vanegas & Gómez Noreña, 2016, pp. 11-13)*

**● Contenido 2: Método Abreviado para Hallar el MCM (Descomposición Simultánea)**

**Texto con explicación completa:**
Al igual que con el MCD, existe un método más directo para calcular el MCM de varios números mediante una descomposición simultánea.

**Procedimiento:**
1.  Se escriben los números en una fila.
2.  Se empieza a dividir por el menor número primo ($$2$$) que divida **al menos a uno** de los números de la fila. Si un número no es divisible por el primo actual, se baja tal cual a la siguiente fila. Se continúa hasta que todos los cocientes sean $$1$$.
3.  El MCM es el producto de todos los factores primos utilizados en el lado derecho.

**Ejemplo: Calcular el MCM de 6 y 8 usando el método abreviado.**
```
6   8 | 2  (Ambos son divisibles por 2)
3   4 | 2  (4 es divisible por 2, 3 no, se baja el 3)
3   2 | 2  (2 es divisible por 2, 3 no, se baja el 3)
3   1 | 3  (3 es divisible por 3)
1   1 |
```
MCM(6, 8) = $$2 \times 2 \times 2 \times 3 = 2^3 \times 3 = 24$$.

**Ejemplo: Calcular el MCM de 24, 45 y 50.**
```
24   45   50 | 2
12   45   25 | 2
 6   45   25 | 2
 3   45   25 | 3
 1   15   25 | 3
 1    5   25 | 5
 1    1    5 | 5
 1    1    1 |
```
MCM(24, 45, 50) = $$2 \times 2 \times 2 \times 3 \times 3 \times 5 \times 5 = 2^3 \times 3^2 \times 5^2 = 8 \times 9 \times 25 = 72 \times 25 = 1800$$.
*(Fuente: Adaptado de Arcila Vanegas & Gómez Noreña, 2016, p. 12)*

**● Contenido 3: Solución de Problemas con Aplicación del MCM y MCD**

**Texto con explicación completa:**
La clave para resolver problemas que involucran MCM o MCD es identificar qué se está pidiendo:
*   **Se usa el MCD cuando:** Se necesita dividir o repartir cantidades en partes iguales que sean lo más grandes posible, sin que sobre nada. Palabras clave: "máximo", "mayor posible", "dividir en trozos iguales", "repartir equitativamente".
    *   *Contexto en Tecnología en Gestión Comercial:* Se tienen rollos de tela de 72m, 90m y 120m. Se quieren cortar en trozos iguales de la mayor longitud posible. Se calcula el MCD(72, 90, 120) = 6 metros.

*   **Se usa el MCM cuando:** Se busca un punto de coincidencia en el tiempo o en cantidad, cuando eventos se repiten en ciclos diferentes, o cuando se necesita encontrar la menor cantidad que pueda ser contenida o agrupada exactamente por varias otras. Palabras clave: "mínimo", "menor cantidad", "cuándo volverán a coincidir", "agrupar de... en...".
    *   *Contexto en Profesional en Gastronomía y Culinaria:* Un cocinero tiene ingredientes para hacer pasteles (que requieren 6 huevos por pastel) y para hacer flanes (que requieren 4 huevos por flan). Quiere usar todos los huevos de una caja sin que sobren al hacer solo pasteles o solo flanes. ¿Cuál es la menor cantidad de huevos que debe tener la caja? Se calcula el MCM(6, 4) = 12 huevos.

**Ejemplo de problema con MCD:**
Un carpintero tiene tres listones de madera de longitudes 120 cm, 180 cm y 240 cm. Quiere cortarlos en trozos iguales, de la mayor longitud posible, sin desperdiciar madera. ¿Cuál debe ser la longitud de cada trozo?
*Identificación:* Se busca dividir en trozos iguales y de la mayor longitud posible → MCD.
MCD(120, 180, 240):
$$120 = 2^3 \times 3 \times 5$$
$$180 = 2^2 \times 3^2 \times 5$$
$$240 = 2^4 \times 3 \times 5$$
MCD = $$2^2 \times 3 \times 5 = 4 \times 3 \times 5 = 60$$ cm.
Respuesta: Cada trozo debe medir 60 cm.

**Ejemplo de problema con MCM:**
Tres ciclistas parten al mismo tiempo de la línea de salida de una pista circular. El primero tarda 10 minutos en dar una vuelta, el segundo 12 minutos y el tercero 15 minutos. ¿Después de cuánto tiempo volverán a pasar juntos por la línea de salida?
*Identificación:* Se busca una coincidencia en el tiempo de eventos cíclicos → MCM.
MCM(10, 12, 15):
$$10 = 2 \times 5$$
$$12 = 2^2 \times 3$$
$$15 = 3 \times 5$$
MCM = $$2^2 \times 3 \times 5 = 4 \times 3 \times 5 = 60$$ minutos.
Respuesta: Volverán a pasar juntos por la línea de salida después de 60 minutos (1 hora).
*(Fuente: Ejemplos adaptados y creados para ilustrar la aplicación)*

**Aplicaciones por programa:**

*   **Construcciones Civiles:** Se quieren colocar baldosas cuadradas, lo más grandes posible, para cubrir exactamente un piso rectangular de 420 cm de largo y 300 cm de ancho. ¿Cuál debe ser el lado de las baldosas? (Problema de MCD).
*   **Tecnología en Seguridad y Salud en el Trabajo:** Las alarmas de incendio de tres secciones de una fábrica suenan cada 15, 20 y 25 minutos respectivamente para pruebas. Si todas suenan juntas a las 8:00 a.m., ¿a qué hora volverán a sonar juntas? (Problema de MCM).
*   **Licenciatura en Ciencias Sociales:** Un investigador quiere realizar entrevistas en tres comunidades. En la primera puede entrevistar grupos de 8 personas, en la segunda de 10 y en la tercera de 12. Si quiere llevar la misma cantidad de encuestas a cada comunidad y que sea la menor cantidad posible para trabajar con grupos completos, ¿cuántas encuestas debe llevar? (Problema de MCM).
*   **Tecnología en Gestión Ambiental (Virtual):** Se tienen muestras de agua de tres ríos diferentes con volúmenes de 50 ml, 75 ml y 100 ml. Se quieren usar pipetas del mismo tamaño, el mayor posible, para tomar submuestras exactas de cada una. ¿Qué volumen debe tener la pipeta? (Problema de MCD).

**Cuestionario (retroalimentación automática)**

1.  El MCM de 10 y 15 es:
    *   a) 5
    *   b) 30 ✅ *(Retro: ¡Correcto! 10 = 2x5, 15 = 3x5. MCM = 2x3x5 = 30.)*
    *   c) 60
    *   d) 150
2.  Dos luces intermitentes se encienden juntas. Una se enciende cada 8 segundos y la otra cada 10 segundos. ¿Después de cuántos segundos volverán a encenderse juntas por primera vez?
    *   a) 2 segundos (MCD)
    *   b) 40 segundos (MCM) ✅ *(Retro: ¡Muy bien! Buscamos la primera coincidencia, eso es el MCM de 8 y 10.)*
    *   c) 80 segundos
    *   d) 18 segundos
3.  Se quieren empacar 32 lápices rojos y 40 lápices azules en cajas, de manera que cada caja tenga la misma cantidad de lápices rojos y la misma cantidad de lápices azules, y que el número de cajas sea el máximo posible. ¿Qué concepto usarías?
    *   a) Mínimo Común Múltiplo (MCM)
    *   b) Máximo Común Divisor (MCD) ✅ *(Retro: ¡Exacto! Se busca dividir en la mayor cantidad de grupos (cajas) iguales.)*
    *   c) Descomposición en factores primos únicamente.
    *   d) Criterios de divisibilidad.

**Tarea Moodle (resolución con retroalimentación automática)**

1.  **Calcula el MCM de: a) 12 y 15, b) 7, 14 y 21.**
    *   *Instrucción para Moodle: Pregunta de respuesta corta para cada caso.*
    *   a) MCM(12, 15):
        *   $$12 = 2^2 \times 3$$
        *   $$15 = 3 \times 5$$
        *   MCM = $$2^2 \times 3 \times 5 = 4 \times 3 \times 5 = 60$$ ✅
    *   b) MCM(7, 14, 21):
        *   $$7 = 7$$
        *   $$14 = 2 \times 7$$
        *   $$21 = 3 \times 7$$
        *   MCM = $$2 \times 3 \times 7 = 42$$ ✅
    *   *(Retroalimentación general: ¡Buen trabajo! Recuerda tomar todos los factores primos, comunes y no comunes, con su mayor exponente.)*
2.  **Un estudiante de Tecnología en Gestión de Guianza Turística (Presencial) organiza salidas para tres tipos de recorridos. El recorrido A sale cada 3 días, el recorrido B cada 4 días y el recorrido C cada 6 días. Si hoy coincidieron las salidas de los tres recorridos, ¿dentro de cuántos días volverán a coincidir las tres salidas?**
    *   *Instrucción para Moodle: Pregunta calculada o de ensayo.*
    *   ✅ Respuesta: Se debe calcular el MCM(3, 4, 6).
        *   $$3 = 3$$
        *   $$4 = 2^2$$
        *   $$6 = 2 \times 3$$
        *   MCM = $$2^2 \times 3 = 4 \times 3 = 12$$ días.
    *   *(Retroalimentación: ¡Correcto! Las tres salidas volverán a coincidir dentro de 12 días. Has identificado que se trata de un problema de Mínimo Común Múltiplo para encontrar la próxima coincidencia.)*

**Juego Moodle sugerido**
"Millonario" o "Emparejamiento de columnas":
*   Columna A (Problemas/Situaciones):
    *   Dividir cuerdas de diferentes longitudes en trozos iguales lo más grandes posible.
    *   Encontrar cuándo tres campanas que suenan a intervalos diferentes volverán a sonar juntas.
    *   Formar el menor cuadrado posible usando baldosas rectangulares de ciertas dimensiones.
*   Columna B (Conceptos a aplicar):
    *   MCD
    *   MCM
    *   MCM

**Cita APA 7**
Arcila Vanegas, M. D., & Gómez Noreña, Y. E. (2016). *Aritmética: Teoría, ejemplos y problemas* (1a ed., pp. 11-13). Instituto Tecnológico Metropolitano – ITM, Colegio Mayor de Antioquia.

---

**Profundización en los Libros de Referencia (Módulo 2):**
Para una comprensión más profunda sobre los Números Primos, el Mínimo Común Múltiplo (MCM) y el Máximo Común Divisor (MCD), te sugerimos revisar:
*   En **"Aritmética: Teoría, ejemplos y problemas" (Libro\_Aritmetica (3).pdf)** de Arcila Vanegas y Gómez Noreña (2016):
    *   **Capítulo 1: Operaciones y conceptos básicos.**
        *   Sección 1.2 "Criterios de divisibilidad" (páginas 7-9): Introduce los números primos, compuestos y los criterios de divisibilidad fundamentales.
        *   Sección 1.3 "Máximo común divisor" (páginas 10-11): Explica el concepto de MCD y métodos para calcularlo, incluyendo la descomposición en factores primos y el método abreviado.
        *   Sección 1.4 "Mínimo común múltiplo" (páginas 11-13): Detalla el concepto de MCM, cómo calcularlo por descomposición en factores primos y el método abreviado, junto con problemas de aplicación.
        *   Ejercicios 1.2 (página 9), Ejercicios 1.3 (página 11), Ejercicios 1.4 (página 13): Son muy útiles para practicar la descomposición, el cálculo de MCD y MCM, y la resolución de problemas.
*   En **"Quédate con el Álgebra.pdf"** de Rodríguez Zuleta, J. F. (2016):
    *   **Capítulo 2: Factorización.**
        *   Sección 2.1 "MCD y su aplicación en el cálculo de factor común" (páginas 21-22): Aunque enfocado en expresiones algebraicas, repasa el concepto de MCD numérico como base para la factorización algebraica. Entender el MCD de números es crucial antes de abordar el MCD de polinomios.

**Origen de los Contenidos (Módulo 2):**
Los conceptos, definiciones, ejemplos y procedimientos relativos a los Números Primos, Criterios de Divisibilidad, Máximo Común Divisor (MCD) y Mínimo Común Múltiplo (MCM) presentados en este módulo han sido primordialmente adaptados y estructurados a partir del libro "Aritmética: Teoría, ejemplos y problemas" (1a ed.) de Marlon D. Arcila Vanegas y Yeison E. Gómez Noreña (2016). El material de "Quédate con el Álgebra" de Javier F. Rodríguez Zuleta (2016) ha servido de complemento para reforzar la importancia del MCD como concepto base.

---

Con esto concluimos el Módulo 2. ¿Procedemos con el Módulo 3: Sistema de los Números Racionales?