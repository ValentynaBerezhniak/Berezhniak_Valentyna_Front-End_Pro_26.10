// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

// Create array
const array = [1, 2, 3, 4, 5, 6, 7];
console.log(`Початковий масив [${array}]`);

let delete_index_number = Number(prompt(`Введіть елемент масиву який треба видалити з масиву: [${array}]`)); 



//Create function removeElement
function removeElement(main_array, item){ 
	main_array.forEach((element, index ) => {  
		if (item === element) { 
  			main_array.splice(index,1)
  		} 
	}); 
}
 

removeElement(array, delete_index_number);

// Output array
console.log(`Результат: [${array}]`); 