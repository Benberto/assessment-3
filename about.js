console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Submission successful!");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

const logo = document.querySelector('#logo')

logo.addEventListener('mouseover', function (){
  getAlert()
});



function getAlert(){
  alert('You are as cute as this here Rubber Duck!');
}