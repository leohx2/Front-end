
const btnMore = document.getElementById("btnMoreId");
const menuMore = document.getElementById("menuMoreId");

btnMore.addEventListener('click', function(){
    if (!menuMore.hasAttribute('open')){
        menuMore.setAttribute('open', "");
        btnMore.innerText = "More -";
    }
    else if (menuMore.hasAttribute('open'))
    {
        menuMore.removeAttribute('open');
        btnMore.innerText = "More +";
    }
});