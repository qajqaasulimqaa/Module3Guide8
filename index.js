"strict mode";
{
    console.log("Hello World! Module 3 Guide 7");
    // Array called names with 3 items in it 
    var names = ["Mario", "Luigi", "Yoshi"];
    //Adding one more name to my array 
    names.push("Princess");
    console.log(names);
    //Printing last item in my array
    console.log(names[names.length - 1]);
    //Printing, the amount of items in my array
    console.log("This is length of names", names.length);
    //Printing the amount of letters in first item in my array
    console.log(names[0].length);
    //Printing 2nd item in my array
    console.log(names[2]);
    // Creating an object
    var person = {
        name: 'Luigi',
        age: 45
    };
    //Adding color of hair property to my object
    person.colorOfhair = 'black';
    console.log(person);
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
        console.log("Hello, ".concat(user_1));
        console.log("Hello ".concat(user1_1));
    }
    //we call a function greet
    greet();
    //Second function that calculates the value
    var a_1 = 23;
    var b_1 = 20;
    function simpleMathfunction() {
        return a_1 + b_1;
    }
    console.log(simpleMathfunction());
    //Second math function 
    var number_1 = 2;
    function square2() {
        return number_1 * number_1;
    }
    console.log(square2());
    // Date, hour of creating this document
    var date = new Date();
    console.log(date);
    //Only current year
    var year = date.getFullYear();
    console.log(year);
    //How to create new date
    //had to switch const name as it was already in usage
    var dateCreated = new Date("2024, 21:57");
    console.log(dateCreated);
    //Output with DOM
    document.body.innerHTML += "<p>File opened at: ".concat(date, "</p>");
}
