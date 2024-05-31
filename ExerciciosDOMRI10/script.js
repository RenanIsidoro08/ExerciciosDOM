function reverterLista() {
    var lista = document.getElementById("lista");
    var itens = lista.getElementsByTagName("li");
    var qtdItens = itens.length;
    for (var i = 0; i < qtdItens / 2; i++) {
        var temp = itens[i].textContent;
        itens[i].textContent = itens[qtdItens - 1 - i].textContent;
        itens[qtdItens - 1 - i].textContent = temp;
    }
}
