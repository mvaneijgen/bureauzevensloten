//------------------------------------------------------//
// Zenscroll JS library
// https://github.com/zengabor/zenscroll
//------------------------------------------------------//
!function(t,e){"function"==typeof define&&define.amd?define([],e()):"object"==typeof module&&module.exports?module.exports=e():function n(){document&&document.body?t.zenscroll=e():setTimeout(n,9)}()}(this,function(){"use strict";var t=function(t){return"getComputedStyle"in window&&"smooth"===window.getComputedStyle(t)["scroll-behavior"]};if("undefined"==typeof window||!("document"in window))return{};var e=function(e,n,o){n=n||999,o||0===o||(o=9);var i,r=function(t){i=t},u=function(){clearTimeout(i),r(0)},c=function(t){return Math.max(0,e.getTopOf(t)-o)},f=function(o,i,c){if(u(),0===i||i&&i<0||t(e.body))e.toY(o),c&&c();else{var f=e.getY(),a=Math.max(0,o)-f,l=(new Date).getTime();i=i||Math.min(Math.abs(a),n),function t(){r(setTimeout(function(){var n=Math.min(1,((new Date).getTime()-l)/i),o=Math.max(0,Math.floor(f+a*(n<.5?2*n*n:n*(4-2*n)-1)));e.toY(o),n<1&&e.getHeight()+o<e.body.scrollHeight?t():(setTimeout(u,99),c&&c())},9))}()}},a=function(t,e,n){f(c(t),e,n)},l=function(t,n,i){var r=t.getBoundingClientRect().height,u=e.getTopOf(t)+r,l=e.getHeight(),s=e.getY(),d=s+l;c(t)<s||r+o>l?a(t,n,i):u+o>d?f(u-l+o,n,i):i&&i()},s=function(t,n,o,i){f(Math.max(0,e.getTopOf(t)-e.getHeight()/2+(o||t.getBoundingClientRect().height/2)),n,i)};return{setup:function(t,e){return(0===t||t)&&(n=t),(0===e||e)&&(o=e),{defaultDuration:n,edgeOffset:o}},to:a,toY:f,intoView:l,center:s,stop:u,moving:function(){return!!i},getY:e.getY,getTopOf:e.getTopOf}},n=document.documentElement,o=function(){return window.scrollY||n.scrollTop},i=e({body:document.scrollingElement||document.body,toY:function(t){window.scrollTo(0,t)},getY:o,getHeight:function(){return window.innerHeight||n.clientHeight},getTopOf:function(t){return t.getBoundingClientRect().top+o()-n.offsetTop}});if(i.createScroller=function(t,o,i){return e({body:t,toY:function(e){t.scrollTop=e},getY:function(){return t.scrollTop},getHeight:function(){return Math.min(t.clientHeight,window.innerHeight||n.clientHeight)},getTopOf:function(t){return t.offsetTop}},o,i)},"addEventListener"in window&&!window.noZensmooth&&!t(document.body)){var r="scrollRestoration"in history;r&&(history.scrollRestoration="auto"),window.addEventListener("load",function(){r&&(setTimeout(function(){history.scrollRestoration="manual"},9),window.addEventListener("popstate",function(t){t.state&&"zenscrollY"in t.state&&i.toY(t.state.zenscrollY)},!1)),window.location.hash&&setTimeout(function(){var t=i.setup().edgeOffset;if(t){var e=document.getElementById(window.location.href.split("#")[1]);if(e){var n=Math.max(0,i.getTopOf(e)-t),o=i.getY()-n;0<=o&&o<9&&window.scrollTo(0,n)}}},9)},!1);var u=new RegExp("(^|\\s)noZensmooth(\\s|$)");window.addEventListener("click",function(t){for(var e=t.target;e&&"A"!==e.tagName;)e=e.parentNode;if(!(!e||1!==t.which||t.shiftKey||t.metaKey||t.ctrlKey||t.altKey)){if(r)try{history.replaceState({zenscrollY:i.getY()},"")}catch(t){}var n=e.getAttribute("href")||"";if(0===n.indexOf("#")&&!u.test(e.className)){var o=0,c=document.getElementById(n.substring(1));if("#"!==n){if(!c)return;o=i.getTopOf(c)}t.preventDefault();var f=function(){window.location=n},a=i.setup().edgeOffset;a&&(o=Math.max(0,o-a),f=function(){history.pushState(null,"",n)}),i.toY(o,null,f)}}},!1)}return i});
//------------------------------------------------------//
// END Zenscroll JS library
//------------------------------------------------------//

//------------------------------------------------------//
// Debounce function
//------------------------------------------------------//
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
// END Debounce function
//------------------------------------------------------//

//------------------------------------------------------//
// ScrollReveal
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
// END ScrollReveal
//------------------------------------------------------//

//------------------------------------------------------//
// Generate random shapes SVG
//------------------------------------------------------//
// Usefull functions & Get all browser logic
function getDocHeight() {
  const D = document;
  return Math.max(
    D.body.scrollHeight, D.documentElement.scrollHeight,
    D.body.offsetHeight, D.documentElement.offsetHeight,
    D.body.clientHeight, D.documentElement.clientHeight
  );
}
const documentHeight = getDocHeight();

const browserSize = {
  width: window.innerWidth || document.body.clientWidth,
  height: window.innerHeight || document.body.clientHeight
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// Document elements where to draw shapes
const shapesInBody = document.querySelector('#alloy-shaps--body');
const shapesInHeader = document.querySelector('#alloy-shaps--header');

// All shape logic
const nOfShapes = Math.round(documentHeight/100/2.5);
const sizesShapes = ['tiny', 'small', 'medium', 'large'];
const colorShapes = ['base', 'base-light', 'grey'];

// Location logic
const columnWidth = (browserSize.width / 100) * 5;

// This functions draws the shape shapes with random pos, color and size
function shapeDrawerFunc(randomSize, randomColor, randomX, randomY, parentElement, columnSide) {
  const svgShape = `<svg class="alloy-isometric-shape ${columnSide}" data-size="${randomSize}" data-color="${randomColor}" style="left: ${randomX}; top:${randomY};"><use xlink:href="#isometric-shape"></use></svg>`;
  const randomSizeAgain = sizesShapes[Math.floor(Math.random()*sizesShapes.length)];

  parentElement.querySelector('.inner__' + randomSize).innerHTML += svgShape;
}

function shapeLoopFunc(nOfLoop, shapeLocationElm, columnSide) {
  for (var i = 0; i < nOfLoop; i++) {
    const randomSize = sizesShapes[Math.floor(Math.random()*sizesShapes.length)];
    const randomColor = colorShapes[Math.floor(Math.random()*colorShapes.length)];
    let randomX = Math.round(getRandomArbitrary(0, columnWidth));

    if (columnSide == 'columnn--right') {
      randomX = Math.round(getRandomArbitrary((browserSize.width/1.3) - columnWidth, browserSize.width));
    }
    const randomY = Math.round(getRandomArbitrary(0, documentHeight));

    shapeDrawerFunc(randomSize, randomColor, randomX, randomY, shapeLocationElm, columnSide);
  };
}
shapeLoopFunc(nOfShapes/2, shapesInBody, 'columnn--left');
shapeLoopFunc(nOfShapes/2, shapesInBody, 'columnn--right');

// shapeLoopFunc(4, shapesInHeader, 'columnn--left');
// shapeLoopFunc(4, shapesInBody, 'columnn--right');
// for (var i = 0; i < nOfShapes/2; i++) {
//   const randomSize = sizesShapes[Math.floor(Math.random()*sizesShapes.length)];
//   const randomColor = colorShapes[Math.floor(Math.random()*colorShapes.length)];
//   // const randomColumn = [Math.round(getRandomArbitrary(0, columnWidth)), Math.round(getRandomArbitrary(browserSize.width - columnWidth, browserSize.width))]
//   // const randomX = randomColumn[Math.floor(Math.random()*randomColumn.length)];
//   const randomX = Math.round(getRandomArbitrary(0, columnWidth));
//   const randomY = Math.round(getRandomArbitrary(0, documentHeight));
//
//   shapeDrawerFunc(randomSize, randomColor, randomX, randomY, shapesInBody, 'columnn--left');
// };
//
// for (var i = 0; i < nOfShapes/2; i++) {
//   const randomSize = sizesShapes[Math.floor(Math.random()*sizesShapes.length)];
//   const randomColor = colorShapes[Math.floor(Math.random()*colorShapes.length)];
//   // const randomColumn = [Math.round(getRandomArbitrary(0, columnWidth)), Math.round(getRandomArbitrary(browserSize.width - columnWidth, browserSize.width))]
//   // const randomX = randomColumn[Math.floor(Math.random()*randomColumn.length)];
//   const randomY = Math.round(getRandomArbitrary(0, documentHeight));
//
//   shapeDrawerFunc(randomSize, randomColor, randomX, randomY, shapesInBody, 'columnn--right');
// };
//------------------------------------------------------//
// END Generate random shapes SVG
//------------------------------------------------------//

//------------------------------------------------------//
// Custom parallax effect seperate layers with multiple shapes
//------------------------------------------------------//
const scrollElements = document.querySelectorAll(".alloy-parallax-shapes");

function parallexDownFun(scrollpos) {
  scrollElements.forEach(function(elm) {

    const currentClass = elm.classList.value;
    let amount = 1.2;

    if (currentClass.search('small') >= 0) {
      amount = 2;
    } else if (currentClass.search('medium') >= 0) {
      amount = 6;
    } else if (currentClass.search('large') >= 0) {
      amount = 10;
    }

    const calculaedPosTop = Math.round(scrollpos / amount);
    elm.style.transform = "translateY(-" + calculaedPosTop + "px)";
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
//------------------------------------------------------//
// END Custom parallax effect seperate layers with multiple shapes
//------------------------------------------------------//
