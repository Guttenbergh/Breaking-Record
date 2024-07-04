document.addEventListener("DOMContentLoaded", function() {
    var menuItem = document.querySelectorAll('.item-menu');
    var btnExp = document.querySelector('#btn-exp');
    var menuSide = document.querySelector('.menu-lateral');
    var conteudoPrincipal = document.querySelector('.conteudo');
    var slider = document.querySelector('.slider'); // Seleciona o contêiner da seção do carrossel de slides

    function selectLink() {
        menuItem.forEach((item) => item.classList.remove('ativo'));
        this.classList.add('ativo');
    }

    menuItem.forEach((item) => item.addEventListener('click', selectLink));

    btnExp.addEventListener('click', function() {
        menuSide.classList.toggle('expandir');
        conteudoPrincipal.classList.toggle('conteudo-expandir');
        slider.classList.toggle('slider-expandir'); // Adiciona ou remove a classe para a seção do carrossel de slides
    });
});
