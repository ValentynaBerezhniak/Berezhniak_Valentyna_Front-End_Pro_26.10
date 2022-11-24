// Task 1

const arrayNumberString = [2,'b', 4,'a', 6, 'd']

// Функція яка вираховує середнє арефметичне тільки з чисел типу number
function summAllNumber(mas) { 
	let sum = 0
	let col_number = 0

	//Цикл який перевіряє який тип нам потрібен для додавання 
	for (let i = 0; i < mas.length; i++){
		if ((typeof  mas[i]) === 'number') {
			sum += mas[i]  
			col_number += 1 
		};
	};

	// Виводимо середнє арефметичне 
	return sum / col_number


	// Create an array of numbers   
	// let sum = mas.filter((elem) => typeof elem === 'number') 
};

// Використання Функції

console.log(`Cереднє арефметичне масиву ${arrayNumberString} = ${summAllNumber(arrayNumberString)}`)

// Task 2

let firstArg = Number(prompt('Введіть перше число ')) 
let matSymbols = prompt('Введіть математичну дію: +, -, *, /, %, ^')
let secondArg = Number(prompt('Введіть друге число'))

function doMath(x, znak, y) { 
	const OPERATIONS = {
		PLUS: "+",
		MINUS: "-",
		MULTY: "*",
		DIV: "/",
		MODUL: "%",
		DEGREE: "^"
	};

	const operationCheck = (basisOper) => {
		return (operationForCheck) => {
			return basisOper === operationForCheck;
		};
	}; 

	const isPLUS = operationCheck(OPERATIONS.PLUS)
	const isMINUS = operationCheck(OPERATIONS.MINUS) 
	const isMULTY = operationCheck(OPERATIONS.MULTY) 
	const isDIV = operationCheck(OPERATIONS.DIV) 
	const isMODUL = operationCheck(OPERATIONS.MODUL) 
	const isDEGREE = operationCheck(OPERATIONS.DEGREE) 

	if (isPLUS(znak)) {
		return `${x} ${znak} ${y} = ${x + y}`
	}
	else if (isMINUS(znak)) {
		return `${x} ${znak} ${y} = ${x - y}`
	}
	else if (isMULTY(znak)) {
		return `${x} ${znak} ${y} = ${x * y}`
	}
	else if (isDIV(znak)) {
		if (y != 0 )
			return `${x} ${znak} ${y} = ${x / y}`
		else
			throw Error(`Please try again`)
	}
	else if (isMODUL(znak)) {
		return `${x} ${znak} ${y} = ${x % y}`
	}
	else if (isDEGREE(znak)) {
		return `${x} ${znak} ${y} = ${ x ** y}`
	} 
	else
		throw Error(`Please try again`)
} 
alert(doMath(firstArg, matSymbols, secondArg));
// console.log(doMath(firstArg, matSymbols, secondArg))

// Task 3

// Функція дає можливість користувачу вводити всі дані
function createSecondsArray() { 
	let lengthArray = Number(prompt('Введіть довжину основного масиву')) 
	let allArray = []

	//Створено два цикла,  де перший вказує довжину головного масиву який створює N кількість малих масивів,
	// а другий цикл заповнює елементи
	for (let i = 0; i < lengthArray; i++) {
		let lengthSmallArray = Number(prompt(`Введіть довжину ${i}-го масиву`)) 
		let secondArray = []

		for (let j = 0; j < lengthSmallArray; j++) {
			let element = Number(prompt(`Введіть значення масиву allArray[${i}][${j}]:`)) 
			secondArray.push(element)
		}; 
		allArray.push(secondArray)
	}; 
	return allArray
};

const array = createSecondsArray()


console.log("Масив має такі елементи")
array.filter((elem) => console.log(elem))

// Task 4

// Функція яка видаляє зайві символи з першої строки 

function deleteSymbols(line, arraySymbol) {
    // Переводимо рядок в список окремих символів
   let arraySymbolLine = line.split('') 

   // Створили фільтр та визвали функцію в ньому
   let arrayResult = arraySymbolLine.filter((elem) => { 
       for (let i = 0; i < arraySymbol.length; i++) { 
           //Перевіряє на схожість символів, якщо так, то повертає undefined
           if (elem === arraySymbol[i]) { 
               return  undefined
           } 
       };
       return elem
   });
   // Переводимо список окремих символів в рядок 
   return arrayResult.join('')
}; 



const startline = "User admin_uasp  lready has more than 'user_connections' active connections"
let arraySymbolsDelete = ['a', '_', "'"]

console.log(deleteSymbols(startline, arraySymbolsDelete))

