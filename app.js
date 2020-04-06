//1. REMOVE DUPLICATES FROM ARRAY//////////////

const users = [
    "sushaj",
    "Puru",
    "Mirsha",
    "Vinu",
    "Puru"
];

const unique = Array.from(new Set(users));
//console.log(unique);


//REMOVE DUPLICATE EXAMPLE

let a = [1, 2, 5, 2, 1, 8];
obj = {};
 for (let i of a) {
     obj[i] = true;
 }
 let b = Object.keys(obj);

console.log(b);

console.log([... new Set(a)]);


//2. DYNAMIC VALUES TO OBJECTS

const dynamic = "Hobbies";
const user = {
    name: "Sushaj",
    email: "sushajxui@gmail.com",
    [dynamic]: "Sleeping"

}
//console.log(user);


//3. SLICING ARRAY//////////////////

//const users = [1, 2, 3, 4, 5, 6];
//users.length = 3;

//console.log(users);

/* Slice array from end */

//console.log(users.slice(-1)); prints [6]



//4. ARRAYS TO OBJECTS/////////////////

const usersObject = {...users};
//console.log(usersObject);



//5. OBJECTS TO ARRAY

const usersNew = {
    name: "Sushaj",
    occupation: "Front End Developer",
    hobbies: "Youtube phsycho"
};

const userArray = Object.values(usersNew);

//console.log(userArray);



//6. CHECKING CODE RUN PERFORMANCE /////////////////////////////
/*
let startAt = Performance.now();

//CODE HERE FOR EXECUTE

for (let i = 0; i < 20000; i++){
    console.log(i);
}

let endAt = Performance.now();

console.log(`${endAt - startAt} took millisec to execute`);

*/


//7. REVERSE A STRING ////////////////////////////////////////

//(1) :

const str = 'the quick brown fox';
/* 
const newStr = str.split('').reverse('').join('');
console.log(newStr); */

// (2) : other method 

let newStr = '';
for (let i = str.length-1; i >= 0; i--) {
  newStr += str[i];
}
console.log(newStr);


//8. PALINDROME WORD CHECK ////////////////////////////////////

 const strNew = 'I did, did I';
 const isPalindrome = (inStr) => {
     inStr = inStr.replace(/\W/g, '');
     inStr = inStr.toLowerCase();
     return inStr === inStr.split('').reverse('').join('');
 }
 console.log(isPalindrome(strNew));
 

//9.FIND THE LARGEST NUMBER IN A 
     // IN NESTED ARRAYS

const numbers = [ 1, 2, 3, [ 4, 5, 6,[7, 8, 9] ], 4, 5, 6 ];

    //Simple way to do
    //console.log(Math.max(...numbers));

    //with Algorithm

    const flatten = (values) => values.reduce(
        (acc, item, index, array) => acc.concat(
            Array.isArray(item) ? flatten(item): item
        ), []
    )


    const largestNumber = (values) => {
        let highest = 0;
        for(let i = 0; i < values.length; i+=1) {
            if (values[i] > highest) {
                highest = values[i];
            }
        }
        return highest; 
    }
    console.log(largestNumber(flatten(numbers)));


