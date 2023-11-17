/* TODO
criar botão de limpar
criar borracha
criar modo colorido
colocar um background bonito
adicionar sombra ao container
mudar o tamanho da grid de acordo com um input do usuario (máx 100)
*/
criaGrid(64)

let button1 = document.querySelector('#grid-32')
let button2 = document.querySelector('#grid-64')
let button3 = document.querySelector('#grid-128')

button1.addEventListener("click", function(){
    criaGrid(32)
})

button2.addEventListener("click", function(){
    criaGrid(64)
})

button3.addEventListener("click", function(){
    criaGrid(128)
})

container = document.querySelector('#container')

function criaGrid(grid) {
    container.innerHTML = ""
    let isPainting = false
    let i = 0
    while (i < grid * grid) {
        const div = document.createElement('div')
        div.addEventListener("mousedown", function(){
            isPainting = true
        })
        div.addEventListener("mouseup", function(){
            isPainting = false
        })
        div.addEventListener("mouseenter", function(){
            if (isPainting){
                div.style.backgroundColor = "black"
            }
        })
        container.appendChild(div)
        div.style.width = 400 / grid + "px"
        div.style.height = 400 / grid + "px"
        i++
    }
}