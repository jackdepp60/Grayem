

let toggleBtn = document.querySelector(".hamburger");
let topContact = document.querySelector(".top-contact");
let topNavUl = document.querySelector(".top-nav");
let upArrow = document.querySelector(".scroll-arrow");



// HAMBURGER MENU
toggleBtn.addEventListener("click", function(){
  let navItem = document.querySelector(".nav-item");
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
  let scrollItems = document.querySelectorAll("a");
  let btn = document.querySelector(".btn");
  let topNav = document.querySelector(".top-nav");

  for(var i = 0; i < scrollItems.length; i++){
    scrollItems[i].classList.toggle('scrollItems', window.scrollY > 0);
  }
  btn.classList.toggle("scroll", window.scrollY > 0);
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
