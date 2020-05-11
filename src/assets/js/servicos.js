(function () {
	var body = $('body');
	var modal = $('#servicos .modal');
	var scrollbarWidth = window.innerWidth - body.width();
	var buttons = $('.services .service .btn');

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
		var $element = $(element);
		$element.click(function () {
			var text = modal.find('.modal__text');
			text.text($element.parent().attr('data-modal-content'));

			if (navbar) navbar.css('padding-right', scrollbarWidth);
			body.css('padding-right', scrollbarWidth);
			body.css('overflow-y', 'hidden');
			modal.addClass('show');

			modal.find('button').click(dismiss);
			$(document).keydown(keydownCallback);
		});
	});
})();
