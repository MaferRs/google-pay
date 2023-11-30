//seção feedback dos clientes



const simpleCarousel = document.querySelector(".js-carousel--simple")

new Glider(simpleCarousel, {
    slidesToShow: 3,
    slidesToScroll: 4,
    draggable: true,
    dots: " .js-carousel--simple-dots  ",
    arrows: {
        prev: ".js-carousel--simple-prev",
        next: ".js-carousel--simple-next",
    },
    scrollLock: true,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
    ],

})


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


