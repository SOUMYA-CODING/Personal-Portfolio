//Auto typed text
var typed = new Typed(".auto-input", {
    strings: ["Full Stack Developer", "Freelancer", "Coder"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});


let scrollbtn = document.getElementById("scroll-btn");
let scrollmouse = document.getElementById("scrollmouse");

//For Navbar Scroller
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        nav.classList.add("header-scrolled");
        scrollbtn.style.display = "block";
        scrollmouse.style.display = "none";
    } else {
        nav.classList.remove("header-scrolled");
        scrollbtn.style.display = "none";
        scrollmouse.style.display = "block";
    }
};

//For Navbar Hide on click
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
});


//For form validation 
function formvalidation() {
    //Get the data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    //Call the functions
    if (!nameValidation(name) | !emailValidation(email) | !messageValidation(message)) {
        return false;
    }
}

//Validation of Name
function nameValidation(name) {
    if (name === "") {
        document.getElementById("name_error").innerHTML = "Field can't be empty";
        return false;
    } else {
        document.getElementById("name_error").innerHTML = "";
        return true;
    }
}

//Validation of Email
function emailValidation(email) {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === "") {
        document.getElementById("email_error").innerHTML = "Field can't be empty";
        return false;
    } else if (!email.match(mailFormat)) {
        document.getElementById("email_error").innerHTML = "Please enter correct email address";
        return false;
    } else {
        document.getElementById("email_error").innerHTML = "";
        return true;
    }
}

//Validation of Message
function messageValidation(message) {
    if (message === "") {
        document.getElementById("message_error").innerHTML = "Field can't be empty";
        return false;
    } else {
        document.getElementById("message_error").innerHTML = "";
        return true;
    }
}

//Particles JS
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});
