const botao = document.getElementById("btnclick")
let carrinho = 0

botao.addEventListener("click", fnSoma)

function fnSoma() {
    carrinho++
    alert(`adicionado ao carrinho ${carrinho}`)
    return
}