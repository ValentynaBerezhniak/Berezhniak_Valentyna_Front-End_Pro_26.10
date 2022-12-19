const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
 
//   1 
const summAndKilPlus = (array_value) => {
	let sum = 0
	let kilplus = 0
	for (let i=0; i<array_value.length; i++) {
		if (array_value[i] > 0 ){
			sum += array_value[i];
			kilplus += 1;
		}
	}
	console.log(`Сума позитивних елементів:${sum} \nКількість позитивних улементів: ${kilplus}`)
	// array_value.forEach(element => console.log(element))
	
}

//   2
const minValueAndIndex = (array_value) => {
	let min = array_value[0];
	let index = 0;
	for (let i=1; i<array_value.length; i++) {
		if (array_value[i] < min) {
			min = array_value[i];
			index = i;
		}
	}
	console.log(`Мінімальний елемент масиву: ${min} \n Його індекс: ${index}`)
}


//   3
const maxValueAndIndex = (array_value) => {
	let max = array_value[0]
	let index = 0
	for (let i=1; i<array_value.length; i++) {
		if (array_value[i] > max) {
			max = array_value[i];
			index = i;
		}
	}
	console.log(`Максимальний елемент масиву: ${max} \nЙого індекс: ${index}`)
}


//   4
const numberNegativeValues = (array_value) => {
	let result  = array_value.filter(element => element <0)
	console.log(`Негативних елементів масиву: ${result.length}`)
}


//   5   quantity
const numberOddPositive  = (array_value) => {
	let result  = array_value.filter(element => element >0 && (element %2 == 1))
	console.log(`Кількість непарних позитивних елементів масиву: ${result.length}`)
}

//   6   
const numberEvenPositive  = (array_value) => {
	let result  = array_value.filter(element => element >0 && (element %2 == 0))
	console.log(`Кількість парних позитивних елементів масиву: ${result.length}`)
}

//   7   
const sumEvenPositive  = (array_value) => {
	let sum =0
	for (let i=1; i<array_value.length; i++) {
		if (array_value[i] >0 && (array_value[i] %2 == 0)){
			sum += array_value[i]; 
		}
	}
	console.log(`Сума парних позитивних елементів масиву: ${sum}`)
}

//   8  
const sumOddPositive  = (array_value) => {
	let sum =0
	for (let i=1; i<array_value.length; i++) {
		if (array_value[i] >0 && (array_value[i] %2 == 1)){
			sum += array_value[i]; 
		}
	}
	console.log(`Сума непарних позитивних елементів масиву: ${sum}`)
}

// 9
const multPositive = (array_value) => {
	let mult = 1;
	array_value.forEach(element => {if (element > 0) {mult *= element} })
	console.log(`Добуток позитивних елементів масиву: ${mult}`)
}


//   10
const maxValue = (array_value) => {
	let max = array_value[0]
	let min = 0
	let index_max = 0
	for (let i=1; i<array_value.length; i++) {
		if (array_value[i] > max) {
			max = array_value[i];
			array_value[index_max] =0  
			index_max = i
		}
		else {
			array_value[i] =0
		}
	}
	console.log(`Масив з максимальним числом: [${array_value}]`)
}

summAndKilPlus(array)
minValueAndIndex(array)
maxValueAndIndex(array)
numberNegativeValues(array)
numberOddPositive(array)
numberEvenPositive(array)
sumEvenPositive(array)
sumOddPositive(array)
multPositive(array)
maxValue(array)

