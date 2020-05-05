const navbar = document.querySelector('#navbar');
const links = navbar.querySelectorAll('.navbar__nav li a');

links.forEach(setOnClick);

function toggleNavbar() {
	navbar.classList.toggle('show');
}

function setOnClick(element) {
	element.onclick = function () {
		if (navbar.classList.contains('show')) navbar.classList.remove('show');
	};
}
