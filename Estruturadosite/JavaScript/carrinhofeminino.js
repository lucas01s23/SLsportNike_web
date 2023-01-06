const botaozinho = document.getElementById("click")
let car = 0

botaozinho.addEventListener("click", fnSoma)

function fnSoma() {
    car++
    alert(`adicionado ao carrinho ${car}`)
    return
}