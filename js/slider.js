const optionsMainSlider = {
	delay: 800,
	effect: 'fade',
	autoplay: {
		delay: 4000,
	},
	navigation: {
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next',
	},
};

const optionsCatalogSlider = {
	slidesPerView: 1,
	spaceBetween: 30,
	breakpoints: {
		760: {
		  slidesPerView: 3,
		  spaceBetween: 20,
		},
	}
};

const catalogSlider = new Swiper('.catalog-slider-init', optionsCatalogSlider);
const mainSlider = new Swiper('.main-slider-init', optionsMainSlider);
