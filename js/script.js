// menu2
$(function() {
   $('.header__item').click(function() {
      $(this).removeClass('active');
      $('.header__nav2').show();
   })
})

 
 

// manufacturers
const swiperManufacturers = new Swiper('.js-cards', {
   // Optional parameters
   loop: true,
   slidesPerView: 4,
   autoHeight: true,
   spaceBetween: 20,
   loop: true,
   autoplay: {
      delay: 5000, // Задержка между переключениями в миллисекундах (5 секунд)
    },

   pagination: {
      el: '.swiper-pagination',
   },

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   scrollbar: {
      el: '.swiper-scrollbar',
   },
   breakpoints: {
      390: {
         slidesPerView: 1
      },
      768: {
         slidesPerView: 3
      },
      1024: {
         slidesPerView: 4,
         spaceBetween: 20
      },
   },

});

// const swiper = new Swiper('.js-swiper', {
//    // Optional parameters
//    loop: true,
//    slidesPerView: 5,
//    autoHeight: true,
//    spaceBetween: 18,

//    pagination: {
//       el: '.swiper-pagination',
//    },

//    navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//    },

//    scrollbar: {
//       el: '.swiper-scrollbar',
//    },
//    breakpoints: {
//       320: {
//          slidesPerView: 1
//       },
//       768: {
//          slidesPerView: 2
//       }
//    },

// });

// if (window.innerWidth < 1239) {
//    const swiperBenefit = new Swiper('.js-benefit', {
//       // Optional parameters
//       loop: true,
//       slidesPerView: 3,
//       autoHeight: true,
//       slidesPerView: 3,
//       spaceBetween: 10,

//       // If we need pagination
//       pagination: {
//          el: '.swiper-pagination',
//       },

//       // Navigation arrows
//       navigation: {
//          nextEl: '.swiper-button-next',
//          prevEl: '.swiper-button-prev',
//       },

//       // And if we need scrollbar
//       scrollbar: {
//          el: '.swiper-scrollbar',
//       },
//       breakpoints: {
//          340: {
//             slidesPerView: 1
//          },
//          768: {
//             slidesPerView: 2
//          },
//          1240: {
//             slidesPerView: 2
//          },
//       },

//    });

// };