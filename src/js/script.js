
const dataFeedbacks = [
    {
        name: "Elizabeth Lizzie",
        image: "/assets/picture/elizabeth-lizzie.jpg",
        testimony: "Eu amei o cartão, muito prático e facilitou muito minha vida."
    },
    {
        name: "Malcolm Garret",
        image: "/assets/picture/malcolm-garret.jpg",
        testimony: "Facilitou minhas compras internacionais."
    },
    {
        name: "Sam Jhay",
        image: "/assets/picture/sam-jhay.jpg",
        testimony: "Tenho usado ele para tudo e não quero nenhum outro."
    },
    {
        name: "Jonathan Poente",
        image: "/assets/picture/jonathan-del-poente.jpg",
        testimony: "O beneficios são os melhores, uso e recomendo."
    },
    {

        name: "Elizabeth Lizzie",
        image: "/assets/picture/elizabeth-lizzie.jpg",
        testimony: "Eu amei o cartão, muito prático e facilitou muito minha vida."
    },
    {

        name: "Malcolm Garret",
        image: "/assets/picture/malcolm-garret.jpg",
        testimony: "Facilitou minhas compras internacionais."
    },
    {

        name: "Sam Jhay",
        image: "/assets/picture/sam-jhay.jpg",
        testimony: "Tenho usado ele para tudo e não quero nenhum outro."
    },
    {

        name: "Jonathan Poente",
        image: "/assets/picture/jonathan-del-poente.jpg",
        testimony: "O beneficios são os melhores, uso e recomendo."
    },

];

const swiperWrapper = document.querySelector('.swiper-wrapper');

dataFeedbacks.forEach((item) => {

    let slide = document.createElement('div');
    slide.className = 'swiper-slide';

    slide.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h2>${item.name}</h2>
        <p>${item.testimony}</p>
    `;

    swiperWrapper.appendChild(slide);
});

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loopAdditionalSlides: 3,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {

        580: {
            slidesPerView: 1,
            spaceBetween: 10,

        },

        800: {
            slidesPerView: 1,
            spaceBetween: 30

        },

        1024: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    },


});
swiper.update();



// seção de perguntas e respostas.

function faq() {

    var buttons = document.querySelectorAll('.button-faq')
    var respostas = document.querySelectorAll('#resposta')

    respostas[0].style.display = "block";

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

}

faq();


AOS.init({
    duration: 2000,
    once: true,

})