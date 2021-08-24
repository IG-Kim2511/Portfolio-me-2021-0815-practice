"use strict";

// js 58. show navbar with scrollbars
const navbar = document.querySelector("#navbar");

const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll",()=>{

    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');;
    } else {
        navbar.classList.remove('navbar--dark');;
        
    }


});

/* js 60 click menu and scrolling */

const navbarMenu = document.querySelector(".navbar__menu");

navbar.addEventListener("click",(e)=>{

    // console.log(e.target);
    console.log(e.target.dataset.link);

    const ETDL = document.querySelector(e.target.dataset.link);
    ETDL.scrollIntoView({behavior: "smooth"});

 

if(ETDL===null){
    return;
  
}

});


// js 60-2. contat me btn

/* scroll into view


selector

*/

// const homeContactBtn = document.querySelector(".home__contact");

// homeContactBtn.addEventListener("click",()=>{
//     scrollIntoView("#contact");
// });




// js 60-3

function scrollFunction(params) {
    const scroll_id =  document.querySelector(params);
    scroll_id.scrollIntoView({behavior:"smooth"});
    
}

const homeContactBtn = document.querySelector('.home__contact');

homeContactBtn.addEventListener("click",()=>{
    scrollFunction("#contact");
});


// 60-4

const arrowUp = document.querySelector(".arrow-up");

arrowUp.addEventListener("click",()=>{
    scrollFunction("#home");
});




/* js74 navbar btn for small screen
 */
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");

navbarToggleBtn.addEventListener("click",()=>{
    navbarMenu.classList.toggle("open");
});


// js 94 home transparents

const homeContainer = document.querySelector(".home__container");
const homeAvatar = document.querySelector(".home__avatar");
const homeHeight  = homeAvatar.getBoundingClientRect();


document.addEventListener("scroll",()=>{ 
  homeAvatar.style.opacity = 1 - window.scrollY / homeHeight;
});








/* js 90 arrow  up button */

document.addEventListener('scroll', ()=>{
    const arrowUp =  document.querySelector(".arrow-up");

    if( window.scrollY > innerHeight /2){
        arrowUp.classList.add('visible');
    } else if(window.scrollY < innerHeight/2){
        arrowUp.classList.remove('visible');

    }
});


/* js 72 btn effect for currently selected*/


const workBtnContainer = document.querySelector(".work__categories");
const projectContainer= document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener("click",(e)=>{
    
    const categorySelected = document.querySelector('.category__btn.selected');

    if(categorySelected !=null){
        categorySelected.classList.remove('selected');
    }
    
    e.target.classList.add("selected");



});
