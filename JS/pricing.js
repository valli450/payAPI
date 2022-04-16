/* Mobile menu script */
const menuBlock = document.querySelector(".header__menu");

function openMenu(){
    menuBlock.classList.toggle("showMenu");
    document.body.style.position = 'fixed';
}

function closeMenu(){
    menuBlock.classList.remove("showMenu");
    setTimeout(() => {
        document.body.style.position = 'static';

    }, 600)    
}