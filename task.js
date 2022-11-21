// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових 
// символів із набору characters 

let lengthkey = Number(prompt(`Введіть бажану довжину ключа `)); 

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(lengthkey, characters);
console.log(key);



// Create function generateKey
function generateKey(length, sting_element) { 
	result = ''
	for (let i = 0; i < length ; i++) {
		// generate number  
		rand = ~~(Math.random()*characters.length);
		result += characters[rand];
	}
	return result
}




