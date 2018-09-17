console.log("and so it begins");

// I. VARIABLES AND DATA TYPES

// A. Q & A
// 1. We use the '=' sign to assign a value to a variable
// 2. To change the value of a variable, simply re-state the variable and assign it the new value
// 3. To assign an existing variable to a new variable, assign the new variable's value to be the existing variable
// 4. Declaring a variable brings it into existence; assigning a value means using the equals sign to give the variable a value;
// definitions of a variable can change, i.e. a variable can be re-defined by assigning it a new value
// 5. Pseudocoding is just writing out the steps of the process you are trying to code in plain english. This helps
// organize your thoughts before trying to translate them into code.
// 6. 75-95% planning, 10-25% coding

// B. Strings
// 1.
// let firstVariable = "Hello World";
// firstVariable = 1000;
// let secondVariable = 1000;
// secondVariable = "Gotta get down on Friday";
// console.log(firstVariable);

// 2.
// let yourName = "Philip";
// printName = (str) => {
// return("Hello my name is " + str);
// }

// console.log(printName(yourName));

// C. Booleans
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' == 'Name');
// console.log(true != false);
// console.log(false == false == false == false == false == false == true);
// console.log(false == false)
// console.log(e == 'Kevin');
// console.log(a < b < c);
// console.log(a == a != d);
// console.log(48 == '48');

// D. The Farm
// let animal = "cow" || "pig";

// let animalNoise = (animal) =>{
// if (animal == "cow"){
//     console.log("moooooooo");
// } else {
//     console.log("Hey! you're not a cow");
// }
// }

// console.log(animalNoise("cow"));
// console.log(animalNoise("pig"));

// E. Driver's Ed
// let personsAge = 15; 
// if (personsAge >= 16) {
//         console.log("Here are the keys");
//     } else {
//         console.log("You're too young to drive");
//     }


// LOOPS

// A. The Basics
// 1. 
// for (let i = 1; i <=10; i++){
//     console.log(i)
// }
// 2.
// for (let i = 10; i <=400; i++){
//     console.log(i)
// }
// 3.
// for (let i = 12; i <= 4000; i++){
//     if (i % 3 === 0){
//     console.log(i)
// }
// }

// B. Get Even
// 1 - 2
for (let i = 1; i <= 100; i++){
    if (i % 2 === 0){
        console.log(`${i} "<-- is an even number"`)
    }
}
