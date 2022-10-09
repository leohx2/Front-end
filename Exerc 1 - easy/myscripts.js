
const btnMore = document.getElementById("btnMoreId");
const menuMore = document.getElementById("menuMoreId");
let shouldApper = 0;

btnMore.addEventListener('click', function(){
    if (shouldApper == 0){
        menuMore.style.display = "block";
        shouldApper = 1;
        btnMore.innerText = "More -";
    }
    else if (shouldApper == 1)
    {
        menuMore.style.display = "none";
        shouldApper = 0;
        btnMore.innerText = "More +";
    }
});