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
// for (let i = 1; i <= 100; i++){
//     if (i % 2 === 0){
//         console.log(`${i} "<-- is an even number"`)
//     }
// }

// C. Give Me Five
// 1 - 2
// for (let i = 1; i <= 100; i++){
//     if (i % 5 === 0){
//         console.log(`I found a ${i}. High Five!`)
//     }
//     if (i % 3 === 0){
//         console.log(`I found a ${i}. Three is a crowd.`)
//     }
// }


// D. Savings Account
// 1.
// let bank_account = 0;
// for (let i = 1; i <= 10; i++){
//     bank_account += (i)
// }
// 2.
// for (let j = 1; j <= 100; j++){
//     bank_account += (j * 2)
// }

// console.log(bank_account)

// E. Multiples of 3 & 5
// let threeAndFive = 0;
// for (let i = 1; i <= 1000; i++){
//     if (i % 3 === 0 || i % 5 === 0){
//         threeAndFive += (i);
//     }
// }
// console.log(threeAndFive);


// ARRAYS AND CONTROL FLOW

// A. Talk About It
// 1. The things in an array are called 'elements'
// 2. Arrays will stay in order unless told to do otherwise
// 3. You could use an array to model items on a shopping list, students in a class, scores from a video game, etc.

// B. Easy does it
// const quotes = ["I play to win the game", "If ya ain't first, your last", "Do or do not, there is no try"]
// console.log(quotes);

// C. Accessing Elements
// const randomThings = [1, 10, "Hello", true]
// 1. Access the first element in the array by using
// randomThings[0];
// 2. 
// randomThings[2] = "World";
// 3. 
// console.log(randomThings);

// D. Changing Values
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// 1. 
// console.log(ourClass[0]);
// 2.
// ourClass.pop();
// ourClass.push("Ocotocat");
// console.log(ourClass);
// 3.
// ourClass.push("Cloud City");
// console.log(ourClass);

// E. Mix It Up
// const myArray = [5, 10, 500, 20]
// 1.
// myArray.push("Egon", "Bob Moses");
// console.log(myArray);
// 2.
// myArray.shift();
// console.log(myArray);
// 3.
// myArray.unshift("Bob Marley");
// console.log(myArray);
// 4.
// myArray.pop();
// console.log(myArray);
// 5.
// myArray.reverse()
// console.log(myArray);
// Yes, this method mutates the array, which means changing the source element (array). 
// It returns the array with elements in reverse order

// F. Biggie Smalls
// const myNumber = 7;
// 1 - 2
// if (myNumber < 100) {
//     console.log("little number")
// } else {
//     console.log("big number")
// }

// G. Monkey in the Middle
// 1 - 3
// if (myNumber < 5) {
//     console.log("little number");
// } else if (myNumber > 10) {
//     console.log("big number");
// } else {
//     console.log("monkey");
// }

// H. What's in your closet?
// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

// 1. 
// console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")
// 2.
// kristynsCloset.splice(6, 0, "raybans");
// console.log(kristynsCloset);
// 3.
// kristynsCloset[5] = "stained knit hat";
// console.log(kristynsCloset);
// 4 - 5  - 6
// console.log(thomsCloset[0][0]);
// console.log(thomsCloset[1][1]);
// console.log(thomsCloset[2][1]);
// 7.
// console.log("Thom is looking fierce in a " + (thomsCloset[0][0]) + ", " + (thomsCloset[1][1]) 
// + " and a " + (thomsCloset[2][1]) + "!")
// 8.
// thomsCloset[1][2] = "Footie Pajamas";
// console.log(thomsCloset[1][2]);


// FUNCTIONS

// A. Print Greeting
// I read all the instructions

