
let modalClose = document.querySelector("body");
let modalContent = document.querySelector(".modal-content img");
let modalNext = document.querySelector(".modalNext");
let toggleBtn = document.querySelector(".hamburger");
let topContact = document.querySelector(".top-contact");
let topNavUl = document.querySelector(".top-nav");
let upArrow = document.querySelector(".scroll-arrow");
let cardClick = document.querySelectorAll(".card-body");
const header = document.querySelector('.header');
const round1 = document.querySelector(".round1");
var intro2 = document.querySelector('.intro2 h1');
let testBtn = document.querySelector(".btn");
let btnPortfolio = document.querySelector(".btn-contact2");
const media = window.matchMedia('(max-width: 700px)');

// testBtn.addEventListener("click", ()=>{
//   var myH1 = document.querySelector('.intro2 h1');
//   var sheet = document.styleSheets[0];
//   var rule = '.intro2 h1::before { color: white; }';
//   sheet.insertRule(rule, sheet.cssRules.length);
//   console.log("button")
// })

// MODAL ABOUT ME
// modalContent.addEventListener("click", function() {
//   let modalTest = document.querySelector(".modal-close");
//   modalTest.classList.remove("moveModal");
// });

document.querySelector(".about-modal").addEventListener("click", function(event){
  event.stopPropagation();
} )

modalNext.addEventListener("click", function(event){
  event.stopPropagation(); // Stop the click event from propagating to the document
  console.log(modalContent);
 
    modalContent.classList.toggle("moveModal");
  
  // Add your code to navigate to the next item in the list
});

document.addEventListener("click", function(event){
    if(event.target !== btnPortfolio){
      let aboutModal = document.querySelector(".about-modal");
      modalContent.classList.remove("moveModal")
      aboutModal.classList.add("modal-close");
      aboutModal.classList.remove("modal-open");
        console.log("modal closed");
        modalContent.classList.remove("moveModal");
}
})


btnPortfolio.addEventListener("click", ()=>{
  let aboutModal = document.querySelector(".about-modal");
      aboutModal.classList.remove("modal-close");
      modalContent.classList.remove("moveModal");
  setTimeout(() => {
      aboutModal.classList.add("modal-open");
      console.log("model opened");
      
  }, 200);

 
})


// DARK MODE

const darkMode = document.querySelector(".dark-mode");
const lightMode = document.querySelector(".light-mode");

lightMode.addEventListener("click", ()=>{
  lightMode.classList.toggle("lightsOff"); 
    darkMode.classList.toggle("lightsOn"); 
    header.style.animationName = "darkBG";
    round1.style.opacity = "0.7";
})

darkMode.addEventListener("click", ()=>{
  lightMode.classList.toggle("lightsOff"); 
  darkMode.classList.toggle("lightsOn");
  header.style.animationName = "headerBG";
  header.style.animationDuration = "20s";
  header.style.backgroundSize = "500%";
  round1.style.opacity = "0.2";
  round1.style.backgroundColor = "#fffeff21";
  intro2.style.color = "white"; 
})


// CARD CLICK

cardClick.forEach((card)=>{
  card.addEventListener("touchstart", ()=>{
    card.classList.toggle("cardClick");
    console.log("click")
  })
})

// cardClick.addEventListener("click", function(){
 
//     cardClick.classList.add("cardClick");
//     console.log("click");
  
// })



// HAMBURGER MENU
toggleBtn.addEventListener("click", function(){
  let navItem = document.querySelector(".nav-item");
  let moveRight = document.querySelector(".intro1 img");
  let intro2Move = document.querySelector(".intro2");



  moveRight.classList.toggle("moveRight");
  intro2Move.classList.toggle("intro2Move");
    topNavUl.classList.toggle("toggle");
    // topContact.style.background = "none";
    // console.log("test");
})


// SLOGAN-ICONS OBSERVER
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
      console.log("1");
    }
    else {
      console.log("0");
      entry.target.classList.remove("show");;
    }
  })
}, {
  rootMargin: "-50px"
});

const hiddenElements = document.querySelectorAll(".slogan-icon");
  hiddenElements.forEach((element) => {
    observer.observe(element);
  })

// SLOGAN ICONS ENTRY ANIMATION
// const mySection = document.querySelector('.slogan-icon');

// function isElementInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// function animateSection() {
//   if (isElementInViewport(mySection)) {
//     mySection.classList.add('active');
//   } else {
//     mySection.classList.remove('active');
//   }
// }

// window.addEventListener('scroll', animateSection);
// END OF SLOGAN ICONS ENTRY ANIMATION


// SCROLL CHANGE NAV BG

window.addEventListener('scroll', function() {
  let scrollItems = document.querySelectorAll("a:not(.footer-link)");
  let btn = document.querySelector(".btn");
  let topNav = document.querySelector(".top-nav");
  let logo = document.querySelector(".logo");
  // let logoAfter = window.getComputedStyle(logo, "::after");
 
  for(var i = 0; i < scrollItems.length; i++){
    scrollItems[i].classList.toggle('scrollItems', window.scrollY > 0);
  }
  logo.classList.toggle("scroll", window.scrollY > 0);
  btn.classList.toggle("scroll", window.scrollY > 0);
  topNav.classList.toggle("mobileScroll", window.scrollY >0);
  topNav.classList.toggle("scroll", window.scrollY > 0);
});

// SCROLL END

window.addEventListener('scroll', ()=> {
  const totalScroll = window.innerHeight;
  const scrolled = window.scrollY;

  if(scrolled >= totalScroll) {
    upArrow.classList.add("arrow-show");
  }
  else {
    upArrow.classList.remove("arrow-show"); 
  }
})

upArrow.addEventListener("click", () =>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})

// CARDS OBSERVER

const cardObserver = new IntersectionObserver((cards) => {
  cards.forEach((cardEntry) => {
    const container = cardEntry.target.querySelector(".container");
    if(cardEntry.isIntersecting && container){
      console.log("card intersect");
      container.classList.add("card-show");
    }
    else {
      console.log("card no intersect");
      container.classList.remove("card-show");
    }
  })
  
},
{
  rootMargin: "-50px"
});

const card = document.querySelectorAll("#content");
  card.forEach((element) => {
    cardObserver.observe(element);
  }) 

// SERVICE TEXT OPACITY OBSERVER

const serviceTextObserver = new IntersectionObserver((texts) => {
  texts.forEach((text) =>{
    if(text.isIntersecting){
      console.log("text is intersecting");
      text.target.classList.add("showText")
    }
    else {
      console.log("text not");
      text.target.classList.remove("showText");
    }
  })
},
{
  rootMargin: "-50px"
})

const serviceTextHidden = document.querySelectorAll(".service-text");
  serviceTextHidden.forEach((element) =>{
    serviceTextObserver.observe(element);
  })


// PORTFOLIO IMG OBSERVER 

const portfolioObserver = new IntersectionObserver((portfolioImg) => {
  portfolioImg.forEach((portimg) => {
    if(portimg.isIntersecting) {
      console.log("img intersecting");
      portimg.target.classList.add("show-img");
    }
    else {
      console.log("no img");
      portimg.target.classList.remove("show-img");
    }
  })
},
{
  rootMargin: "-50px"
})

const portfolioHidden = document.querySelectorAll(".string1");
  portfolioHidden.forEach((element) => {
    portfolioObserver.observe(element);
})
