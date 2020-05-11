var navbar = $('#navbar');

(function () {
	var button = navbar.find('#navbar-toggle-button');
	button.click(function () {
		var expanded = $(this).attr('aria-expanded') === 'true';
		$(this).attr('aria-expanded', String(!expanded));
		navbar.toggleClass('show');
	});
	button.keypress(function (e) {
		if (e.which === 13) this.click();
	});

	var navbarHeight = navbar.outerHeight();
	var links = $('.navbar__nav li a');
	links.each(function (index, element) {
		var $element = $(element);
		$element.click(function (event) {
			event.preventDefault();

			if (navbar.hasClass('show')) navbar.removeClass('show');

			var $target = $($element.attr('href'));
			$('html, body').animate(
				{ scrollTop: $target.offset().top - navbarHeight },
				500
			);
		});
	});
})();
