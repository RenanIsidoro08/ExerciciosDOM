function alterarBotao() {

var novoItem = document.createElement("li");

novoItem.textContent = "novo item adicionado";

var lista = document.getElementById("Idlista");

lista.appendChild(novoItem);

}