configureModals();

function configureModals() {
	const body = $('body');
	const modal = $('#servicos .modal');
	const scrollbarWidth = window.innerWidth - body.width();
	const buttons = $('.services .service .btn');

	function dismiss() {
		if (navbar) navbar.css('padding-right', 0);
		body.css('padding-right', 0);
		body.css('overflow-y', 'scroll');
		modal.removeClass('show');

		$(document).off('keydown', keydownCallback);
	}

	function keydownCallback(event) {
		if (event.code === 'Escape') dismiss();
	}

	buttons.each(function (index, element) {
		const $element = $(element);
		$element.click(function () {
			modal
				.find('.modal__text')
				.text($element.parent().attr('data-modal-content'));
			modal.focus();

			if (navbar) navbar.css('padding-right', scrollbarWidth);
			body.css('padding-right', scrollbarWidth);
			body.css('overflow-y', 'hidden');
			modal.addClass('show');

			modal.find('button').click(dismiss);
			$(document).keydown(keydownCallback);
		});
	});
}
