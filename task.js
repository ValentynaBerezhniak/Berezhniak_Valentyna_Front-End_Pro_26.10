//Числа від 20 до 30 з кроком 0.5 
let all_number_0_5 = ''
for (let i = 20; i <= 30 ; i += 0.5) {
  all_number_0_5 += i + ' '
}
console.log(`Числа від 20 до 30 з кроком 0.5 : ${all_number_0_5}`) 


// Розрахунок вартості  
let dolar = 27
for (let i = 10; i <= 100 ; i += 10){
  let grivna = i * dolar
  console.log(` ${i} доларів по  ${dolar} буде : ${grivna}`) 
}


// Перелік чисел квадрат яких не більше за число N
let N = prompt('input number  ')
console.log(`Перелік чисел квадрат яких не більше за число ${N}`) 
for (let i = 1; i <= 100 ; i += 1){ 
  if (i**2 <= N){ 
    console.log(i) 
  }
}


//перевірка чи є число простим
let bool = true
let iterator = 1 
if ( N != 1) {
  while (bool){
    if (N % iterator === 0 && iterator != 1 ){  
      bool = false
    } 
    if (iterator === Math.trunc(N / 2) ) {
       bool = false 
    } 
    iterator++
  }
  if (bool === true) {
    console.log(`число  ${N} є простим`) 
  }
  else {
    console.log(`число  ${N} не є простим`) 
  }
}
else {
  console.log(`число  ${N} не є простим`) 
}


// чи можна отримати данне число шляхом зведення 3 у степінь 
let bool_sqrt_3 = true
let iterator_sqrt_3 = 1
let N_number = N
while ( bool_sqrt_3 ){ 
   if (N_number % 3 === 0 && N_number != 1) {
    N_number = N_number / 3
   }
   else {
    console.log(`число  ${N } не можна отримати шляхом зведення 3 у степінь `) 
    bool_sqrt_3 = false
   }
   if (N_number === 1) {
      console.log(`число  ${N } можна отримати шляхом зведення 3 у степінь `)
      bool_sqrt_3 = false
   }
}  