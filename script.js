
Shery.mouseFollower({
   
});
Shery.makeMagnet(".magnet",{
    ease: "cubic-bezier(0.23, 1, 0.320, 2)",
  duration: 3,
})
Shery.hoverWithMediaCircle(".website", {
    videos: ['https://cuberto.com/assets/home/hero/header.mp4', 'https://cuberto.com/assets/projects/puntopago/cover.mp4', 'https://cuberto.com/assets/projects/magma/cover.mp4?2']
})
Shery.hoverWithMediaCircle(".footer", {
    videos: ['https://cuberto.com/assets/home/summary/2.mp4?3']
})



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
