// print Hello World in JS
// console.log("Hello World");


// Naming convention Pratice.

// var _myname = "Rishav";
// console.log(_myname);
// output = Rishav

// var 1myName = "Rishav";
// console.log(1myName);
// output = SyntaxError: Invalid or unexpected token

// var _1my__Name = "Rishav";
// console.log(_1my__Name);
// output = Rishav


// var $myName = "Rishav";
// console.log($myName);
// output = Rishav



// Data Types

// var myName = "Rishav Raj";
// console.log(typeof (myName));
// Output = string

// var myAge = 20;
// console.log(typeof (myAge));
// Output = number


// var iamRishav = true;
// console.log(typeof (iamRishav));
// Output = boolen




// Data Types Pratice

// var add_num_string = 10 + "10";
// console.log(add_num_string);
// output = 1010

// var sub_num_string = 9 - "5";
// console.log(sub_num_string);
// output = 4 (bug)


// var add_two_string = "Java" + "Script";
// console.log(add_two_string);
// output = JavaScript


// var add_space = " " + " ";
// console.log(add_space);
// output = black space

// var add_space_num = " " + 0;
// console.log(add_space_num);
// output = o

// var sub_two_string = "rishav" - "raj";
// console.log(sub_two_string);
// output = NaN(not a number)


// var add_boolen = true + true;
// console.log(add_boolen);
// output = 2 because 1 = true and 0 = false

// var add_boolen = true + false;
// console.log(add_boolen);
// output = 1 because 1 = true and 0 = false



// var add_boolen = false + true;
// console.log(add_boolen);
// output = 1 because 1 = true and 0 = false



// var sub_boolen = false + true;
// console.log(sub_boolen);
// output = 1 because 1 = true and 0 = false


// NaN Pratice
// NaN === NaN;
// console.log(NaN === NaN);
// output = false

// Number.NaN === NaN;
// console.log(Number.NaN === NaN);
// output = false

// isNaN(NaN);
// console.log(isNaN(NaN));
// output = true

// isNaN(Number.NaN);
// console.log(isNaN(Number.NaN));
// output = true

// Number.isNaN(NaN);
// console.log(Number.isNaN(NaN));
// output = true



// Operators Pratice

// What will be the output of 3**3?
// console.log(3**3);
// output = 27

// What will be the output, when we add a number and a string.
// console.log(2 + "2");
// output = 22

// Write a program to swap two numbers?
// var a = 2;
// var b = 4;

// var c = a;
// a = b;
// b = c;
// console.log(a);
// console.log(b);


// Write a program to swap two numbers without using third variable in JS?

// var a = 3;
// var b = 6;

// a = a + b; // 3 + 6 = 9;
// b = a - b; // 9 - 6 = 3;
// a = a - b; // 9 - 3 = 6;

// console.log(a);
// output = 6
// console.log(b);
// output = 3


// If-else Problem Pratice.

// WAP that works out wheather if a given year is a leap year or not.


// var year = 2020;

// if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
//     console.log("Leap Year");
// } else {
//     console.log("Not a Leap year");
// }

// if (year % 4 == 0) {
//     if (year % 100 == 0) {
//         if (year % 500 == 0) {
//             console.log("Leap Year");
//         } else {
//             console.log("Not a Leap Year");
//         }
//     } else {
//         console.log("Leap Year")
//     }
// } else {
//     console.log("Not a Leap Year");
// }


// num = prompt("num: ");
// for (var x = 0; x <= num; x++)
// { 

//     if (x == 10) {
//         nam = prompt("What is Your Name: "); // input name: ex:- Ankit
//         if (nam == "Ankit" && x == 10)
//         { 
//             console.log("Yur are");
//         }
//         else {
//             console.log('Not');
//         }
//     }


//     }

// The Condition (ternary) operators;

// var age = 17;
// console.log((age>=18)?"Vote":"Not Vote");


// While loop

// var num = 0;
// while(num<=10){
// console.log(num);
// num++;
// }


// Do-While Lopp

// var num =0;
// do{
//     console.log(num);
//     num++;
// }while(num<=10);


// For Loop

// for(num=0;num<=10;num++){
//     console.log(num);
// }


// Problem
// WAP to Print a table of (8,912.15) using for loop.
// For Loop
// for(num=1;num<=10;num++){
//     table=8;
//     console.log(8 +  " X " + num + " = " + table * num );
// }

// WHile Loop
// num =1;
// while(num<=10){
//     table = 8;
//     console.log(8 +  " X " + num + " = " + table * num );
//     num++;
// }

// Do-While Loop
// num=1;
// do{
//     debugger;
//     table = 8;
//         console.log(8 +  " X " + num + " = " + table * num );
//         num++;  
// }while(num<=10);



//Function in JS

//Defining a Function
// function sum(){
//     var a=2, b=3;
//     var total = a+b;
//     console.log(total);
// }

//Calling the Function
// sum();


//Parameter vs Arguments.
// function sum(a,b){   //Parameter = a,b
//     var total = a+b;
//     console.log(total);
// }

// sum(10,20); //Arguments = 10,20
// sum(20,20);


//Function Expression

// function sum(a,b){
//     var total = a+b;
//     console.log(total);
// }
// var funExp = sum(5,10);
// funExp;


//Return Keyword

// function sum(a,b){
//   return total = a+b;
// }
// var funExp = sum(5,10);
// console.log(funExp);


//Anonmymous Function

// var funExp = function(a,b){
//     return total = a+b;
// }

// console.log(funExp(15,15));


// var funExp = function(a,b){
//     return total = a+b;
// }
// var sum = funExp(15,15);
// console.log(sum);


//Modern JavaScript
//ES6

//1. Let vs Const vs Var

//var = Function Scope
// let and const = Block Scope

// function biodata(){
//     var myFirstName = "Rishav";
//     console.log(myFirstName);

//     if(true){
//         var myLastName = "Raj";
//         console.log("Inner " + myLastName);
//         console.log("Inner " + myFirstName);
//     }
//     console.log("InnerOuter " + myLastName);
// }

// biodata();


// function biodata(){
//     let myFirstName = "Rishav";
//     console.log(myFirstName);

//     if(true){
//         let myLastName = "Raj";
//         console.log("Inner " + myLastName);
//         console.log("Inner " + myFirstName);
//     }
//     console.log("InnerOuter " + myLastName);
// }

// biodata();


//2. Template literals(Template Strings)

//WAP to print table for gives number (8)?
//Output:- 8*1=8
//8*2=16
//8*10=80

// for(let num =1; num<=10; num++){
//     let tableOf = 8;
//     console.log(`${tableOf} * ${num} = ${tableOf * num}`);
// }


//Fat Arrow Function

//Before ES6
// function sum(){
//     let a = 5;b=5;
//     return("Sum is " + (a + b));
// }
// console.log(sum());
//Convert into Fat Arrow

// const sum = () => {
//     let a = 5; b =5;
//     return `The sum is ${a+b}`;
// };

// console.log(sum());

//We can also write like this.
// const sum = () =>{
//     return `The sum of ${(a=5) + (b=5)}`;
// };
// console.log(sum());

//When we have single line of code to return then we can also write like this.
//Using ES6
// const sum = () => `The Sum of ${(a=5)+(b=5)}`;
// console.log(sum());



//Array in JavaScript

// myNames = ["Rishav","Dhooni","Raj"];
// console.log(myNames[0]);
// console.log(myNames[1]);
// console.log(myNames[2]);
// console.log(myNames.length);
// console.log(myNames[myNames.length-1]);


//Using For Loop

// for(let i = 0; i<myNames.length; i++ ){
//     console.log(myNames[i]);
// }


//After ES6 we have for in.. and for ..of loop to.
//For in Loop

// for(let index in myNames){
//     console.log(index);
// }

//For of Loop
// for(let elements of myNames){
//     console.log(elements);
// }


//forEach()

// myNames.forEach(function(element,index,array){
//     console.log(`Elements: ${element} is Index of ${index}`);
// });

//For Each Using Fat Arrow.
// myNames.forEach((element,index,array)=>{
//     console.log(`Elements are ${element} in Index of ${index} and The All Array Elements are ${array}`);
// });



//Searching and Filter in an array.
// let myNames = ["rishav","raj","dhooni","raj"];
//#Array.protoype.indexOf()

// console.log(myNames.indexOf("raj",2));

//#Array.prototype.lastIndexOf()

// console.log(myNames.lastIndexOf("raj",2));


//#Array.prototype.includes()

// console.log(myNames.includes("raj"));

//#Array.prototype.find()

// const prices = [200,250,275,300,400,450.500];

// const findElem = prices.find((currentValue)=>{
//     return currentValue < 400;
// });
// console.log(findElem);

//Using ES6 
// console.log(prices.find((currentValue)=>currentValue<400));



//#Array.prototype.findIndex()
// console.log(prices.findIndex((currentValue)=>currentValue<400));


//# Array.prototype.filter()


// console.log(prices.filter((elem,index)=>elem<400));
//Or
// const newPriceTag = prices.filter((elem,index)=>{
//     return elem < 400;
// });

// console.log(newPriceTag);




//Array- How to sort an array.
//Array.prototype.sort()

// const months = ["Dec","Jan","March","Feb","July"];
// console.log(months.sort());

// const array1 = [6,2,10000,3,1,5,7,4];
// console.log(array1.sort());


//Perform CURD

//#Array.prototype.push()

// const animals = ["pigs","goat","sheep"];
// animals.push("chicken","Cow");
// console.log(animals);


//#Array.prototype.unshift()

// const animals = ["pigs","goat","sheep"];
// animals.unshift("chicken","Cow");
// console.log(animals);

// const numbers = [1,2,3,5];
// numbers.unshift(4,6);
// console.log(numbers);


//#Array.prototype.pop()
// const plants = ["bracoli","caulifower","kale"];

// console.log(plants.pop());
// console.log(plants);

//#Array.prototype.shift()

// console.log(plants.shift());
// console.log(plants);



//Challange Time
//  const months = ["Jan", "march", "April", "June", "July"];

//1. Add Dec at the end of an array.

//solution in Normal Method
// console.log(months.push("Dec"));
// console.log(months);

//Solution in Splice() Method.
// const newMonths = months.splice(months.length,0,"Dec");
// console.log(months);

//2.Return Value of Splice Method.
//Solution: it returns the empty array. It return the deleted value in array.

//3. Update march to March.
//solution in Normal Method.
// months[1] = "March";
// console.log(months);

//Solution in Splice() Method.
// const index_of = months.indexOf("march");
// if(index_of != -1){
//     const newMonths = months.splice(index_of,1,"March");
//     console.log(months);
// }else{
//     console.log("No Such Data Found");
// }

//4. Delete June from an Array.

//Solution
// const index_of_month = months.indexOf("June");
// const newMonths = months.splice(index_of_month,1);
// console.log(months);



//Map(),Reduce() Method.

//Array.prototype.map()

// let arr1 = [1,4,9,16,25];
// let newArr = arr1.map((curElm, index, arr)=>{
// return `The Index of ${index} is containing the value of ${curElm} in Array ${arr}`;
// });
// console.log(newArr);



//Problem-1

//Solution
// let arr1 = [2,3,4,6,8];
// let newArr = arr1.map((currElem)=>currElem*=2).filter((currElem)=>currElem>10);
// console.log(newArr);

//problem-2

//Soln
// let sqrRootArr = [25,36,49,64,81];
// let newSqrRootArr = sqrRootArr.map((number)=>{
//     for(let i = 0; i*i<=number;i++){
//         if(i*i==number){
//             return i;
//         }

//     }
   
// });
// console.log(newSqrRootArr);


//Reduce()

// let arr =[2,2,2,2];
// let sum = arr.reduce((accumulator,currElem,index,arr)=>accumulator+=currElem);
// console.log(sum);




//Flat array using reduce
///converting 2d and 3d array in 1d array.

// let arr1 = [
//     ["Rishav", "Raj"],
//     ["Dhooni", "Baba"],
//     ["Good", "Morning"],
//     ["Good", "Night"]
// ];
// console.log(arr1);

// let flatArr = arr1.reduce((accum,currElem)=>accum.concat(currElem));
// console.log(flatArr);

// let number = 2
// number = String
// console.log(number);



//String
//Escape Character
//Finding a String in a String
//Searching for a String in a String
//Extracting String Parts
//Replacing String Content
//Extracting String Characters
//Other Useful methods.



// let myName = "Rishav Raj";
// let myPage = "SACT";

// let ytName = new String("SCAT");
// console.log(myName);
// console.log(ytName);




//Escape Character.

// let mySen = "Hello World !, 'This is Rishav'";
// let mySen2 = "Hello World, \"This is Rishav\"";
// console.log(`${mySen} and ${mySen2}`);


// Finding a String in a string.
//indexOf() Method.
// let myName = "Hello Rishav, How are You? "
// let sMy = myName.indexOf("Rishav"); //Searching Start From ----------> Direction.
// console.log(sMy);

// let hMy = myName.lastIndexOf("Hello"); // Searching Start From <----------- Direction.
// console.log(hMy);


//Searching for a string in string.

// let myName = "Hello Rishav, How are You? ";
// let sMy = myName.search("Rishav"); 
// console.log(sMy);

//Extracting String Parts
//slice()
//substring()
//substr()

//Slice()
// var str = "apple, banana, kiwi";
// let res = str.slice(0,4);
// let res = str.slice(7,-2);
// console.log(res);


//Challenge Time.
//Display only 280 characters of a strings like the one used in Twitter?


// let myTweet = "Anim sint sint id anim sunt ea anim et ipsum. Exercitation aliquip consequat cillum est enim fugiat anim reprehenderit occaecat do consequat labore culpa. Occaecat ipsum ullamco sunt nostrud fugiat proident nisi fugiat non duis. Ut ex consequat laborum amet ut reprehenderit fugiat labore. Deserunt elit anim nisi sit irure non culpa sit enim amet. Velit voluptate anim duis velit.";
// let myActualTweets = myTweet.slice(0,280);
// console.log(myActualTweets);
// console.log(myActualTweets.length);


//Substring()
//substr()



//Replace Sting Content()

// let myBioData =   "Hello, I am Coder";
// let myNewData = myBioData.replace("Coder", "Programmer");
// console.log(myNewData);
// console.log(myBioData);





//Extracting String Characters.
//charAt()
//charCodeAt()
//property access[]


//charAt()
// let str = "Hello World";
// console.log(str.charAt(0));

//charCodeAt()
// let str = "Hello World";
// console.log(str.charCodeAt(0));



//Challange Time
//Q. Return the Unicode of the last character in a string.
// let str = "HELLO WORLD";
// console.log(str.charCodeAt(str.length-1));



//Property Access

// let str = "HELLO WORLD";
// console.log(str[0]);

//Other Useful Methods.


//toUpperCase()
//toLowerCase()

// let str = "rishav raj";
// console.log(str.toUpperCase());


// let str = "RISHAV RAJ";
// console.log(str.toLowerCase());


//The concat() Method
//concat() joins two or morw strings.


// let fName = "rishav";
// let lName = "raj";

// console.log(fName.concat( lName));
// console.log(fName.concat(" ",lName));



// trim()
// let message = "                                         Hello World !            ";
// console.log(message.trim());




//Convert string to array
// var txt = "a,b,c,d,e,f";
// console.log(txt.split(","));
// console.log(txt.split(" "));
// console.log(txt.split(" | "));