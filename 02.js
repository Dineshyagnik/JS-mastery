console.log(this);
console.log(window);
console.log(myFunction);
console.log(fullName);

function myFunction(){
    console.log('this is my function');
}

var firstName='Dinesh';
var lastName='Yagnik';
var fullName=firstName+""+lastName;
console.log(fullName);