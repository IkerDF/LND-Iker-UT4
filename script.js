function cambiarColor() {
    const navbar = document.getElementById("navbar");
    const color = document.querySelector(".light");

    if (document.body.className === "light") {
        navbar.classList.remove("bg-light");
        navbar.classList.remove("navbar-light");
        navbar.classList.add("navbar-dark");
        navbar.classList.add("bg-dark");

        document.body.className = "dark";
    } else {
        navbar.classList.remove("bg-dark");
        navbar.classList.remove("navbar-dark");
        navbar.classList.add("navbar-light");
        navbar.classList.add("bg-light");

        document.body.className = "light";
    }
}

//Funcion para cambiar los iconos cuando esta el raton encima o cuando deja de estarlo

function changeIcon(x, y) {
    const element = document.getElementById(x);

    element.className = y;
}

//Funcion que obtiene la localizacion y abre google maps poniendo de lugar de origen la localizacion obtenida anteriormente

function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var url = 'https://www.google.com/maps/dir/?api=1&origin=' + pos.lat + ',' + pos.lng;
            window.open(url);
        }, function () {
            alert('No se pudo obtener la ubicación del usuario.');
        });
    } else {
        alert('El navegador no admite la geolocalización.');
    }
}

//Funcion para mostrar el toast (la primera vez que se hace click no funciona pero las demas si)

function mostrarToast() {
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')

    if (toastTrigger) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastTrigger.addEventListener('click', () => {
            toastBootstrap.show()
        })
    }
}

//Funcion para mostrar un mapa con los restaurantes cercanos

function initRestaurantes() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var url = 'https://www.google.es/maps/search/Restaurantes/'+ pos.lat + ',' + pos.lng;
            
            window.open(url);
        }, function () {
            alert('No se pudo obtener la ubicación del usuario.');
        });
    } else {
        alert('El navegador no admite la geolocalización.');
    }
}