
let keyframes = [
    {transform: "translateY(0px)"},
    {transform: "translateY(500px)"},
]

let timing = {
    duration: 500,
    fill: "both",
}

const setAnimation = () => {
    document.querySelector(".white_clouds").animate(
        keyframes, timing
        )
        console.log("set")
    }


document.addEventListener("scroll", setAnimation);