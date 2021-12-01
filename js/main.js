const searchEl = document.querySelector('.search');
const searchInputEl = document.querySelector('input');

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    // 뱃지 숨기기
    gsap.to(badgeEl, .6, {
      opacity:0,
      display:'none'
    });
  }
  else{   // window.scrollY <= 500
    // 뱃지 보이기
    gsap.to(badgeEl, .6, {
      opacity:1,
      display:'block'
    });
  }
}, 300));

// 클래스에 fade-in 들어간거 모두 찾아서 딜레이로 애니메이션효과
const fadeEls=document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1,{
    opacity:1,
    delay:(index + 1) * .7  // 딜레이로 0.7초 1.4초 2.1초 2.7초뒤 순차적 등장
  });
});