# Guía de Estructura HTML para Moodle 4 - Instrucciones para IA

## CONTEXTO DE IMPLEMENTACIÓN
Este código HTML está diseñado para ejecutarse dentro del **recurso "Página" de Moodle 4** usando la opción de **"Código HTML"**. Todo el código debe ser autónomo y funcionar sin archivos externos locales.

## ESTRUCTURA OBLIGATORIA

### 1. SECCIÓN DE CARGA DE DEPENDENCIAS (INICIO)
```html
<script>
    function cargarRecurso(tipo, url) {
        const elemento = document.createElement(tipo === 'stylesheet' ? 'link' : 'script');
        if (tipo === 'stylesheet') {
            elemento.rel = 'stylesheet';
            elemento.href = url;
        } else {
            elemento.src = url;
            elemento.defer = true;
        }
        elemento.onload = () => console.log(`Recurso cargado: ${url}`);
        elemento.onerror = () => console.error(`Error al cargar: ${url}`);
        document.head.appendChild(elemento);
    }
    
    // Cargar dependencias requeridas
    cargarRecurso('stylesheet', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css');
    cargarRecurso('stylesheet', 'https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css');
</script>
```

### 2. ESTILOS PERSONALIZADOS (DESPUÉS DE DEPENDENCIAS)
```html
<script>
    (function agregarEstilosPersonalizados() {
        const customStyles = document.createElement('style');
        customStyles.textContent = `
            /* Estilos específicos del contenido */
            .contenedor-principal {
                background-color: #E6E6E6;
                color: #333333;
                border-radius: 15px;
                padding: 5%;
            }
            /* Más estilos... */
        `;
        document.head.appendChild(customStyles);
    })();
</script>
```

### 3. CONTENIDO PRINCIPAL
Estructura modular con secciones comentadas:
```html
<!-- SECCIÓN X: Descripción -->
<div class="elemento-contenido">
    <!-- Contenido específico -->
</div>
<!-- FIN SECCIÓN X -->
```

### 4. SCRIPTS FINALES (AL FINAL DEL DOCUMENTO)
```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
<script>
    // Funciones personalizadas
    document.addEventListener('DOMContentLoaded', () => {
        // Inicialización
    });
</script>
```

## REGLAS ESPECÍFICAS PARA MOODLE

### CDNs PERMITIDOS
- **Bootstrap**: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/`
- **Bootstrap Icons**: `https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css`
- **Font Awesome**: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/`
- **Font Awesome**: `https://profemarlon.com/`
- **Otros CDNs públicos reconocidos**

### ELEMENTOS PROHIBIDOS
- ❌ Referencias a archivos locales
- ❌ `<head>` o `<html>` tags
- ❌ Imports de módulos ES6
- ❌ Referencias a servidores privados

### ELEMENTOS OBLIGATORIOS
- ✅ Carga dinámica de recursos
- ✅ Código completamente inline
- ✅ Compatibilidad con Bootstrap 5.x
- ✅ Funciones de validación de carga

## PATRONES DE COMPONENTES

### Acordeones Bootstrap
```html
<div class="accordion" id="accordionUnico">
    <div class="accordion-item mb-4">
        <h2 class="accordion-header" id="headingUnico">
            <button class="accordion-button collapsed" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#collapseUnico">
                <i class="bi bi-icono"></i> Título del Acordeón
            </button>
        </h2>
        <div id="collapseUnico" class="accordion-collapse collapse">
            <div class="accordion-body-container py-3">
                <!-- Contenido -->
            </div>
        </div>
    </div>
</div>
```

### Secciones con Iconos
```html
<div style="display: flex; align-items: center; gap: 12px; 
            background-color: #93BF34; border-radius: 8px; padding: 15px;">
    <div style="background-color: #7a9e2b; width: 60px; height: 60px; 
                border-radius: 50%; display: flex; align-items: center; justify-content: center;">
        <i class="bi bi-lightbulb" style="font-size: 2rem; color: #ffffff;"></i>
    </div>
    <div style="flex-grow: 1; color: #ffffff;">
        <h2 style="margin: 0;">Título de la Sección</h2>
    </div>
</div>
```

## PALETA DE COLORES ESTÁNDAR
- **Texto**, **Primario** y **Secundario**: azules-primarios
- **Acento 1**, **Acento 2**:verdes-primarios
- **Fondo**: #E6E6E6 (gris claro)

| Grupo            | CMYK               | RGB            | HEX     | Pantone |
| ---------------- | ------------------ | -------------- | ------- | ------- |
| azules-primarios | 100 / 87 / 47 / 55 | 23 / 33 / 57   | #172139 | 5255 C  |
| azules-primarios | 88 / 46 / 59 / 32  | 25 / 88 / 85   | #195855 | 626 C   |
| azules-primarios | 84 / 31 / 49 / 6   | 16 / 129 / 129 | #108181 | 7717 C  |
| azules-primarios | 75 / 2 / 38 / 0    | 0 / 174 / 172  | #00AEAC | 326 C   |
| verdes-primarios | 38 / 7 / 93 / 0    | 180 / 196 / 44 | #B4C42C | 583 C   |
| verdes-primarios | 5 / 50 / 93 / 0    | 233 / 144 / 30 | #E9901E | 715 C   |
| verdes-primarios | 0 / 30 / 88 / 0    | 251 / 187 / 40 | #FBBB28 | 1235 C  |


## RESPONSIVIDAD OBLIGATORIA
```css
@media (max-width: 768px) {
    h1 { font-size: 1.75rem; }
    .contenedor-principal { padding: 4%; }
}
@media (max-width: 576px) {
    h1 { font-size: 1.5rem; }
    .contenedor-principal { padding: 3%; }
}
```

## VALIDACIONES REQUERIDAS

### Carga de Recursos
- Implementar `onload` y `onerror` para todos los recursos externos
- Verificar disponibilidad antes de usar funciones de librerías
- Fallbacks para recursos críticos

### Compatibilidad
- Probar en navegadores: Chrome, Firefox, Safari, Edge
- Verificar en dispositivos móviles
- Asegurar funcionalidad sin JavaScript habilitado para contenido básico

## INSTRUCCIONES PARA LA IA

### AL GENERAR CÓDIGO:
1. **SIEMPRE** iniciar con la sección de carga de dependencias
2. **NUNCA** usar referencias a archivos locales
3. **MANTENER** la estructura de comentarios seccionales
4. **INCLUIR** validaciones de carga de recursos
5. **APLICAR** la paleta de colores estándar
6. **ASEGURAR** responsividad en todos los componentes

### ORDEN DE DESARROLLO:
1. Análisis de requerimientos
2. Definición de dependencias necesarias
3. Creación de estilos personalizados
4. Desarrollo del contenido principal
5. Implementación de scripts finales
6. Pruebas de funcionalidad

### DEBUGGING:
- Incluir `console.log` para seguimiento de carga
- Implementar manejo de errores
- Proporcionar mensajes descriptivos en consola

## EJEMPLO COMPLETO MÍNIMO
```html
<!-- Carga de dependencias -->
<script>
    function cargarRecurso(tipo, url) { /* implementación */ }
    cargarRecurso('stylesheet', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css');
</script>

<!-- Estilos personalizados -->
<script>
    (function() {
        const styles = document.createElement('style');
        styles.textContent = `/* CSS personalizado */`;
        document.head.appendChild(styles);
    })();
</script>

<!-- Contenido principal -->
<div class="container">
    <h1>Contenido Principal</h1>
</div>

<!-- Scripts finales -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        console.log('Página cargada correctamente');
    });
</script>
```