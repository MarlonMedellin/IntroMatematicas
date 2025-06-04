# 🔬 Math Quest Laboratory

## Sistema de Resolución de Problemas Matemáticos Complejos
### Curso Introductorio - Colegio Mayor de Antioquia

[![Desarrollado por](https://img.shields.io/badge/Desarrollado%20por-Profe%20Marlon%20Arcila-orange)](https://www.linkedin.com/in/marlon-arcila)
[![Licencia](https://img.shields.io/badge/Licencia-CC%20BY--NC--ND%204.0-blue)](https://creativecommons.org/licenses/by-nc-nd/4.0/)

---

## 📋 Descripción

**Math Quest Laboratory** es el tercer componente del ecosistema educativo gamificado del Colegio Mayor de Antioquia. Diseñado para **problemas de aplicación matemática** que requieren reflexión y resolución paso a paso.

### 🎯 Completando el Ecosistema Educativo

```
🧠 Flashcards     →  Conceptos y definiciones (memoria)
⚡ Space Shooter  →  Operaciones rápidas (velocidad)  
🔬 Math Lab       →  Problemas complejos (aplicación)
```

## 🎮 Características del Juego

### **Mecánica Principal**
- **Experimentos espaciales** con contexto narrativo
- **Resolución paso a paso** sin presión de tiempo
- **Sistema de pistas pedagógicas** adaptativo
- **Validación inteligente** de múltiples formatos de respuesta
- **Feedback constructivo** para errores comunes

### **Diferencias con Space Shooter**
| Aspecto | Space Shooter | Math Lab |
|---------|---------------|----------|
| **Tiempo** | 3-10 segundos | Sin límite |
| **Interacción** | Disparar respuesta | Calcular paso a paso |
| **Complejidad** | Operación simple | Problema multietapa |
| **Objetivo** | Velocidad mental | Comprensión profunda |

## 🏗️ Estructura del Proyecto

```
math-quest-laboratory/
├── README.md                           # Esta documentación
├── index.html                          # Página principal con selector de módulos
├── assets/
│   ├── css/
│   │   ├── common.css                  # ✅ REUTILIZADO - Estilos base
│   │   └── mathlab-game.css           # 🆕 NUEVO - Específico del laboratorio
│   ├── js/
│   │   ├── mathlab-engine.js          # 🆕 NUEVO - Motor principal
│   │   ├── workspace-controller.js    # 🆕 NUEVO - Control del área de trabajo
│   │   ├── hint-system.js             # 🆕 NUEVO - Sistema de pistas
│   │   └── step-validator.js          # 🆕 NUEVO - Validador de pasos
│   └── data/
│       ├── modulo1-lab-problems.js    # 🆕 NUEVO - Problemas Módulo 1
│       ├── modulo2-lab-problems.js    # 🆕 NUEVO - Problemas Módulo 2
│       ├── modulo3-lab-problems.js    # 🆕 NUEVO - Problemas Módulo 3
│       ├── modulo4-lab-problems.js    # 🆕 NUEVO - Problemas Módulo 4
│       ├── modulo5-lab-problems.js    # 🆕 NUEVO - Problemas Módulo 5
│       └── modulo6-lab-problems.js    # 🆕 NUEVO - Problemas Módulo 6
└── modules/
    ├── modulo1_enteros_lab.html       # 🆕 NUEVO - Laboratorio Módulo 1
    ├── modulo2_primos_lab.html        # 🆕 NUEVO - Laboratorio Módulo 2
    ├── modulo3_racionales_lab.html    # 🆕 NUEVO - Laboratorio Módulo 3
    ├── modulo4_proporciones_lab.html  # 🆕 NUEVO - Laboratorio Módulo 4
    ├── modulo5_medidas_lab.html       # 🆕 NUEVO - Laboratorio Módulo 5
    └── modulo6_potencias_lab.html     # 🆕 NUEVO - Laboratorio Módulo 6
```

## 🚀 Instalación y Uso

### Opción 1: Desarrollo Local

1. **Crear la estructura de carpetas:**
```bash
mkdir math-quest-laboratory
cd math-quest-laboratory
mkdir assets assets/css assets/js assets/data modules
```

2. **Copiar archivos reutilizables:**
```bash
# Desde tu proyecto de Space Shooter
cp ../space-shooter/assets/css/common.css assets/css/
```

3. **Usar servidor local:**
```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx live-server

# Con PHP
php -S localhost:8000
```

4. **Abrir en navegador:**
```
http://localhost:8000
```

### Opción 2: Integración con Ecosistema Existente

Si ya tienes los otros juegos, puedes integrar Math Lab en la misma estructura:

```
tu-proyecto-matematicas/
├── flashcard-game/
├── space-shooter/
└── math-quest-laboratory/    # ← Agregar aquí
```

## 🎮 Cómo Jugar

### **Flujo del Estudiante**

1. **Seleccionar módulo** desde la página principal
2. **Leer el experimento** espacial planteado
3. **Analizar el problema** matemático paso a paso
4. **Completar cada paso** en el área de trabajo
5. **Usar pistas** si necesita orientación
6. **Verificar respuesta** y recibir feedback
7. **Avanzar** al siguiente experimento
8. **Reflexionar** sobre el aprendizaje al completar

### **Controles**

- **Tab**: Navegar entre campos de entrada
- **Enter**: Verificar paso actual
- **Escape**: Solicitar pista
- **Ctrl + R**: Reiniciar experimento

## 🎯 Módulos Disponibles

| Módulo | Tema | Experimentos | Tiempo Estimado |
|--------|------|--------------|-----------------|
| **🔢 Módulo 1** | Sistema de los Números Enteros | 10 | 3-5 min c/u |
| **🔬 Módulo 2** | Números Primos, MCM y MCD | 10 | 4-6 min c/u |
| **🧮 Módulo 3** | Sistema de los Números Racionales | 10 | 3-5 min c/u |
| **⚖️ Módulo 4** | Razones, Proporciones y Regla de Tres | 10 | 4-6 min c/u |
| **📏 Módulo 5** | Aplicaciones y Sistemas de Medida | 10 | 3-4 min c/u |
| **⚡ Módulo 6** | Potenciación y Radicación | 10 | 4-5 min c/u |

## 🔧 Configuración y Personalización

### **Ajustar Dificultad**

Edita `assets/data/moduloX-lab-problems.js`:

```javascript
const Modulo1LabConfig = {
    pedagogical: {
        maxHints: 3,              // Máximo de pistas por problema
        allowRetry: true,         // Permitir reintentos
        showProgress: true,       // Mostrar progreso visual
        adaptiveDifficulty: false // Mantener dificultad constante
    }
};
```

### **Personalizar Colores**

Los colores se heredan de `common.css`, pero puedes override en `mathlab-game.css`:

```css
:root {
    --lab-workspace-bg: rgba(0, 174, 172, 0.1);
    --lab-step-border: rgba(180, 196, 44, 0.3);
    --lab-hint-glow: 0 0 15px rgba(251, 187, 40, 0.5);
}
```

### **Agregar Nuevos Problemas**

```javascript
// En assets/data/moduloX-lab-problems.js
{
    id: "lab_enteros_011",
    title: "Experimento: Tu Nuevo Problema",
    context: {
        narrative: "Descripción del contexto espacial...",
        question: "¿Qué necesitas calcular?",
        visual_hint: "nombre_del_contexto_visual"
    },
    solution: {
        steps: [
            { id: 1, description: "Primer paso", operation: "operación", result: "resultado" },
            // ... más pasos
        ],
        final_answer: "respuesta_final",
        alternative_methods: ["método_alternativo_1", "método_alternativo_2"]
    },
    hints: [
        "Pista conceptual general",
        "Pista específica del primer paso", 
        "Pista explícita con solución"
    ],
    difficulty: 2,
    topic: "tema_específico",
    estimatedTime: 240000  // 4 minutos en milisegundos
}
```

## 📊 Sistema de Evaluación

### **Métricas Registradas**
- **Puntuación acumulada** por experimento completado
- **Independencia** (experimentos resueltos sin pistas)
- **Tiempo promedio** por experimento
- **Precisión** en cada paso
- **Patrones de error** más comunes

### **Niveles de Rendimiento**
- **🏆 Científico Espacial**: 90%+ independencia, alta precisión
- **🔬 Investigador**: 70-89% independencia, buena precisión
- **🧪 Asistente de Lab**: 50-69% independencia, precisión moderada
- **🚀 Cadete en Entrenamiento**: <50% independencia, necesita apoyo

## 📈 Tecnologías y Reutilización

### **Stack Tecnológico**
- **HTML5**: Estructura semántica
- **CSS3**: Grid, Flexbox, Animaciones
- **JavaScript ES6+**: Clases, Modules, Async/Await
- **Font Awesome**: Iconografía
- **Google Fonts**: Tipografía Montserrat

### **Reutilización de Código**
- ✅ **75% reutilizado** del Space Shooter
- ✅ **100% de CSS base** (common.css)
- ✅ **90% de estructura HTML** base
- ✅ **70% del motor** principal adaptado
- ✅ **95% del sistema** de configuraciones

## 🤝 Contribuir

### **Reportar Problemas**
1. Describe el problema paso a paso
2. Incluye información del navegador
3. Adjunta capturas de pantalla
4. Especifica el módulo y experimento

### **Sugerir Mejoras**
1. Nuevos tipos de problemas matemáticos
2. Mejoras pedagógicas al sistema de hints
3. Optimizaciones de interfaz
4. Nuevos contextos narrativos

## 📄 Licencia

Licenciado bajo **Creative Commons BY-NC-ND 4.0**

### ✅ Permitido:
- Uso educativo en instituciones
- Compartir sin modificaciones
- Adaptación para contextos específicos

### ❌ No Permitido:
- Uso comercial sin autorización
- Distribución de versiones modificadas
- Eliminación de créditos

## 👨‍🏫 Créditos

**Desarrollado por**: Profe Marlon Arcila  
**Institución**: Colegio Mayor de Antioquia  
**Proyecto**: Ecosistema Educativo Gamificado

### Contacto
- 📺 **YouTube**: [@MarlonDavidArcila](https://www.youtube.com/@MarlonDavidArcila)
- 💼 **LinkedIn**: [marlon-arcila](https://www.linkedin.com/in/marlon-arcila)

---

## 🚀 Estado del Proyecto

**Versión Actual**: 1.0.0 (En desarrollo)  
**Último Update**: Diciembre 2024  
**Compatibilidad**: Chrome, Firefox, Safari, Edge (últimas versiones)

### **Próximos Pasos**
1. ✅ Completar Módulo 1 (Números Enteros)
2. ⏳ Implementar Módulos 2-6
3. ⏳ Sistema de reportes para profesores
4. ⏳ Analytics avanzados de aprendizaje
5. ⏳ PWA (Progressive Web App)

---

**¡Bienvenido al Math Quest Laboratory! 🔬✨**

> *"En el laboratorio espacial de las matemáticas, cada problema es un experimento que nos acerca a la comprensión del universo numérico."* - Profe Marlon Arcila