"strict mode";
{
    console.log("Hello World! Module 3 Guide 7");
    // Array called names with 3 items in it 
    var names = ["Mario", "Luigi", "Yoshi"];
    //Adding one more name to my array 
    names.push("Adding one extra item to my array", "Princess");
    console.log(names);
    //Printing last item in my array
    console.log(names[names.length - 1]);
    //Printing, the amount of items in my array
    console.log("This is length of names", names.length);
    //Printing the amount of letters in first item in my array
    console.log("The amount of letters in name Mario is", names[0].length);
    //Printing 3rd item in my array
    console.log("Third item in my array is", names[2]);
    // Creating an object
    var person = {
        name: 'Luigi',
        age: 45
    };
    //Adding color of hair property to my object
    person.colorOfhair = 'black';
    console.log("This is an object with an extra property", person);
    //Adding data to my object
    //Changing name from Luigi to Lugig from Mario Game
    person.name = 'Luigi from Mario Game';
    console.log(person.name);
    //Deleting one of the properties
    delete person.age;
    console.log(person);
    //Function, that performs a task
    var user_1 = 'voodoomamaJooJooo';
    var user1_1 = "poopyDudu";
    //$ acts likea binder, it binder Hello and variable user
    function greet() {
        console.log("Calling user name:", "Hello, ".concat(user_1));
        console.log("Calling user2 name:", "Hello ".concat(user1_1));
    }
    //If function
    var apples = true;
    var oranges = false;
    if (apples === true) {
        console.log("If statement...", "Apples are not oranges!");
    }
    if (oranges === false) {
        console.log("If statement", "Oranges are not apples!");
    }
    ;
    //we call a function greet
    greet();
    //Second function that calculates the value
    var a_1 = 23;
    var b_1 = 20;
    function simpleMathfunction() {
        return a_1 + b_1;
    }
    console.log("23+20 gives", simpleMathfunction());
    //Second math function 
    var number_1 = 2;
    function square2() {
        return number_1 * number_1;
    }
    console.log("Square of 2 gives us", square2());
    // Date, hour of creating this document
    var date = new Date();
    console.log("Current date is", date);
    //Only current year
    var year = date.getFullYear();
    console.log("Current year:", year);
    //How to create new date
    //had to switch const name as it was already in usage
    var dateCreated = new Date("2024, 21:57");
    console.log("When i was creating this file it was:", dateCreated);
    //Output with DOM
    document.body.innerHTML += "<p>File opened at: ".concat(date, "</p>");
}
