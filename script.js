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

//Funcion para mostrar un mapa con la opcion que se elija de google maps

function mostrarMapa(x) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var url = 'https://www.google.es/maps/search/' + x + '/' + pos.lat + ',' + pos.lng;

            window.open(url);
        }, function () {
            alert('No se pudo obtener la ubicación del usuario.');
        });
    } else {
        alert('El navegador no admite la geolocalización.');
    }
}

document.addEventListener('keydown', function (event) {
    const carouselId = '#carousel';
    const carousel = document.querySelector(carouselId);
    const interval = parseInt(carousel.getAttribute('data-bs-interval'));

    if (event.code === 'ArrowLeft') {
        event.preventDefault();
        const prevButton = carousel.querySelector(`${carouselId} .carousel-control-prev`);
        prevButton.click();
    }
    else if (event.code === 'ArrowRight') {
        event.preventDefault();
        const nextButton = carousel.querySelector(`${carouselId} .carousel-control-next`);
        nextButton.click();
    }
});

var carouseltestimonios = new bootstrap.Carousel(carousel, {
    interval: 10000,
    pause: 'hover'
});

myCarousel.addEventListener('mouseenter', function () {
    carousel.pause();
});

myCarousel.addEventListener('mouseleave', function () {
    carousel.cycle();
});