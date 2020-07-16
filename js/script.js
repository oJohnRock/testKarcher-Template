function headerMenu(selector) {
	let menu = document.querySelector(selector);
	let button = document.querySelector('.header-menu__btn');
	let links = document.querySelectorAll('.header-menu__item');
	let overlay = document.querySelector('.header-menu__overlay');

	button.addEventListener("click", (event) => {
		event.preventDefault();
		toggleMenu();
	});

	overlay.onclick = toggleMenu;

	for (let item of links) {
		item.onclick = toggleMenu;
	}

	function toggleMenu() {
		let body = document.querySelector('body');

		menu.classList.toggle('header-menu_active');

		if ( menu.classList.contains('header-menu_active') ) {
			body.style.overflow = 'hidden';
		} else {
			body.style.overflow = 'visible';
		}
	}
}

headerMenu('.header-menu');