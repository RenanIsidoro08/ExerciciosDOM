function alterarBotao() {
    var lista = document.getElementById("Idlista");
    var itens = lista.getElementsByTagName("li");

    if (itens.length > 0) {
        lista.removeChild(itens[itens.length - 1]);
    } else {
        alert("Não há mais itens para remover.");
    }
}