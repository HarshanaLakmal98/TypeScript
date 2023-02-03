"use strict";
// ====================access DOM element====================
// access paragraph element===============
let para1 = document.querySelector('.demo-1');
// add value to para1
para1.innerHTML = 'This paragraph add by TypeScript';
// add class using ts
para1.classList.add('demo-1-style');
// access div element ===================
let div1 = document.querySelector('.demo-2');
div1.classList.add('demo-2-style');
div1.innerHTML = 'Change content using TypeScript';
// access image element
let image = document.querySelector('.image');
image.addEventListener('click', () => {
    image.classList.toggle('image-style');
});
