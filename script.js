/* TODO
criar botão de limpar
criar borracha
criar modo colorido
colocar um background bonito
adicionar sombra ao container
mudar o tamanho da grid de acordo com um input do usuario (máx 64)

*/
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