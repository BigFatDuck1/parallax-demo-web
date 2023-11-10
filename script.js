
window.addEventListener("scroll", function setAnimation(event) {
    // const white_clouds = document.querySelector(".white_clouds");
    // const speed = white_clouds.dataset.speed;
    // white_clouds.style.transform = "translateY(" + window.scrollY * speed + "px)";

    // White clouds
    const white_clouds = document.querySelectorAll(".white_clouds");
    white_clouds.forEach((element) => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${window.scrollY * speed}px)`;
    })   

    // Yellow clouds
    const yellow_clouds = document.querySelectorAll(".yellow_clouds");
    const yellow_speed = yellow_clouds[0].dataset.speed;

    yellow_clouds.forEach(function (yellow_cloud) {
        yellow_cloud.style.transform = "translateY(" + window.scrollY * yellow_speed + "px)";
    });
});