gsap.registerPlugin(ScrollTrigger);

// MainVisual
const mainMask = document.querySelector('.mask')
mainMask.addEventListener('click', () => {
})

window.addEventListener('mousemove', e => {
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

   console.log(x, cursorx);
})


// 스크롤 트리거 애니메이션 (GSAP + ScrollTrigger)
// gsap.registerPlugin(ScrollTrigger);

// gsap.from(".home_main", {
//    scrollTrigger: {
//       trigger: ".home",   // 애니메이션을 적용할 요소
//       start: "top 80%",   // 뷰포트에 나타날 때 시작
//       end: "bottom 60%",  // 애니메이션이 끝날 위치
//       scrub: true         // 스크롤에 따라 애니메이션 동기화
//    },
//    opacity: 0,           // 처음에 투명도 설정
//    y: 50,                // 아래에서 위로 이동
//    duration: 1           // 애니메이션 지속 시간
// });

// 스크롤에 따른 배경 색상 변경
window.addEventListener('scroll', function() {
   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   const header = document.querySelector('.header');

   if (scrollTop > 100) {
      header.style.backgroundColor = '#333';  // 스크롤 100px 이상일 때 배경색 변경
   } else {
      header.style.backgroundColor = 'transparent';  // 원래 배경색으로 복구
   }
});


$(document).ready(function() {
   let currentSection = 0;
   const sections = $('.page');
   const totalSections = sections.length;
   let isScrolling = false;

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
      $('header, home').animate({
         scrollTop: $(sections[currentSection]).offset().top
      }, 500, function() {
         // 애니메이션 완료 후 스크롤 가능하게 설정
         isScrolling = false;
      });
   });
});

