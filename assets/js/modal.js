var botao = document.querySelector('.adicionar');
var element = document.getElementById('modal');
var exit = document.querySelector('.modal-exit');

function showModal(){
    element.classList.add('show-modal');
}

function hiddenModal(){
    element.classList.remove('show-modal');
}

botao.addEventListener('click', showModal);
exit.addEventListener('click', hiddenModal);
