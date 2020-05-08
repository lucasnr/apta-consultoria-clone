const navbar = $('#navbar');

configureNavbar();

function configureNavbar() {
	const button = navbar.find('#navbar-toggle-button');
	button.click(function () {
		const expanded = $(this).attr('aria-expanded') === 'true';
		$(this).attr('aria-expanded', String(!expanded));
		navbar.toggleClass('show');
	});
	button.keypress(function (e) {
		if (e.which === 13) this.click();
	});

	const navbarHeight = navbar.outerHeight();
	const links = $('.navbar__nav li a');
	links.each(function (index, element) {
		const $element = $(element);
		$element.click(function (event) {
			event.preventDefault();

			if (navbar.hasClass('show')) navbar.removeClass('show');

			const $target = $($element.attr('href'));
			$('html, body').animate(
				{ scrollTop: $target.offset().top - navbarHeight },
				500
			);
		});
	});
}
