document.addEventListener("DOMContentLoaded", function() {
    var floatingMenu = document.querySelector(".floating-menu");
    var floatingFooter = document.querySelector(".floating-footer");

    floatingMenu.style.opacity = "0";
    floatingFooter.style.opacity = "0";

    var contadorSegundos = 2;

    function mostrarDespuesDeSegundos() {
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