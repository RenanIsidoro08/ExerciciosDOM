document.getElementById('incrementar').addEventListener('click' , function() {
    var texto = document.getElementById('TextoIns').value;

    if (texto.trim() !== "") {
        var li = document.createElement('li');
    li.textContent = texto;


    document.getElementById('lista').appendChild (li);
    ducument.getElementById('TextoIns').value = "";
} else {
    alert('Por favor, insira um texto.');
}
});


