const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
	const menuBody = document.querySelector('.header__menu');
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
};

const priceIcon = document.querySelector('.menu__plus');
if (priceIcon) {
	const priceBody = document.querySelector('.filter__price');
	priceIcon.addEventListener("click", function(e) {
		priceIcon.classList.toggle('_active_price');
		priceBody.classList.toggle('_active_price');
	});
};

const priceIconOne = document.querySelector('.menu__plus_1');
if (priceIconOne) {
	const priceBodyOne = document.querySelector('.filter__people-hide');
	priceIconOne.addEventListener("click", function(e) {
		priceIconOne.classList.toggle('_active_price');
		priceBodyOne.classList.toggle('_active_price');
	});
};

const priceIconTwo = document.querySelector('.menu__plus_2');
if (priceIconTwo) {
	const priceBodyTwo = document.querySelector('.filter__place-radio');
	priceIconTwo.addEventListener("click", function(e) {
		priceIconTwo.classList.toggle('_active_price');
		priceBodyTwo.classList.toggle('_active_price');
	});
};









