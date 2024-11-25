function setRating(rate){
    clearRating();
    for(let i=1;i<=rate;i++){
       document.getElementById('star_'+i).style.color='yellow';
    }

    document.getElementById('score').innerHTML = rate;

}

function clearRating(){
    const allElements = document.getElementsByClassName("star");
    for(let j=0;j<allElements.length;j++){
        allElements[j].style.color="grey";
    }
    document.getElementById('score').innerHTML = 0;
}
