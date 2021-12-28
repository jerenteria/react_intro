// spread operator
const numbers = [1, 2, 3];
// ... removes old numbers from first array and adds them into the new array
const newNumbers = [...numbers, 4];

console.log(newNumbers);

const person = {
    name: 'Max'
};

const newPerson = {
    // ... copies all old properties and creates new person with age attribute
    ...person,
    age: 28
}

console.log(newPerson);


// Rest operator only uses arrow functions
const filter = (...args) => {
    // filters out array to only return 1
    return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3));