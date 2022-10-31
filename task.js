const mathematicalOperation = prompt('Mathematical operation: add, sub, mult, div')
const number1 = Number(prompt('First number'));
const number2 = Number(prompt('Second number'));

if (mathematicalOperation === 'add') {
    const result = number1 + number2
    alert(number1+" + "+number2+" = "+ result)
}
else if (mathematicalOperation === 'sub') {
    const result = number1 - number2
    alert(number1+" - "+number2+" = "+ result)
}
else if (mathematicalOperation === 'mult') {
    const result = number1 * number2
    alert(number1+" * "+number2+" = "+ result)
}
else if (mathematicalOperation === 'div') {
 if (number2 == 0) {
    alert("Cannot be divided by zero")
 }
 else {
     const result = number1 / number2 
     alert(number1+" / "+number2+" = "+ result)
 }
}
else { 
    alert("Problem with variables. Try again!")
}
