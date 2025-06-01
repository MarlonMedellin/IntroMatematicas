# 🚀 Matemáticas Space Shooter

## Sistema de Juegos Educativos para Matemáticas Básicas
### Curso Introductorio - Colegio Mayor de Antioquia

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-success)](https://tu-usuario.github.io/matematicas-space-shooter/)
[![Licencia](https://img.shields.io/badge/Licencia-CC%20BY--NC--ND%204.0-blue)](https://creativecommons.org/licenses/by-nc-nd/4.0/)
[![Desarrollado por](https://img.shields.io/badge/Desarrollado%20por-Profe%20Marlon%20Arcila-orange)](https://www.linkedin.com/in/marlon-arcila)

---

## 📋 Descripción

Sistema gamificado de 6 módulos educativos que combina la mecánica de **space shooter** con ejercicios matemáticos de respuesta rápida. Diseñado específicamente para estudiantes del **Colegio Mayor de Antioquia** con contextualizaciones profesionales para cada carrera.

### 🎯 Objetivo Educativo

Desarrollar **velocidad mental** y **automatización** en operaciones matemáticas básicas a través de la gamificación, preparando a los estudiantes para aplicaciones profesionales en sus carreras específicas.

---

## 🎮 Módulos del Juego

| Módulo | Tema | Preguntas | Tiempo Promedio | Dificultad |
|--------|------|-----------|-----------------|------------|
| **🔢 Módulo 1** | Sistema de los Números Enteros | 10 | 3-10 seg | ⭐⭐ |
| **🔬 Módulo 2** | Números Primos, MCM y MCD | 10 | 3-10 seg | ⭐⭐⭐ |
| **🧮 Módulo 3** | Sistema de los Números Racionales | 10 | 3-8 seg | ⭐⭐ |
| **⚖️ Módulo 4** | Razones, Proporciones y Regla de Tres | 10 | 3-10 seg | ⭐⭐⭐ |
| **📏 Módulo 5** | Aplicaciones y Sistemas de Medida | 10 | 3-10 seg | ⭐⭐ |
| **⚡ Módulo 6** | Potenciación y Radicación | 10 | 3-8 seg | ⭐⭐⭐ |

---

## 🏗️ Estructura del Proyecto

```
matematicas-space-shooter/
├── index.html                     # Página principal con selector de módulos
├── assets/
│   ├── css/
│   │   ├── common.css             # Estilos base del sistema
│   │   ├── index-styles.css       # Estilos específicos del índice
│   │   └── space-game.css         # Estilos del space shooter
│   ├── js/
│   │   └── game-engine.js         # Motor principal del juego
│   └── data/
│       ├── modulo1-questions.js   # Preguntas Números Enteros
│       ├── modulo2-questions.js   # Preguntas Primos, MCM, MCD
│       ├── modulo3-questions.js   # Preguntas Números Racionales
│       ├── modulo4-questions.js   # Preguntas Razones y Proporciones
│       ├── modulo5-questions.js   # Preguntas Sistemas de Medida
│       └── modulo6-questions.js   # Preguntas Potenciación y Radicación
├── modules/
│   ├── modulo1_enteros.html       # Juego Números Enteros
│   ├── modulo2_primos.html        # Juego Primos, MCM y MCD
│   ├── modulo3_racionales.html    # Juego Números Racionales
│   ├── modulo4_proporciones.html  # Juego Razones y Proporciones
│   ├── modulo5_medidas.html       # Juego Sistemas de Medida
│   └── modulo6_potencias.html     # Juego Potenciación y Radicación
└── README.md                      # Esta documentación
```

---

## 🚀 Instalación y Uso

### Opción 1: GitHub Pages (Recomendado)
Accede directamente desde tu navegador:
```
https://tu-usuario.github.io/matematicas-space-shooter/
```

### Opción 2: Instalación Local

1. **Clonar el repositorio:**
```bash
git clone https://github.com/tu-usuario/matematicas-space-shooter.git
cd matematicas-space-shooter
```

2. **Usar servidor local (recomendado):**
```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx live-server

# Con PHP
php -S localhost:8000
```

3. **Abrir en navegador:**
```
http://localhost:8000
```

### Opción 3: Abrir directamente
Simplemente abre `index.html` en tu navegador (funcionalidad limitada sin servidor).

---

## 🎮 Cómo Jugar

### Controles de Escritorio
- **← → (o A/D)**: Mover nave espacial
- **ESPACIO**: Disparar láser
- **ESC**: Pausar juego

### Controles Móviles
- **Botones táctiles** en pantalla para mover y disparar
- **Interfaz responsiva** optimizada para tablets y móviles

### Mecánica del Juego
1. **Inicia** el juego desde el módulo deseado
2. **Lee** la operación matemática en la parte superior
3. **Identifica** la respuesta correcta entre los enemigos
4. **Dispara** SOLO a los enemigos con la respuesta correcta
5. **Evita** disparar a respuestas incorrectas (pierdes vida)
6. **Completa** las 10 preguntas para ver la reflexión educativa

---

## 🎯 Características Educativas

### Sistema de Feedback Personalizado
- **Reflexiones contextualizadas** por carrera profesional
- **Feedback inmediato** en cada respuesta
- **Progresión visual** clara del avance
- **Estadísticas** de rendimiento y precisión

### Adaptaciones Pedagógicas
- **Velocidad optimizada** para reflexión matemática
- **Preguntas de respuesta rápida** (3-10 segundos)
- **Dificultad progresiva** dentro de cada módulo
- **Repetición espaciada** para mejor retención

### Contexto Profesional
Cada módulo incluye reflexiones específicas para carreras del Colegio Mayor:
- **Gastronomía y Culinaria**
- **Turismo y Administración Hotelera**
- **Arquitectura y Construcción**
- **Ciencias de la Salud**
- **Biotecnología y Laboratorio**
- **Comunicación Social**
- **Administración y Gestión Comercial**

---

## 🔧 Personalización

### Modificar Preguntas
Edita los archivos en `assets/data/moduloX-questions.js`:

```javascript
{
    question: "2 + 3",           // La pregunta
    answer: "5",                 // Respuesta correcta (como string)
    type: "suma",                // Tipo de operación
    difficulty: 1,               // Nivel de dificultad (1-3)
    topic: "Suma básica",        // Tema específico
    timeLimit: 5000              // Tiempo límite en milisegundos
}
```

### Ajustar Dificultad
En cada archivo de configuración:

```javascript
gameplay: {
    enemySpeed: 0.6,             // Velocidad de enemigos (0.1-2.0)
    spawnInterval: 4000,         // Intervalo entre enemigos (ms)
    correctEnemyChance: 0.4,     // % de respuestas correctas (0.1-0.8)
    maxEnemiesOnScreen: 3        // Máx enemigos simultáneos
}
```

### Personalizar Colores
En `assets/css/common.css`:

```css
/* Colores principales del Colegio Mayor */
:root {
    --primary-color: #00AEAC;      /* Verde azulado institucional */
    --secondary-color: #B4C42C;    /* Verde lima vibrante */
    --accent-color: #FBBB28;       /* Amarillo dorado */
    --warning-color: #E9901E;      /* Naranja energético */
    --dark-bg: #172139;            /* Azul oscuro espacial */
}
```

---

## 📊 Sistema de Evaluación

### Métricas Registradas
- **Puntuación total** acumulada
- **Precisión** (% de aciertos)
- **Velocidad promedio** por pregunta
- **Progresión** por módulo
- **Combo máximo** de respuestas consecutivas

### Niveles de Rendimiento
- **🏆 Comandante Espacial**: 90%+ precisión
- **🎖️ Piloto Experimentado**: 70-89% precisión
- **🛸 Cadete Espacial**: 50-69% precisión
- **🚀 Entrenamiento**: <50% precisión

---

## 🌟 Características Técnicas

### Optimizaciones
- **RequestAnimationFrame** para renderizado suave
- **Responsive design** completo
- **Accesibilidad** mejorada (reduce motion, focus management)
- **Memoria optimizada** con cleanup automático

### Compatibilidad
- ✅ **Chrome, Firefox, Safari, Edge** (últimas versiones)
- ✅ **iOS Safari, Chrome Mobile** 
- ✅ **Tablets** (iPad, Android)
- ✅ **Pantallas** desde 320px hasta 4K

### Performance
- 🚀 **60 FPS** estables en dispositivos modernos
- 📱 **Optimizado para móviles** con controles táctiles
- 🎨 **Efectos visuales** escalables según capacidad del dispositivo

---

## 📈 Roadmap Futuro

### v2.0 (Planeado)
- [ ] **Sistema de logros** y badges
- [ ] **Modo multijugador** competitivo local
- [ ] **Generador automático** de preguntas
- [ ] **Analytics detallados** para profesores
- [ ] **Exportación de reportes** en PDF

### v2.1 (Ideas)
- [ ] **Modo historia** con narrativa espacial
- [ ] **Jefes finales** por cada módulo
- [ ] **Power-ups** matemáticos especiales
- [ ] **Integración** con LMS educativos
- [ ] **Versión offline** con PWA

---

## 🤝 Contribuir

### Reportar Problemas
1. Usa el [sistema de issues](https://github.com/tu-usuario/matematicas-space-shooter/issues)
2. Describe el problema con detalles
3. Incluye información del navegador/dispositivo
4. Adjunta capturas de pantalla si es posible

### Sugerir Mejoras
1. Abre un **Discussion** en GitHub
2. Explica la mejora propuesta
3. Incluye mockups o ejemplos si es relevante

### Desarrollo
1. Fork del repositorio
2. Crea rama feature: `git checkout -b feature/nueva-funcionalidad`
3. Commit cambios: `git commit -am 'Añadir nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Envía Pull Request

---

## 📄 Licencia

Este proyecto está licenciado bajo **Creative Commons BY-NC-ND 4.0**

### ✅ Permitido:
- **Compartir** — copiar y redistribuir el material en cualquier medio o formato
- **Uso educativo** en instituciones académicas
- **Adaptación** para contextos educativos específicos

### ❌ No Permitido:
- **Uso comercial** sin autorización expresa
- **Distribución de versiones modificadas** sin atribución
- **Eliminación** de créditos del autor original

### 📝 Requerimientos:
- **Atribución** al Profe Marlon Arcila y Colegio Mayor de Antioquia
- **Enlace** a la licencia original
- **Indicación** si se realizaron cambios

---

## 👨‍🏫 Sobre el Autor

**Profe Marlon Arcila**
- 🎓 **Especialista** en gamificación educativa
- 🏫 **Docente** del Colegio Mayor de Antioquia
- 🚀 **Desarrollador** de recursos educativos digitales

### Contacto y Redes
- 📺 **YouTube**: [@MarlonDavidArcila](https://www.youtube.com/@MarlonDavidArcila)
- 💼 **LinkedIn**: [marlon-arcila](https://www.linkedin.com/in/marlon-arcila)
- 🌐 **Institución**: [Colegio Mayor de Antioquia](https://www.colmayor.edu.co)

---

## 🙏 Agradecimientos

- **Colegio Mayor de Antioquia** por el apoyo institucional
- **Estudiantes** que participaron en las pruebas piloto
- **Comunidad educativa** que inspiró este proyecto
- **Desarrolladores de código abierto** por las librerías utilizadas

---

## 📞 Soporte

### Para Estudiantes
- Revisa las **instrucciones en pantalla** de cada módulo
- Verifica que tu navegador esté actualizado
- Prueba en **modo incógnito** si hay problemas

### Para Docentes
- Consulta la **documentación pedagógica** en cada módulo
- Revisa los **reportes de progreso** (próximamente)
- Contacta al autor para capacitaciones

### Problemas Técnicos
1. **Verifica** la consola del navegador (F12)
2. **Asegúrate** de que JavaScript esté habilitado
3. **Prueba** en un navegador diferente
4. **Reporta** el problema en GitHub Issues

---

**¡Gracias por usar Matemáticas Space Shooter! 🚀📚**

> *"El mejor momento para aprender matemáticas fue ayer. El segundo mejor momento es ahora, ¡jugando!"* - Profe Marlon Arcila

---

<div align="center">

[![Colegio Mayor](https://img.shields.io/badge/Colegio%20Mayor%20de%20Antioquia-Educación%20Superior-blue)](https://www.colmayor.edu.co)
[![CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)

**Desarrollado con ❤️ para la educación matemática**

</div>