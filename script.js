/* TODO
criar botão de limpar
criar borracha
criar modo colorido
colocar um background bonito
adicionar sombra ao container
mudar o tamanho da grid de acordo com um input do usuario (máx 64)
*/
container = document.querySelector('#container')

let isPainting = false
let grid = 16

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
    i++
}