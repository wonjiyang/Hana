document.addEventListener("DOMContentLoaded", function() {
 
    const shopItem = document.querySelector('.style-shop');
    const shoppingLink = document.querySelector('.lifestyle-right .right-cir:nth-of-type(1)');
    
    shopItem.classList.add('on');
    shoppingLink.classList.add('on');

    const leftItems = document.querySelectorAll('.lifestyle-left li');
        const rightCircles = document.querySelectorAll('.lifestyle-right .right-cir');

        rightCircles.forEach((circle, index) => {
            circle.addEventListener('mouseover', () => {
                leftItems.forEach(item => item.classList.remove('on'));
                leftItems[index].classList.add('on');
                rightCircles.forEach(item => item.classList.remove('on'));
                rightCircles[index].classList.add('on');
            });
        });

        var swiper = new Swiper(".mySwiper1", {
            pagination: {
                el: ".swiper-pagination",
            },
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
        });

        var swiper = new Swiper(".mySwiper4", {
            pagination: {
              el: ".swiper-pagination",
              type: "fraction",
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
          });

        var swiper = new Swiper(".mySwiper2", {
            slidesPerView: "auto",
            spaceBetween: 32,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

        var swiper = new Swiper(".mySwiper5", {
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
        });

        var swiper = new Swiper(".mySwiper7", {
            pagination: {
              el: ".swiper-pagination",
            },
          });
});
