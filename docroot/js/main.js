'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const searchToggleButton = document.getElementById('main-header-search-toggle-button');
	const searchContainer = document.getElementById('main-header-search-container');

	searchToggleButton.addEventListener('click', () => {
		searchContainer.classList.add('active');
	});

	searchContainer.querySelector('form').addEventListener('submit', e => {
		e.preventDefault(); // Prevents a page refresh
		searchContainer.classList.remove('active');
	});
});
