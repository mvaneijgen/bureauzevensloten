// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

//------------------------------------------------------//
// END Emoji swap
//------------------------------------------------------//
//------------------------------------------------------//
// Smooth scrolling
//------------------------------------------------------//
document.addEventListener("DOMContentLoaded", () => {
  scrollTo('.alloy-anchor', 500, 60);
});

function scrollTo (selector, duration, fps) {
  let anchors = [].slice.call(document.querySelectorAll(selector));

  for (let anchor of anchors) {
    anchor.addEventListener('click', scrollAnimation);
  }

  function scrollAnimation(e) {
    e.preventDefault();

    let target = document.querySelector(this.getAttribute('href'));
    let element = target, targetOffset = 0;

    while (element && element != document.body) {
      targetOffset += element.offsetTop;
      element = element.offsetParent;
    }

    let currentOffset = window.pageYOffset || document.body.scrollTop;
    let difference = Math.abs(currentOffset - targetOffset);

    if (!difference) return;

    let frames = parseInt(duration / 1000 * fps);
    let tick = duration / frames;
    let perFrame = difference / frames;
    let direction = (targetOffset > currentOffset) ? 1 : -1;

    let timer = setInterval(() => {
      currentOffset = window.pageYOffset || document.body.scrollTop;
      difference = Math.abs(currentOffset - targetOffset);

      if (difference < perFrame) {
        scrollBy(0, difference * direction);

        clearInterval(timer);
        return;
      }

      scrollBy(0, perFrame * direction);
    }, tick);
  }
}
//------------------------------------------------------//
// END Smooth scrolling
//------------------------------------------------------//
window.sr = ScrollReveal();

// sr.reveal('.bar');
sr.reveal(document.querySelectorAll('.alloyFadeUp'), {
  origin: 'bottom',
  distance: '100px',
  duration: 500,
  delay: 500,
  opacity: 0,
  scale: 1,
  easing: 'ease-out',

  // rotate: { x: 0, y: 0, z: 0 },
  // // `<html>` is the default reveal container. You can pass either:
  // // DOM Node, e.g. document.querySelector('.fooContainer')
  // // Selector, e.g. '.fooContainer'
  // container: window.document.documentElement,
  //
  // // true/false to control reveal animations on mobile.
  // mobile: true,
  //
  // // true:  reveals occur every time elements become visible
  // // false: reveals occur once as elements become visible
  // reset: false,
  //
  // // 'always' — delay for all reveal animations
  // // 'once'   — delay only the first time reveals occur
  // // 'onload' - delay only for animations triggered by first load
  // useDelay: 'always',
  //
  // // Change when an element is considered in the viewport. The default value
  // // of 0.20 means 20% of an element must be visible for its reveal to occur.
  // viewFactor: 0.2,
  //
  // // Pixel values that alter the container boundaries.
  // // e.g. Set `{ top: 48 }`, if you have a 48px tall fixed toolbar.
  // // --
  // // Visual Aid: https://scrollrevealjs.org/assets/viewoffset.png
  // viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  //
  // // Callbacks that fire for each triggered element reveal, and reset.
  // beforeReveal: function (domEl) {},
  // beforeReset: function (domEl) {},
  //
  // // Callbacks that fire for each completed element reveal, and reset.
  // afterReveal: function (domEl) {},
  // afterReset: function (domEl) {}

}, 50);
const allVideos = document.querySelectorAll('.embed-container');

allVideos.forEach(function(element) {
  sr.reveal(element, {
    origin: 'right',
    distance: '100px',
    // duration: 300,
    // delay: 600,
    viewFactor: 1,
    opacity: 0,
    scale: 1,
    easing: 'ease-out',
    // viewFactor: 0.2,
  }, 300);
});
sr.reveal(document.querySelectorAll('.alloy-klanten'), {
  origin: 'left',
  distance: '100px',
  // duration: 300,
  // delay: 600,
  opacity: 0,
  scale: 1,
  easing: 'ease-out',
  // viewFactor: 0.2,
}, 200);

//------------------------------------------------------//
// Background scroll effect
//------------------------------------------------------//
const scrollElements = document.querySelectorAll("svg path");

function parallexDownFun(scrollpos) {
  scrollElements.forEach(function(elm) {
    const currentClass = elm.classList.value;
    let amount = 4;
    if (currentClass == "medium") {
      amount = 6;
    } else if (currentClass == "small") {
      amount = 10;
    } else if (currentClass == "tiny") {
      amount = 16;
    }
    var calculaedPosTop = Math.round(scrollpos / amount);
    elm.style.transform = "translateY(" + calculaedPosTop + "px)";
    console.log();
  });
}
// Event listeners
window.addEventListener(
  "scroll",
  function() {
    parallexDownFun(window.scrollY);
  },
  false
);

// var myEfficientFn = debounce(function() {
//   parallexDownFun(window.scrollY);
// }, 10);
// window.addEventListener('scroll', myEfficientFn);

//------------------------------------------------------//
// END Background scroll effect
//------------------------------------------------------//
