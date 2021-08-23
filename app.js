const array = [84, 48, 92, 74, 09, 27, 13, 12];
array.push(23);
// কাজ করে দিতে পারলেই সেটা ফাংশন
array.pop();
array.shift();
array[0] = 84;
array[array.length - 1] = 23;
if (array.indexOf(27) != -1) {
    console.log('27 exists')
}
if (array.includes(28)) {
    console.log('included');
}
else {
    console.log('Not there')
}

const numberCount = array.length;
console.log(array, numberCount, array.indexOf(27));
