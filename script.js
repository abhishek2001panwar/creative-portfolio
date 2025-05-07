

function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });


  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}

init();


var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + -20 +"px"
    crsr.style.top = dets.y + -20 +"px"
})


// Shery.mouseFollower({
   
// });
// Shery.makeMagnet(".magnet",{
//     ease: "cubic-bezier(0.23, 1, 0.320, 2)",
//   duration: 3,
// })
// Shery.hoverWithMediaCircle(".website", {
//     videos: ['https://cuberto.com/assets/home/hero/header.mp4', 'https://cuberto.com/assets/projects/puntopago/cover.mp4', 'https://cuberto.com/assets/projects/magma/cover.mp4?2']
// })
// Shery.hoverWithMediaCircle(".footer", {
//     videos: ['https://cuberto.com/assets/home/summary/2.mp4?3']
// })

gsap.registerPlugin(ScrollTrigger);


function toggleFaq(element) {
  const answer = element.nextElementSibling;
  const icon = element.querySelector('i');
  
  if(answer.classList.contains('hidden')) {
    answer.classList.remove('hidden');
    icon.classList.remove('ri-add-line');
    icon.classList.add('ri-subtract-line');
  } else {
    answer.classList.add('hidden');
    icon.classList.remove('ri-subtract-line');
    icon.classList.add('ri-add-line');
  }
}

const menuButton = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

var tl = gsap.timeline({
  scrollTrigger: {
      trigger: ".home .website",
      scroller: ".main",

      // markers:true,
      start: "top 27%",
      end: "top 0",
      scrub: 3
      
  }
})



tl.to('.home .website' ,{
  x: -100,
  duration : 2,
} ,"b");

tl.to('.home .website1' ,{
  x: 100,
  duration : 2,
} ,"b");

tl.to('.video-wrapper',{
  width : "100%",
  height : "100%",
  duration : 3,
} ,"b");

// tl.to(".feedback .feedback-card", {
//   transform: "TranslateX(-325%)",
//   xPercent: -200,
//   duration: .1,
//   scrollTrigger: {
//     trigger: ".feedback",
//     start: "top center",
//     end: "bottom center",
//     scrub: 1,
//   },
// } , "b");

var boxes = document.querySelectorAll("#image")
boxes.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        crsr.style.height = '200px' 
        crsr.style.width = '200px'
        crsr.style.borderRadius = "50%"
        let att  = ele.getAttribute("data-image")
        crsr.style.backgroundImage = `url(${att})`
        crsr.style.backgroundSize = "cover"
        crsr.style.backgroundPosition = "center"
        crsr.style.transform = "scale(1)"
        crsr.style.zIndex = "1000"
        ele.style.transition = "all 0.1s"
      
    })
    ele.addEventListener("mouseleave",function(){
        crsr.style.height = '20px'
        crsr.style.width = '20px'
        crsr.style.borderRadius = "50%"
        ele.style.transition = "all 0.5s"
        crsr.style.backgroundImage = "none"
        crsr.style.transform = "scale(0)"
        
    })
})





// var makeMagnet = document.querySelectorAll(".magnet")

// makeMagnet.forEach(function(ele){
//   ele.addEventListener("mouseenter",function(){
//     crsr.style.scale = "5"
//     crsr.style.transition = "all 0.5s"
//   })
//   ele.addEventListener("mouseleave",function(){
//     crsr.style.scale = "1"
//     crsr.style.transition = "all 0.5s"
//   })
// })
// gsap.registerPlugin(ScrollTrigger);

// const cards = gsap.utils.toArray(".feedback-card");

// cards.forEach((card, i) => {
//   gsap.to(card, {
//     scrollTrigger: {
//       trigger: "#feedback",
//       start: `top+=${i * 150} center`,
//       end: "+=200",
//       scrub: true,
//     },
//     y: (i + 1) * 60,
//     scale: 0.95,
//     zIndex: cards.length - i,
//     ease: "power2.out",
//   });
// });




ScrollTrigger.create({
    trigger: ".animate-text",
    scroller: ".main", // required if you're using Locomotive Scroll
    start: "top center",
    end: "bottom center",
    duration: 1,
    ease : "power1.inOut",
    onEnter: () => {
      document.querySelector(".navbar").style.backgroundColor = "#000";
      document.querySelector(".home").style.backgroundColor = "#000";
      document.querySelector(".about").style.backgroundColor = "#000"; // Optional: make text visible
      document.querySelector("#why-us").style.backgroundColor = "#000"; // Optional: make text visible
      document.querySelector(".animate-text").style.backgroundColor = "#000"; // Optional: make text visible
      document.querySelector(".about").style.color = "#000"; // Optional: make text visible
      document.querySelector("#why-us").style.color = "#000"; // Optional: make text visible
      
    },
    onLeaveBack: () => {
      document.querySelector(".navbar").style.backgroundColor = "#fff";
      document.querySelector(".home").style.backgroundColor = "#fff";
      document.querySelector(".about").style.backgroundColor = "#fff"; // Optional: make text visible
      document.querySelector("#why-us").style.backgroundColor = "#fff"; // Optional: make text visible
      document.querySelector(".animate-text").style.backgroundColor = "#fff"; // Optional: make text visible
      document.querySelector(".about").style.color = "#fff"; // Optional: make text visible
      document.querySelector("#why-us").style.color = "#fff"; // Optional: make text visible
    }
  });