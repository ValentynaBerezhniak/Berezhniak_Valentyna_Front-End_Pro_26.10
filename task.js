// Вивести  числа з 10 по 20
console.log('Вивести числа з 10 по 20')
let str = '';
let last_number = 20
let first_number = 10

for (let i = first_number; i < last_number ; i++) {
  str += i + ', ';
}
str +=  last_number
console.log(str)


// Вивести квадрат числа з 10 по 20
console.log('Вивести квадрат числа з 10 по 20')
for (let i = first_number; i <= last_number ; i++) {
  console.log(i ** i)
}



// Вивести таблицю множення на 7
console.log('Вивести таблицю множення на 7') 
let multiplier = 7 
for (let i = 0; i <= 10 ; i++) {
  console.log(`${i} * ${multiplier}  = ${i*multiplier}`)
}



//Вивести суму чисел від 1 до 15
console.log('Вивести суму чисел від 1 до 15')
let sum_first = 1
let sum_last = 15
let sum_number = 0
for (let i = sum_first; i <= sum_last ; i++) {
  sum_number += i
}
console.log(`Cумa чисел від 1 до 15 = ${sum_number}`)



//Вивести добуток чисел від 15 до 35
console.log('Вивести добуток чисел від 15 до 35')
let mult_first = 15
let mult_last = 35
let mult_number = 1
for (let i = mult_first; i <= mult_last ; i++) {
  mult_number *= i
}
console.log(`Добуток чисел від 15 до 35 = ${mult_number}`)



//Вивести середнє арефметичне чисел від 1 до 500
console.log('Вивести середнє арефметичне чисел від 1 до 500')
let arithmetical_first = 1
let arithmetical_last = 500
let arithmetical_mean = 0
for (let i = arithmetical_first; i <= arithmetical_last ; i++) {
  arithmetical_mean += i
} 
console.log(`Середнє арефметичне чисел від 1 до 500 = ${arithmetical_mean / 500}`)



//Вивести суму лише парних чисел  в діапазоні від 30 до 80
console.log('Вивести суму лише парних чисел  в діапазоні від 30 до 80')
let sum_even_number_first = 30
let sum_even_number_last = 80
let sum_even_number = 0
for (let i = sum_even_number_first; i <= sum_even_number_last ; i++) {
  if (i % 2 === 0 ) {
    sum_even_number += i 
  }
} 
console.log(`Сума лише парних чисел  в діапазоні від 30 до 80 = ${sum_even_number }`)




//Вивести  всі числа  в діапазоні від 100 до 200 кратні 3
let multiple_of_3_first = 100
let multiple_of_3_last = 200 
let multiple_of_3 = '' 
console.log('Всі числа  в діапазоні від 100 до 200 кратні 3 :')
for (let i = multiple_of_3_first; i <= multiple_of_3_last  ; i++) {
  if (i % 3 === 0 ) {
  multiple_of_3 += i + ', '
  }
} 
console.log(multiple_of_3)


//Завдання 10 та 11 я об'єднала в одне 
//Вивести  всі дільники числа  
//Вивести кількість парних дільників числа 
 
let prime_number = prompt('input prime number')
let all_divisors_of_a_number = '' 
let number_of_even_divisors  = 0
let sum_number_of_even_divisors  = 0
console.log(`Всі дільники числа ${prime_number}:`)
for (let i = 1; i <= Math.trunc(prime_number / 2)  ; i++) {
  if (prime_number % i === 0 ) {
    all_divisors_of_a_number += i + ', ';
    if (i % 2 === 0){
      number_of_even_divisors++
      sum_number_of_even_divisors += i
    }
  }
}
if (prime_number % 2 === 0) {
  number_of_even_divisors  += 1
} 
all_divisors_of_a_number += prime_number
console.log(all_divisors_of_a_number) 
console.log(`Кількість парних дільників числа ${prime_number} = ${number_of_even_divisors}`) 


// Повна таблиця поження від 1 до 10 
for (let i = 1; i <= 10 ; i++) {
  console.log(`Таблиця множення на ${i}`)
  for (let j = 1; j <= 10; j++){
    console.log(`${i} * ${j}  = ${i*j}`)
  }
  console.log(`\n`)
}