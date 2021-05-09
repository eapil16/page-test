'use strict';

document.addEventListener('DOMContentLoaded', () => {
	
	const getSlider = () => {
		const swiper = new Swiper(".slider-pagination", {
			// loop: true,
			spaceBetween: 10,
			slidesPerView: 4,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
		});
	
		var swiper2 = new Swiper(".swiper-slider", {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 10,
			navigation: {
			  nextEl: ".swiper-button-next",
			  prevEl: ".swiper-button-prev",
			},
			thumbs: {
			  swiper: swiper,
			},
		});
	};

	const showSlider = () => document.querySelector('.slider').style.top = '0px';

	document.querySelector('body')
		.addEventListener('click', (e) => {
			if (e.target.closest('.demo')) {
				e.preventDefault();
				setTimeout(getSlider, 5000);
				setTimeout(showSlider, 5000);				
			}
		});

});
