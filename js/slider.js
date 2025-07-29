const pages = document.querySelectorAll('.page');

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.visibility = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 2;
    }, 10);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.visibility = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 2;
    }, 10);
}

var i = 0;
var l = pages.length;

function nextPage() {
    fade(pages[i]);
    pages[i].classList.add('bg');
    i=++i%l;
    pages[i].classList.remove('bg');
    unfade(pages[i]);
}
function prevPage() {
    fade(pages[i]);
    pages[i].classList.add('bg');
    i=(i+l-1)%l;
    pages[i].classList.remove('bg');
    unfade(pages[i]);
}

var xDown = null; 
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            nextPage(); 
        } else {
            prevPage();
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};


document.onkeydown = function (e) {
    switch (e.key) {
        case 'ArrowLeft':
            prevPage();
            break;
        case 'ArrowRight':
            nextPage();
    }
};

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);