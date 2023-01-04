let heroScroll = document.querySelector('.hero')

if(heroScroll){
    let heroHeight = heroScroll.scrollHeight;
    let btnScroll = document.querySelector('.hero__scroll');

    let section = document.querySelector('.company').getBoundingClientRect();

    console.log(btnScroll);



    btnScroll.addEventListener('click', function(){
        window.scrollTo(0, section.y)
    })

}


const evetnsSlider = new Swiper('.js-slider-events', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl:'.slider__btn--next',
        prevEl:'.slider__btn--prev',
    },
    breakpoints:{
        960:{
            slidesPerView: 3,
        }
    }
})


const partnersSlider = new Swiper('.js-slider-partners',{
    slidesPerView: 1,
    spaceBetween: 32,
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl:'.slider__btn--next',
        prevEl:'.slider__btn--prev',
    },
    breakpoints:{
        1024:{
            slidesPerView: 3,
        }
    }
})