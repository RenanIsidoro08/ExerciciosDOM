function aumentar() {
    var imagem = document.getElementById("imagempraia");
    var larguraAtual = imagem.width;
    imagem.style.width = (larguraAtual + 10) + "px";
}

function diminuir() {
    var imagem = document.getElementById("imagempraia");
    var larguraAtual = imagem.width;
    imagem.style.width = (larguraAtual - 10) + "px";
}
