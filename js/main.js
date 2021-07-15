/*=====================HAMBURGUESA=================== */
const nav = document.querySelector('#hamburguesa button');
        
// HACER CLICK
nav.addEventListener('click', e =>{
            nav.classList.toggle('open');
        });


/*===== MENU SHOW Y HIDDEN =====*/ 
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('hamburguesa')


/*SHOW*/ 
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})



/*===== ACTIVE AND REMOVE MENU DE RESPONSI 764 =====*/
const navLink = document.querySelectorAll('.nav_item');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n=>n.classList.remove('active'));
  this.classList.add('active');
  
  
  
  /*Remove menu mobile*/
  navMenu.classList.remove('show'),
  nav.classList.remove('open')


}
navLink.forEach(n=>n.addEventListener('click', linkAction));


/*===== INDICADOR DE MENÚ AL BAJAR=====*/
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav_menu ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});
