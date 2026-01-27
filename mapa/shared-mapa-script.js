/* ========================================
   JAVASCRIPT COMPARTIDO PARA MAPAS CONCEPTUALES
   Versión optimizada combinando mejores prácticas
   ======================================== */

// Configuración global para Mermaid
const MERMAID_CONFIG = {
    startOnLoad: true,
    theme: 'base',
    themeVariables: {
        fontFamily: 'Segoe UI, sans-serif',
        fontSize: '14px',
        primaryTextColor: '#fff',
        primaryBorderColor: '#fff',
        lineColor: '#666',
        background: '#fff',
        clusterBkg: 'transparent',
        clusterBorder: 'transparent'
    },
    flowchart: {
        useMaxWidth: false,
        htmlLabels: true,
        curve: 'basis',
        nodeSpacing: 50,
        rankSpacing: 80,
        diagramPadding: 30,
        wrappingWidth: 200
    }
};

// Configuración responsiva según el ancho de pantalla
function getResponsiveConfig() {
    const width = window.innerWidth;
    let config = { ...MERMAID_CONFIG };
    
    if (width <= 576) {
        config.themeVariables.fontSize = '11px';
        config.flowchart.nodeSpacing = 35;
        config.flowchart.rankSpacing = 60;
    } else if (width <= 768) {
        config.themeVariables.fontSize = '12px';
        config.flowchart.nodeSpacing = 40;
        config.flowchart.rankSpacing = 65;
    } else if (width <= 1024) {
        config.themeVariables.fontSize = '13px';
        config.flowchart.nodeSpacing = 45;
        config.flowchart.rankSpacing = 70;
    }
    
    return config;
}

// Inicialización de Mermaid con configuración responsiva
function initializeMermaid() {
    if (typeof mermaid === 'undefined') {
        console.warn('Mermaid no está disponible');
        showFallbackMessage();
        return;
    }
    
    try {
        const config = getResponsiveConfig();
        mermaid.initialize(config);
        
        // Forzar re-renderizado si es necesario
        setTimeout(() => {
            mermaid.contentLoaded();
        }, 100);
        
    } catch (error) {
        console.error('Error inicializando Mermaid:', error);
        showFallbackMessage();
    }
}

// Navegación táctil optimizada para móviles y desktop
function initTouchNavigation() {
    const containers = document.querySelectorAll('.mermaid-container');
    
    containers.forEach(container => {
        let isScrolling = false;
        let startX = 0;
        let scrollLeft = 0;
        let startTime = 0;
        
        // Eventos touch para móviles
        container.addEventListener('touchstart', (e) => {
            isScrolling = true;
            startX = e.touches[0].pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
            startTime = Date.now();
            container.style.cursor = 'grabbing';
        }, { passive: true });
        
        container.addEventListener('touchmove', (e) => {
            if (!isScrolling) return;
            
            e.preventDefault();
            const x = e.touches[0].pageX - container.offsetLeft;
            const walk = (x - startX) * 2; // Multiplicador para velocidad
            container.scrollLeft = scrollLeft - walk;
        }, { passive: false });
        
        container.addEventListener('touchend', () => {
            isScrolling = false;
            container.style.cursor = 'grab';
            
            // Suavizar el final del scroll
            const duration = Date.now() - startTime;
            if (duration < 200) {
                container.style.scrollBehavior = 'smooth';
                setTimeout(() => {
                    container.style.scrollBehavior = 'auto';
                }, 300);
            }
        }, { passive: true });
        
        // Eventos mouse para desktop
        container.addEventListener('mousedown', (e) => {
            isScrolling = true;
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
            container.style.cursor = 'grabbing';
            e.preventDefault();
        });
        
        container.addEventListener('mousemove', (e) => {
            if (!isScrolling) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 1.5;
            container.scrollLeft = scrollLeft - walk;
        });
        
        container.addEventListener('mouseup', () => {
            isScrolling = false;
            container.style.cursor = 'grab';
        });
        
        container.addEventListener('mouseleave', () => {
            isScrolling = false;
            container.style.cursor = 'grab';
        });
        
        // Cursor inicial
        container.style.cursor = 'grab';
        
        // Scroll con rueda del mouse
        container.addEventListener('wheel', (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                container.scrollLeft += e.deltaY * 2;
            }
        }, { passive: false });
    });
}

// Indicadores visuales de navegación
function addScrollIndicators() {
    const containers = document.querySelectorAll('.mermaid-container');
    
    containers.forEach(container => {
        // Crear indicador de scroll
        const indicator = document.createElement('div');
        indicator.className = 'scroll-indicator';
        indicator.innerHTML = '<i class="fas fa-arrows-alt-h"></i> Desliza horizontalmente';
        
        container.style.position = 'relative';
        container.appendChild(indicator);
        
        // Ocultar indicador después de interacción
        let hideTimeout;
        const hideIndicator = () => {
            clearTimeout(hideTimeout);
            hideTimeout = setTimeout(() => {
                if (indicator.parentNode) {
                    indicator.style.animation = 'fadeInOut 1s ease-out forwards';
                    setTimeout(() => indicator.remove(), 1000);
                }
            }, 2000);
        };
        
        container.addEventListener('scroll', hideIndicator, { once: true });
        container.addEventListener('touchstart', hideIndicator, { once: true });
        container.addEventListener('mousedown', hideIndicator, { once: true });
    });
}

// Optimización de rendimiento
function optimizePerformance() {
    // Lazy loading para diagramas grandes
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const container = entry.target;
                container.classList.remove('loading');
                observer.unobserve(container);
            }
        });
    });
    
    document.querySelectorAll('.mermaid-container').forEach(container => {
        container.classList.add('loading');
        observer.observe(container);
    });
    
    // Debounce para resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            adjustResponsiveElements();
        }, 250);
    });
}

// Ajustes responsivos dinámicos
function adjustResponsiveElements() {
    const width = window.innerWidth;
    const mermaidElements = document.querySelectorAll('.mermaid');
    
    mermaidElements.forEach(element => {
        // Ajustar tamaño mínimo según dispositivo
        if (width <= 400) {
            element.style.minWidth = '600px';
        } else if (width <= 576) {
            element.style.minWidth = '700px';
        } else if (width <= 768) {
            element.style.minWidth = '800px';
        } else if (width <= 1024) {
            element.style.minWidth = '900px';
        } else {
            element.style.minWidth = '1000px';
        }
    });
    
    // Re-inicializar Mermaid con nueva configuración
    if (typeof mermaid !== 'undefined') {
        const config = getResponsiveConfig();
        mermaid.initialize(config);
    }
}

// Mensaje de fallback si Mermaid no carga
function showFallbackMessage() {
    const containers = document.querySelectorAll('.mermaid-container');
    containers.forEach(container => {
        container.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: #666;">
                <i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 1rem;"></i>
                <p><strong>Error al cargar el diagrama</strong></p>
                <p>Por favor, recarga la página o verifica tu conexión a internet.</p>
                <button onclick="location.reload()" style="padding: 0.5rem 1rem; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    Recargar página
                </button>
            </div>
        `;
    });
}

// Funciones de accesibilidad
function initAccessibility() {
    // Navegación por teclado
    document.addEventListener('keydown', (e) => {
        const container = document.querySelector('.mermaid-container:focus');
        if (!container) return;
        
        const scrollAmount = 100;
        switch(e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                container.scrollLeft -= scrollAmount;
                break;
            case 'ArrowRight':
                e.preventDefault();
                container.scrollLeft += scrollAmount;
                break;
            case 'Home':
                e.preventDefault();
                container.scrollLeft = 0;
                break;
            case 'End':
                e.preventDefault();
                container.scrollLeft = container.scrollWidth;
                break;
        }
    });
    
    // Hacer contenedores focusables
    document.querySelectorAll('.mermaid-container').forEach(container => {
        container.setAttribute('tabindex', '0');
        container.setAttribute('role', 'img');
        container.setAttribute('aria-label', 'Mapa conceptual navegable');
    });
}

// Función de depuración para desarrollo
function debugInfo() {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('🔧 Mapa Conceptual Debug Info:');
        console.log('- Ancho ventana:', window.innerWidth);
        console.log('- Mermaid disponible:', typeof mermaid !== 'undefined');
        console.log('- Contenedores encontrados:', document.querySelectorAll('.mermaid-container').length);
        console.log('- Configuración Mermaid:', getResponsiveConfig());
    }
}

// Inicialización principal
function initMapaConceptual() {
    // Verificar dependencias
    if (typeof mermaid === 'undefined') {
        console.warn('Mermaid no está cargado. Intentando cargar...');
        setTimeout(initMapaConceptual, 500);
        return;
    }
    
    try {
        // Inicializar todos los componentes
        initializeMermaid();
        initTouchNavigation();
        addScrollIndicators();
        optimizePerformance();
        adjustResponsiveElements();
        initAccessibility();
        debugInfo();
        
        console.log('✅ Mapa conceptual inicializado correctamente');
        
    } catch (error) {
        console.error('❌ Error inicializando mapa conceptual:', error);
        showFallbackMessage();
    }
}

// Auto-inicialización cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMapaConceptual);
} else {
    initMapaConceptual();
}

// Exportar funciones para uso manual si es necesario
window.MapaConceptual = {
    init: initMapaConceptual,
    reinitialize: () => {
        initializeMermaid();
        adjustResponsiveElements();
    },
    adjustSize: adjustResponsiveElements,
    debug: debugInfo
};