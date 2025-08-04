async function loadComponent(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

async function init() {
  await loadComponent('header', 'components/header.html');
  await loadComponent('footer', 'components/footer.html');

  // 헤더 햄버거 버튼 이벤트
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('side-nav');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  }
  
  // 스크롤 시 헤더 스타일 변경
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Swiper 초기화
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
    // 768px 이하일 때
    0: {
      slidesPerView: 2,
    },
    // 769px 이상일 때
    769: {
      slidesPerView: 3,
    }
  }
  });
}

window.onload = init;
