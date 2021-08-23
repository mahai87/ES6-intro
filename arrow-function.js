function add(num1, num2) {
    // const sum = num1 + num2;
    // return sum; 
    return num1 + num2;
}
console.log(add(5, 4));
// document.getElementById('my-btn').onclick = function handleEvent() {

// }
const add2 = function add2(num1, num2) {
    return num1 + num2;
}
const sum2 = add2(5, 7);
console.log(sum2);
// function expression annonymous 
const add3 = function (num1, num2) {
    return num1 + num2;
}
const sum3 = add3(7, 9);
console.log(sum3);
//  arrow function
const add4 = (num1, num2) => num1 + num2;
const sum4 = add4(3, 8);
console.log(sum4);