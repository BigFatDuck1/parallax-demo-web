
window.addEventListener("scroll", function setAnimation(event) {
    const white_clouds = document.querySelector(".white_clouds");
    const speed = white_clouds.dataset.speed;
    white_clouds.style.transform = "translateY(" + window.scrollY * speed + "px)";

    
});