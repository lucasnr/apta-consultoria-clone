const navbar = $('#navbar');
const navbarHeight = navbar.outerHeight();

function toggleNavbar() {
	navbar.toggleClass('show');
}

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
