let addHeader = document.getElementById("Header")

window.addEventListener("scroll", () => {
       if(pageYOffset > 300){
            addHeader.style.display = "block"
       }
       else{
            addHeader.style.display = "none"
       }
})

let HideLogo = document.getElementById("main_logo")

window.addEventListener("scroll", () => {
        if(pageYOffset > 50){
            HideLogo.style.display = "none"
        }
        else{
            HideLogo.style.display = "block"
        }
})

// up to //
let store_1 = document.getElementById("demo_1")

window.addEventListener("scroll", () => {
    if(pageYOffset > 600){
        store_1.style.display = "block"
    }
    else{
        store_1.style.display = "none"
    }

    store_1.addEventListener("click", () => {
        window.scrollTo({
            top : 0,
            behavior : "smooth"
        })
    })
})


let addloader = document.getElementById("loader")

window.addEventListener("load", () => {
    addloader.style.display = "none"
})