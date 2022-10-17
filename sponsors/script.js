if(window.innerWidth<918){
    document.querySelector(".abt_us").addEventListener("click", function () {
        // document.querySelector(".abt_us_within").classList.add("real_show")
        document.querySelector(".abt_us_within").classList.toggle("real_show")
        document.querySelector(".abt_us_within").classList.remove("show")

    })
    document.querySelector(".cars").addEventListener("click", function () {
        document.querySelector(".cars_within").classList.toggle("real_show")
        document.querySelector(".cars_within").classList.remove("show")
    })
}
else{
    document.querySelector(".abt_us").addEventListener("mouseover", function () {
        // document.querySelector(".abt_us_within").classList.add("real_show")
        document.querySelector(".abt_us_within").classList.add("real_show")
        document.querySelector(".abt_us_within").classList.remove("show")
        
    })
    
    document.querySelector(".abt_us").addEventListener("mouseout", function () {
        // document.querySelector(".abt_us_within").classList.remove("real_show")
        document.querySelector(".abt_us_within").classList.remove("show")
        document.querySelector(".abt_us_within").classList.remove("real_show")

    
    })
    document.querySelector(".cars").addEventListener("mouseover", function () {
        document.querySelector(".cars_within").classList.add("real_show")
        document.querySelector(".cars_within").classList.remove("show")

    })
    
    document.querySelector(".cars").addEventListener("mouseout", function () {
        document.querySelector(".cars_within").classList.remove("show")
        document.querySelector(".cars_within").classList.remove("real_show")
    })

}
console.log(window.innerWidth)



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

// document.querySelector(".navbar ").addEventListener("scroll", function () {
//     document.querySelector(".navbar").style.opacity = "0.8"
//     document.querySelector(".navbar").classList.toggle("sticky-top", window.scrollY>0)
// })

function reached() {
    document.querySelector(".navbar").style.opacity = "0.9"
    // document.querySelector(".navbar").classList.add("sticky-top")
}
function reachedBack() {
    document.querySelector(".navbar").style.opacity = "1"
    // document.querySelector(".navbar").classList.remove("sticky-top")
}

const observer = new IntersectionObserver(
    (entries) =>{
        const ent = entries[0]
        console.log(ent)
        ent.isIntersecting === false
        ?reached()
        :reachedBack()
    },
    {
        root: null,
        rootMargin:"-180px",
        threshold:  0,
    }
);
observer.observe(document.querySelector(".h1tag"))




//Into the website
document.querySelector("#xps").addEventListener("click", function () {
    window.open("https://www.xpsindia.com/", '_blank');
})
document.querySelector("#solidworks").addEventListener("click", function () {
    window.open("https://www.solidworks.com/", '_blank');
})

document.querySelector("#ktm").addEventListener("click", function () {
    window.open("https://www.ktm.com/en-us.html", '_blank');
})

document.querySelector("#xps").addEventListener("click", function () {
    window.open("https://www.xpsindia.com/", '_blank');
})

document.querySelector("#burnout").addEventListener("click", function () {
    window.open("https://burnoutby3brothers.business.site/", '_blank');
})

document.querySelector("#ansys").addEventListener("click", function () {
    window.open("https://www.ansys.com/en-in", '_blank');
})

document.querySelector("#chasis").addEventListener("click", function () {
    window.open("https://www.chassissim.com/", '_blank');
})

document.querySelector("#asap").addEventListener("click", function () {
    window.open("https://asap-hardware-solutions.business.site/", '_blank');
})

document.querySelector("#matlab").addEventListener("click", function () {
    window.open("https://www.mathworks.com/", '_blank');
})
document.querySelector("#stubborn").addEventListener("click", function () {
    window.open("https://stubbornfactory.com/", '_blank');
})
document.querySelector("#monster").addEventListener("click", function () {
    window.open("https://www.monsterenergy.com/", '_blank');
})
document.querySelector("#ketto").addEventListener("click", function () {
    window.open("https://www.ketto.org/", '_blank');
})
document.querySelector("#altair").addEventListener("click", function () {
    window.open("https://www.altair.com/", '_blank');
})




