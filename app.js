console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1

// YOUR CODE HERE
console.log("EXERCISE 1:\n==========\n");
let a = 20;
let b = 4;
let add = a + b;
let minus = a - b;
let multiply = a * b;
let dividing = a / b;

console.log(add);
console.log(minus);
console.log(multiply);
console.log(dividing);

// Exercise 2
console.log("EXERCISE 2:\n==========\n");

// YOUR CODE HERE
let ex2 = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Jackie";
let lastName = "Chan";

let strandA = ex2 + str;
let strandB = ex2 + str2;
let present = ex2 + isPresent;
let firstNameStrand = ex2 + firstName;
let lastNameStrand = ex2 + lastName;

console.log(strandA);
console.log(strandB);
console.log(present);
console.log(firstNameStrand);
console.log(lastNameStrand);


// Exercise 3
console.log("EXERCISE 3:\n==========\n");

// YOUR CODE HERE
let ex3 = 5;
let ex3str = "5";
let ex3str2 = "five";
let ex3isPresent = false;
let ex3firstName = "Robin";
let ex3lastName = "Williams";

let ex3strandA = ex3 == ex3str;
let ex3strandB = ex3 === ex3str;
let valPresent = !ex3isPresent;
let valCompare = ("eleven" == ex3str2 && ex3 >= ex3str);
let valPresent2 = (!ex3isPresent || ex3isPresent);
let valA = 0 == false;
let valB = 0 === false;
let valC = 0 != false;
let valD = 0 !== false;

console.log(ex3strandA);
console.log(ex3strandB);
console.log(valPresent);
console.log(valCompare);
console.log(valPresent2);
console.log(valA);
console.log(valB);
console.log(valC);
console.log(valD);