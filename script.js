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

function changeIcon(x, y){
    const element = document.getElementById(x);

    element.className = y;
}