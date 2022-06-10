console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Your form has been submitted!")
}

const giveCompliment = () => {
	alert("Daggum, those are some nice sunglasses")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let duckImg = document.getElementById("duck-pic")

duckImg.addEventListener("mouseover", giveCompliment)