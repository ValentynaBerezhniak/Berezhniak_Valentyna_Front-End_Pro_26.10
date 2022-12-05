// ====== Рекурсія ===== 
// піднесення числа  у степінь
// power of a number

const pow = (num, degree) => {
  // Робимо перевірку степінь чи є вона кінцем в рекурсії. 
  // Завжди буде закінчуватись на 1 
  // Math.abs('-1');

  if (degree < 0) {
      if (degree === 0) {
          return 1;
      }  
      return  1 / (num * pow(num, Math.abs(degree)-1));
  }
  else {
      if (degree === 0) {
          return 1;
      }  
      return  num * pow(num, degree-1);
  }
  
};

let number  = Number(prompt(`Введіть число яке треба піднести до степеня`))
let degrees = Number(prompt(`Введіть степінь`))

const result = pow(number,degrees);

console.log(`${number} ^ ${degrees} = ${result}`);
alert(`${number} ^ ${degrees} = ${result}`);
