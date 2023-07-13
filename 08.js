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

