// regular javascript function
function printMyName(name) {
    console.log(name);
}
printMyName('Max');

console.log('--------------------');

// arrow function syntax
const printMyName2 = (name) => {
    console.log(name);
}
printMyName2('Max');

console.log('--------------------');

const multiply = (number) => {
    return number * 2;
}
console.log(multiply(2));