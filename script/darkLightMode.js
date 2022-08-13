// Light Dark Mode
let modeBtn = document.getElementById("light_dark_mode");
let coffee_icon = document.getElementById("coffee_img");
let arrow = document.getElementById("arrow");

modeBtn.addEventListener('click', function () {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        modeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        coffee_icon.src = 'assets/base-assets/dark_coffee.png';
        arrow.src = 'assets/icons-assets/dark_arrow.png';
    } else {
        modeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        coffee_icon.src = 'assets/base-assets/light_coffee.png';
        arrow.src = 'assets/icons-assets/light_arrow.png';
    }
});