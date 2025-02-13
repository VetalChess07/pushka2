const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // Auto-play settings
    // autoplay: {
    //   delay: 2000, // Время задержки между слайдами в миллисекундах (например, 3000 = 3 секунды)
    //   disableOnInteraction: false, // Прекратить авто-переключение при взаимодействии с слайдером (если нужно)
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  

  const burger =document.getElementById('burger')
  const body = document.querySelector('body')
  const visible = document.querySelector('.visible')
  console.log(visible)

  burger.addEventListener('click', function() {
    burger.classList.toggle('active');

    const hasClass = burger.classList.contains('active')
    console.log(hasClass)
    if(!hasClass){
      body.classList.remove('show-mobile')
      body.classList.remove('lock-screen')
      visible.classList.remove('active')
    }
    else {
      body.classList.add('show-mobile')
      body.classList.add('lock-screen')
      visible.classList.add('active')

    }

    visible.addEventListener('click', () =>{
      body.classList.remove('show-mobile')
      body.classList.remove('lock-screen')
      visible.classList.remove('active')
      burger.classList.remove('active');
    })


});