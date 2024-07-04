var btnExp = document.querySelector('#btn-exp');
var menuSide = document.querySelector('.menu-lateral');
var conteudoPrincipal = document.querySelector('.conteudo');

btnExp.addEventListener('click', function() {
    menuSide.classList.toggle('expandir');
    conteudoPrincipal.classList.toggle('conteudo-expandir');
});

