console.log("Goodbye, World!");

// how to create variables: no different declaration for integer & floating; arrays [] and list {} are defined different from Python; Boolean are not-capitalized 'true' and 'false' again different from Python; declaring a variable without assignment keeps it 'undefined' can't be printed; declaring any variable as 'null' makes it a null variable. 

var myNumber = 4;
var myString = "variables are great";
var myBoolean = false; 

console.log("myNumber is equal to " + myNumber);
console.log("myString is equal to " + myString);
console.log("myBoolean is equal to " + myBoolean);

// Like Python has two ways for defining lists and dictionaries, JS also has two ways of defining lists and arrays; Arrays are sparse i.e. any index can be specified and the previous ones will automatically assume 'undefined'; Indexing is zero-based like Python; Arrays, like python can store objects of different types. 

var myArray = [1, 2, 3];
var theSameArray = new Array(1, 2, 3);

