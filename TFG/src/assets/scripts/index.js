document.addEventListener("DOMContentLoaded", function() {
    var floatingMenu = document.querySelector(".floating-menu");
    var floatingFooter = document.querySelector(".floating-footer");

    floatingMenu.style.opacity = "0";
    floatingFooter.style.opacity = "0";

    var contadorSegundos = 2;

    function mostrarDespuesDeSegundos() {
        //Mediante el método setInterval ejecutamos los if y else reiteradamente durante 100 milisegundo
        var fadeInInterval = setInterval(function() {
            if (parseFloat(floatingMenu.style.opacity) < 1) {
                floatingMenu.style.opacity = (parseFloat(floatingMenu.style.opacity) + 0.2).toString();
                floatingFooter.style.opacity = (parseFloat(floatingFooter.style.opacity) + 0.2).toString();
            } else {
                clearInterval(fadeInInterval);
            }
        }, 100);
    }

    setTimeout(mostrarDespuesDeSegundos, contadorSegundos * 1000);
});

// FUNCIÓN PARA OCULTAR DURANTE DOS SEGUNDO EL HEADER Y EL FOOTER
// -------------------------------------------------------------------------

// -------------------------------------------------------------------------
// FUNCIÓN PARA MOSTRAR PÁGINA DE CARGA 
// window.onload = function() {

//     // Tiempo de espera en milisegundos
//     var delay = 2000; 

//     setTimeout(function() {
//         // Ocultar la página de carga
//         document.getElementById('loading').style.opacity = '0';

//         // Mostrar la página principal
//         document.getElementById('home').style.display = 'block';
//     }, delay);
// };
