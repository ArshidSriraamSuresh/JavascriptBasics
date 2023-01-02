// To declare a variable we can use var keyword.
// Dec;aring a variable in JavaSript
var myName = "Sriraam";
console.log(myName);
// Reassign a variable in JavaScript
myName = 9;
console.log(myName);
// What are Variables?
// Varaiables are containers that store data types or values.

// What are data types in JavaScript?
// string
// number
// boolean
// undefined
// null
// object
// symbol

// Three Ways of creating variables.
// var
// It can be used throughout the program.
var myName = "Kanna";
console.log("name :",myName);

//let
// Let has some block scope.
let age = 10;
console.log("age :",age);

// const
// It cannot be changed a
const pi = 3.14;
console.log("constant :",pi);

// Declaring a variable
var a;
// Declaring and assigning a variable.
var b = 10;
console.log(b);
// = sign is considered as assignement operator in JavaScript.

// If we have already declared the variable then we can assign directly.
a = 8;
console.log(a);

// We can have the contants of one variable in another variable.
// Overiding sometimes
var c = a;
console.log("c:",c);

// When we just declare the variable the default data type is undefined.
var d;
console.log(d);
d = 10;
console.log(d);

// Intializing variables
//var e is called declaring a variable.
// = 2 means we are assigneing with assignement operator.
var e = 2;
console.log("e",e);

// Uninitialized variables
// It has undefined data type
var f;
console.log("f",f);

// Case sensitivity of variables.
// Case matters - upper case and lower cases

// We use camel case for variable names in Javascript.
// The letter of first word is in lower case and the remaing first letter starts with upper case.

var properCamelCase = " This is the proper way of writing variable names."
console.log(properCamelCase);


// Arithemtic operators with numbers
// Adding
var g = 5 + 6;
console.log(g);
// Subtract
var g = 5 - 6;
console.log(g);
// Multiplication
var g = 5 * 6;
console.log(g);
// Divide
var g = 5 / 6;
console.log(g);
// Floor divison
var g = 5 ** 6;
console.log(g);
// There is no floor divison in JavaScript.

var g = 6%5; // modulus
console.log(g);

//incrementing numbers
// var x=x+1.
var x=10;
console.log(x);
x++;
console.log(x);
x+=5; //compound assignment
console.log(x);

//decrementing numbers
// var x=x-1;
var x=10;
console.log(x);
x--;
console.log(x);
x-=5; // compund assignment
console.log(x);


// decimal values
var d=3.14;
console.log(d);
console.log(typeof(d)); // type is number


// Arithemtic operators with decimals
// Adding
var g = 5.2 + 6;
console.log(g);
// Subtract
var g = 5.8 - 6.8;
console.log(g);
// Multiplication
var g = 5.0* 6.4;
console.log(g);
// Divide
var g = 5.6 / 6.4;
console.log(g);
// Floor divison
var g = 5.3 ** 6.9;
console.log(g);
// There is no floor divison in JavaScript.
var g = 6.2%5.1; // modulus
console.log(g);

//compund assignment with arithmetic operation
// addition
var x=10;
console.log(x);
x=x+1;
console.log(x);
x+=1;
console.log(x);

// subtraction
var x=10;
console.log(x);
x=x-1;
console.log(x);
x-=1;
console.log(x);

// multiply
var x=10;
console.log(x);
x=x*4;
console.log(x);
x*=2;
console.log(x);

// division
var x=10;
console.log(x);
x=x/2;
console.log(x);
x/=2;
console.log(x);

// modulus
var x=10;
console.log(x);
x=x%2;
console.log(x);
x%=2;
console.log(x);

// declare string variables
var myName='rajesh';
console.log(myName);
var myName="kanna";
console.log(myName);
// single and double quotes works in string

//escape character in a string
var myString="the name of the person is \"prakash\"";
console.log(myString);
var myString="the name of the person is \\\"world\\\"";
console.log(myString);
var myString='the name of the person is "prakash"';
console.log(myString);
var myString="the name of the person is 'prakash'";
console.log(myString);
var myString=`"the name of the person is 'prakash'"`;
console.log(myString);

//special characters
/* \' it escapes single quotes
\" it escapes double quotes
\\ it means one backslash
\n it means newline
\t it means tab
\b it means backspace
\r it means carriage return
\f it means formfeed */

var myString='the name of the person is \n\"prakash\"';
console.log(myString);
 //concatenating strings
 var myString1="Hi I am"+" FlowerKing";
 console.log(myString1);
 //Space is also a character

 //Concatenating strings using compund assignments
 var myString1="The first part";
 myString1 +=" The Second part";
 console.log(myString1);
 //concatinating using variables
 var myString="London";
 var myString2="I am from "+myString+" and it is a nice place";
 console.log(myString2);
 //Appending using variables
 var myString="Handsome";
 var myString2="I am ";
 myString2 +=myString;
 console.log(myString2);
 //To find a length of a string .length is the string method
 var myStringLength=myString.length;
 console.log(myStringLength);
 console.log(typeof(myStringLength));
 // bracket notation for accessing a string
 //Base zero positive index
 var index=myString[0];
 console.log(index); 
//We can't use the negative index to access the last character use this
var index=myString[myString.length-1];
 console.log(index);
 //Strings are immutable
 var myString="dello world";
 myString[0]="H"; //Update will not work because Strings are immutable
 console.log(myString);
 myString="Hello world";
 console.log(myString);
 //String indices
 console.log(myString.slice(0,5)); //It includes the start index but not include the end index


 // empty string 
 function world (name , age , gender)
 {
    var a = "";
     a+="my name is: "+name+" my age is: "+age+" my gender: "+gender;
    return a;

 }
 console.log(world("bal",20,"male"));

 // array is in javascript
 var employes= ["kanna","raj",23];
 console.log(employes);// array can any data type 

 // access array 
 console.log(employes[0]);
 console.log(employes[employes.length-1]);
 //nested array 
 var mutrix=[[0,2,0],[3,3,3]];
 console.log(mutrix[0][1]);
 console.log(mutrix[1][2]);
 // assign new values in array
 mutrix[0][1]=5;
 console.log(mutrix[0]);
 //array is mutable

 // access multidimension array 
 var mutrix=[[[0,0,0],[1,2,0]],[[0,0,1],[3,3,3]]];
 console.log(mutrix[0][0][0]);
 console.log(mutrix[1][0][0]);


 // push() in javascript is equals to append() in python
 var ab= ["poo","raj","world"];
 console.log(ab);
 var abc=["balraj"];
 ab.push(abc);
 console.log(ab);
 ab.push("vijay");
 console.log(ab);
 ab.push(23);
 console.log(ab);
 ab.push(true);
 console.log(ab);
 //pop() function in java script is same as pop function in python
// it removes the last item
var ab= ["poo","raj","world"];
console.log(ab);
var removed = ab.pop();
//.pop() function returns the removed item which can be stored in a variable.
console.log(removed);
console.log(ab);
//shift() works same as pop function but it removes and returns the first item.
var ab= ["poo","raj","world"];
console.log(ab);
var removed = ab.shift();
console.log(removed);
console.log(ab);
var removed = ab.shift();
console.log(removed);
 // unshift() in javascript is same as append() in python but it add values in front of the array
 var ab= ["poo","raj","world"];
 console.log(ab);
 var abc=["balraj"];
 ab.unshift(abc);
 console.log(ab);
 ab.unshift("vijay");
 console.log(ab);
 ab.unshift(23);
 console.log(ab);
 ab.unshift(true);
 console.log(ab);
 



 



 