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
