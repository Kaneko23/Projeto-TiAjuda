let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}
/**
 * funcao para linkar dois index.html
 */
var linkreg = document.querySelector('#linkReg');

linkreg.onclick = () =>{
    window.location.href = "cadastro.html";
}
var linklog = document.querySelector('#linkLog');
linklog.onclick = () =>{
    window.location.href = "login.html";
}

