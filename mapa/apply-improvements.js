// Script para aplicar mejoras a los módulos restantes
const improvements = {
    mathJaxHeader: `    <!-- MathJax -->
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    <script>
        window.MathJax = {
            tex: {
                inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
                displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']]
            }
        };
    </script>
    
    <!-- Mermaid JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.6.0/mermaid.min.js"></script>
    
    <!-- Estilos compartidos -->
    <link rel="stylesheet" href="shared-mapa-styles.css">`,
    
    standardTip: `💡 Utiliza navegación táctil o mouse para explorar el diagrama. Las flechas del teclado también funcionan cuando el diagrama está enfocado.`,
    
    referencesSection: `            
            <!-- Referencias y Créditos -->
            <div class="references-section">
                <div class="references-title">
                    <i class="fas fa-book"></i>
                    Referencias
                </div>
                <div class="reference-item">
                    Arcila Vanegas, M. D., & Gómez Noreña, Y. E. (2016). <em>Aritmética: teoría, ejemplos y problemas</em> (1ª ed.). Instituto Tecnológico Metropolitano; Institución Universitaria Colegio Mayor de Antioquia.
                </div>
                <div class="credits">
                    Mapa conceptual elaborado por Marlon Arcila (2025). Contenido adaptado del texto de referencia.
                </div>
            </div>`
};

// Módulos que necesitan ser actualizados
const modules = ['mapaconceptualmodulo4.html', 'mapaconceptualmodulo5.html', 'mapaconceptualmodulo6.html'];

console.log('Mejoras a aplicar:');
console.log('✓ MathJax integrado');
console.log('✓ Tip estandarizado');  
console.log('✓ Referencias APA 7');
console.log('✓ Créditos de autor');
console.log('\nMódulos pendientes:', modules.join(', '));