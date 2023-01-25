


window.onload = function () {


    elemH = document.querySelectorAll('h1, h3');
    
    elemP = document.querySelectorAll('p');

    elemLi = document.querySelectorAll('li');

    for (var i = 0; i < elemH.length; i++) {
        elemH[i].onmouseover = function () {return this.style.color = "orange";}
        elemH[i].onmouseout = function() {return this.style.color = "brown";}
    }

    for (var i = 0; i < elemP.length; i++) {
        elemP[i].onmouseover = function() {return this.style.backgroundColor = "yellow";}
        elemP[i].onmouseout = function(){return this.style.backgroundColor = "transparent"};
    }
    
    for (var i = 0; i < elemLi.length; i++) {
        elemLi[i].onmouseover = function() {return this.style.backgroundColor = "yellow";}
        elemLi[i].onmouseout = function(){return this.style.backgroundColor = "transparent"};
    }
}

