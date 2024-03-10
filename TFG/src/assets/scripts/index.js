// FUNCIÓN PARA OCULTAR DURANTE DOS SEGUNDO EL HEADER Y EL FOOTER
// -------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    var floatingMenu = document.querySelector(".floating-menu");
    var floatingFooter = document.querySelector(".floating-footer");

    floatingMenu.style.opacity = "0";
    floatingFooter.style.opacity = "0";

    var contadorSegundos = 4;

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


// ---- Función Pantalla de Carga --------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    // Mostrar la pantalla de carga al inicio
    showLoadingScreen();

    // Ocultar la pantalla de carga después de tres segundos
    setTimeout(function () {
        hideLoadingScreen();
        // Mostrar el contenido principal después de ocultar la pantalla de carga
        showMainContent();
    }, 2500);
});

function showLoadingScreen() {
    // Crear un div para la pantalla de carga
    var loadingDiv = document.createElement("div");

    loadingDiv.id = "loading";
    loadingDiv.innerHTML = "<img src='./assets/images/logo.png' alt='Logo de la aplicación' id='idLogo'>";

    // Aplicar estilos para ocupar toda la pantalla y centrar el contenido
    loadingDiv.style.position = "fixed";
    loadingDiv.style.top = "0";
    loadingDiv.style.left = "0";
    loadingDiv.style.width = "100%";
    loadingDiv.style.height = "100%";
    loadingDiv.style.backgroundColor = "white";
    loadingDiv.style.display = "flex";
    loadingDiv.style.justifyContent = "center";
    loadingDiv.style.alignItems = "center";
    loadingDiv.style.zIndex = "100"; // Asegurar que esté en la parte superior

    // Agregar la pantalla de carga al cuerpo del documento
    document.body.appendChild(loadingDiv);
}

function hideLoadingScreen() {
    
    var loadingDiv = document.getElementById("loading");
    if (loadingDiv) {
        // Añadir transición de opacidad
        loadingDiv.style.transition = "opacity 0.5s ease-out";
        loadingDiv.style.opacity = "0";

        // Esperar a que termine la transición antes de eliminar el div
        setTimeout(function() {
            loadingDiv.parentNode.removeChild(loadingDiv);
        }, 500); // Ajusta este valor al tiempo de la transición
    }

    var idLogo = document.getElementById("idLogo");
    if (idLogo) {
        idLogo.parentNode.removeChild(idLogo);
    }
}