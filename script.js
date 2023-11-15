container = document.querySelector('#container')

let i = 0
while (i < 256) {
    container.appendChild(document.createElement('div'))
    i++
}

let isPainting = false
divs = document.querySelectorAll("#container > div")
for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("mousedown", function(){
        isPainting = true
    })
    divs[i].addEventListener("mouseup", function(){
        isPainting = false
    })
    divs[i].addEventListener("mouseenter", function(){
        if (isPainting){
            divs[i].style.backgroundColor = "black"
        }
    })
}