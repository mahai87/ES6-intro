const add = (num1, num2) => num1 + num2;
const sum = add(34, 33);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(3, 5, 6);

const tenTimes = (num) => num * 10;
const output = tenTimes(5);
const fiveTimes = num => num * 5;
console.log(sum, result, output, fiveTimes(7));
// No parameter
const getName = () => ' Unda Dim';
console.log(getName());
// multiline  function
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}
const total = doMath(12, 5);
console.log(total)

document.getElementById('my-btn').addEventListener(event => {

})