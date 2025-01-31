const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // Auto-play settings
    autoplay: {
      delay: 2000, // Время задержки между слайдами в миллисекундах (например, 3000 = 3 секунды)
      disableOnInteraction: false, // Прекратить авто-переключение при взаимодействии с слайдером (если нужно)
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  