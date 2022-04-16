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

/* Request script */
const inputId = {
    "mid__request__name": "request-name",
    "mid__request__email": "request-email",
    "mid__request__company": "request-company",
    "mid__request__title": "request-title",
    "mid__request__message": "request-message"
    }

function checkInput(){
    for (let id in inputId){
        if(document.getElementById(inputId[id]).value.length === 0){
            document.querySelector(`.${id}`).classList.add("showErr");
        }else if(document.getElementById(inputId[id]).value.length > 0){
            document.querySelector(`.${id}`).classList.remove("showErr");
        }
    }
}

function checkedBox(){
    document.querySelector(".checkbox").classList.toggle('upToDate');
}