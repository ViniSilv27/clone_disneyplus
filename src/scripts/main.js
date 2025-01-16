document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions =document.querySelectorAll('[data-faq-question]');
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight

    window.addEventListener('scroll', function(){
        const alturaAtual = this.window.scrollY;

        if(alturaAtual < alturaHero){
            ocultaElementoHeader();

        }

        else{
            apareceElementoHeader();
        }
    })



    //sessão de shows
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            buttons[i].classList.remove('shows__tabs__button--is-active');
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            escondeTodosbotoes();
            aba.classList.add('shows__list--is-active')
            botao.target.classList.add('shows__tabs__button--is-active')
        })
    } 


    // sessão de faq
    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abrirFecharAba);
    }
})

function abrirFecharAba(elemento){
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function ocultaElementoHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hadden')

}
 function apareceElementoHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hadden')
 }


function escondeTodosbotoes(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(i=0; i<buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(i=0; i<tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}