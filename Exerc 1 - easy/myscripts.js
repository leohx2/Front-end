
const btnMore = document.getElementById("btnMoreId");
const menuMore = document.getElementById("menuMoreId");
const navMenu = document.querySelector(".menuScrollFlex");
let lastScrollY = window.scrollY;

btnMore.addEventListener('click', function(){
    if (!menuMore.hasAttribute('open')){
        menuMore.setAttribute('open', "");
        if(menuMore.hasAttribute('closed'))
        {
            menuMore.removeAttribute('closed');
        }
        btnMore.innerText = "More -";
    }
    else if (menuMore.hasAttribute('open'))
    {
        menuMore.setAttribute('closed', "");
        menuMore.addEventListener('animationend', function(){
            menuMore.removeAttribute('open');
            btnMore.innerText = "More +";
        }, {once: true})
    }
});

window.addEventListener("scroll", function(){
    if (lastScrollY > this.window.scrollY){
        console.log("scroll Down");
        lastScrollY = window.scrollY;
        if (navMenu.hasAttribute("up"))
        {
            navMenu.removeAttribute("up");
        }
    }
    else {
        console.log("scroll Up");
        lastScrollY = window.scrollY;
        navMenu.setAttribute('up', "");
        console.log(window.scrollY);
    }
});