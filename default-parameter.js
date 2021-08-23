
function add(num1, num2 = 0) {
    console.log(num1, num2);
    // optional-
    // num2 = num2 || 0;
    /*  conditional 
     if (num2 == undefined) {
         num2 = 0;
     }*/

    const total = num1 + num2;
    return total;
}
console.log(add(15, 10));