// lexical environment , scope chain 

const lastName = 'Yagnik';

const printName = function () {
    const firstName = 'Dinesh';
    function myfunction() {
        console.log(firstName);
        console.log(lastName);
    }
    myfunction();
}
printName();