'use strict';

//Variables para hacer referencia a elementos de HTML
const form = document.querySelector('.form');
const inputSearch = document.querySelector('.js-inputSearch');
const btnSearch = document.querySelector('.js-btnSearch');
const listContainer = document.querySelector('.found-list');
const favContainer = document.querySelector('.js-favlist');
const favSection = document.querySelector('.js-fav');

//Imagen por defecto
const defaultImage =
	'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';

//Variables para guardar los arrays
let series = [];
let favourites = [];

// Función para comprobar de inicio si tenemos información de los favoritos en local y recuperarla.
getLS();

//Función para evitar que el formulario se ejecute
function preventDefault(event) {
	event.preventDefault();
}
form.addEventListener('submit', preventDefault);
