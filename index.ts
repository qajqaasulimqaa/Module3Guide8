"strict mode"
{

console.log("Hello World! Module 3 Guide 7")

// Array called names with 3 items in it 
const names = ["Mario", "Luigi", "Yoshi"]; 

//Adding one more name to my array 
names.push("Adding one extra item to my array","Princess"); 
console.log(names); 
//Printing last item in my array
console.log(names[names.length-1]); 

//Printing, the amount of items in my array
console.log("This is length of names",names.length)

//Printing the amount of letters in first item in my array
console.log("The amount of letters in name Mario is",names[0]!.length);

//Printing 3rd item in my array
console.log("Third item in my array is", names[2]); 

// Creating an object

let person : {[key : string]: any }= {
name:  'Luigi', 
age: 45
}; 
//Adding color of hair property to my object
person.colorOfhair = 'black';
console.log("This is an object with an extra property",person); 

//Adding data to my object
//Changing name from Luigi to Lugig from Mario Game
person.name = 'Luigi from Mario Game'
 console.log(person.name); 
 //Deleting one of the properties
delete person.age; 
 console.log(person)


 //Function, that performs a task

 let user = 'voodoomamaJooJooo';
 let user1="poopyDudu"
//$ acts likea binder, it binder Hello and variable user
 function greet(){
    console.log("Calling user name:", `Hello, ${user}`)
    console.log("Calling user2 name:",`Hello ${user1}`)

 }

 //If function

 const apples = true; 
 const oranges = false; 
if (apples === true){
   console.log("If statement...","Apples are not oranges!"); 
}

if (oranges ===false){
   console.log("If statement", "Oranges are not apples!"); 
}; 
 //we call a function greet
 greet()

 //Second function that calculates the value
 let a = 23; 
 let b = 20; 

 function simpleMathfunction(){
    return a + b; 
 }
 console.log("23+20 gives",simpleMathfunction())

 //Second math function 
let number = 2; 

 function square2(){
    return number * number
 }
 console.log("Square of 2 gives us", square2())

// Date, hour of creating this document
 const date = new Date();
  console.log("Current date is",date); 
 //Only current year
 const year = date.getFullYear();
 console.log("Current year:", year)
 


 //How to create new date
 //had to switch const name as it was already in usage

 const dateCreated = new Date("2024, 21:57"); 
 console.log("When i was creating this file it was:", dateCreated);


 //Output with DOM
document.body.innerHTML += `<p>File opened at: ${date}</p>`;
}