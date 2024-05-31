function mudancaTexto() {
    var checkbox = document.getElementById('checkbox');
    var paragrafo = document.getElementById('Scheck');
    if (checkbox.checked) {
        paragrafo.textContent = "Checkbox marcada";
    } else {
        paragrafo.textContent = "Checkbox não está marcada";
    }
}