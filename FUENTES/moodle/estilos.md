# 🎨 Guía de Implementación - Armonía Cromática por Banner

## 📋 Resumen de Cambios

Esta guía implementa una **progresión cromática armónica** utilizando colores institucionales, manteniendo la **resistencia anti-Moodle** y agregando **Montserrat** como tipografía unificada.

**Progresión Cromática:** Naranja → Magenta → Azul → Verde

---

## 🚀 BANNER 1 - INTRODUCCIÓN (`seccion1/mod#.html con # de 1 a 6`)

### 🎨 Paleta de Colores
- **Psicología:** Acogida y motivación inicial
- **Colores Actuales:** `#E9901E`, `#FF921F`, `#FBBF28`, `#FEF182`
- **Colores Nuevos:** `#E9901E`, `#F59A1F` (simplificar gradiente)
- **PANTONE:** 715 C → 1375 C

### 🎯 Iconos (MANTENER - Son Perfectos)
- **Principal:** `fas fa-rocket` - Simboliza el inicio del viaje
- **Secundario:** `fas fa-graduation-cap` - Representa el contexto educativo

### ✅ Elementos a MANTENER
- Estructura de selectores con `div[data-banner="introduccion-v1"]`
- Estrategia defensiva con `all: initial !important`
- Todos los efectos hover y animaciones existentes
- Accesibilidad implementada

### 🔧 Modificaciones CSS Específicas

#### A. Agregar Montserrat (al inicio del script)
```html
<script>
    function cargarMontserrat() {
        const montserratLink = document.createElement('link');
        montserratLink.rel = 'stylesheet';
        montserratLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap';
        document.head.appendChild(montserratLink);
    }
    cargarMontserrat();
    
    // Luego continúa con la función cargarRecurso existente...
</script>
```

#### B. Actualizar CSS (buscar y reemplazar)

**BUSCAR:**
```css
background: linear-gradient(135deg, #E9901E 0%, #FF921F 50%, #FBBF28 100%) !important;
```
**REEMPLAZAR:**
```css
background: linear-gradient(135deg, #E9901E 0%, #F59A1F 100%) !important;
```

**BUSCAR:**
```css
background: linear-gradient(135deg, rgba(254, 241, 130, 0.15) 0%, transparent 50%, rgba(233, 144, 30, 0.05) 100%) !important;
```
**REEMPLAZAR:**
```css
background: linear-gradient(135deg, rgba(245, 154, 31, 0.15) 0%, transparent 50%, rgba(233, 144, 30, 0.05) 100%) !important;
```

**BUSCAR:**
```css
background: radial-gradient(circle, #FEF182 0%, #FBBF28 50%, transparent 80%) !important;
```
**REEMPLAZAR:**
```css
background: radial-gradient(circle, #F59A1F 0%, #E9901E 50%, transparent 80%) !important;
```

#### C. Forzar Montserrat (agregar al final del CSS)
```css
/* FORZAR MONTSERRAT */
div[data-banner="introduccion-v1"] *,
div[data-banner="introduccion-v1"] h1,
div[data-banner="introduccion-v1"] p {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif !important;
}
```

### 📝 Verificación Final Banner 1
- [ ] Montserrat cargado
- [ ] Gradiente simplificado: `#E9901E → #F59A1F`
- [ ] Iconos mantenidos: 🚀 `fas fa-rocket`, 🎓 `fas fa-graduation-cap`
- [ ] Estrategia anti-Moodle preservada

---

## 🧪 BANNER 2 - EXPLORACIÓN (`seccion_2/banner_mod1.html`)

### 🎨 Paleta de Colores
- **Psicología:** Energía y creatividad exploratoria
- **Colores Actuales:** `#1a365d`, `#2563eb`, `#3b82f6`, `#f59e0b`, `#ff6b35`
- **Colores Nuevos:** `#E83776`, `#AB2F87`, `#F094A1`, `#D63384`
- **PANTONE:** 205 C → 675 C

### 🎯 Iconos (MANTENER - Son Perfectos)
- **Principal:** `fas fa-flask` - Perfecto para experimentación y descubrimiento
- **Secundario:** `fas fa-calculator` - Ideal para matemáticas

### ✅ Elementos a MANTENER
- Estructura con `.color-theory-banner`
- Sistema de variables CSS existente
- Animaciones y efectos especiales para iconos
- Glassmorphism y efectos de resplandor

### 🔧 Modificaciones CSS Específicas

#### A. Agregar Montserrat (al inicio del script)
```html
<script>
    function cargarMontserrat() {
        const montserratLink = document.createElement('link');
        montserratLink.rel = 'stylesheet';
        montserratLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap';
        document.head.appendChild(montserratLink);
    }
    cargarMontserrat();
    
    // Luego continúa con la función cargarRecurso existente...
</script>
```

#### B. Actualizar Variables CSS (buscar la sección `:root` y reemplazar)

**BUSCAR:**
```css
:root {
    --color-primary-dark: #1a365d;
    --color-primary-medium: #2563eb;
    --color-primary-light: #3b82f6;
    --color-primary-bright: #1d4ed8;
    --color-accent-warm: #f59e0b;
    --color-accent-gold: #fbbf24;
```

**REEMPLAZAR:**
```css
:root {
    --color-primary-dark: #AB2F87;      /* Magenta oscuro */
    --color-primary-medium: #E83776;    /* Magenta medio */
    --color-primary-light: #F094A1;     /* Magenta claro */
    --color-primary-bright: #D63384;    /* Magenta saturado */
    --color-accent-warm: #F59A1F;       /* Naranja complementario */
    --color-accent-gold: #FFB84D;       /* Dorado análogo */
```

#### C. Actualizar Color de Iconos (buscar y reemplazar)

**BUSCAR:**
```css
color: #ff6b35;
```
**REEMPLAZAR:**
```css
color: #F59A1F;
```

#### D. Forzar Montserrat (agregar al final del CSS)
```css
/* FORZAR MONTSERRAT */
.color-theory-banner *,
.color-theory-banner h1,
.color-theory-banner p {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif !important;
}
```

### 📝 Verificación Final Banner 2
- [ ] Montserrat cargado
- [ ] Variables actualizadas: Magenta como principal, naranja como acento
- [ ] Iconos mantenidos: 🧪 `fas fa-flask`, 🔢 `fas fa-calculator`
- [ ] Efectos especiales de iconos preservados

---

## 🧠 BANNER 3 - CONSOLIDACIÓN (`seccion_3/banner_mod1.html`)

### 🎨 Paleta de Colores
- **Psicología:** Estabilidad y comprensión profunda
- **Colores Actuales:** `#2F1F86`, `#AB2F4F`, `#E83776`, `#EB901E`
- **Colores Nuevos:** `#34AAE2`, `#067FC3`, `#4A9B8E`, `#60A65F`
- **PANTONE:** 298 C → 7460 C

### 🎯 Iconos (MANTENER - Son Perfectos)
- **Principal:** `fas fa-brain` - Excelente para representar consolidación mental
- **Secundario:** `fas fa-tools` - Simboliza herramientas de afianzamiento

### ✅ Elementos a MANTENER
- Estructura con `div[data-banner="afianzamiento-v2"]`
- Estrategia defensiva con colores hardcodeados
- Sistema de atributos `data` únicos
- Animaciones evolutivas de iconos

### 🔧 Modificaciones CSS Específicas

#### A. Agregar Montserrat (al inicio del script)
```html
<script>
    function cargarMontserrat() {
        const montserratLink = document.createElement('link');
        montserratLink.rel = 'stylesheet';
        montserratLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap';
        document.head.appendChild(montserratLink);
    }
    cargarMontserrat();
    
    // Luego continúa con la función cargarRecurso existente...
</script>
```

#### B. Actualizar Gradiente Principal (buscar y reemplazar)

**BUSCAR:**
```css
background: linear-gradient(135deg, #2F1F86 0%, #AB2F4F 100%) !important;
```
**REEMPLAZAR:**
```css
background: linear-gradient(135deg, #34AAE2 0%, #067FC3 100%) !important;
```

#### C. Actualizar Colores Hardcodeados

**BUSCAR:**
```css
background: rgba(232, 55, 118, 0.15) !important;
```
**REEMPLAZAR:**
```css
background: rgba(52, 170, 226, 0.15) !important;
```

**BUSCAR:**
```css
border-bottom: 5px solid #EB901E !important;
```
**REEMPLAZAR:**
```css
border-bottom: 5px solid #4A9B8E !important;
```

**BUSCAR:**
```css
background: linear-gradient(90deg, #EB901E 0%, #E83776 100%) !important;
```
**REEMPLAZAR:**
```css
background: radial-gradient(circle, #4A9B8E 0%, #60A65F 100%) !important;
```

**BUSCAR:**
```css
text-shadow: 4px 4px 8px #2F1F86, 0 0 30px rgba(235, 144, 30, 0.5) !important;
```
**REEMPLAZAR:**
```css
text-shadow: 4px 4px 8px #067FC3, 0 0 30px rgba(52, 170, 226, 0.5) !important;
```

**BUSCAR:**
```css
color: #F5A542 !important;
```
**REEMPLAZAR:**
```css
color: #60A65F !important;
```

#### D. Actualizar Colores de Iconos

**BUSCAR:**
```css
color: #EB901E !important;
```
**REEMPLAZAR:**
```css
color: #4A9B8E !important;
```

**BUSCAR:**
```css
color: #F06B9A !important;
```
**REEMPLAZAR:**
```css
color: #60A65F !important;
```

#### E. Actualizar Barra Espectral

**BUSCAR:**
```css
background: linear-gradient(135deg, #2F1F86 0%, #AB2F4F 35%, #E83776 70%, #EB901E 100%) !important;
```
**REEMPLAZAR:**
```css
background: linear-gradient(135deg, #067FC3 0%, #34AAE2 35%, #4A9B8E 70%, #60A65F 100%) !important;
```

#### F. Forzar Montserrat (agregar al final del CSS)
```css
/* FORZAR MONTSERRAT */
div[data-banner="afianzamiento-v2"] *,
div[data-banner="afianzamiento-v2"] h1,
div[data-banner="afianzamiento-v2"] p {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif !important;
}
```

### 📝 Verificación Final Banner 3
- [ ] Montserrat cargado
- [ ] Gradiente actualizado: `#34AAE2 → #067FC3`
- [ ] Todos los colores hardcodeados actualizados a azul-verde
- [ ] Iconos mantenidos: 🧠 `fas fa-brain`, 🛠️ `fas fa-tools`
- [ ] Estrategia defensiva preservada

---

## ✅ BANNER 4 - EVALUACIÓN (`seccion_4/banner_mod1.html`)

### 🎨 Paleta de Colores
- **Psicología:** Crecimiento y éxito alcanzado
- **Colores Actuales:** `#103B45`, `#007363`, `#4A9B8E`, `#B8A832`
- **Colores Nuevos:** `#007363`, `#60A65F`, `#4A9B8E`, `#34AAE2`
- **PANTONE:** 3295 C → 7489 C

### 🎯 Iconos (MANTENER - Son Perfectos)
- **Principal:** `fas fa-clipboard-check` - Perfecto para evaluación
- **Secundario:** `fas fa-graduation-cap` - Cierre del ciclo educativo

### ✅ Elementos a MANTENER
- Estructura con `.evaluacion-banner`
- Sistema de variables CSS existente
- Animaciones de progreso y resplandor
- Glassmorphism y efectos de evaluación

### 🔧 Modificaciones CSS Específicas

#### A. Agregar Montserrat (al inicio del script)
```html
<script>
    function cargarMontserrat() {
        const montserratLink = document.createElement('link');
        montserratLink.rel = 'stylesheet';
        montserratLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap';
        document.head.appendChild(montserratLink);
    }
    cargarMontserrat();
    
    // Luego continúa con la función cargarRecurso existente...
</script>
```

#### B. Actualizar Variables CSS (buscar la sección `:root` y reemplazar)

**BUSCAR:**
```css
:root {
    --verde-oscuro: #103B45;
    --verde-medio: #007363;
    --verde-claro: #4A9B8E;
    --verde-agua: #6FB3A0;
    --acento-dorado: #B8A832;
    --acento-amarillo: #D4C441;
```

**REEMPLAZAR:**
```css
:root {
    --verde-oscuro: #067FC3;           /* Azul base */
    --verde-medio: #007363;            /* Verde medio (mantener) */
    --verde-claro: #60A65F;            /* Verde claro */
    --verde-agua: #4A9B8E;             /* Verde agua */
    --acento-dorado: #34AAE2;          /* Azul claro como acento */
    --acento-amarillo: #87CEEB;        /* Azul cielo complementario */
```

#### C. Forzar Montserrat (agregar al final del CSS)
```css
/* FORZAR MONTSERRAT */
.evaluacion-banner *,
.evaluacion-banner h1,
.evaluacion-banner p {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif !important;
}
```

### 📝 Verificación Final Banner 4
- [ ] Montserrat cargado
- [ ] Variables actualizadas: Verde como base, azul como acento
- [ ] Iconos mantenidos: ✅ `fas fa-clipboard-check`, 🎓 `fas fa-graduation-cap`
- [ ] Efectos de progreso preservados

---

## 🛠️ INSTRUCCIONES GENERALES

### 🛡️ Resistencia Anti-Moodle (YA IMPLEMENTADA)
**NO MODIFICAR** - Mantener estrategia defensiva actual:
```css
/* ✅ CORRECTO - PRESERVAR */
all: initial !important;                    /* Resetea herencia Moodle */
div[data-banner="..."]                      /* Selectores únicos */
color: #valor !important;                   /* Colores hardcodeados */
```

### 📱 Orden de Implementación Recomendado
1. **Banner 1** (Introducción) - Cambios mínimos
2. **Banner 4** (Evaluación) - Variables simples
3. **Banner 2** (Exploración) - Variables medias
4. **Banner 3** (Consolidación) - Más colores hardcodeados

### 🎨 Verificación de Armonía Final
**Progresión Cromática Completa:**
1. 🚀 **Naranja Acogedor** (`#E9901E → #F59A1F`) → Motivación inicial
2. 🧪 **Magenta Energético** (`#E83776 → #AB2F87`) → Exploración creativa
3. 🧠 **Azul Confiable** (`#34AAE2 → #067FC3`) → Consolidación estable
4. ✅ **Verde Exitoso** (`#007363 → #60A65F`) → Logro final

### ✅ Checklist Global Final
- [ ] **Montserrat** cargado en los 4 banners
- [ ] **Gradientes** actualizados según progresión cromática
- [ ] **Iconos perfectos** mantenidos: 🚀🧪🧠✅
- [ ] **Estrategia anti-Moodle** preservada completamente
- [ ] **Variables CSS** actualizadas por banner
- [ ] **Colores hardcodeados** actualizados donde necesario
- [ ] **Progresión armónica** implementada: Naranja → Magenta → Azul → Verde

---

## 🎯 Resultado Final

Cada banner mantiene su **resistencia anti-Moodle** mientras implementa una **armonía cromática institucional** perfecta con **Montserrat** como tipografía unificada.

**Beneficios:**
- ✅ Coherencia visual total
- ✅ Progresión educativa natural
- ✅ Iconos perfectos preservados
- ✅ Resistencia a sobrescritura de Moodle
- ✅ Tipografía profesional unificada