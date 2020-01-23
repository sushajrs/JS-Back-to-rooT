

////////////////////////////////
// Lecture: let and const
/////////////////////////////////

// ES5
var name5 = 'Sushaj';
var age5 = 23;
name5 = 'Ravindran';
console.log(name5);

//ES6 
const name6 = 'Sushaj Ravi';
let age6 = 23;
//name6 = 'Nishaj Ravi'; // TypeError: invalid assignment to const
console.log(name6);

//ES5
function driversLicense5(passedTest) {
    if (passedTest) {
        console.log(firstName);
        var firstName = 'Sushaj';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ', born in' + yearOfBirth + ', is now officialy allowed to drive a car');
}
driversLicence5(true);

//ES6
function driversLicence6(passedTest) {
    
    //console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;
    
    if (passedTest) {
        firstName = 'John';
    }
    
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicence6(true);


var i = 23;
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);


