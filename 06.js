let foo = "foo";
console.log(foo);

function getFullName(firstName,lastName){
    console.log(arguments);
    let myVar = "Var inside func";
    console.log(myVar);
    const fullName=firstName+" "+lastName;
    return fullName;
}

const personName = getFullName("Dinesh","Yagnik");
console.log(personName);