

//seção de perguntas e respostas.

var buttons = document.querySelectorAll('.button--questions')
var respostas = document.querySelectorAll('.resposta')

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        // Esconde todas as respostas
        respostas.forEach(function (resposta) {
            resposta.style.display = "none";
        });

        // Mostra a resposta do botão clicado
        var resposta = this.parentNode.nextElementSibling;
        if (resposta.style.display == 'none') {
            resposta.style.display = "block";
        } else {
            resposta.style.display = "none";
        }
        console.log(resposta)
    });
});


