
export const adaptiveSlider = function (countrySliderInit) {
    const sliderMediaQueryTablet = window.matchMedia('(max-width: 1023px)');
    const sliderMediaQueryMobile_L = window.matchMedia('(max-width: 900px)');
    const sliderMediaQueryMobile_M = window.matchMedia('(max-width: 690px)');
    const sliderMediaQueryMobile_S = window.matchMedia('(max-width: 470px)');

    const studioPhotos = document.querySelector('.studio_photos_albums'); // for pages 'studio_fotos' & 'school-fotos'

    if (sliderMediaQueryTablet.matches || studioPhotos) {
        if (sliderMediaQueryMobile_L.matches) {
            if (sliderMediaQueryMobile_M.matches) {
                if (sliderMediaQueryMobile_S.matches) {
                    $(countrySliderInit).slick({
                        infinite: true,
                        speed: 800,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    });
                    return;
                }
                $(countrySliderInit).slick({
                    infinite: true,
                    speed: 800,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                });
                return;
            }
            $(countrySliderInit).slick({
                infinite: true,
                speed: 1000,
                slidesToShow: 3,
                slidesToScroll: 3,
            });
            return;
        }
        $(countrySliderInit).slick({
            infinite: true,
            speed: 1200,
            slidesToShow: 4,
            slidesToScroll: 4,
        });
    }
};
