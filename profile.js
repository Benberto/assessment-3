function favoriteColor(evt) {
	evt.preventDefault();
	
	alert("Blue!");
}


let color = document.querySelector('button#color');

color.addEventListener('click', favoriteColor);

function favoritePlace(evt) {
	evt.preventDefault();
	
	alert("Siesta Key, Florida");
}


let place = document.querySelector('button#place');

place.addEventListener('click', favoritePlace);

function favoriteRitual(evt) {
	evt.preventDefault();
	
	alert("Morning meditation");
}


let ritual = document.querySelector('button#ritual');

ritual.addEventListener('click', favoriteRitual);