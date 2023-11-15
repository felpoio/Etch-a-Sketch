container = document.querySelector('#container')

let i = 0
while (i < 256) {
    container.appendChild(document.createElement('div'))
    i++
}
