let restArr = ['The Pie Pizzeria', 'Slackwater', "Tony's"]

const random = Math.floor(Math.random() * restArr.length);
function randomRest(evt) {
	evt.preventDefault();
	
	let name = random + restArr[random]

  alert(name)
}


let rest = document.querySelector('button#rest')

color.addEventListener('click', randomRest);