gsap.registerPlugin(ScrollTrigger);

// MainVisual
const mainMask = document.querySelector('.mask')
mainMask.addEventListener('click', () => {
})

function homeMousemove(e) {
   const cursorx = e.clientX;
   const cursory = e.clientY;

   const x = Math.round((cursorx / window.innerWidth) * 100)
   const y = Math.round((cursory / window.innerHeight) * 100)

   gsap.to(mainMask, {
      '--x': `${x}%`,
      '--y': `${y}%`,
      duration: 0.3,
      ease: "sine.out",
   })
}

window.addEventListener('mousemove',homeMousemove)

const homeText = gsap.timeline();

homeText.to('.home_main span', {xPercent: -70,duration: .3}, 'txt')
   .to('.home_main p', {xPercent: 130, duration: .3},'txt')

ScrollTrigger.create({
   animation: homeText,
   trigger: '.home',
   start: 'top top',
   end: 'bottom 50%',
   pin: true,
   scrub: true,
   markers: true
})


   // let currentSection = 0;
   // const sections = $('.page');
   // const totalSections = sections.length;
   // let isScrolling = false;

$(window).on('wheel', function(event) {
   if (isScrolling) return; // 스크롤 중일 때는 추가 스크롤 방지

   isScrolling = true;
   if (event.originalEvent.deltaY > 0) {
      // 아래로 스크롤
      if (currentSection < totalSections - 1) {
      currentSection++;
      }
   } else {
      // 위로 스크롤
      if (currentSection > 0) {
      currentSection--;
      }
   }

   // 해당 섹션으로 스크롤
   $('header, .home').animate({
      scrollTop: $(sections[currentSection]).offset().top
   }, 500, function() {
      // 애니메이션 완료 후 스크롤 가능하게 설정
      isScrolling = false;
   });
});
