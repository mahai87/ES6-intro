const numbers = [23, 65, 99, 21, 120, 34];
// console.log(numbers);
// console.log(...numbers);
// const max = Math.max(23, 99, 65);
const max = Math.max(...numbers);
console.log(max)
// numbers.push(55);
// Reference 
// const numbers2 = numbers;
const numbers2 = [22, ...numbers, 88];
numbers.push(55)
console.log(numbers);
console.log(numbers2);