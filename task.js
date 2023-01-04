const obj = { a: 1 };
const obj2 = Object.create(obj);
const obj3 = Object.create(obj2); 

 
// ф-я приймає обєкт та повертає число
// кількість разів скільки він від когось створюваався.
// звертається до проторипа обєкта до tого часу
// поки не буде дорівнювати Nulle  

const layersOfInheritance = (object) => { 
  let count = 0; 
  let prototyp = Object.getPrototypeOf(object)

  while (prototyp != null) {
    prototyp = Object.getPrototypeOf(prototyp) 
    count++ 
  }
  return count -1
}

console.log(layersOfInheritance(obj2));
console.log(layersOfInheritance({})); // 0
console.log(layersOfInheritance(new Date())); // 1
console.log(layersOfInheritance(obj3)); // 2