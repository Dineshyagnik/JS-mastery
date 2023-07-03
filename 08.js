// const age=[22,12,15,17,19,32,25,26,29];
// let votable=age.filter((age)=>{
//     return age>18
// });
// console.log(votable);

// let arr=[22,12,23,11,22,32];
// let arr2=arr.map((item)=>{
//     return item*2;
// });
// console.log(arr2);

// const number = prompt('Enter Number');

// if(number>0){
//     console.log('The number is positive.');
// }
// else{
//     console.log('The number is negative.');
// }

// program to display numbers from 1 to 5
// const n = prompt('enter number')

// // looping from i = 1 to 5
// // in each iteration, i is increased by 1
// for (let i = 1; i <= n; i++) {
//     console.log(i);     // printing the value of i
// }

// let sum=0;
// const n=100;
// let i=1;
// for(;i<=n;i++){
//     sum+=i;
// }
// console.log(sum);

// let i=1;
// let n=5;

// while(i<=n){
//     console.log(i);
//     i+=1
// }

// for(let i=0;i<=10;i++){
//     if(i==5)
//     break
//     console.log(i);
// }

// let i=1;
// for(;i<=20;i++){
//     if(i==8)
//     continue
//     console.log(i);
// }


// nested for loops

// first loop
// for (let i = 1; i <= 3; i++) {

//     // second loop
//     for (let j = 1; j <= 3; j++) {
//         if (i == 2) {
//           break;
//         }
//         console.log(`i = ${i}, j = ${j}`);
//     }
// }


// switch(new Date().getDay()){
//     case 0:
//         day='Sunday';
//         break;
//     case 1:
//         day='Monday';
//         break;    
//     case 2:
//         day='Tuesday';
//         break;
//     case 3:
//         day='Wednesday';
//         break;
//     case 4:
//         day='Thursday';
//         break;
//     case 5:
//         day='Friday';
//         break;
//     case 6:
//         day='Saturday';
//         break  
// }
// console.log(day);

// program using switch statement
// let a = 2;

// switch (a) {

//     case 1:
//         a = 'one';
//         break;
//     case 2:
//         a = 'two';
//         break;
//     default:
//         a = 'not found';
//         break;
// }
// console.log(`The value is ${a}`);

// program using switch statement
// let a = 1;

// switch (a) {
//     case "1":
//         a = 1;
//         break;
//     case 1:
//         a = 'one';
//         break;
//     case 2:
//         a = 'two';
//         break;

//     default:
//         a = 'not found';
//         break;
// }
// console.log(`The value is ${a}`);

// program for a simple calculator
// let result;

// // take the operator input
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// // take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// switch(operator) {
//     case '+':
//         result = number1 + number2;
//         console.log(`${number1} + ${number2} = ${result}`);
//         break;
//     case '-':
//         result = number1 - number2;
//         console.log(`${number1} - ${number2} = ${result}`);
//         break;
//     case '*':
//         result = number1 * number2;
//         console.log(`${number1} * ${number2} = ${result}`);
//         break;
//     case '/':
//         result = number1 / number2;
//         console.log(`${number1} / ${number2} = ${result}`);
//         break;

//     default:
//         console.log('Invalid operator');
//         break;
// }

// multiple case switch program
// let fruit = 'apple';
// switch(fruit) {
//     case 'apple':
//     case 'mango':
//     case 'pineapple':
//         console.log(`${fruit} is a fruit.`);
//         break;
//     default:
//         console.log(`${fruit} is not a fruit.`);
//         break;
// }


// function greet(name) {
//     console.log("Hello " + name + ":)");
// }

// let name = prompt("Enter a name: ");

// greet(name);

// function add(a,b){
//     return a+b;
// }
// let res1=add(2,3);
// let res2=add(4,7);
// console.log(res1);
// console.log(res2);

// program to add two numbers
// declaring a function
// function add(a, b) {
//     return a + b;
// }

// // take input from the user
// let number1 = parseFloat(prompt("Enter first number: "));
// let number2 = parseFloat(prompt("Enter second number: "));

// // calling function
// let result = add(number1,number2);

// // display the result
// console.log("The sum is " + result);

// program to find the square of a number
// function is declared inside the variable
// let x = function (num) { return num * num };
// console.log(x(4));

// // can be used as variable value for other variables
// let y = x(3);
// console.log(y);


// let a ='Hello';

// function greet(){
//     console.log(a);
// }
// greet();

// let a="hello";

// function greet(){
//     a=3;
// }
// console.log(a);

// greet();

// console.log(a);

// function greet(){
//     a='hello';
// }
// greet()

// console.log(a);

// let a='hello';

// function greet(){
//     let b='world';
//     console.log(a+b);
// }
// greet();

// console.log(a+b); //error

let a= 'Hello';

function greet(){
    let b='world';
    console.log(a+' '+b);

    if(b=='world'){
        let c='hello';
        console.log(a+' '+b+' '+c);
    }
    console.log(a+' '+b+' '+c); //error
}
greet();
