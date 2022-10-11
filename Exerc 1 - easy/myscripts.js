
const btnMore = document.getElementById("btnMoreId");
const menuMore = document.getElementById("menuMoreId");
const navMenu = document.querySelector(".menuScrollFlex");
const mainBody = document.querySelector(".mainBody");
let navHeight = 92;
let lastScrollY = window.scrollY;

if(lastScrollY > navHeight)//check where the user start the pag at.
{
    mainBody.setAttribute('up', "");
    navMenu.setAttribute('up', "");
}

btnMore.addEventListener('click', function(){
    if (!menuMore.hasAttribute('open')){
        menuMore.setAttribute('open', "");
        if(menuMore.hasAttribute('closed'))
        {
            menuMore.removeAttribute('closed');
        }
        btnMore.innerText = "More -";
        navHeight = 406;
    }
    else if (menuMore.hasAttribute('open'))
    {
        menuMore.setAttribute('closed', "");
        menuMore.addEventListener('animationend', function(){
            menuMore.removeAttribute('open');
            btnMore.innerText = "More +";
            navHeight = 92;
        }, {once: true})
    }
});

window.addEventListener("scroll", function(){
    if (this.window.scrollY < lastScrollY && lastScrollY > navHeight) // in case the user scroll up the pag && minimum height to execute the code
    {
        if (navMenu.hasAttribute('down'))
        {
            navMenu.removeAttribute('down');
        }
        mainBody.setAttribute('up', "");
        navMenu.setAttribute('up', "");
    }
    else if (lastScrollY > navHeight)// in case the user scroll down the pag, attribute down 
    {
        navMenu.setAttribute('down', "");
    }
    lastScrollY = this.window.scrollY;
    if (lastScrollY < navHeight)
    {
        if (navMenu.hasAttribute('up'))
        {
            navMenu.removeAttribute('up');
            mainBody.removeAttribute('up');
        }
        if (navMenu.hasAttribute('down'))
        {
            navMenu.removeAttribute('down');
        }
    }
});