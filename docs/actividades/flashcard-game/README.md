# 🧠 Flashcard Game - Juegos de Memoria Educativos

Sistema modular de juegos de memoria para el aprendizaje de conceptos matemáticos, desarrollado con HTML5, CSS3 y JavaScript vanilla.

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-CC%20BY--NC--ND%204.0-green.svg)
![Responsive](https://img.shields.io/badge/responsive-yes-brightgreen.svg)
![Accessibility](https://img.shields.io/badge/accessibility-keyboard%20navigation-orange.svg)

## 📖 **Descripción**

Serie de 6 juegos educativos de memoria tipo "flashcard" diseñados para reforzar conceptos matemáticos fundamentales. Cada juego presenta pares de cartas que deben emparejarse: **conceptos** con sus **definiciones** correspondientes.

### 🎯 **Módulos Disponibles**

| Módulo | Tema | Conceptos |
|--------|------|-----------|
| **1** | Sistema de Números Enteros | Números Enteros, Valor Absoluto, Recta Numérica |
| **2** | Números Primos, MCM y MCD | Números Primos, Factorización, Criterios de Divisibilidad |
| **3** | Sistema de Números Racionales | Fracciones, Simplificación, Números Decimales |
| **4** | Razones, Proporciones y Regla de Tres | Proporcionalidad, Porcentajes, Regla de Tres |
| **5** | Aplicaciones y Sistemas de Medida | Conversiones, Sistema Internacional, Sistema Imperial |
| **6** | Potenciación y Radicación | Exponentes, Raíces, Números Irracionales |

## 🚀 **Características Principales**

- ✅ **Arquitectura Modular**: Un CSS y JS para todos los módulos
- ✅ **Responsive Design**: Funciona perfectamente en móviles, tablets y desktop
- ✅ **Accesibilidad**: Navegación por teclado y compatible con lectores de pantalla
- ✅ **Validación Automática**: Sistema robusto de validación de datos
- ✅ **Manejo de Errores**: Mensajes informativos y debugging avanzado
- ✅ **Performance Optimizada**: Carga rápida y animaciones fluidas
- ✅ **Gamificación**: Timer, contador de movimientos y mensajes de victoria

## 📁 **Estructura del Proyecto**

```
flashcard-game/
├── assets/
│   ├── css/
│   │   └── flashcard.css          # Estilos comunes (todos los módulos)
│   └── js/
│       └── flashcard.js           # Lógica común (clase FlashcardGame)
├── modules/
│   ├── modulo1_flashcard.html     # Números Enteros
│   ├── modulo2_flashcard.html     # Números Primos, MCM y MCD
│   ├── modulo3_flashcard.html     # Números Racionales
│   ├── modulo4_flashcard.html     # Razones, Proporciones y Regla de Tres
│   ├── modulo5_flashcard.html     # Aplicaciones y Sistemas de Medida
│   └── modulo6_flashcard.html     # Potenciación y Radicación
└── README.md                      # Este archivo
```

## 🛠️ **Instalación y Uso**

### **Requisitos**
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (para cargar fuentes de Google y Font Awesome)

### **Instalación**
1. **Clonar o descargar** los archivos del proyecto
2. **Mantener la estructura** de carpetas exactamente como se muestra arriba
3. **Abrir cualquier módulo** directamente en el navegador

### **Uso Básico**
1. Abrir `modules/modulo1_flashcard.html` (o cualquier módulo)
2. Hacer clic en las cartas para voltearlas
3. Encontrar los pares concepto-definición
4. ¡Completar el juego en el menor tiempo y movimientos posibles!

## 🎮 **Controles**

### **Mouse/Touch**
- **Clic/Tap**: Voltear carta
- **Botón Reiniciar**: Iniciar nuevo juego

### **Teclado (Accesibilidad)**
- **Tab**: Navegar entre cartas
- **Enter/Espacio**: Voltear carta seleccionada
- **Ctrl + R**: Reiniciar juego

## 🏗️ **Arquitectura Técnica**

### **Frontend Stack**
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Grid Layout, Flexbox, Animaciones CSS
- **JavaScript ES6+**: Clases, Modules, Arrow Functions

### **Patrones de Diseño**
- **Clase Reutilizable**: `FlashcardGame` para todos los módulos
- **Separación de Responsabilidades**: HTML/CSS/JS modulares
- **Validación por Capas**: Cliente + Datos + DOM

### **Características Avanzadas**
```javascript
// Validación automática de datos
validateGameData(data) {
    // Verifica IDs únicos, pares completos, propiedades requeridas
}

// Navegación por teclado
handleKeydown(event) {
    // Enter, Espacio, Ctrl+R
}

// Manejo de errores robusto
showError(message) {
    // Mensajes informativos y auto-ocultación
}
```

## 🎨 **Personalización**

### **Crear Nuevo Módulo**
1. **Copiar** cualquier archivo HTML existente
2. **Cambiar** título y descripción
3. **Reemplazar** el array `gameData`:

```javascript
const gameData = [
    { id: 1, type: 'concept', content: 'Tu Concepto', pair: 1 },
    { id: 2, type: 'definition', content: 'Tu Definición', pair: 1 },
    // Agregar más pares...
];
```

### **Modificar Estilos**
- Editar `assets/css/flashcard.css`
- Los cambios se aplican automáticamente a todos los módulos

### **Extender Funcionalidad**
- Modificar `assets/js/flashcard.js`
- La clase `FlashcardGame` es extensible y documentada

## 🔍 **Validación y Testing**

### **Validación Automática**
El sistema valida automáticamente:
- ✅ IDs únicos para cada carta
- ✅ Pares completos (concept + definition)
- ✅ Propiedades requeridas (id, type, content, pair)
- ✅ Tipos válidos ('concept' o 'definition')

### **Debugging**
- Abrir **Developer Tools** (F12)
- Revisar **Console** para logs detallados
- Mensajes informativos con emojis para fácil identificación

### **Testing en Navegadores**
Probado y compatible con:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📱 **Responsive Design**

### **Breakpoints**
- **Desktop**: > 768px (grid 3-4 columnas)
- **Tablet**: 481-768px (grid 2-3 columnas)
- **Mobile**: < 480px (grid 1-2 columnas)

### **Adaptaciones Móviles**
- Cartas más pequeñas en pantallas reducidas
- Panel de estadísticas vertical en móviles
- Texto escalable con `clamp()`

## ♿ **Accesibilidad**

### **Características Incluidas**
- **Navegación por teclado** completa
- **Aria-labels** descriptivos
- **Focus visible** con outline personalizado
- **Contraste adecuado** (WCAG 2.1 AA)
- **Texto escalable** y legible
- **Respeta preferencias** de movimiento reducido

### **Compatibilidad con Lectores de Pantalla**
- Screen readers pueden navegar y entender el juego
- Anuncios automáticos de estado del juego
- Descripciones contextuales de cartas

## 📊 **Performance**

### **Optimizaciones**
- **CSS/JS externos**: Cacheables entre páginas
- **Imágenes optimizadas**: Solo íconos SVG (Font Awesome)
- **Animaciones GPU**: Transform3D para flipping
- **Event delegation**: Manejo eficiente de eventos
- **Lazy loading**: Cartas se crean dinámicamente

### **Métricas**
- **Carga inicial**: < 50KB (sin cache)
- **Carga posterior**: < 5KB (con cache CSS/JS)
- **Tiempo de carga**: < 1 segundo
- **Memoria**: < 10MB por juego

## 🐛 **Solución de Problemas**

### **El juego no carga**
1. Verificar estructura de carpetas
2. Revisar rutas a CSS/JS (`../assets/`)
3. Abrir Developer Tools → Console
4. Buscar errores en rojo

### **Datos inválidos**
```javascript
// En la consola del navegador:
console.log('Datos válidos:', game.validateGameData(tuArrayDeDatos));
```

### **Problemas de visualización**
- Verificar conexión a internet (Google Fonts, Font Awesome)
- Probar en navegador actualizado
- Desactivar extensions que puedan interferir

## 🤝 **Contribuciones**

### **Reportar Bugs**
- Incluir navegador y versión
- Describir pasos para reproducir
- Adjuntar screenshot si es posible

### **Sugerir Mejoras**
- Nuevos módulos matemáticos
- Características de gamificación
- Mejoras de accesibilidad

## 📄 **Licencia**

Este proyecto está licenciado bajo [Creative Commons Attribution-NonCommercial-NoDerivs 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)

### **Esto significa que puedes:**
- ✅ Usar para fines educativos
- ✅ Compartir el proyecto
- ✅ Usar en aulas y cursos

### **Pero NO puedes:**
- ❌ Uso comercial
- ❌ Modificar y distribuir versiones modificadas
- ❌ Remover atribuciones del autor

## 👨‍🏫 **Créditos**

**Desarrollado por**: Profe Marlon Arcila  
**YouTube**: [@MarlonDavidArcila](https://www.youtube.com/@MarlonDavidArcila)  
**LinkedIn**: [marlon-arcila](https://www.linkedin.com/in/marlon-arcila)  
**GitHub**: [MarlonMedellin](https://github.com/MarlonMedellin) (Profe Marlon Arcila)

### **Tecnologías Utilizadas**
- [Google Fonts - Montserrat](https://fonts.google.com/specimen/Montserrat)
- [Font Awesome](https://fontawesome.com/) para iconografía
- HTML5, CSS3, JavaScript ES6+

## 📈 **Roadmap**

### **Versión 2.1 (Próximamente)**
- [ ] Página índice principal
- [ ] Sistema de puntuación avanzado
- [ ] Modo multijugador local
- [ ] Estadísticas persistentes

### **Versión 2.2 (Futuro)**
- [ ] Más módulos matemáticos (álgebra, geometría)
- [ ] Tema oscuro/claro
- [ ] Sonidos y efectos
- [ ] PWA (Progressive Web App)

---

## 🎯 **¿Listo para jugar?**

1. Abre `modules/modulo1_flashcard.html`
2. ¡Empieza a emparejar conceptos!
3. Comparte con tus estudiantes

**¡Que disfrutes enseñando y aprendiendo matemáticas!** 🚀