let length_array = prompt('Введіть дожину масиву більшу за 4'); 

if (length_array >= 4 ) {
	// Створюємо два масива для порівняння чисел та строк
	let array_int = [];
	let array_str = [];

	// isNumeric перевіряє чи є в строці  числа
	const isNumeric = n => !isNaN(n);

	for (let i = 0; i < length_array ; i++) {
		let element_array = prompt(`Введи  ${i} елемент масиву = `); 
		if ( isNumeric(element_array) ) {
			array_int.push(Number(element_array))  
		}
		else {
			array_str.push(element_array)
		}
	} 
	// Сортуємо 
	array_int.sort((a, b) => a - b)  
	array_str.sort((a, b) => a - b) 

	// Обєднуємо два масива
	const array = [...array_int, ...array_str ]

	console.log("Виводить відсортований масив")

	array.forEach((element, index ) => {
		console.log(`array [ ${index} ] = ${element}`)
	});

	// Видаляємо елементи від 2 до 4
	array.splice(1,3) 

  	console.log("Виводить масив з видаленими елементами")
	
	array.forEach((element, index ) => {
		console.log(`array [${index} ] = ${element}`)
	});
}	
else {
	alert('Невірно введено число. Введіть число більше за 4');
}
