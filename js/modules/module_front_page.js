const generateFrontPageBody = () =>{
    const mediaQueryFrontPage = window.matchMedia('(min-width: 1024px)');
    if (mediaQueryFrontPage.matches){
        const frontPageHTML = `
            <div id="wrapper">
                <main id="main">
                    <div class="front_wrapper">
                        <section class="sliders">
                            <div class="slider_left">
                                <div>
                                    <img style="height: 100vh; width: 100%; object-fit: cover; -o-object-fit: cover" src="./img/front_img_1.jpg" alt="">
                                </div>
                                <div>
                                    <img style="height: 100vh; width: 100%; object-fit: cover; -o-object-fit: cover" src="./img/front-img_4.jpg" alt="">
                                </div>
                                <div>
                                    <img style="height: 100vh; width: 100%; object-fit: cover; -o-object-fit: cover" src="./img/front-img_3.jpg" alt="">
                                </div>
                            </div>
                            <div class="slider_right">
                                <div>
                                    <img style="height: 100vh; width: 100%; object-fit: cover; -o-object-fit: cover" src="./img/front-img_5.jpg" alt="">
                                </div>
                                <div>
                                    <img style="height: 100vh; width: 100%; object-fit: cover; -o-object-fit: cover" src="./img/front-img_6.jpg" alt="">
                                </div>
                                <div>
                                    <img style="height: 100vh; width: 100%; object-fit: cover; -o-object-fit: cover" src="./img/front-img_2.jpg" alt="">
                                </div>
                            </div>
                        </section>
                        <section class="front_content">
                            <div class="clipboard">
                                <img src="./img/miparti_logo_plus.png" alt="">
                            </div>
                            <div class="btn_push_wrapper">
                                <button class="push btn_menu_active">
                                    <span class="small_menu_triangle"></span>
                                    <span class="btn_push_text">МЕНЮ</span>
                                    <span class="btn_cover_text">&#10006;</span>
                                </button>
                            </div>
                            <div class="front_nav_menu">
                                <nav class="front_nav_menu_content">
                                    <ul>
                                        <li class="nav_link">
                                            <a href="./about.html">О Нас<span class="underline"></span>
                                            </a>
                                        </li>
                                        <li class="nav_link">
                                            <a href="./studio.html">Шоу-Балет<span class="underline"></span>
                                            </a>
                                        </li>
                                        <li class="nav_link">
                                            <a href="./school.html">Школа Танца<span class="underline"></span></a>
                                        </li>
                                        <li class="nav_link">
                                            <a href="./contacts.html">Контакты<span class="underline"></span>
                                            </a>
                                        </li>
                                        <li class="nav_link">
                                            <a href="./blog.html">Блог<span class="underline"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </section>
                        <div class="interactive_studio">
                            <div class="interactive_studio_inner">
                                <a class="direction_item" href="./studio.html">
                                    <p>ШОУ-БАЛЕТ</p>
                                    <hr>
                                </a>
                                <a class="direction_item" href="./studio.html">
                                    <p>концертные выступления</p>
                                </a>
                            </div>
                        </div>
                        <div class="interactive_school">
                            <div class="interactive_school_inner">
                                <a class="direction_item" href="./school.html">
                                    <p>ШКОЛА ТАНЦА</p>
                                    <hr>
                                </a>
                                <a class="direction_item" href="./school.html">
                                    <p>танцуют ВСЕ от 3 до 99 лет</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>   
        `;
        document.body.insertAdjacentHTML('afterbegin',frontPageHTML);
    }
    else {
        const mobileFrontPageHTML = `
            <div id="wrapper">
                <main id="main">
                    <div class="mobile_front_wrapper">
                        <section class="mobile_front_menu">
                            <div class="head_menu">
                            <div class="logo_and_icons_wrapper">
                                <a href="./about.html">
                                    <div class="link_about">
                                        <p class="link_about_text">О НАС</p>
                                        <div class="link_about_icons">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </a>
                                <div class="logo">
                                    <a href="./index.html">
                                        <img style="width: auto;
    height: 42px;" class="logo_image" src="./img/miparti_logo_plus.png" alt="Miparti Company">
                                    </a>
                                </div>
                                <div class="head_menu_icon">
                                    <div class="head_menu_icon_content">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <p class="head_menu_icon_text">МЕНЮ</p>
                                </div>
                            </div>
                            <nav class="nav_menu">
                                <ul>
                                    <li class="nav_link">
                                        <a class="menu_current_item" href="./index.html">
                                            <p>Главная</p>
                                            <span class="underline"></span>
                                        </a>
                                    </li>
                                    <li class="nav_link">
                                        <a href="./about.html">
                                            <p>О Нас</p>
                                            <span class="underline"></span>
                                        </a>
                                    </li>
                                    <li class="nav_link">
                                        <a href="./studio.html">
                                            <div class="nav_link_wrapper">
                                                <p>Шоу-Балет</p>
                                                <div class="nav_link_pin">
                                                    <span class="nav_link_arrow_left"></span>
                                                    <span class="nav_link_arrow_right"></span>
                                                </div>
                                            </div>
                                            <span class="underline"></span>
                                        </a>
                                        <ul class="sub-menu">
                                            <li class="nav_link_sub_menu_item">
                                                <a href="./studio_photos.html">
                                                    <p>Фото</p>
                                                    <span class="sub_underline"></span>
                                                </a>
                                            </li>
                                            <li class="nav_link_sub_menu_item">
                                                <a href="./studio_videos.html">
                                                    <p>Видео</p>
                                                    <span class="sub_underline"></span>
                                                </a>
                                            </li>
                                            <li class="nav_link_sub_menu_item">
                                                <a href="./rider.html">
                                                    <p>Райдер</p>
                                                    <span class="sub_underline"></span>
                                                </a>
                                            </li>
                                            <li class="nav_link_sub_menu_item">
                                                <a href="./studio.html#anchor_from_earth">
                                                    <p>Где Мы Были</p>
                                                    <span class="sub_underline"></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav_link">
                                        <a href="./school.html">
                                            <div class="nav_link_wrapper">
                                                <p>Школа Танца</p>
                                                <div class="nav_link_pin">
                                                    <span class="nav_link_arrow_left"></span>
                                                    <span class="nav_link_arrow_right"></span>
                                                </div>
                                            </div>
                                            <span class="underline"></span>
                                        </a>
                                        <ul class="sub-menu">
                                            <li class="nav_link_sub_menu_item">
                                                <a href="#">
                                                    <p>Фото</p>
                                                    <span class="sub_underline"></span>
                                                </a>
                                            </li>
                                            <li class="nav_link_sub_menu_item">
                                                <a href="#">
                                                    <p>Видео</p>
                                                    <span class="sub_underline"></span>
                                                </a>
                                            </li>
                                            <li class="nav_link_sub_menu_item">
                                                <a href="./school_prices.html">
                                                    <p>Абонементы</p>
                                                    <span class="sub_underline"></span>
                                                </a>
                                            </li>
                                            <li class="nav_link_sub_menu_item">
                                                <a href="./school_timeTable.html">
                                                    <p>Расписание</p>
                                                    <span class="sub_underline"></span>
                                                </a>
                                            </li>
                                            <li class="nav_link_sub_menu_item">
                                                <a href="./school_educators.html">
                                                    <p>Педагоги</p>
                                                    <span class="sub_underline"></span>
                                                </a>
                                            </li>
                                            <li class="nav_link_sub_menu_item">
                                                <a href="./school_dance_staging.html">
                                                    <p>Постановка Танца</p>
                                                    <span class="sub_underline"></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav_link">
                                        <a href="./blog.html">
                                            <p>Новости</p>
                                            <span class="underline"></span>
                                        </a>
                                    </li>
                                    <li class="nav_link">
                                        <a href="./contacts.html">
                                            <p>Контакты</p>
                                            <span class="underline"></span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        </section>
                        <section class="mobile_front_slider">
                            <div class="mobile_front_slider_center">
                                <div>
                                    <img style="height: 100vh; width: 100%; object-fit: cover; -o-object-fit: cover" src="./img/front_img_1.jpg" alt="">
                                </div>
                                <div>
                                    <img style="height: 100vh; width: 100%; object-fit: cover; -o-object-fit: cover" src="./img/front-img_3.jpg" alt="">
                                </div>
                                <div>
                                    <img style="height: 100vh; width: 100%; object-fit: cover; -o-object-fit: cover" src="./img/front-img_4.jpg" alt="">
                                </div>
                            </div>
                        </section>
                        <div class="interactive_studio">
                            <div class="interactive_studio_inner">
                                <a class="direction_item" href="./studio.html">
                                    <p>ШОУ-БАЛЕТ</p>
                                    <hr>
                                </a>
                            </div>
            
                        </div>
                        <div class="interactive_school">
                            <div class="interactive_school_inner">
                                <a class="direction_item" href="./school.html">
                                    <p>ШКОЛА ТАНЦА</p>
                                    <hr>
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        `;
        document.body.insertAdjacentHTML('afterbegin',mobileFrontPageHTML);
    }
};
generateFrontPageBody();