'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const navbarToggler = document.querySelector('.navbar-toggler');
	const searchToggleButton = document.getElementById('main-header-search-toggle-button');
	const searchContainer = document.getElementById('main-header-search-container');

	navbarToggler.addEventListener('click', () => {
		closeOverlay.classList.add('active');
	});

	const closeOverlay = document.getElementById('close-overlay');
	closeOverlay.addEventListener('click', e => {
		e.target.classList.remove('active');
		$('.navbar-collapse').collapse('hide');
	});

	searchToggleButton.addEventListener('click', () => {
		searchContainer.classList.add('active');
	});

	searchContainer.querySelector('form').addEventListener('submit', e => {
		e.preventDefault(); // Prevents a page refresh
		searchContainer.classList.remove('active');
	});

	const $navbarCollapse = $('.navbar-collapse');
	$('#mainNavbarNav').on('click', 'a', function () {
		$navbarCollapse.collapse('hide');
	});
});
