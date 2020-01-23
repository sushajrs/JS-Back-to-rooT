/*****************************
* Variables and data types
*/
var firstName = 'John';
console.log(firstName);

var job; //undefined
console.log(job);

job = 'Teacher';
console.log(job);

/*****************************
* Variable mutation and type coercion
*/
var firstName = 'John';
var age = 28;
// Type coercion
console.log(firstName + ' ' + age);


/**Get input value on var */
function othername() {
    var age = 23;
    var input = document.getElementById("userInput").value;
    document.getElementById("demo").innerHTML = input + ' ' + age;
    //console.log(input);
}