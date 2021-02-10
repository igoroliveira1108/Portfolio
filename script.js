var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener('click', () => {
    document.querySelector('.container').classList.toggle("show-menu");
})


/* Eventos na sessão conhecimentos */
// Variáveis Globais

var html = document.querySelector(".html")
var textHtml = document.querySelector(".text-html");

var css = document.querySelector(".css");
var textCss = document.querySelector('.text-css');

var js = document.querySelector('.js');
var textJs = document.querySelector(".text-js");

var ingles = document.querySelector('.ingles');
var textIngles = document.querySelector('.text-ingles');

var wordpress = document.querySelector(".wordpress");
var textWP = document.querySelector('.text-wordpress');

var git = document.querySelector(".git");
var textGit = document.querySelector('.text-git')

//Funções

// HTML
html.addEventListener('mouseover', showHoverHTML);
html.addEventListener('mouseout', hideHoverHTML);
function showHoverHTML () {
    textHtml.style.opacity = '1'
}

function hideHoverHTML () {
    textHtml.style.opacity = '0'
}

// CSS
css.addEventListener('mouseover', showHoverCSS);
css.addEventListener('mouseout', hideHoverCSS);
function showHoverCSS () {
    textCss.style.opacity = '1'
}

function hideHoverCSS () {
    textCss.style.opacity = '0'
}

// Javascript
js.addEventListener('mouseover', showHoverJS);
js.addEventListener('mouseout', hideHoverJS);
function showHoverJS () {
    textJs.style.opacity = '1'
}

function hideHoverJS () {
    textJs.style.opacity = '0'
    
}

ingles.addEventListener('mouseover', showHoverEN);
ingles.addEventListener('mouseout', hideHoverEN);
function showHoverEN () {
    textIngles.style.opacity = '1'
}

function hideHoverEN () {
    textIngles.style.opacity = '0'
}

wordpress.addEventListener('mouseover', showHoverWP);
wordpress.addEventListener('mouseout', hideHoverWP);
function showHoverWP () {
    textWP.style.opacity = '1'

}

function hideHoverWP () {
    textWP.style.opacity = '0'
}

git.addEventListener('mouseover', showHoverGIT);
git.addEventListener('mouseout', hideHoverGIT);
function showHoverGIT () {
    textGit.style.opacity = '1'
    
}

function hideHoverGIT () {
    textGit.style.opacity = '0'
}






