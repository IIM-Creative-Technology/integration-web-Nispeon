var item = document.querySelector(".slider");


// function disableScrolling(){
//     var x=window.scrollX;
//     var y=window.scrollY;
//     window.onscroll=function() {
//         window.scrollTo(x, y);
//     };
// }

function preventDefault(e) {
    e.preventDefault();
}

var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

function disableScroll() {
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
}

document.querySelector(".slider").addEventListener('wheel', function(e) {

    if (e.deltaY > 0) item.scrollLeft += 100;
    else item.scrollLeft -= 100;
    disableScroll();
    console.log("cc");
});

document.querySelector(".slider").addEventListener('mouseout', function() {
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
});