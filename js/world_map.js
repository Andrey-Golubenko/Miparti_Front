jQuery(function ($) {
"use strict";

    const planetsContent = $('.moving_planets_content');
    const studioPlanetsMediaQuery = window.matchMedia('(min-width: 768px)');
    const centerIsInvisible = $('#content_spheres').offset().top > document.documentElement.clientHeight;
    if (studioPlanetsMediaQuery.matches && centerIsInvisible) {
        planetsContent.removeClass('running');
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                planetsContent.addClass('running');
            }
            else {
                planetsContent.removeClass('running');
            }
        });
    }

    $('.move_to_map, .content_spheres_bottom_right_tooltip').click(function (e) {
        e.preventDefault();
        docRoot.animate({scrollTop: $('#anchor_from_earth').offset().top}, 800);
    });

    const countries_obj = {
        all_canada              :{
            slider_page   : 'canada_images.html',
            ru_name       : 'в Канаде',
            selector_name : '#canada, #vancouver, #newfoundland, #banks, #prince_patrick, #eglinton, #mackenzie_king, #king_christian, #ellef_ringnes, #amund_ringnes, #axel_heiberg, #victoria, #prince_of_wales, #prescott, #canada, #cornwallis, #bathurst, #devon, #cbaffin, #bylot, #ellesmere, #southhampton, #newfoundland, #baffin',
            image_name    : 'ca.svg',
            color         : '#CC85B8',
        },
        all_usa                 :{
            slider_page   : 'usa_images.html',
            ru_name       : 'в США',
            selector_name : '#usa, #alaska, #haida_gwaii',
            image_name    : 'us.svg',
            color         : '#E9B2D1',
        },
        all_bahamas             :{
            slider_page   : 'bahamas_images.html',
            ru_name       : 'на Багамах',
            selector_name : '#bimini, #andros, #inagua, #eleuthera, #grand_bahama',
            image_name    : 'bs.svg',
            color         : '#E9B2D1',
        },
        all_dominican           :{
            slider_page   : 'dominican_images.html',
            ru_name       : 'в Доминикане',
            selector_name : '#haiti_dominican_border, #domincan_republic, #haiti',
            image_name    : 'dm.svg',
            color         :  '#DC4F70',
        },
        all_panama              :{
            slider_page   : 'panama_images.html',
            ru_name       : 'в Панаме',
            selector_name : '#panama',
            image_name    : 'pa.svg',
            color         : '#EF20CD',
        },
        all_barbados            :{
            slider_page   : 'barbados_images.html',
            ru_name       : 'на Барбадосе',
            selector_name : '#st_vincent_barbados',
            image_name    : 'bb.svg',
            color         : '#EAE70B',
        },
        uk                      :{
            slider_page   : 'uk_images.html',
            ru_name       : 'в Великобритании',
            selector_name : '#britain, #ulster',
            image_name    : 'gb.svg',
            color         : '#B5DFED',
        },
        all_france              :{
            slider_page   : 'france_images.html',
            ru_name       : 'во Франции',
            selector_name : '#france, #corsica',
            image_name    : 'fr.svg',
            color         : '#68D2F3',
        },
        all_italy               :{
            slider_page   : 'italy_images.html',
            ru_name       : 'в Италии',
            selector_name : '#italy, #sardinia, #sicily',
            image_name    : 'it.svg',
            color         : '#689FD6',
        },
        all_spain               :{
            slider_page   : 'spain_images.html',
            ru_name       : 'в Испании',
            selector_name : '#spain, #majorca',
            image_name    : 'es.svg',
            color         : '#B7E1F9',
        },
        all_portugal            :{
            slider_page   : 'portugal_images.html',
            ru_name       : 'в Португалии',
            selector_name : '#portugal',
            image_name    : 'pt.svg',
            color         : '#7BA5CC',
        },
        all_germany             :{
            slider_page   : 'germany_images.html',
            ru_name       : 'в Германии',
            selector_name : '#germany',
            image_name    : 'de.svg',
            color         : '#86D5DA',
        },
        all_belgium             :{
            slider_page   : 'belgium_images.html',
            ru_name       : 'в Бельгии',
            selector_name : '#belgium',
            image_name    : 'be.svg',
            color         : '#8DB2D6',
        },
        all_netherlands         :{
            slider_page   : 'netherlands_images.html',
            ru_name       : 'в Нидерландах',
            selector_name : '#netherlands',
            image_name    : 'nl.svg',
            color         : '#80C7E0',
        },
        all_czech               :{
            slider_page   : 'czech_images.html',
            ru_name       : 'в Чехии',
            selector_name : '#czech',
            image_name    : 'cz.svg',
            color         : '#97B4D3',
        },
        all_poland              :{
            slider_page   : 'poland_images.html',
            ru_name       : 'в Польше',
            selector_name : '#poland',
            image_name    : 'pl.svg',
            color         : '#75D3F3',
        },
        all_ukraine             :{
            slider_page   : 'ukraine_images.html',
            ru_name       : 'в Украине',
            selector_name : '#ukraine',
            image_name    : 'ua.svg',
            color         : '#719BD5',
        },
        all_hungary             :{
            slider_page   : 'hungary_images.html',
            ru_name       : 'в Венгрии',
            selector_name : '#hungary',
            image_name    : 'hu.svg',
            color         : '#9BADCF',
        },
        all_slovakia            :{
            slider_page   : 'slovakia_images.html',
            ru_name       : 'в Словакии',
            selector_name : '#slovakia',
            image_name    : 'sk.svg',
            color         : '#B2E2FA',
        },
        all_bulgaria            :{
            slider_page   : 'bulgaria_images.html',
            ru_name       : 'в Болгарии',
            selector_name : '#bulgaria',
            image_name    : 'bg.svg',
            color         : '#7CC6E9',
        },
        all_egypt               :{
            slider_page   : 'egypt_images.html',
            ru_name       : 'в Египте',
            selector_name : '#egypt',
            image_name    : 'eg.svg',
            color         : '#FF8700',
        },
        all_turkey              :{
            slider_page   : 'turkey_images.html',
            ru_name       : 'в Турции',
            selector_name : '#turkey',
            image_name    : 'tr.svg',
            color         : '#FF8700',
        },
        all_oman                :{
            slider_page   : 'oman_images.html',
            ru_name       : 'в Омане',
            selector_name : '#oman',
            image_name    : 'om.svg',
            color         : '#FF8700',
        },
        all_emirates            :{
            slider_page   : 'emirates_images.html',
            ru_name       : 'в Ємиратах',
            selector_name : '#emirates',
            image_name    : 'ae.svg',
            color         : '#FF8700',
        },
        all_india               :{
            slider_page   : 'india_images.html',
            ru_name       : 'в Индии',
            selector_name : '#india',
            image_name    : 'in.svg',
            color         : '#FF8700',
        },
        all_russia              :{
        slider_page   : 'russia_images.html',
        ru_name       : 'в России',
        selector_name : '#russia, #novaya_zemlya_south, #novaya_zemlya_north, #prince_george, #salisbury, #wilczek, #bell, #komsomolets, #october, #bolshevik, #kotelny, #novaya_sibir, #lyakhovsky, #wrangel, #bering_island, #medny, #attu, #paramushir, #onekotan, #sakhalin, #attu, #amchitka, #adak, #umnak, #unalaska, #st_lawrence_island',
        image_name    : 'ru.svg',
        color         : '#FAA43D',
    },
        all_china               :{
            slider_page   : 'china_images.html',
            ru_name       : 'в Китае',
            selector_name : '#china',
            image_name    : 'cn.svg',
            color         : '#F26923',
        },
        all_vietnam             :{
            slider_page   : 'vietnam_images.html',
            ru_name       : 'во Вьетнаме',
            selector_name : '#vietnam',
            image_name    : 'vn.svg',
            color         : '#DB3727',
        },
        all_thailand            :{
            slider_page   : 'thailand_images.html',
            ru_name       : 'в Таиланде',
            selector_name : '#thailand',
            image_name    : 'th.svg',
            color         : '#D73632',
        }
    };

    class HoverIntent {
        constructor({
            sensitivity = 0.1,
            interval = 100,
            elem,
            over,
            out
        }) {
            this.sensitivity = sensitivity;
            this.interval = interval;
            this.elem = elem;
            this.over = over;
            this.out = out;
            this.onMouseMove = this.onMouseMove.bind(this);
            this.onMouseOver = this.onMouseOver.bind(this);
            this.onMouseOut = this.onMouseOut.bind(this);
            this.onScroll = this.onScroll.bind(this);
            this.trackSpeed = this.trackSpeed.bind(this);

            elem.addEventListener("mouseover", this.onMouseOver);
            elem.addEventListener("mouseout", this.onMouseOut);
            window.addEventListener("scroll", this.onScroll);
        }
        onScroll () {
            this.lastY = undefined;
            this.lastX = undefined;
        }
        onMouseOver(event) {
            if (this.isOverElement) {
                return;
            }
            this.isOverElement = true;
            this.prevX = event.pageX;
            this.prevY = event.pageY;
            this.prevTime = Date.now();
            this.elem.addEventListener('mousemove', this.onMouseMove);
            this.checkSpeedInterval = setInterval(this.trackSpeed, this.interval);
        }
        onMouseOut(event) {
            if (!event.relatedTarget || !this.elem.contains(event.relatedTarget)) {
                this.isOverElement = false;
                this.elem.removeEventListener('mousemove', this.onMouseMove);
                clearInterval(this.checkSpeedInterval);
                if (this.isHover) {
                    if (event.relatedTarget === document.querySelector('.indicator_inner')) { return false; }                   else {
                        this.out.call(this.elem);
                        this.isHover = false;
                    }
                }
            }
        }
        onMouseMove(event) {
            this.lastX = event.pageX;
            this.lastY = event.pageY;
            this.lastTime = Date.now();
        }
        trackSpeed(event) {
            let speed;
            if (!this.lastTime || this.lastTime == this.prevTime) {
                speed = 0;
            } else {
                speed = Math.sqrt(
                    Math.pow(this.prevX - this.lastX, 2) +
                    Math.pow(this.prevY - this.lastY, 2)
                ) / (this.lastTime - this.prevTime);
            }

            if (speed < this.sensitivity && this.lastY !== undefined && this.lastX !== undefined) {
                clearInterval(this.checkSpeedInterval);
                this.isHover = true;
                this.over.call(this.elem, this.lastX, this.lastY);
            } else {
                this.prevX = this.lastX;
                this.prevY = this.lastY;
                this.prevTime = this.lastTime;
            }
        }
    }

    const loadRoundCountries = window.matchMedia('(max-width: 1023px)');
    if (loadRoundCountries.matches) {const roundCountries = document.querySelector('.world_map_countries');
        for (let key in countries_obj){
            const innerRoundCountries = `
                <div class="indicator_inner">
                    <a class="round-countries-ajax-popup" href="./countries_images/${countries_obj[key].slider_page}">
                        <img src="./img/flags/${countries_obj[key].image_name}" alt="Country Image" class="indicator_inner_image">
                    </a>
                    <p class="indicator_inner_country">Мы ${countries_obj[key].ru_name}</p>
                </div>`;
            roundCountries.insertAdjacentHTML('beforeend', innerRoundCountries);
        }
    }
    else

    for (let key in countries_obj){
        const selectedItem = document.querySelector('#' + key);
        const mouseObserver =  new HoverIntent({
            elem : selectedItem,
            over( _actionPointX, _actionPointY) {
                $('#svg_map path').not(countries_obj[key].selector_name).css('fill', '#000');
                $('.inner-ajax-popup').attr(`href`, `./countries_images/${countries_obj[key].slider_page}`).html(`<div class="indicator_inner"><img src="./img/flags/${countries_obj[key].image_name}" alt="Country Image" class="indicator_inner_image"><p class="indicator_inner_country">Мы ${countries_obj[key].ru_name}</p></div>`);
                this.addedHeight = (key === 'all_portugal' || key === 'all_vietnam' || key === 'all_barbados') ? 30 : 0;// тернарный опер-ор (отдел. усл-я для Португалии,Вьетнама, Барбадоса из-за их формы)
                $('#indicator').css({'top': _actionPointY - this.addedHeight + 'px', 'left': _actionPointX + 3 + 'px'}).fadeToggle(300);
            },
            out() {
                $('.inner-ajax-popup').attr(`href`, ``).html('');
                $('#indicator').hide();
                $('#svg_map path').css('fill', '#949494');
                for (let key in countries_obj) { // цикл по данным из доп. объекта
                    $(countries_obj[key].selector_name).css('fill', countries_obj[key].color);
                }
            }
        });
    }

    new HoverIntent({
        sensitivity: 10000,
        elem : indicator,
        over () {},
        out () {
            $('.inner-ajax-popup').attr(`href`, ``).html('');
            $('#indicator').hide();
            $('#svg_map path').css('fill', '#949494');
            for (let key in countries_obj) {
                $(countries_obj[key].selector_name).css('fill', countries_obj[key].color);
            }
        },
    });

    const docRoot = $('html, body');
    $('.simple-ajax-popup, .inner-ajax-popup, .round-countries-ajax-popup ').magnificPopup({
        preloader: false,
        type: 'ajax',
        callbacks: {
            parseAjax: function (mfpResponse) {
                mfpResponse.data = $(mfpResponse.data).find('#move_to_popup');
                console.log('Ajax content loaded:', mfpResponse);
            },
            open: function() {
                docRoot.addClass('magnificPopupNoScroll');
            },
            close: function() {
                docRoot.removeClass('magnificPopupNoScroll');
            }
        },
    });
$(document).ajaxComplete(function () {
    $('.inner_popup').slick({
        infinite: true,
        cssEase: 'linear',
        easing: 'linear',
        autoplay: false,
        autoplaySpeed: 2800,
        accessibility: false,
        arrows: true,
        pauseOnHover: false,
    })
});

    import('./modules/module_adaptive_slider.js')
        .then(module => {
        module.adaptiveSlider('.world_map_countries');
    });
});