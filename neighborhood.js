let restArr = ['The Pie Pizzeria', 'Slackwater', "Tony's"]

const random = Math.floor(Math.random() * restArr.length);

function randomRest(evt) {
	evt.preventDefault();
	
	alert('You should eat at ' +restArr[random]+'!')
}


let rest = document.querySelector('button#rest')

rest.addEventListener('click', randomRest);