
const btnMore = document.getElementById("btnMoreId");
const menuMore = document.getElementById("menuMoreId");

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