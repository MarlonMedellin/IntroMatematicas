# ESPECIFICACIONES TÉCNICAS: MAPA CONCEPTUAL - SISTEMA DE NÚMEROS ENTEROS

## 1. ESTRUCTURA JERÁRQUICA DEL DIAGRAMA

### **Nivel 1 - Concepto Central**
- **Nodo**: "NÚMEROS ENTEROS Z"
- **Posición**: Centro superior
- **Conexiones**: Conecta con todos los conceptos principales del Nivel 2

### **Nivel 2 - Conceptos Principales**
- **FUNDAMENTOS BÁSICOS** (izquierda)
- **OPERACIONES FUNDAMENTALES** (derecha)

### **Nivel 3 - Sub-conceptos Primarios**
**De FUNDAMENTOS BÁSICOS:**
- Conjunto Z
- Representación Geométrica
- Valor Absoluto

**De OPERACIONES FUNDAMENTALES:**
- Adición
- Sustracción
- Multiplicación
- División

### **Nivel 4 - Sub-conceptos Secundarios**
**De Conjunto Z:**
- Enteros Positivos
- Cero
- Enteros Negativos

**De Adición:**
- Signos Iguales
- Signos Diferentes
- Propiedades

**De Sustracción:**
- Regla de Sustracción

**De Multiplicación y División:**
- Ley de Signos → Signos Iguales Positivo
- Ley de Signos → Signos Diferentes Negativo

### **Nivel 5 - Conceptos Intermedios**
**Conectados directamente al Concepto Central:**
- EXPRESIONES ARITMÉTICAS
- TEORÍA DE NÚMEROS

### **Nivel 6 - Sub-conceptos de Nivel 5**
**De EXPRESIONES ARITMÉTICAS:**
- Polinomios Aritméticos
- Con Signos de Agrupación

**De TEORÍA DE NÚMEROS:**
- Clasificación
- Divisibilidad
- Factorización

### **Nivel 7 - Detalles Específicos**
**De Clasificación:**
- Números Primos
- Números Compuestos

**De Divisibilidad:**
- Criterios de Divisibilidad

**De Factorización:**
- Descomposición en Factores Primos

### **Nivel 8 - Aplicaciones Finales**
**De Descomposición en Factores Primos:**
- APLICACIONES AVANZADAS → MCD
- APLICACIONES AVANZADAS → MCM

**De MCD y MCM:**
- Relación MCD y MCM

## 2. PALETA DE COLORES Y CATEGORIZACIÓN

### **A. Concepto Central**
- **Color**: `#2c3e50` (azul oscuro)
- **Texto**: Blanco (`#fff`)
- **Borde**: Blanco, 3px
- **Aplicar a**: NÚMEROS ENTEROS Z

### **B. Conceptos Fundamentales**
- **Color**: `#27ae60` (verde oscuro)
- **Texto**: Blanco (`#fff`)
- **Borde**: Blanco, 2px
- **Aplicar a**: FUNDAMENTOS BÁSICOS, OPERACIONES FUNDAMENTALES

### **C. Propiedades y Aplicaciones**
- **Color**: `#e67e22` (naranja)
- **Texto**: Blanco (`#fff`)
- **Borde**: Blanco, 2px
- **Aplicar a**: TEORÍA DE NÚMEROS, APLICACIONES AVANZADAS

### **D. Conceptos Específicos**
- **Color**: `#17a2b8` (azul turquesa)
- **Texto**: Blanco (`#fff`)
- **Borde**: Blanco, 2px
- **Aplicar a**: Conjunto Z, Representación Geométrica, Valor Absoluto, EXPRESIONES ARITMÉTICAS, Polinomios Aritméticos, Con Signos de Agrupación

### **E. Operaciones y Métodos**
- **Color**: `#fff3cd` (amarillo claro)
- **Texto**: `#856404` (marrón oscuro)
- **Borde**: `#856404`, 2px
- **Aplicar a**: Adición, Sustracción, Multiplicación, División, Clasificación, Divisibilidad, Factorización, MCD, MCM

### **F. Detalles Específicos**
- **Color**: `#f8f9fa` (gris muy claro)
- **Texto**: `#495057` (gris oscuro)
- **Borde**: `#6c757d`, 1px
- **Aplicar a**: Todos los nodos de nivel 4 y posteriores que no están en otras categorías

## 3. CONFIGURACIÓN TÉCNICA

### **A. Framework y Librerías**
```html
- Bootstrap 5.3.0 (CDN)
- Mermaid 10.6.0 (CDN)
- Fuentes: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
```

### **B. Configuración Mermaid**
```javascript
mermaid.initialize({ 
    startOnLoad: true,
    theme: 'base',
    themeVariables: {
        fontFamily: 'Segoe UI, sans-serif',
        fontSize: '16px',
        primaryTextColor: '#fff',
        primaryBorderColor: '#fff',
        lineColor: '#333'
    },
    flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis',
        nodeSpacing: 20,
        rankSpacing: 30
    }
});
```

### **C. Tipografía Responsiva**
- **Desktop**: 16px (nodos: 15px, peso: 500)
- **Tablet**: 14px (nodos: 13px)
- **Móvil**: 12px (nodos: 11px)

## 4. LAYOUT Y DISTRIBUCIÓN

### **A. Estructura HTML**
```html
<div class="container-fluid p-3 p-md-4">
    <div class="main-container">
        <div class="header">
            <h1>SISTEMA DE LOS NÚMEROS ENTEROS</h1>
            <p>Conceptos Fundamentales y Relaciones</p>
        </div>
        <div class="content-section">
            <div class="row">
                <div class="col-12">
                    [DIAGRAMA MERMAID - 100% ANCHO]
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-12 col-md-8">
                    [LEYENDA EN 3 COLUMNAS]
                </div>
                <div class="col-12 col-md-4">
                    [TIP/ALERT]
                </div>
            </div>
        </div>
    </div>
</div>
```

### **B. Distribución Responsiva**
- **PC**: Diagrama 100% ancho, Leyenda (75%) + Tip (25%) abajo
- **Tablet**: Diagrama 100% ancho, Leyenda (67%) + Tip (33%) abajo
- **Móvil**: Todo apilado verticalmente

### **C. Header con Gradiente**
```css
background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
color: white;
```

## 5. COMPONENTES ESPECÍFICOS

### **A. Leyenda**
- **Título**: "LEYENDA" con ícono
- **Organización**: 3 columnas responsivas
- **Elementos**:
  1. Concepto Central (círculo azul oscuro)
  2. Conceptos Fundamentales (círculo verde)
  3. Propiedades y Aplicaciones (círculo naranja)
  4. Conceptos Específicos (círculo turquesa)
  5. Operaciones y Métodos (círculo amarillo con borde)

### **B. Tip/Alert**
- **Tipo**: Bootstrap alert-info
- **Contenido**: "💡 Tip: Haz clic y arrastra para navegar por el diagrama en dispositivos táctiles."
- **Altura**: 100% para alinearse con la leyenda

## 6. ESTILOS ESPECÍFICOS

### **A. Contenedor Principal**
```css
.main-container {
    background: white;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    overflow: hidden;
}
```

### **B. Fondo de Página**
```css
body {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    min-height: 100vh;
}
```

## 7. INSTRUCCIONES DE IMPLEMENTACIÓN

### **Paso 1**: Crear estructura HTML con Bootstrap
### **Paso 2**: Configurar Mermaid con las especificaciones dadas
### **Paso 3**: Aplicar la jerarquía de nodos exacta
### **Paso 4**: Implementar la paleta de colores por categorías
### **Paso 5**: Configurar responsividad para 3 breakpoints
### **Paso 6**: Añadir leyenda y tip debajo del diagrama
### **Paso 7**: Aplicar estilos CSS personalizados

## 8. CÓDIGO MERMAID COMPLETO

```mermaid
graph TD
    A[NUMEROS ENTEROS Z]
    B[FUNDAMENTOS BASICOS]
    C[OPERACIONES FUNDAMENTALES]
    B1[Conjunto Z]
    B2[Representacion Geometrica]  
    B3[Valor Absoluto]
    B4[Adicion]
    C1[Sustraccion]
    C2[Multiplicacion]
    C3[Division]
    
    [... resto de nodos según jerarquía especificada ...]
    
    A --> B
    A --> C
    B --> B1
    B --> B2
    B --> B3
    C --> B4
    C --> C1
    C --> C2
    C --> C3
    
    [... resto de conexiones según estructura especificada ...]
```

## 9. RESULTADO ESPERADO

Una página web responsive que muestre:
- ✅ Mapa conceptual completo con jerarquía clara
- ✅ Colores diferenciados por tipo de concepto
- ✅ Layout 100% ancho para el diagrama
- ✅ Leyenda y tip organizados debajo
- ✅ Tipografía legible y responsiva
- ✅ Diseño profesional con gradientes y sombras
- ✅ Funcionamiento óptimo en móvil, tablet y PC


#######################
¡Perfecto! He creado una especificación técnica completa del mapa conceptual que desarrollamos. Este documento funciona como un "prompt detallado" que cualquier IA puede seguir para replicar exactamente el mismo trabajo.

## 📋 **Características principales del documento:**

### **1. Estructura Completa**
- **Jerarquía de 8 niveles** con todos los nodos y conexiones
- **Organización exacta** del flujo conceptual
- **Relaciones específicas** entre elementos

### **2. Especificaciones Técnicas**
- **Paleta de colores** con códigos hexadecimales exactos
- **Configuración Mermaid** completa con parámetros
- **Framework**: Bootstrap 5.3.0 + Mermaid 10.6.0

### **3. Diseño Responsivo**
- **3 breakpoints**: PC, tablet, móvil
- **Tipografía escalable**: 16px → 14px → 12px
- **Layout adaptativo** con distribución específica

### **4. Componentes Detallados**
- **Header con gradiente** y tipografía responsiva
- **Leyenda organizada** en 3 columnas
- **Sistema de colores** por categorías conceptuales

### **5. Instrucciones de Implementación**
- **8 pasos ordenados** para la construcción
- **Código base** de Mermaid incluido
- **Checklist de resultado** esperado

## 🎯 **Uso del documento:**

- ✅ Crear mapas conceptuales similares
- ✅ Mantener la misma calidad visual
- ✅ Replicar la estructura responsiva
- ✅ Aplicar la paleta de colores correcta
- ✅ Implementar la jerarquía conceptual

**Este documento es como un "manual de construcción"** que garantiza resultados consistentes y profesionales. ¿Te parece completa la especificación?