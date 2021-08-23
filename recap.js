// template string

const wife = 'shapla';

function getName(first, last = 'Hai') {
    return first + ' ' + last;
}
const myPeople = `My lovely person is ${wife} and her fullName is ${getName('Shapla')}. My name is ${getName('Abdul')}.`
console.log(myPeople);