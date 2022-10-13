document.querySelector(".abt_us").addEventListener("mouseover", function () {
    document.querySelector(".abt_us_within").classList.add("show")
})

document.querySelector(".abt_us").addEventListener("mouseout", function () {
    document.querySelector(".abt_us_within").classList.remove("show")
})

document.querySelector(".cars").addEventListener("mouseover", function () {
    document.querySelector(".cars_within").classList.add("show")
})

document.querySelector(".cars").addEventListener("mouseout", function () {
    document.querySelector(".cars_within").classList.remove("show")
})

document.querySelector(".navbar-brand").addEventListener("mouseover", function () {
    document.querySelector("#navbar-brandImg").setAttribute("src", "img/logo_non_inverted.png")
    document.querySelector(".navbar-brand").style.background = "white"
    document.querySelector("#navbar-brandHeading").style.color = "#232323"



})

document.querySelector(".navbar-brand").addEventListener("mouseout", function () {
    document.querySelector("#navbar-brandImg").setAttribute("src", "img/logo.png")
    document.querySelector(".navbar-brand").style.background = "none"
    document.querySelector("#navbar-brandHeading").style.color = "white"


})

