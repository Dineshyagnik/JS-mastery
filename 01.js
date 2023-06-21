// global execution
// local execution
// closures 
// console.log(this);
// console.log(window);
// console.log(firstName);
// var firstName = "Dinesh";


let age=[12,33,24,19,28,25,55];

// let votable=age.filter(myFunc);

// function myFunc(age){
//     return age>18
// }

// console.log(votable);


let votable=age.filter((age)=>{
    return age>18
});

console.log(votable);

