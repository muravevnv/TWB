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


const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header-nav');
const menuClose = document.querySelector('.header-nav__close')

if(burger) {
    burger.addEventListener('click', function(){
        menu.classList.add('active');
    })

    menuClose.addEventListener('click', function(){
        menu.classList.remove('active');
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

const productSlider = new Swiper('.js-slider-product',{
    slidesPerView: 1,
    spaceBetween: 29,
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl:'.slider__btn--next',
        prevEl:'.slider__btn--prev',
    },
    breakpoints:{
        768: {
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 4,
        }
    }
})

const reviewSlider = new Swiper('.js-slider-review',{
    slidesPerView: 1,
    spaceBetween: 29,
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



const langArr = {
    en: {
      hero_h1: 'Secret TWB',
      hero_desc: 'Created by a unique and powered-up team of professionals to provide you individual and best-performing solutions to monetize your traffic',
      company_subtitle: 'One of the most high-tech digital affiliate networks in the crypto society.',
      company_text: 'The founders of the company have a great experience in the industry, that allows them to competently manage the work of the team. Our main emphasis is on increasing your income.',
      benefit_1: 'Exclusive offers, Events',
      benefit_2: 'Support 24/7',
      benefit_3: 'CRG deals',
      benefit_4: 'Highest CPA',
      benefit_5: 'Cooperation with all world',
      benefit_6: 'Personal automated tracking system',
      main_aff_title:'Advertisers',
      main_aff_desc:'If you are looking for a reliable and long-term partnership, Secret-TWB becomes your perfect solution for cooperation.' ,
      main_aff_btn:'See more',
      main_adv_title:'Advertisers' ,
      main_adv_desc:'Our marketing teams are professionals at creating high-converting product displays. We generate premium advertising content to consistently engage quality leads.' ,
      main_adv_btn:'See more',
      aff_rev_post_1: 'Film producer',
      aff_rev_post_2: 'Film producer',
      aff_rev_post_3: 'Film producer',
      aff_rev_text_1: 'You guys are the best! I got to know you at a conference. We exchanged useful information there, so I decided to go deeper & test your affiliate network. I was sooo satisfied with it, fresh & exclusive affiliate offers that give great ROI, & the payouts are regular. All in all, you are awesome & your manager is a sweetheart too!',
      aff_rev_text_2: 'Exclusive crypto offers and really friendly managers, even for a beginner everything is super easy. Payouts are regular and without delays. I will definitely recommend Secret-TWB to everyone',
      aff_rev_text_3: 'Large selection of geo, quality traffic, responsive managers and on-time payments. Immediately it is clear that this is done in good faith. I will keep working with Secret-TWB for sure',
    
    },
  
    ru: {
      hero_h1: 'Secret TWB',
      hero_desc: 'Создано высокоэффективной командой профессионалов, чтобы предоставить вам индивидуальные и наиболее эффективные решения для монетизации вашего трафика.',
      company_subtitle: 'Одна из самых высокотехнологичных цифровых партнерских сетей в крипто сообществе.',
      company_text: 'Основатели компании имеют большой опыт работы в отрасли, что дает им возможность грамотно управлять работой команды. Основное внимание мы уделяем увеличению вашего дохода.',
      benefit_1: 'Эксклюзивные предложения, Мероприятия',
      benefit_2: 'Поддержка 24/7',
      benefit_3: 'Сделки CRG',
      benefit_4: 'Высочайший CPA',
      benefit_5: 'Сотрудничество со всем миром',
      benefit_6: 'Персональная автоматизированная система отслеживания',
      main_aff_title:'Аффилиаты' ,
      main_aff_desc:'Если вы ищете надежное и долгосрочное партнерство, Secret-TWB станет вашим идеальным решением для сотрудничества' ,
      main_aff_btn:'Подробнее',
      main_adv_title:'Рекламодатели' ,
      main_adv_desc:'Наши маркетинговые команды являются профессионалами в создании высоко конверсионных показов продукции. Мы генерируем рекламный контент премиум-класса, чтобы постоянно привлекать качественных потенциальных клиентов',
      main_adv_btn:'Подробнее',
      aff_rev_post_1: 'Продюссер',
      aff_rev_post_2: 'Продюссер',
      aff_rev_post_3: 'Продюссер',
      aff_rev_text_1: 'Оценил хорошие офферы и оперативную работу менеджера, за свой бэкграунд я работал с многими партнерками, но ни одна не сравнится по качеству и скорости ответов саппорта. Буду советовать вас!',
      aff_rev_text_2: 'Мне очень повезло работать с вами ребята, я только начинаю и работала с небольшим количеством партнерских программ, но вы мои фавориты.Единственные, у кого профитные офферы и понимающая менеджер, которая всегда придет на помощь. По выплатам тоже все всегда вовремя и без задержек',
      aff_rev_text_3: 'Сотрудничаю с вами около 2 лет и пока лучше не смог найти. Эффективно налажена работа команды, менеджеры на уровне, не заюзанные офферы, которые классно конвертят. Ни разу!!! не было проблем с выплатами, это прям вау в нынешних реалиях. Смело могу рекомендовать всем',
    },
  };
  
  const langEn = document.querySelector('#lang-en');
  const langRu = document.querySelector('#lang-ru');
  
  langEn.addEventListener('click', setLang.bind(null, 'en'));
  langRu.addEventListener('click', setLang.bind(null, 'ru'));
  
  function setLang(lang) {
    if (!langArr.hasOwnProperty(lang)) return;
    if (window.hasOwnProperty('localStorage'))
      window.localStorage.setItem('lang', lang);
    for (let key in langArr[lang]) {
      let elem = document.querySelector('.lng-' + key);
      if (elem) {
        elem.innerHTML = langArr[lang][key];
      }
    }
  }
  let lang = window.hasOwnProperty('localStorage') || 'en';
  setLang(lang);