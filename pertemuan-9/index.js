//Rest Parameter & Spread Operator

//Rest parameter
// const foo = (param1, param2, ...params) => {
//   console.log(params);
// };

// foo("A", "B", "C", "D", "E"); // Output: ["A", "B", "C"]

//Spread Operator
// const numbers = [1, 2, 3, 4, 5];

// console.log(`Numbers dengan spread: ${[...numbers]}`);
// console.log(numbers);
// console.log(...numbers);
// //1. duplikasi array
// const numbers2 = [...numbers];
// console.log(numbers2);
// //2. menggabungkan array
// let array1 = ["foo", "bar"];
// let array2 = ["fizz", "buzz"];

// let combinedArray5 = array1.concat(array2); //ES5
// let combinedArray6 = [...array1, ...array2]; //ES6

//Pada object
// let john = {
//   name: "Jhon",
//   age: 30,
// };

// john.job = "Teacher";
// john = { ...john, address: "Minut" };

// console.log(john);

//Desctruturing Array & Object
let numbers = [1, 2, 3, 4, 5];
//Destrucutring array
let [, , , d, e] = numbers;
console.log(d);

//Destructuring object
const john = {
  name: "John",
  age: 30,
  isMarried: true,
};

const { name, age } = john;
console.log(age);
