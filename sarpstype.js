let displayQuote = document.querySelector('.quote-display')
let inputQuote = document.querySelector('.quote-input')
let allButton = document.querySelector('.container').querySelectorAll('button')

function generateQuote(number){
	if(number == 1){
			return 'I am a passionate software engineer'
	}
	if(number == 2){
			return 'kessben driving school is the location'
	}
	if(number == 3){
			return'if it must be done then it must be done well'
	}
    if(number == 4){
			return'Akumadan tomatoes is nice'
	}
	if(number == 5){
			return'Senior Obed is my Chairman'
	}
	else if(number == 6){
			return'Positive mindset brings positive thing'
	}
	else if(number == 7){
			return'i am the king of wisdom and citizen of zion'
	}
    else if(number == 8){
			return'Telecommunication'		
	}
	else if(number == 9){
		return 'Anticipation without solution is foolishness'
	}
	else if(number == 10){
		return'At long last the battle has ended'
	}
}



inputQuote.addEventListener('input',function(){
	const arrayDisplayQuote = displayQuote.querySelectorAll('span')
	const arryInputValue = inputQuote.value.split('')
	arrayDisplayQuote.forEach((keySpan, index) => {
		const character = arryInputValue[index]
		if(character == null){
			keySpan.classList.remove('correct')
			keySpan.classList.remove('incorrect')
		}
		
		
		
		else if(character === keySpan.innerText){
			keySpan.classList.add('correct')
			keySpan.classList.remove('incorrect')
		}
		else{
			keySpan.classList.remove('correct')
			keySpan.classList.add('incorrect')
		}
	})

})



function getNewQuote(){
	let randomNumber = Math.floor(Math.random()* 10)+1;
	
	displayQuote.innerHTML = ''
	
	let currentQuote = generateQuote(randomNumber)
	
	currentQuote.split('').forEach(key =>{
		const keySpan = document.createElement('span')
		keySpan.innerText = key
		displayQuote.appendChild(keySpan)
		
	})
	console.log(currentQuote)
	
	inputQuote.value = null
}

getNewQuote() 

let keyOne = document.querySelector('#key-one')
let keyTwo = document.querySelector('#key-two')
let keyThree = document.querySelector('#key-three')


inputQuote.addEventListener('keypress',function(event){
		if(event.key  == '2'){
			keyTwo.classList.add('active')
			keyTwo.classList.remove('notActive')
		}
		else if(event.key != '2'){
			keyTwo.classList.add('notActive')
			keyTwo.classList.remove('active')
		}
		
		else if(event.key == '1'){
			keyOne.classList.add('active')
			keyOne.classList.remove('notActive')
		}
		else if(event.key != '1'){
			keyTwo.classList.add('notActive')
			keyTwo.classList.remove('active')
		}
		
		else if(event.key  == '3'){
			keyThree.classList.add('active')
			keyThree.classList.remove('notActive')
		}
		else if(event.key != '3'){
			keyThree.classList.add('notActive')
			keyThree.classList.remove('active')
		}
		
		console.log(event)
})

document.querySelector("#key-backspace").addEventListener('click',function(){
	window.location.reload(true);
})