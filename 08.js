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

// let a= 'Hello';

// function greet(){
//     let b='world';
//     console.log(a+' '+b);

//     if(b=='world'){
//         let c='hello';
//         console.log(a+' '+b+' '+c);
//     }
//     console.log(a+' '+b+' '+c); //error
// }
// greet();

// using test before declaring
// var test;
// console.log(test); // undefined

// program to display value
// a = 5;
// console.log(a);
// var a; // 5


// program to display value
// var a;
// a = 5;
// console.log(a); // 5

// program to display value
// console.log(a);
// var a = 5; //undefined

// program to display value
// var a = 4;

// function greet() {
//     b = 'hello';
//     console.log(b); // hello
//     var b;
// }

// greet(); // hello
// console.log(b); // error

// program to display value
// a = 5;
// console.log(a);
// let a; // error

// program to print the text
// greet();// Hi, there.

// function greet() {
//     console.log('Hi, there.');
// }

// program to print the text
// greet(); // error

// let greet = function() {
//     console.log('Hi, there.');
// }


// program to count down numbers to 1
// function countDown(number) {

//     // display the number
//     console.log(number);

//     // decrease the number value
//     const newNumber = number - 1;

//     // base case
//     if (newNumber > 0) {
//         countDown(newNumber);
//     }
// }

// countDown(4); //4321

// program to find the factorial of a number
// function factorial(x) {

//     // if number is 0
//     if (x === 0) {
//         return 1;
//     }

//     // if number is positive
//     else {
//         return x * factorial(x - 1);
//     }
// }

// const num = 3;

// // calling factorial() if num is non-negative
// if (num > 0) {
//     let result = factorial(num);
//     console.log(`The factorial of ${num} is ${result}`);
// }


// object creation
// const person = { 
//     name: 'John',
//     age: 20
// };
// console.log(typeof person); // object

// const person = { 
//     name: 'John', 
//     age: 20, 
// };

// // accessing property
// console.log(person.name); // John

// const person = { 
//     name: 'John', 
//     age: 20, 
// };

// // accessing property
// console.log(person["name"]); // John


// nested object
// const student = { 
//     name: 'John', 
//     age: 20,
//     marks: {
//         science: 70,
//         math: 75
//     }
// }

// // accessing property of student object
// console.log(student.marks); // {science: 70, math: 75}

// // accessing property of marks object
// console.log(student.marks.science); // 70

// const person = {
//     name: 'Sam',
//     age: 30,
//     // using function as a value
//     greet: function() { console.log('hello') }
// }

// person.greet(); // hello


// accessing method and property
// const person = {
//     name: 'John',
//     greet: function() { console.log('hello'); }
// };

// // accessing property
// person.name; // John

// // accessing method
// person.greet(); // hello

// const person = {
//     name: 'John',
//     age: 30,

//     // accessing name property by using this.name
//     greet: function() { console.log('The name is' + ' ' + this.name); }
// };

// person.greet();

// const person = {
//     name: 'John',
//     age: 30,
//     greet: function() {
//         let surname = 'Doe';
//         console.log('The name is' + ' ' + this.name + ' ' + surname); }
// };

// person.greet();


// constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23,

//      this.greet = function () {
//         console.log('hello');
//     }
// }

// // create objects
// const person1 = new Person();
// const person2 = new Person();

// // access properties
// console.log(person1.name);  // John
// console.log(person2.name);  // John

// function Person(person_name,person_age,person_gender){
//     this.name=person_name;
//     this.age=person_age;
//     this.gender=person_gender;
//     this.greet=function(){
//         return ('Hi'+''+this.name);
//     }
// }

// const person1=new Person('John',23,'Male');
// const person2=new Person('Sami',12,'Female');

// console.log(person1.age);
// console.log(person2);

// let person={
//     name:'john'
// }

// console.log(person.name);

// let student=person;

// student.name='Sam';
// console.log(person.name);

// function Person(){
//     this.name='John',
//     this.age=23
// }

// const person1=new Person();
// const person2=new Person();

// person1.gender='male';

// person1.greet=function(){
//     console.log('Hello');
// }

// person1.greet();
// // person2.greet(); // error doesn't have greet method


// function Person(){
//     this.name="John",
//     this.age=23
// }

// let person1=new Person();
// let person2=new Person();

// Person.prototype.gender='male';

// console.log(person1.gender);
// console.log(person2.gender);

// const student = {

//     // data property
//     firstName: 'Monica',

//     // accessor property(getter)
//     get getName() {
//         return this.firstName;
//     }
// };

// // accessing data property
// console.log(student.firstName); // Monica

// // accessing getter methods
// console.log(student.getName); // Monica

// // trying to access as a method
// console.log(student.getName()); // error

// const student = {
//     firstName: 'Monica',

//     //accessor property(setter)
//     set changeName(newName) {
//         this.firstName = newName;
//     }
// };

// console.log(student.firstName); // Monica

// // change(set) object property using a setter
// student.changeName = 'Sarah';

// console.log(student.firstName); // Sarah

// const student = {
//     firstName: 'Monica'
// }

// // getting property
// Object.defineProperty(student, "getName", {
//     get : function () {
//         return this.firstName;
//     }
// });

// // setting property
// Object.defineProperty(student, "changeName", {
//     set : function (value) {
//         this.firstName = value;
//     }
// });

// console.log(student.firstName); // Monica

// // changing the property value
// student.changeName = 'Sarah';

// console.log(student.firstName); // Sarah


// const student ={
//     firstName:'monica',

//     get getName(){
//         return this.firstName;
//     }
// };

// console.log(student.firstName);
// console.log(student.getName);

// const student={
//     firstName:'Monica',

//     set changeName(newName){
//         this.firstName=newName;
//     }
// }
// console.log(student.firstName);

// student.changeName='sarah';

// console.log(student.firstName);

// const student = {
//     firstName: 'Monica'
// }

// // getting property
// Object.defineProperty(student, "getName", {
//     get : function () {
//         return this.firstName;
//     }
// });

// // setting property
// Object.defineProperty(student, "changeName", {
//     set : function (value) {
//         this.firstName = value;
//     }
// });

// console.log(student.firstName); // Monica

// // changing the property value
// student.changeName = 'Sarah';

// console.log(student.firstName); // Sarah

// function Person(){
//     this.name='john',
//     this.age=22
// }

// const person1=new Person();
// const person2=new Person();


// function Person(){
//     this.name='John',
//     this.age=23
// }

// const person=new Person();

// console.log(Person.prototype);

// constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23
// }

// // creating objects
// const person1 = new Person();
// const person2 = new Person();

// // adding property to constructor function
// Person.prototype.gender = 'male';

// // prototype value of Person
// console.log(Person.prototype);

// // inheriting the property from prototype
// console.log(person1.gender);
// console.log(person2.gender);

// // constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23
// }

// // creating objects
// const person1 = new Person();
// const person2 = new Person();

// // adding a method to the constructor function
// Person.prototype.greet = function() {
//     console.log('hello' + ' ' +  this.name);
// }

// person1.greet(); // hello John
// person2.greet(); // hello John

// constructor function
// function Person() {
//     this.name = 'John'
// }

// // add a property
// Person.prototype.age = 20;

// // creating an object
// const person1 = new Person();

// console.log(person1.age); // 20

// // changing the property value of prototype
// Person.prototype = { age: 50 }

// // creating new object
// const person3 = new Person();

// console.log(person3.age); // 50
// console.log(person1.age); // 20

// function Person() {
//     this.name = 'John'
// }

// // adding property 
// Person.prototype.name = 'Peter';
// Person.prototype.age = 23

// const person1 = new Person();

// console.log(person1.name); // John
// console.log(person1.age); // 23

// function Person () {
//     this.name = 'John'
// }

// // adding a prototype
// Person.prototype.age = 24;

// // creating object
// const person = new Person();

// // accessing prototype property
// console.log(person.__proto__);   // { age: 24 }

// const num=[1,2,4,24,5,44,54,33];
// const str=['Hello','world','welcome'];
// const mix=[22,'hello',43,12,'world'];

// console.log(num);
// console.log(str);
// console.log(mix);

// const arry1=[22,23];
// const arry2=new Array(24,25);
// console.log(arry1);
// console.log(arry2);

// // empty array
// const myList = [ ];

// // array of numbers
// const numberArray = [ 2, 4, 6, 8];

// // array of strings
// const stringArray = [ 'eat', 'work', 'sleep'];

// // array with mixed data types
// const newData = ['work', 'exercise', 1, true];

// const newData=[
//     {'task1':'exercise'},
//     [1,2,3],
//     function hello(){console.log('hello');}
// ]
// console.log(newData);

// const myArray = ['h', 'e', 'l', 'l', 'o'];

// console.log(myArray[0]);
// console.log(myArray[1]);

// let dailyActivities = ['eat', 'sleep'];
// dailyActivities.push('exercise');
// console.log(dailyActivities);

// let dailyActivities = ['eat', 'sleep'];
// dailyActivities.unshift('exercise');
// console.log(dailyActivities);

// let dailyActivities = ['eat', 'sleep'];
// let popedItem=dailyActivities.pop();
// console.log(dailyActivities);
// console.log(popedItem);

// let dailyActivities = ['eat', 'sleep'];
// let shiftedItem=dailyActivities.shift();
// console.log(dailyActivities);
// console.log(shiftedItem);

// let dailyActivities = [ 'eat', 'sleep'];

// // this will add the new element 'exercise' at the 2 index
// dailyActivities[2] = 'exercise';

// console.log(dailyActivities); // ['eat', 'sleep', 'exercise']

// let dailyActivities = [ 'eat', 'sleep'];

// // this will add the new element 'exercise' at the 3 index
// dailyActivities[3] = 'exercise';

// console.log(dailyActivities); // ["eat", "sleep", undefined, "exercise"]

// const dailyActivities = [ 'eat', 'sleep'];

// console.log(dailyActivities.length);

// let dailyActivities = ['sleep', 'work', 'exercise']
// let newRoutine = ['eat'];

// // sorting elements in the alphabetical order
// dailyActivities.sort();
// console.log(dailyActivities); // ['exercise', 'sleep', 'work']

// //finding the index position of string
// const position = dailyActivities.indexOf('work');
// console.log(position); // 2

// // slicing the array elements
// const newDailyActivities = dailyActivities.slice(1);
// console.log(newDailyActivities); // [ 'sleep', 'work']

// // concatenating two arrays
// const routine = dailyActivities.concat(newRoutine);
// console.log(routine); // ["exercise", "sleep", "work", "eat"]

// let arr1=[2,33,44];
// let arr2=arr1;

// // arr2.push('hello');
// arr1.push('hello')
// console.log(arr1);
// console.log(arr2);

// let arr = ['h', 'e'];
// arr.name = 'John';

// console.log(arr); // ["h", "e"]
// console.log(arr.name); // "John"
// console.log(arr['name']); // "John"

// let studentsData = [['Jack', 24], ['Sara', 23], ['Peter', 24]];
// console.log(studentsData);

// let student1 = ['Jack', 24];
// let student2 = ['Sara', 23];
// let student3 = ['Peter', 24];

// // multidimensional array
// let studentsData = [student1, student2, student3];
// console.log(studentsData);

// let x = [
//     ['Jack', 24],
//     ['Sara', 23], 
//     ['Peter', 24]
//     ];

//     // access the first item 
//     console.log(x[0]); // ["Jack", 24]

//     // access the first item of the first inner array
//     console.log(x[0][0]); // Jack

//     // access the second item of the third inner array
//     console.log(x[2][1]); // 24

// let studentsData = [['Jack', 24], ['Sara', 23],];
// studentsData.push(['Peter', 24]);

// console.log(studentsData); //[["Jack", 24], ["Sara", 23], ["Peter", 24]

// // using index notation
// let studentsData = [['Jack', 24], ['Sara', 23],];
// studentsData[1][2] = 'hello';

// console.log(studentsData); // [["Jack", 24], ["Sara", 23, "hello"]]

// // using push()
// let studentsData = [['Jack', 24], ['Sara', 23],];
// studentsData[1].push('hello');

// console.log(studentsData); // [["Jack", 24], ["Sara", 23, "hello"]]

// let studentsData = [['Jack', 24], ['Sara', 23],];

// // adding element at 1 index
// studentsData.splice(1, 0, ['Peter', 24]);

// console.log(studentsData); // [["Jack", 24], ["Peter", 24], ["Sara", 23]]


// // remove the array element from outer array
// let studentsData = [['Jack', 24], ['Sara', 23],];
// studentsData.pop();

// console.log(studentsData); // [["Jack", 24]]


// // remove the element from the inner array
// let studentsData = [['Jack', 24], ['Sara', 23]];
// studentsData[0].pop();

// console.log(studentsData); // [["Jack", 24], ["Sara"]]

// //strings example
// const name = 'Peter';
// const name1 = "Jack";
// const result = `The names are ${name} and ${name1}`;


// let a = 'hello';
// a[0] = 'H';
// console.log(a); // "hello"

// let a = 'hello';
// a = 'Hello';
// console.log(a); // "Hello"

// const a = 'a';
// const b = 'A'
// console.log(a === b); // false

// const a = 'hello';
// const b = new String('hello');

// console.log(a); // "hello"
// console.log(b); // "hello"

// console.log(typeof a); // "string"
// console.log(typeof b); // "object"

// const text1 = 'hello';
// const text2 = 'world';
// const text3 = '     JavaScript    ';

// // concatenating two strings
// const result1 = text1.concat(' ', text2);
// console.log(result1); // "hello world"

// // converting the text to uppercase
// const result2 = text1.toUpperCase();
// console.log(result2); // HELLO

// // removing whitespace from the string
// const result3 = text3.trim();
// console.log(result3); // JavaScript

// // converting the string to an array
// const result4 = text1.split();
// console.log(result4); // ["hello"]

// // slicing the string
// const result5= text1.slice(1, 3);
// console.log(result5); // "el"


// const a = 225; // number
// const b = true; // boolean

// //converting to string
// const result1 = String(a);
// const result2 = String(b);

// console.log(result1); // "225"
// console.log(result2); // "true"

// const student = {
//     name: 'Monica',
//     class: 7,
//     age: 12
// }

// // using for...in
// for ( let key in student ) {

//     // display the properties
//     console.log(`${key} => ${student[key]}`);
// }

// const salaries= {
//     Jack : 24000,
//     Paul : 34000,
//     Monica : 55000
// }

// // using for...in
// for ( let i in salaries) {

//     // add a currency symbol
//     let salary = "$" + salaries[i];

//     // display the values
//     console.log(`${i} : ${salary}`);
// }

// const string = 'code';

// // using for...in loop
// for (let i in string) {
//     console.log(string[i]);
// }

// define array
// const arr = [ 'hello', 1, 'JavaScript' ];

// // using for...in loop
// for (let x in arr) {
//     console.log(arr[x]);
// }

// const a = 3;
// const b = 3.13;


// const a = 0xff;
// console.log(a); // 255

// const b = 0x00 ;
// console.log(b); // 0


// const a = 4 + 9;
// console.log(a); // 13

// const a = '4' + 9;
// console.log(a); // 49


// const a = '4' - 2;
// console.log(a); // 2

// const a = '4' / 2;
// console.log(a); // 2

// const a = '4' * 2;
// console.log(a); // 8

// const a = 4 - 'hello';
// console.log(a); // NaN

// const a = isNaN(9);
// console.log(a); // false

// const a = isNaN(4 - 'hello');
// console.log(a); // true

// const a = 4 - 'hello';
// console.log(a); // NaN
// console.log(typeof a); // "number"

// const a = 2 / 0;
// console.log(a); // Infinity

// const a = -2 / 0;
// console.log(a); // -Infinity


// BigInt value
// const value = 900719925124740998n;

// // Adding two big integers
// const value1 = value + 1n;
// console.log(value1); // returns "900719925124740999n"

// const a = 45;

// // creating a number object
// const b = new Number(45);

// console.log(a); // 45
// console.log(b); // 45

// console.log(typeof a); // "number"
// console.log(typeof b); // "object"


// // check if a is integer
// const a = 12;
// console.log(Number.isInteger(a)); // true

// // check if b is NaN
// const b = NaN;
// console.log(Number.isNaN(b)); // true

// // display upto two decimal point
// const d = 5.1234;
// console.log(d.toFixed(2)); // 5.12


// // largest possible value
// const a = Number.MAX_VALUE;
// console.log(a); // 1.7976931348623157e+308

// // maximum safe integer
// const a = Number.MAX_SAFE_INTEGER;
// console.log(a); // 9007199254740991

// const a = '23'; // string
// const b = true; // boolean

// //converting to number
// const result1 = Number(a);
// const result2 = Number(b);

// console.log(result1); // 23
// console.log(result2); // 1

// two symbols with the same description

// const value1 = Symbol('hello');
// const value2 = Symbol('hello');

// console.log(value1 === value2); // false


// const x = Symbol('hey');
// console.log(x.description); // hey

// let id = Symbol("id");

// let person = {
//     name: "Jack",

//     // adding symbol as a key
//     [id]: 123 // not "id": 123
// };

// console.log(person); // {name: "Jack", Symbol(id): 123}

// let id = Symbol("id");

// let person = {
//     name: "Jack",
//     age: 25,
//     [id]: 12
// };

// // using for...in
// for (let key in person) {
//     console.log(key);
// }

// const x = Symbol('hey');

// // description property
// console.log(x.description); // hey

// const stringArray = ['a', 'b', 'c'];
// const numberArray = [1, 2, 3];

// // isConcatSpreadable property
// numberArray[Symbol.isConcatSpreadable] = false;

// let result = stringArray.concat(numberArray);
// console.log(result); // ["a", "b", "c", [1, 2, 3]]


// program to show try...catch in a program

// const numerator= 100, denominator = 'a';

// try {
//      console.log(numerator/denominator);

//     // forgot to define variable a      
//     console.log(a);
// }
// catch(error) {
//     console.log('An error caught'); 
//     console.log('Error message: ' + error);  
// }

// const numerator= 100, denominator = 'a';

// try {
//      console.log(numerator/denominator);
//      console.log(a);
// }
// catch(error) {
//     console.log('An error caught'); 
//     console.log('Error message: ' + error);  
// }
// finally {
//      console.log('Finally will execute every time');
// }

// const number = 40;
// try {
//     if(number > 50) {
//         console.log('Success');
//     }
//     else {

//         // user-defined throw statement
//         throw new Error('The number is low');
//     }

//     // if throw executes, the below code does not execute
//     console.log('hello');
// }
// catch(error) {
//     console.log('An error caught'); 
//     console.log('Error message: ' + error);  
// }

// const number = 5;
// try {
//      // user-defined throw statement
//      throw new Error('This is the throw');

// }
// catch(error) {
//     console.log('An error caught');
//     if( number + 8 > 10) {

//         // statements to handle exceptions
//          console.log('Error message: ' + error); 
//         console.log('Error resolved');
//     }
//     else {
//         // cannot handle the exception
//         // rethrow the exception
//         throw new Error('The value is low');
//     }
// }


// // variable declared using let
// let name = 'Sara';
// {
//     // can be accessed only inside
//     let name = 'Peter';

//     console.log(name); // Peter
// }
// console.log(name); // Sara 

// class Person{
//     constructor(name){
//         this.name=name;
//     }
// }

// const person1=new Person('john');
// console.log(person1.name);

// function sum(x,y=5){
//     console.log(x+y);
// }
// sum(5);
// sum(20,20)


// const first_name='jack';
// const last_name='sparrow';

// console.log('Hello ' + first_name +' '+ last_name);

// const firstName='jack';
// const lastName='sparrow';
// const fullName=`My first name is ${firstName} and last name is ${lastName}`;
// console.log(`Hello ${firstName} ${lastName}`);
// console.log(fullName);

// const person = {
//     name:'jack',
//     age:22,
//     gender:'male'
// }

// let name=person.name;
// let age=person.age;
// let gender=person.gender;

// console.log(name);
// console.log(age);
// console.log(gender);

// const person={
//     name:'jack',
//     age:11,
//     gender:'male'
// }

// let {name,age,gender}=person;

// console.log(name);
// console.log(gender);
// console.log(age);

// let countValue=new Promise(function(resolve,reject){
//     reject('Promise rejected');
// });

// countValue.then(
//     function successfulValue(result){
//         console.log(result);
//     }
// );

// function show(a,b,...arg){
//     console.log(a);
//     console.log(b);
//     console.log(arg);
// };
// show('one','two','three','four','five','six');


// let arr1=['one','two'];
// // let arr2=[...arr1,'three','four','five'];
// // console.log(arr2);
// let arr2=['three','four','five'];

// let arr3=[...arr1,...arr2];
// console.log(arr3);


// let greet = () => console.log('Hello');
// greet(); // Hello

// let greet = x => console.log(x);
// greet('Hello'); // Hello 

// let age = 5;

// let welcome = (age < 18) ?
//   () => console.log('Baby') :
//   () => console.log('Adult');

// welcome(); // Baby

// let sum = (a, b) => {
//     let result = a + b;
//     return result;
// }

// let result1 = sum(5,7);
// console.log(result1); // 12

// function Person() {
//     this.name = 'Jack',
//     this.age = 25,
//     this.sayName = function () {

//         // this is accessible
//         console.log(this.age);

//         function innerFunc() {

//             // this refers to the global object
//             console.log(this.age);
//             console.log(this);
//         }

//         innerFunc();

//     }
// }

// let x = new Person();
// x.sayName();

// function Person() {
//     this.name = 'Jack',
//     this.age = 25,
//     this.sayName = function () {

//         console.log(this.age);
//         let innerFunc = () => {
//             console.log(this.age);
//         }

//         innerFunc();
//     }
// }

// const x = new Person();
// x.sayName();

// let person = {
//     name: 'Jack',
//     age: 25,
//     sayName: () => {

//         // this refers to the global .....
//         //
//         console.log(this.age);
//     }
// }

// person.sayName(); // undefined

// function sum(x = 3, y = 5) {

//     // return sum
//     return x + y;
// }

// console.log(sum(5, 15));  // 20 
// console.log(sum(7));        // 12
// console.log(sum());          // 8

// using a function in default value expression

// const sum = () => 15;

// const calculate = function( x, y = x * sum() ) {
//     return x + y;
// }

// const result = calculate(10);
// console.log(result);            // 160

// function test(x = 1) {
//     console.log(x);
//   }

//   // passing undefined
//   // takes default value 1
//   test(undefined); // 1

// const name = 'Jack';
// console.log(`Hello ${name}!`); // Hello Jack!

// const str1 = 'This is a string';

// // cannot use the same quotes
// const str2 = 'A "quote" inside a string';  // valid code
// const str3 = 'A 'quote' inside a string';  // Error

// const str4 = "Another 'quote' inside a string"; // valid code
// const str5 = "Another "quote" inside a string"; // Error

// // escape characters using \
// const str3 = 'A \'quote\' inside a string';  // valid code
// const str5 = "Another \"quote\" inside a string"; // valid code

// // using the + operator
// const message1 = 'This is a long message\n' + 
// 'that spans across multiple lines\n' + 
// 'in the code.'

// console.log(message1)

// const message1 = `This is a long message
// that spans across multiple lines
// in the code.`

// console.log(message1)

// const name = 'Jack';
// console.log(`Hello ${name}`); 

// const result = 4 + 5;

// // template literals used with expressions
// console.log(`The sum of 4 + 5 is ${result}`);

// console.log(`${result < 10 ? 'Too low': 'Very high'}`)

// const name = 'Jack';
// const greet = true;

// function tagExample(strings, nameValue) {
//     let str0 = strings[0]; // Hello
//     let str1 = strings[1]; // , How are you?

//     if(greet) {
//         return `${str0}${nameValue}${str1}`;
//     }
// }

// // creating tagged literal
// // passing argument name
// const result = tagExample`Hello ${name}, How are you?`;

// console.log(result);


// const arrValue = ['My', 'name', 'is', 'Jack'];

// console.log(arrValue);   // ["My", "name", "is", "Jack"]
// console.log(...arrValue); // My name is Jack

// const arr1 = ['one', 'two'];
// const arr2 = [...arr1, 'three', 'four', 'five'];

// console.log(arr2); 
// //  Output:
// //  ["one", "two", "three", "four", "five"]

// let arr1 = [ 1, 2, 3];
// let arr2 = arr1;

// console.log(arr1); // [1, 2, 3]
// console.log(arr2); // [1, 2, 3]

// // append an item to the array
// arr1.push(4);

// console.log(arr1); // [1, 2, 3, 4]
// console.log(arr2); // [1, 2, 3, 4]

// let arr1 = [ 1, 2, 3];

// // copy using spread syntax
// let arr2 = [...arr1];

// console.log(arr1); // [1, 2, 3]
// console.log(arr2); // [1, 2, 3]

// // append an item to the array
// arr1.push(4);

// console.log(arr1); // [1, 2, 3, 4]
// console.log(arr2); // [1, 2, 3]

// const obj1 = { x : 1, y : 2 };
// const obj2 = { z : 3 };

// // add members obj1 and obj2  to obj3
// const obj3 = {...obj1, ...obj2};

// console.log(obj3); // {x: 1, y: 2, z: 3}

// let func = function(...args) {
//     console.log(args);
// }

// func(3); // [3]
// func(4, 5, 6); // [4, 5, 6]

// function sum(x, y ,z) {
//     console.log(x + y + z);
// }

// const num1 = [1, 3, 4, 5];

// sum(...num1); // 8

// // create a set
// let map1 = new Map();

// // insert key-value pair
// map1.set('info', {name: 'Jack', age: 26});
// console.log(map1); // Map {"info" => {name: "Jack", age: 26}}

// // Map with object key
// let map2 = new Map();

// let obj = {};
// map2.set(obj, {name: 'Jack', age: "26"});

// console.log(map2); // Map {{} => {name: "Jack", age: "26"}}

// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: "26"});

// // access the elements of a Map
// console.log(map1.get('info')); // {name: "Jack", age: "26"}

// const set1 = new Set([1, 2, 3]);

// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: "26"});

// // check if an element is in Set
// console.log(map1.has('info')); // true

// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: "26"});

// // removing a particular element
// map1.delete('address'); // false
// console.log(map1); // Map {"info" => {name: "Jack", age: "26"}} 

// map1.delete('info'); // true
// console.log(map1); // Map {}

// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: "26"});

// // removing all element
// map1.clear();
// console.log(map1); // Map {}

// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: "26"});

// console.log(map1.size); // 1

// let map1 = new Map();
// map1.set('name', 'Jack');
// map1.set('age', '27');

// // looping through Map
// for (let [key, value] of map1) {
//     console.log(key + '- ' + value);
// }


// let map1 = new Map();
// map1.set('name', 'Jack');
// map1.set('age', '27');

// // looping through the Map
// for (let key of map1.keys()) {
//   console.log(key)
// }

// let map1 = new Map();
// map1.set('name', 'Jack');
// map1.set('age', '27');

// // looping through the Map
// for (let values of map1.values()) {
//     console.log(values);
// }

// let map1 = new Map();
// map1.set('name', 'Jack');
// map1.set('age', '27');

// // looping through the Map
// for (let elem of map1.entries()) {
//     console.log(`${elem[0]}: ${elem[1]}`);
// }

// const weakMap = new WeakMap();
// console.log(weakMap); // WeakMap {} 

// let obj = {};

// // adding object (element) to WeakMap
// weakMap.set(obj, 'hello');

// console.log(weakMap); // WeakMap {{} => "hello"}

// const weakMap = new WeakMap();
// console.log(weakMap); // WeakMap {} 

// let obj = {};

// // adding object (element) to WeakMap
// weakMap.set(obj, 'hello');

// console.log(weakMap); // WeakMap {{} => "hello"}

// // get the element of a WeakMap
// console.log(weakMap.get(obj)); // hello

// // check if an element is present in WeakMap
// console.log(weakMap.has(obj)); // true

// // delete the element of WeakMap
// console.log(weakMap.delete(obj)); // true

// console.log(weakMap); // WeakMap {} 


// // create Set
// const set1 = new Set(); // an empty set
// console.log(set1); // Set {}

// // Set with multiple types of value
// const set2 = new Set([1, 'hello', {count : true}]);
// console.log(set2); // Set {1, "hello", {count: true}}

// // Set with duplicate values
// const set3 = new Set([1, 1, 2, 2]);
// console.log(set3); // Set {1, 2}

// const set1 = new Set([1, 2, 3]);

// // access the elements of a Set
// console.log(set1.values()); // Set Iterator [1, 2, 3]


// const set1 = new Set([1, 2, 3]);

// // check if an element is in Set
// console.log(set1.has(1));

// const set = new Set([1, 2]);
// console.log(set.values());

// // adding new elements
// set.add(3);
// console.log(set.values());

// // adding duplicate elements
// // does not add to Set
// set.add(1);
// console.log(set.values());

// const set = new Set([1, 2, 3]);
// console.log(set.values()); // Set Iterator [1, 2, 3]

// // removing a particular element
// set.delete(2);
// console.log(set.values()); // Set Iterator [1, 3]

// const set = new Set([1, 2, 3]);
// console.log(set.values()); // Set Iterator [1, 2, 3]

// // remove all elements of Set
// set.clear();
// console.log(set.values()); // Set Iterator []

// const set = new Set([1, 2, 3]);

// // looping through Set
// for (let i of set) {
//     console.log(i);
// }

// const weakSet = new WeakSet();
// console.log(weakSet); // WeakSet {}

// let obj = {
//     message: 'Hi',
//     sendMessage: true
// }

// // adding object (element) to WeakSet
// weakSet.add(obj);

// console.log(weakSet); // WeakSet {{message: "Hi", sendMessage: true}}

// const weakSet = new WeakSet();
// console.log(weakSet); // WeakSet {}

// const obj = {a:1};

// // add to a weakSet
// weakSet.add(obj);
// console.log(weakSet); // WeakSet {{a: 1}}

// // check if an element is in Set
// console.log(weakSet.has(obj)); // true

// // delete elements
// weakSet.delete(obj);
// console.log(weakSet); // WeakSet {}

// perform union operation
// contain elements of both sets
// function union(a, b) {
//     let unionSet = new Set(a);
//     for (let i of b) {
//         unionSet.add(i);
//     }
//     return unionSet
// }

// // two sets of fruits
// let setA = new Set(['apple', 'mango', 'orange']);
// let setB = new Set(['grapes', 'apple', 'banana']);

// let result = union(setA, setB);

// console.log(result);

// // assigning object attributes to variables
// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female'    
// }

// let name = person.name;
// let age = person.age;
// let gender = person.gender;

// console.log(name); // Sara
// console.log(age); // 25
// console.log(gender); // female

// // assigning object attributes to variables
// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female'    
// }

// // destructuring assignment
// let { name, age, gender } = person;

// console.log(name); // Sara
// console.log(age); // 25
// console.log(gender); // female

// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female'    
// }

// // destructuring assignment
// // using different variable names
// let { name: name1, age: age1, gender:gender1 } = person;

// console.log(name1); // Sara
// console.log(age1); // 25
// console.log(gender1); // female

// const arrValue = ['one', 'two', 'three'];

// // destructuring assignment in arrays
// const [x, y, z] = arrValue;

// console.log(x); // one
// console.log(y); // two
// console.log(z); // three

// let arrValue = [10];

// // assigning default value 5 and 7
// let [x = 5,  y = 7] = arrValue;

// console.log(x); // 10
// console.log(y); // 7

// const person = {
//     name: 'Jack',
// }

// // assign default value 26 to age if undefined
// const { name, age = 26} = person;

// console.log(name); // Jack
// console.log(age); // 26

// program to swap variables

// let x = 4;
// let y = 7;

// // swapping variables
// [x, y] = [y, x];

// console.log(x); // 7
// console.log(y); // 4

// const arrValue = ['one', 'two', 'three'];

// // destructuring assignment in arrays
// const [x, , z] = arrValue;

// console.log(x); // one
// console.log(z); // three


// const arrValue = ['one', 'two', 'three', 'four'];

// // destructuring assignment in arrays
// // assigning remaining elements to y
// const [x, ...y] = arrValue;

// console.log(x); // one
// console.log(y); // ["two", "three", "four"]

// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female'    
// }

// // destructuring assignment
// // assigning remaining properties to rest
// let { name, ...rest } = person;

// console.log(name); // Sara
// console.log(rest); // {age: 25, gender: "female"}


// const arrValue = ['one', 'two', 'three', 'four'];
// const arr2=[1,23,54,67]

// const arr3=[...arrValue, ...arr2]

// console.log(arr3); 
// // console.log(y); 

// const arrValue = ['one', 'two', 'three', 'four'];

// // throws an error
// const [ ...x, y] = arrValue;

// console.log(x); // eror


// nested array elements
// const arrValue = ['one', ['two', 'three']];

// // nested destructuring assignment in arrays
// const [x, [y, z]] = arrValue;

// console.log(x); // one
// console.log(y); // two
// console.log(z); // three

// const person = {
//     name: 'Jack',
//     age: 26,
//     hobbies: {
//         read: true,
//         playGame: true
//     }
// }
// // nested destructuring 
// const {name, hobbies: {read, playGame}} = person;

// console.log(name); // Jack
// console.log(read); // true
// console.log(playGame); // true


// creating a class
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// // creating an object
// const person1 = new Person('John');
// const person2 = new Person('Jack');

// console.log(person1.name); // John
// console.log(person2.name); // Jack


// class Person {
//   constructor(name) {
//   this.name = name;
// }

//   // defining method
//   greet() {
//       console.log(`Hello ${this.name}`);
//   }
// }

// let person1 = new Person('John');

// // accessing property
// console.log(person1.name); // John

// // accessing method
// person1.greet(); // Hello John


// class Person {
//   constructor(name) {
//       this.name = name;
//   }

//   // getter
//   get personName() {
//       return this.name;
//   }

//   // setter
//   set personName(x) {
//       this.name = x;
//   }
// }

// let person1 = new Person('Jack');
// console.log(person1.name); // Jack

// // changing the value of name property
// person1.personName = 'Sarah';
// console.log(person1.name); // Sarah



// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     // getter
//     get personName() {
//         return this.name;
//     }

//     // setter
//     set personName(x) {
//         this.name = x;
//     }
//   }

//   let person1 = new Person('Jack');
//   console.log(person1.name); // Jack

//   // changing the value of name property
//   person1.personName = 'Sarah';
//   console.log(person1.name); // Sarah


// // parent class
// class Person { 
//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// // inheriting parent class
// class Student extends Person {

// }

// let student1 = new Student('Jack');
// student1.greet();


// parent class
// class Person { 
//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// // inheriting parent class
// class Student extends Person {

//     constructor(name) {

//         console.log("Creating student class");

//         // call the super class constructor and pass in the name parameter
//         super(name);
//     }

// }

// let student1 = new Student('Jack');
// student1.greet();

// // parent class
// class Person { 
//     constructor(name) {
//         this.name = name;
//         this.occupation = "unemployed";
//     }

//     greet() {
//         console.log(`Hello ${this.name}.`);
//     }

// }

// // inheriting parent class
// class Student extends Person {

//     constructor(name) {

//         // call the super class constructor and pass in the name parameter
//         super(name);

//         // Overriding an occupation property
//         this.occupation = 'Student';
//     }

//     // overriding Person's method
//     greet() {
//         console.log(`Hello student ${this.name}.`);
//         console.log('occupation: ' + this.occupation);
//     }
// }

// let p = new Student('Jack');
// p.greet();


// // array
// const students = ['John', 'Sara', 'Jack'];

// // using for...of
// for ( let element of students ) {

//     // display the values
//     console.log(element);
// }

// // string
// const string = 'code';

// // using for...of loop
// for (let i of string) {
//     console.log(i);
// }


// // define Set
// const set = new Set([1, 2, 3]);

// // looping through Set
// for (let i of set) {
//     console.log(i);
// }

// // define Map
// let map = new Map();

// // inserting elements
// map.set('name', 'Jack');
// map.set('age', '27');

// // looping through Map
// for (let [key, value] of map) {
//     console.log(key + '- ' + value);
// }

// // creating iterable object
// const iterableObj = {

//     // iterator method
//     [Symbol.iterator]() {
//         let step = 0;
//         return {
//             next() {
//                 step++;
//                 if (step === 1) {
//                     return { value: '1', done: false};
//                  }
//                 else if (step === 2) {
//                     return { value: '2', done: false};
//                 }
//                 else if (step === 3) {
//                     return { value: '3', done: false};
//                 }
//                 return { value: '', done: true };
//             }
//         }
//     }
// }

// // iterating using for...of
// for (const i of iterableObj) {
//  console.log(i);
// }

// // generator function
// function* generatorFunc() {

//     yield 10;
//     yield 20;
//     yield 30;
// }

// const obj = generatorFunc();

// // iteration through generator
// for (let value of obj) {
//     console.log(value);
// }


// let student1 = {
//     age: 24,
//     name: "John"
// }

// const handler = {
//     get: function(obj, prop) {
//         return obj[prop] ? obj[prop] : 'property does not exist';
//     }
// }

// const proxy = new Proxy(student1, handler);
// console.log(proxy.name); // Felix
// console.log(proxy.age); // 24
// console.log(proxy.class); // property does not exist

// let student = {
//     name: 'Jack',
//     age: 24
// }

// const handler = { };

// // passing empty handler
// const proxy1 = new Proxy(student, {});

// console.log(proxy1); // Proxy {name: "Jack", age: 24}
// console.log(proxy1.name); // Jack


// let student = {
//     name: 'Jack',
//     age: 24
// }

// const handler = {

//     // get the object key and value
//     get(obj, prop) {

//         return obj[prop];
//   }
// }

// const proxy = new Proxy(student, handler);
// console.log(proxy.name); // Jack

// let student = {
//     name: 'John'
// }

// let setNewValue = {
//   set: function(obj, prop, value) {

//     obj[prop] = value;
//     return;
//   }
// };

// // setting new proxy
// let person = new Proxy(student, setNewValue);

// // setting new key/value
// person.age = 25;
// console.log(person); // Proxy {name: "John", age: 25}


// let student = {
//     name: 'Jack',
//     age: 24
// }

// const handler = {

//     // get the object key and value
//     get(obj, prop) {

//     // check condition
//     if (prop == 'name') {
//       return obj[prop];
//     } else {
//       return 'Not allowed';
//     }
//   }
// }

// const proxy = new Proxy(student, handler);
// console.log(proxy.name); // Jack
// console.log(proxy.age); // Not allowed

// let student = {
//     name: 'Jack',
//     age: 23
// }

// const handler = {
//     set: function (obj, prop, value) {
//         if (obj[prop]) {

//             // cannot change the student value
//             console.log('Read only')
//         }
//     }
// };

// const proxy = new Proxy(student, handler);

// proxy.name = 'John'; // Read only
// proxy.age = 33; // Read only

// const myFunction = () => {
//     console.log("execute this function")
// };

// const handler = {
//     set: function (target, prop, value) {
//         if (prop === 'name' && value === 'Jack') {
//             // calling another function
//             myFunction();
//         }
//         else {
//             console.log('Can only access name property');
//         }
//     }
// };

// const proxy = new Proxy({}, handler);

// proxy.name = 'Jack'; // execute this function
// proxy.age = 33; // Can only access name property

// // program to display a text using setTimeout method
// function greet() {
//     console.log('Hello world');
// }

// setTimeout(greet, 3000);
// console.log('This message is shown first');


// // program to display a text using setTimeout method
// function greet() {
//     console.log('Hello world');
// }

// let intervalId = setTimeout(greet, 3000);
// console.log('Id: ' + intervalId);   

// // program to display time every 3 seconds
// function showTime() {

//     // return new date and time
//     let dateTime= new Date();

//     // returns the current local time
//     let time = dateTime.toLocaleTimeString();

//     console.log(time)

//     // display the time after 3 seconds
//      setTimeout(showTime, 3000);
// }

// // calling the function
// showTime(); 


// program to stop the setTimeout() method

// let count = 0;

// // function creation
// function increaseCount(){

//     // increasing the count by 1
//     count += 1;
//     console.log(count)
// }

// let id = setTimeout(increaseCount, 3000);

// // clearTimeout
// clearTimeout(id); 
// console.log('setTimeout is stopped.');


// // program to display a name
// function greet(name, lastName) {
//     console.log('Hello' + ' ' + name + ' ' + lastName);
// }

// // passing argument to setTimeout
// setTimeout(greet, 1000, 'John', 'Doe');


// // function
// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// // callback function
// function callMe() {
//     console.log('I am callback function');
// }

// // passing function as an argument
// greet('Peter', callMe);

//  program that shows the delay in execution

// function greet() {
//     console.log('Hello world');
// }

// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// // calling the function
// setTimeout(greet, 2000);
// sayName('John');

// // Callback Function Example
// function greet(name, myFunction) {
//     console.log('Hello world');

//     // callback function
//     // executed only after the greet() is executed
//     myFunction(name);
// }

// // callback function
// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// // calling the function after 2 seconds
// setTimeout(greet, 2000, 'John', sayName);

// const count = true;

// let countValue = new Promise(function (resolve, reject) {
//     if (count) {
//         resolve("There is a count value.");
//     } else {
//         reject("There is no count value");
//     }
// });

// console.log(countValue);


// returns a promise

// let countValue = new Promise(function (resolve, reject) {
//   resolve("Promise resolved");
// });

// // executes when promise is resolved successfully

// countValue
//   .then(function successValue(result) {
//     console.log(result);
//   })

//   .then(function successValue1() {
//     console.log("You can call multiple functions this way.");
//   });

// // returns a promise
// let countValue = new Promise(function (resolve, reject) {
//    reject('Promise rejected'); 
// });

// // executes when promise is resolved successfully
// countValue.then(
//     function successValue(result) {
//         console.log(result);
//     },
//  )

// // executes if there is an error
// .catch(
//     function errorValue(result) {
//         console.log(result);
//     }
// );

// // returns a promise
// let countValue = new Promise(function (resolve, reject) {
//     // could be resolved or rejected   
//     resolve('Promise resolved'); 
// });

// // add other blocks of code
// countValue.finally(
//     function greet() {
//         console.log('This code is executed.');
//     }
// );


// class car{
//     constructor(name){
//         this.brand=name;
//     }
// }

// const myCar=new car("Mustang");
// console.log(myCar.brand)


// class Student{
//     constructor(name){
//         this.school=name;
//     }
//     greet(){
//         return 'my school is '+ this.school
//     }
// }

// const std=new Student('IMS');
// const grt=std.greet();
// console.log(std.school)
// console.log(grt)


// class Car{
//     constructor(name){
//         this.brand=name;
//     }
//     greet(){
//         return 'I like ' + this.brand;
//     }
// }
// const myCar=new Car('Mercedes');
// const grt=myCar.greet();
// console.log(myCar)
// console.log(grt)


// class Car{
//     constructor(name){
//         this.brand=name;
//     }
//     greet(){
//         return 'I like ' + this.brand;
//     }
// }

// class Model extends Car{
//     constructor(name,mod){
//         super(name);
//         this.model=mod;
//     }
//     show(){
//         return this.greet() + ' The model is '+ this.model;
//     }
// }

// const crm=new Model("Mustang","IV12");
// console.log(crm.show())

// const eprt=()=>console.log("Arrow fnct");
// eprt();

// const sum=()=>9+12;
// console.log(sum())

// const sum=(x,y)=>x+y;
// const res=sum(9,12);
// console.log(res)

// const fruits=['orange','apple','lichi','mango'];
// const fruitsListing=fruits.map((item)=>{
//     return item.toUpperCase();
// });
// console.log(fruitsListing);

// let data={
//     name:'Peter',
//     age:22,
//     gender:'male'
// }

// // let name=data.name;
// // let age=data.age;
// // let gender=data.gender;

// let {name,age,gender}=data;

// console.log(name)
// console.log(age)
// console.log(gender)

// const calculate=(a,b)=>{
//     const add=a+b;
//     const sub=a-b;
//     const mul=a*b;
//     const div=a/b;

//     return [add,sub,mul,div];
// }

// const [add,sub,mul,div]=calculate(3,4);
// console.log('sum is '+add);
// console.log('sub is '+sub);
// console.log('mul is '+mul);
// console.log('div is '+div);


// let name= 'sara';
// {
//     let name='peter';
//     console.log(name)
// }
// console.log(name);

// const array1 = ['A', 'B', 'C'];
// array1.forEach((item)=>{
//     console.log(item);
// });

// const array2=['D','E','F'];
// let newarr=array2.map((item)=>{
//     return item;
// });
// console.log(newarr);

// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//     sum = sum + i
// }
// console.log(sum);

// let number = prompt('Enter number');
// let i = 0;

// for (i; i <= 10; i++) {
//     number = number * i;
// }

// var x = prompt('Enter 1st value');
// var y = prompt('Enter 2nd value');
//   let newx=+x
//   let newy=+y
// console.log(x);
// console.log(y);
// console.log(Number(x)+Number(y));
// console.log(`its my way ${newx+newy}`);

// var x = parseInt(prompt('Enter 1st num'));
// var y = parseInt(prompt('Enter 2nd num'));

// console.log(x + y);


// console.log(parseInt('0xFF', 16));

// let number = parseInt(prompt('Enter a number'));

// for (i = 1; i <= 10; i++) {
//     console.log(`${number} x ${i}=>  ${number * i}`);
// };

// function sum(a, b) {
//     return a + b;
// }
// const res = sum(2, 5);

// console.log(res);

// let function2 = function (a, b) {
//     return a * b;
// }
// let res2 = function2(4, 4);
// console.log(res2);

// let function3 = function sub(a, b) {
//     return a - b;
// }
// let res3 = function3(9, 7);
// console.log(res3);

// const arrFun = (a, b) => {
//     return a + b;
// }
// let res4 = arrFun(9, 9);
// console.log(res4);

// const arr = [2, 4, 11, 23, 5, 66, 889, 97, 64, 3];
// console.log(arr.sort((a, b) => a-b));
// console.log(arr.sort((a, b) => b-a));
// console.log(arr.sort());

// const array = ['Madhu', 'Harish', 'Dinesh', 'Neha', 'Preeti', 'Kirti', 'Akansha'];
// console.log(array.sort());

// const array = ['Madhu', 'Harish', 'dinesh', 'Neha', 'preeti', 'Kirti', 'Akansha'];

//  const newarr = array.map(item => item.toLowerCase());
//  console.log(newarr.sort());

// console.log(array.sort((a, b) => a.localeCompare(b)));

// function myDisplayer(some) {
//     console.log(some);
// }

// function myFirst() {
//     myDisplayer('Hello');
// };


// function mySecond() {
//     myDisplayer('Good Bye');
// };

// myFirst();
// mySecond();


// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }

//   function myFirst() {
//     myDisplayer("Hello");
//   }

//   function mySecond() {
//     myDisplayer("Goodbye");
//   }

//   mySecond();
//   myFirst();


// // function
// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// // callback function
// function callMe() {
//     console.log('I am callback function');
// }

// // passing function as an argument
// greet('Peter', callMe);

// function func1() {
//     console.log('function 1');
//     setTimeout(() => {
//         function func2() {
//             console.log('function 2');
//         }
//         func2();
//     }, 1000);
// }
// func1();

// const fruits=['Apple','Banana','Papaya','Grapes'];
// const veg=['Pea','Potato','Brinjal','Lady-finger'];
// // console.log(fruits);
// // console.log(veg);
// const mixed=[...fruits,...veg];
// console.log(mixed);

// const datas = [
//     { name: 'Dinesh', age: '22', gender: 'Male' },
//     { name: 'Suraj', age: '25', gender: 'Male' },
//     { name: 'Harish', age: '27', gender: 'Male' },
//     { name: 'Maya', age: '22', gender: 'female' },
// ];

// const data = datas.map((item) => {
//     console.log(item.name)
//     console.log(item.age)
//     console.log(item.gender)
// });

// const str="important";
// let newstr=str.split("").reverse().join("");
// console.log(newstr);

// function sum(a,b){
//     return a+b;
// }
// const res=sum(2,8);
// console.log(res);

// function mul(a,b){
//     return a*b;
// }
// const res2=mul(12,22);
// console.log(res2);

// function sub(a,b){
//     return a-b;
// }
// const res3=sub(12,3);
// console.log(res3);

// function div(a,b){
//     return a/b;
// }
// const res4=div(49,7);
// console.log(res4);

// const data = [
//     { name: 'Dinesh', age: 22, gender: 'male' },
//     { name: 'Harish', age: 15, gender: 'male' },
//     { name: 'Madhukar', age: 21, gender: 'female' },
//     { name: 'Nikhil', age: 12, gender: 'male' },
// ];


// let ages=[12,22,33,23,24,25,29];
// let votable=data.filter((ele)=>{
//     return ele.age>18&&ele.gender=="female";
// });
// console.log(votable);


// data.map((item)=>{
//     console.log(`Person1 ${item.name}, ${item.age}, ${item.gender}`);
// });


// for(let i=0;i<data.length;i++){
//     console.log(`Person1 ${data[i].name}, ${data[i].age}, ${data[i].gender}`);
// };


// function add(a,b){
//     return a+b;
// }
// // const res=add(12,23);
// console.log(add(12,23));


// const str='dinesh';
// // let reverseStr=str.split("").reduce((acc,char)=>char+acc);
// let reverseStr=str.split("").reverse().join("");
// console.log(reverseStr);


// const arr=[22,33,12,23,25,55,66];
// arr.forEach((num,index)=>{
//     console.log(`index is ${index} and number is ${num}`);
// });

// let numbers=[22,34,23,11,15,9,4,6,7];
// let sumAll=0;
// numbers.forEach((num)=>{
//     sumAll+=num;
// });
// console.log(sumAll);

// let day;
// switch (new Date().getDay()) {
//     case 0:
//         day = 'Sunday';
//         break;
//     case 1:
//         day = 'Monday';
//         break;
//     case 2:
//         day = 'Tuesday';
//         break;
//     case 3:
//         day = 'Wednesday';
//         break;
//     case 4:
//         day = 'Thursday';
//         break;
//     case 5:
//         day = 'Friday';
//         break;
//     case 6:
//         day = 'Saturday';
//         break;
//     default:
//         day = 'not a day';
// };
// console.log(day);


// let arr = [12, 134, 44, 55, 667, 7, 89, 9];
// console.log(arr.slice(1));
// console.log(arr.slice(1, 2));
// console.log(arr.indexOf(55));
// console.log(arr.splice(2,2));


// let weather = 20;
// let weather=parseInt(prompt('Enter degree'));

// if(weather==20){
//     console.log('Nice Weather');
// }
// else if(weather==30){
//     console.log('Normal waether');
// }
// else if(weather==35){
//     console.log('Summer Time');
// }
// else if(weather===40){
//     console.log('very hot');
// }
// else if(weather==45){
//     console.log('very very hot outside');
// }
// else{
//     console.log("Dont't go outside");
// }

// let num=[12,33,4,5,7,8,9,0];
// let num2=[22,45,78,90,100];
// let allNum=[...num,...num2];
// console.log(allNum);

// const obj={
//     name:'dinesh',
//     age:12,
//     gender:'male',

//     greet(){
//         console.log(`my name is ${this.name} and age is ${this.age}`);
//     }
// };
// console.log(obj.greet());
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.gender);


// const arr=[23,5566,8,90,0,23,4,5,6,7,88,9];
// arr.forEach((item)=>{
//     console.log(item);
// });


// const arr=[12,44,67,8,9,33,5,7,8,9];
// let arr2=arr.map((item)=>{
//     return item*2
// });
// console.log(arr2);


// const arr=[12,44,67,8,9,33,5,7,8,9];
// let arr2=arr.map((item)=>{
//     return item*item;
// });
// console.log(arr2);


let data=[
    {
        id:1,
        product_name:'Colgate',
        price:219,
        stock:2000
    },
    {
        id:2,
        product_name:'Coffee',
        price:619,
        stock:166
    },
    {
        id:3,
        product_name:'Shoap',
        price:29,
        stock:200
    }
];

// let ans;
// let products=data.forEach((ele,i)=>{
//     if(ele.id==3){
//         ans=ele
//     }
// });

// let products=data.map((ele)=>{
//     if(ele.id==1){
//         return ele
//     }
// });

// let products=data.filter((ele)=>{
//     if(ele.id==1){
//         return ele
//     }
// }); 
// console.log(products);

// let productsDetails=data.forEach((ele,i)=>{
//     if(ele.id==3){
//         ans= ele.product_name
//     }
// });
// console.log(ans);


// let value = 1;

// doSomething(() => {
//   value = 2;
// });

// console.log(value);

// let num=10;
// let num2=1;
// for(var i=2;i<=num;i++){
//    num2= num2*i
// }

// console.log(num2);

// factorial by recursion

// function factorial(num){
//     if(num==1){
//         return num
//     }
//     console.log(num);
//     return num*factorial(num-1);

// }
// let res=factorial(5);
// console.log(res);
// let arr=[2,4,5,11,14,13,2,45,55];
// let i = 0;
// // for(let i=0;i<arr.length-1;i++){
//     // console.log(arr[i]);
//     for(let j=0;j<arr.length-i;j++){
//         i= i+1;
//         console.log(i);
//         if(arr[j]>arr[j+1]){
//             let temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//         }
//     }
// // }
// console.log(arr);
// arr.forEach((ele,i)=>{
//    console.log(i,ele);
// })

// function factorial(num){
//     if(num==1){
//         return num
//     }
//     return num*factorial(num-1)
// }
// let ansss=factorial(10);
// console.log(ansss);


// function factorial(num){
//     if(num==1){
//         return num
//     }
//     return num*factorial(num-1);
// }
// let ansss=factorial(10);
// console.log(ansss);

// function sum(a,b){
//     return a+b;
// }

// function sub(a,b){
//     return a-b;
// }

// let sumNum=sum(2,4);
// console.log(sumNum);

// let subNum=sub(28,3);
// console.log(subNum);



// function myFirst() {
//     myDisplayer("Hello");
//   }
  
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
  
//   let ans1=myFirst();
//  let ans2= mySecond();

//  console.log(ans1);


// function greet(name) {
//     console.log('Hi' + ' ' + name);
// }

// greet('Peter'); 



// // function
// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// // callback function
// function callMe() {
//     console.log('I am callback function');
// }

// // passing function as an argument
// greet('Peter', callMe);


//  program that shows the delay in execution

// function greet() {
//     console.log('Hello world');
// }

// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// // calling the function
// setTimeout(greet, 2000);
// sayName('John');

// // Callback Function Example
// function greet(name, myFunction) {
//     console.log('Hello world');

//     // callback function
//     // executed only after the greet() is executed
//     myFunction(name);
// }

// // callback function
// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// // calling the function after 2 seconds
// setTimeout(greet, 2000, 'John', sayName);

// program to display text 5 times
// const n = 5;

// // looping from i = 1 to 5
// for (let i = 1; i <= n; i++) {
//     console.log(`Hello JavaScript.`);
// }

// const arr=[1,2,44,5,5,7,88,11,77];
// let res;
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// };


// const a = 5, b = 2, c = 'hello';

// // equal to operator
// console.log(a == 5);     // true
// console.log(b == '2');   // true
// console.log(c == 'Hello');  // false

// let x = 5;
// let y = 3;

// // addition
// console.log('x + y = ', x + y);  // 8

// // subtraction
// console.log('x - y = ', x - y);  // 2

// // multiplication
// console.log('x * y = ', x * y);  // 15

// // division
// console.log('x / y = ', x / y);  // 1.6666666666666667

// // remainder
// console.log('x % y = ', x % y);   // 2

// // increment
// console.log('++x = ', ++x); // x is now 6
// console.log('x++ = ', x++); // prints 6 and then increased to 7
// console.log('x = ', x);     // 7

// // decrement
// console.log('--x = ', --x); // x is now 6
// console.log('x-- = ', x--); // prints 6 and then decreased to 5
// console.log('x = ', x);     // 5

// //exponentiation
// console.log('x ** y =', x ** y);


// const array1 = ['a', 'b', 'c'];

// array1.forEach((element) => console.log(element));

// const ratings = [5, 4, 5];
// let sum = 0;

// const sumFunction = async (a, b) => a + b;

// ratings.forEach(async (rating) => {
//   sum = await sumFunction(sum, rating);
// });

// console.log(sum);

// program to display the sum of natural numbers
// let sum = 0;
// const n = 100

// // looping from i = 1 to n
// // in each iteration, i is increased by 1
// for (let i = 1; i <= n; i++) {
//     sum += i;  // sum = sum + i
// }

// console.log('sum:', sum);


// let sum = 0;

// // take input from the user
// let number = parseInt(prompt('Enter a number: '));

// while(number >= 0) {

//     // add all positive numbers
//     sum += number;

//     // take input again if the number is positive
//     number = parseInt(prompt('Enter a number: '));
// }

// // display the sum
// console.log(`The sum is ${sum}.`);

// let sum = 0;
// let number = 0;

// do {
//     sum += number;
//     number = parseInt(prompt('Enter a number: '));
// } while(number >= 0)

// console.log(`The sum is ${sum}.`);


// // program to print the value of i
// for (let i = 1; i <= 5; i++) {
//     // break condition     
//     if (i == 3) {
//         break;
//     }
//     console.log(i);
// }

// let sum = 0, number;

// while(true) {

//     // take input again if the number is positive
//     number = parseInt(prompt('Enter a number: '));

//     // break condition
//     if(number < 0) {
//         break;
//     }

//     // add all positive numbers
//     sum += number;

// }

// // display the sum
// console.log(`The sum is ${sum}.`);

// let sum = 0;
// let number = 0;

// while (number >= 0) {

//     // add all positive numbers
//     sum += number;

//     // take input from the user
//     number = parseInt(prompt('Enter a number: '));

//     // continue condition
//     if (isNaN(number)) {
//         console.log('You entered a string.');
//         number = 0; // the value of number is made 0 again
//         continue;
//     }

// }

// // display the sum
// console.log(`The sum is ${sum}.`);


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


// // before you would do something like this
// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female'    
// }

// let name = person.name;
// let age = person.age;
// let gender = person.gender;

// console.log(name); // Sara
// console.log(age); // 25
// console.log(gender); // female


// const map1 = new Map(); 
// console.log(map1); 

// map1.clear();
// console.log(map1);


// let map1 = new Map();

// map1.set('info', {name: 'Jack', age: 26});
// console.log(map1); 

// // Map with object key
// let map2 = new Map();

// let obj = {};
// map2.set(obj, {name: 'Jack', age: "26"});

// console.log(map2); // Map {{} => {name: "Jack", age: "26"}}


// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: "26"});

// // access the elements of a Map
// console.log(map1.get('info')); // {name: "Jack", age: "26"}

// const set1 = new Set([1, 2, 3]);

// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: "26"});

// // check if an element is in Set
// console.log(map1.has('info')); // true


// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: "26"});
// map1.set('info', {name: 'Jack2', age: "21"});

// // removing a particular element
// map1.delete('address'); // false
// console.log(map1); // Map {"info" => {name: "Jack", age: "26"}} 

// map1.delete('info'); // true
// console.log(map1); // Map {}

// let map1 = new Map();
// map1.set('name', 'Jack');
// map1.set('age', '27');

// // looping through Map
// for (let [key, value] of map1) {
//     console.log(key + '- ' + value);
// }


// let map1 = new Map();
// map1.set('name', 'Jack');
// map1.set('age', '27');

// // looping through the Map
// for (let key of map1.keys()) {
//   console.log(key)
// }


// const weakMap = new WeakMap();
// console.log(weakMap); 

// let obj = {};
// weakMap.set(obj, 'hello');

// console.log(weakMap);


// const weakMap = new WeakMap();
// console.log(weakMap); 

// let obj = {};

// weakMap.set(obj, 'hello');

// console.log(weakMap); 
// console.log(weakMap.get(obj)); 

// console.log(weakMap.has(obj)); 

// console.log(weakMap.delete(obj));

// console.log(weakMap);

// const weakMap = new WeakMap();
// console.log(weakMap); 

// let obj = {};

// weakMap.set(obj, 'hello');


// for (let i of weakMap) {

//     console.log(i);
// }


// // create Set
// const set1 = new Set(); 
// console.log(set1); 

// const set2 = new Set([1, 'hello', {count : true}],);
// console.log(set2); 

// // Set with duplicate values
// const set3 = new Set([1, 1, 2, 2]);
// console.log(set3); 

// const set1 = new Set([1, 2, 3]);
// console.log(set1.values()); 



// const set = new Set([1, 2]);
// console.log(set.values());

// set.add(3);
// console.log(set.values());

// set.add(1);
// console.log(set.values());

// aysnc and await

// console.log('One');
// console.log('Two');
// console.log('Three');


// function fun(){
//     console.log("Hello world");
// };
// setTimeout(fun,2000);

// console.log('Hello');
// setTimeout(()=>{
// console.log('Hello world');
// },4000);


// console.log('One');
// console.log('Two');

// setTimeout(() => {
//     console.log('hello world');
// }, 3000);

// console.log('Three');
// console.log('Four');


// Callback 

// function
// function greet(name) {
//     console.log('Hi' + ' ' + name);
// }

// greet('Peter'); 

// // function
// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// // callback function
// function callMe() {
//     console.log('I am callback function');
// }

// // passing function as an argument
// greet('Peter', callMe);

//  program that shows the delay in execution

// function greet() {
//     console.log('Hello world');
// }

// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// // calling the function
// setTimeout(greet, 2000);
// sayName('John');

// // Callback Function Example
// function greet(name, myFunction) {
//     console.log('Hello world');

//     // callback function
//     // executed only after the greet() is executed
//     myFunction(name);
// }

// // callback function
// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// // calling the function after 2 seconds
// setTimeout(greet, 2000, 'John', sayName);

// const count = true;

// let countValue = new Promise(function (resolve, reject) {
//     if (count) {
//         resolve("There is a count value.");
//     } else {
//         reject("There is no count value");
//     }
// });

// console.log(countValue);


// returns a promise

// let countValue = new Promise(function (resolve, reject) {
//   resolve("Promise resolved");
// });

// // executes when promise is resolved successfully

// countValue
//   .then(function successValue(result) {
//     console.log(result);
//   })

//   .then(function successValue1() {
//     console.log("You can call multiple functions this way.");
//   });


// // returns a promise
// let countValue = new Promise(function (resolve, reject) {
//    reject('Promise rejected'); 
// });

// // executes when promise is resolved successfully
// countValue.then(
//     function successValue(result) {
//         console.log(result);
//     },
//  )

// // executes if there is an error
// .catch(
//     function errorValue(result) {
//         console.log(result);
//     }
// );


// returns a promise
// let countValue = new Promise(function (resolve, reject) {
//     resolve('Promise resolved'); 
// });

// countValue.finally(
//     function greet() {
//         console.log('This code is executed.');
//     }
// );


// async function example

// async function f() {
//     console.log('Async function.');
//     return Promise.resolve(1);
// }

// f(); 


// // a promise
// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//     resolve('Promise resolved')}, 4000); 
// });

// // async function
// async function asyncFunc() {

//     // wait until the promise resolves 
//     let result = await promise; 

//     console.log(result);
//     console.log('hello');
// }

// // calling the async function
// asyncFunc();

// // a promise
// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//     resolve('Promise resolved')}, 4000); 
// });

// // async function
// async function asyncFunc() {
//     try {
//         // wait until the promise resolves 
//         let result = await promise; 

//         console.log(result);
//     }   
//     catch(error) {
//         console.log(error);
//     }
// }

// // calling the async function
// asyncFunc(); 


// program to display a text using setInterval method
// function greet() {
//     console.log('Hello world');
// }

// setInterval(greet, 1000);


// program to display time every 5 seconds
function showTime() {

    // return new date and time
    let dateTime= new Date();

    // return the time
    let time = dateTime.toLocaleTimeString();

    console.log(time)
}

let display = setInterval(showTime, 5000);