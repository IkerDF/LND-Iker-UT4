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

function supportAnimation(){
    const support = document.getElementById("support");

    support.className = "fa-solid fa-circle-info fa-bounce";
}

function stopSupportAnimation(){
    const support = document.getElementById("support");
    
    support.className = "fa-solid fa-circle-info";
}

function moneyAnimation(){
    const plans = document.getElementById("plans");

    plans.className = "fa-solid fa-money-check-dollar fa-fade";
}

function stopMoneyAnimation(){
    const plans = document.getElementById("plans");

    plans.className = "fa-solid fa-money-check-dollar";
}

function commentsAnimation(){
    const comments = document.getElementById("comments");

    comments.className = "fa-solid fa-comment-dots fa-beat";
}

function stopCommentsAnimation(){
    const comments = document.getElementById("comments");

    comments.className = "fa-solid fa-comment-dots";
}