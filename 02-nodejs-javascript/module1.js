

function myFunction() {
    console.log('Function was called'); // sends message to the console when called
}

var myString = 'String!'; //basic var string

module.exports.myFunction = myFunction; //allows for the functions to be called in other files
module.exports.myString = myString;//allows for the var to be called in other files