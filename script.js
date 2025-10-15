document.querySelector("#hamburger").addEventListener("click", () => {
    document.querySelector("nav ul").style.left = "0"
})

document.querySelector(".close").addEventListener("click", () => {
    document.querySelector("nav ul").style.left = "-100%"

})

document.querySelector("nav ul li").addEventListener("click", () => {
    document.querySelector("nav ul").style.left = "-100%"

})
