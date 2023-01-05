

//Functions in Javascript
function welcomeFunction(name){

    return "Welcome " + " " + name;
    //Return statements return some value that can be stored in some variable
    //name is a argument that pass inside the function
}
var name = welcomeFunction("Ulaga");
console.log(name);
console.log(typeof(name));

function addFunction(a,b,c){
    return a+b+c;
}
var addValues = addFunction(5,4,4);
console.log(addValues);
console.log(addFunction(5,4,4));
//Scope means visibility of variables
//Global scope : should be declare outside the function, can be use outside and inside the function
var d = 10;
function addFunction(a,b,c){
    return a+b+c+d;
}
console.log(d+5); //can be use outside the function
var addValues = addFunction(5,4,4); //can be use inside the function
console.log(addValues); 
//if you use var keyword to create a variable inside the function then it has function scope
//if you don't use the var keyword to create a variable inside the function then it has global scope

function globalScope(a,b){
    c = 10;
    return a+b+c;
}

console.log(globalScope(5,5)); //functional scope
//console.log(c+5); //global scope

function globalScope(a,b){
    var c = 10;
    return a+b+c;
}
//console.log(c+5); //global scope does not work
console.log(globalScope(5,5)); //functional scope
//Conclution Scope : visibility of variables
//global scope : declaring outside the function it can be use outside and inside the function 
//when you define a variable with var keyword inside the function it has local scope
//when you don't use the var keyword it has global scope this is not a best practice
function globalScope(){
    var var1 = 10;
    console.log(var1);
    return var1

}
e = globalScope(); //c is local scope
console.log('e:',e); 

//console.log('var1:',var1); //it will not work because it has local scope
// overwriting global variable in a function
var menswear = "hoodie"

function dress(){
    var menswear = "denim"// this will overwrite only inside the function

    return menswear
}
console.log(menswear)// this is accessing global variable
console.log(dress())// this is accessing local funtion varibale menswear dress()
console.log(menswear)//this is accessing global 

// return a value from a function using return statement

function mynum(num){
    return num - 5
    //return undefined // it returns a any data type
}
console.log(mynum(15))

// what will happened when there is no return statement in the function
function mynum(num){
    console.log(num);
    //return num - 5
    //return undefined // it returns a any data type
}
num = mynum(5)// assining a  return value to variable
console.log(typeof(num))// by the default it returns undefined

//stand in line
function nextLine(arr, item){
    arr.push(item);
    return arr.shift();
}

var testarray= [9,8,7,6,5]

console.log("before: ", JSON.stringify(testarray))
var firstItem = nextLine(testarray, 55)
console.log(firstItem)
console.log("after: ", JSON.stringify(testarray))
console.log(testarray)
console.log(typeof(testarray))
console.log(typeof(JSON.stringify(testarray)))

// true, false boolean in javascript

// if condition in function
function oddOrEven(num){
    if (num%2==0){// = sign is assingment oprater, and == sign is comparison operator   
        return true
        
    }
    return false
}

console.log(oddOrEven(2))
console.log(oddOrEven(3))


// equality ==
// strictly equality operator - compare even the data types.
console.log(5==5) //Does not validate the type
console.log(5=='5') //Does not validate the type
console.log(5===5) //Validate the type
console.log(5==='5') //Validate the type


function CompareThreeValues(a,b,c)
{
    if(a===b && b===c && a===c){
        //console.log("A ,B,C are the same Datatype")
        return "A ,B,C are the same Datatype"
    }
    else if(a==b && b==c && a==c)
     {
        //console.log("A ,B,C are the same Values")
return "A,B,C are the same Values"
     }
     else{
      //  console.log("A ,B,C are not same values")
        return "A,B,C are Not same Values"
     }
}
console.log(CompareThreeValues("5",5,5))
console.log(CompareThreeValues(5,5,5))
console.log(CompareThreeValues(5,7,5))

function InEqualityOperator(a,b)
{
if (a!=b )
{
console.log("A is Not Equal To B")
}
else if (a!==b)
{
    console.log("Strictly Not Equal")
}
else{
    console.log("Both Are Equal")
}
}


InEqualityOperator(5,"5")// Strictly Not Equal Operator
InEqualityOperator(5,6)// It is an Not Equal Operator
InEqualityOperator(5,5)

//a > b means a is greater than b 
// a>=b means a is greater than b or a is equal to b
//a < b means a is lesser than b 
// a<=b means a is lesser than b or a is equal to b
// && means and in python  eg:-a===b && b===c && a===c
// || means or operator in pytjon eg:-a===b || b===c || a===c

// Wrong order of if else statement
function check_wrong(num)
{
    if(num < 10)
    {
        return "number is less than 10"
    }
    else if(num < 5)
    {
        return "number is less than 5"
    }
    else {
        return "number is grater than 10"
    }
}
console.log(check_wrong(7));
console.log(check_wrong(3));

// right order of if else statement
function check(num)
{
    if(num < 5)
    {
        return "number is less than 5"
    }
    else if(num < 10)
    {
        return "number is less than 10"
    }
    else {
        return "number is grater than 10"
    }
}
console.log(check(7));
console.log(check(3));

// cricket code



function cricket(score){
    var a=["six","four","out","ones"]  
    if(score===6){
        return a[0];
    }else if(score==4){
        return a[1];
    }else if(score==1){
        return a[3]
    }else{
        return a[2]
    }
}
console.log(cricket(6));
console.log(cricket(4));
console.log(cricket(1));
console.log(cricket(0));
console.log(cricket('6'));


//switch case
function switchCricket(score){
    var a=["six","four","out","ones"]
    var answer="" ; 
    switch(score){
        case 6: 
            answer=a[0]
            break;
        case 4: 
            answer=a[1]
            break;
        case 1: 
            answer=a[3]
            break;
        case 0: 
            answer=a[2]
            break;
        default :
            answer="nothing...";
    }
    return answer;
}
console.log(switchCricket(6));
console.log(switchCricket(4));
console.log(switchCricket(1));
console.log(switchCricket(0));
console.log(switchCricket('6'));// its returning empty string


// Multiple identical options in Switch statement
function sequentialValues(values){
   // var a=["six","four","out","ones"]
    var answer="undefined" ; 
    switch(values){
        case 1: 
        case 2: 
            answer="0";
            break;
        case 3: 
            answer="Low";
            break;
        default :
            answer="nothing...";
    }
    return answer;
}
console.log(sequentialValues(2));
console.log(sequentialValues(4));
// Replacing if else statement with switch

// age Calculater -1
function ageCalculater(age){
    if(age<=18){
        values=0;
    }
    else if(age<=45){
        values=1;
    }
    else{
        values=2;
    }
     var answer="undefined" ; 
     switch(values){
         case 0: 
             answer="U Cant Open Bank Account";
             break;
         case 1: 
             answer="Bussines Account";
             break;
         case 2: 
             answer="Life Insurense";
             break;
     }
     return answer;
 }
 console.log(ageCalculater(16));
 console.log(ageCalculater(22));
 console.log(ageCalculater(47));
// When you have one condition and one default
 var age_1=19;
 var check=age_1<=18?1:2; // 2 is the default
 var answer="";
 
 switch(check)
 {
    case 1:
        answer="Eligible"
        break;
    case 2:
        answer="Not Eligible"
        break;
    default :
        answer="Default Value"    
 }
 console.log(answer);


 // Return Early From Function
 function returnEarly(){
    a=10;
    a=6;
    return a;
    a=15;//It Does Not Read Code Below The Return Statement
    b = 1;
    return b
 }
 console.log(returnEarly());

 //One Method Has Only One Return Value
 function returnCondition(a){
  if(a>10){
    return a;
  }
  else{
    return 0,"HI",true;// It Will Return A Concatination String
    //return 0,"HI",true;// It Will Return The Last Value
  }
 }
 console.log(returnCondition(21));
 console.log(returnCondition(1));
 console.log(typeof(returnCondition(1)));

//Objects

function myDogs(name,legs,age,hands){
    var myObj = {
        "name": name,
        "legs": legs,
        "age": age,
        "hands": hands
    }
    return myObj;
}
console.log(myDogs("Jacky",4,100,2));
console.log(typeof(myDogs("Jacky",4,100,2)));

//Accessing Object
var dog_1 = myDogs("Jacky",4,100,2)
console.log(dog_1);
// method 1    Using Dot Notation
console.log(dog_1.age);
// method 2    Using Square Bracket
console.log(dog_1["age"]);

//Setting The Properties Of An Object To A Variable
var dog_1_age = dog_1.age
console.log(dog_1_age);
console.log(typeof(dog_1_age));
var dog_1_age = dog_1["age"]
console.log(dog_1["age"]);
 //Changing the properties or values of the object
 var dog_1 = myDogs("Jacky",4,100,2)
 console.log(dog_1);
 dog_1.age = 20;
 console.log(dog_1);
 dog_1.teeth = 20;//To add a new properties to our object
 console.log(dog_1);
 dog_1['teeth'] = 14;//Over writing the existing property
 console.log(dog_1);
 //Delete a property in the object
 // Delete keyword - delete
//  delete dog_1.teeth;
 delete dog_1['teeth'];
 console.log(dog_1);


 //Using objects for lookup

function objectCricket(score){
    var a={6:"six",
    4:"four",
    0:"out",
    1:"ones"}
    var answer="" ; 
    answer = a[score];
    return answer;
}
console.log(objectCricket(6));
console.log(objectCricket(4));
console.log(objectCricket(1));
console.log(objectCricket(0));

//Testing objects for properties
//hasOwnProperty pre-defined function
var a={6:"six",
    4:"four",
    0:"out",
    1:"ones"}
    
function checkObject(object,checkProp) {
    if (object.hasOwnProperty(checkProp)){
        return object[checkProp];
    }
    else{
        return "Not Found"
    }
 }
 console.log(checkObject(a,"6"));
 console.log(checkObject(a,1));
 console.log(checkObject(a,"iiii"));

 //Manupulating complex object
 var myMusic = {

    "artist" : {
        1: "anirudh ravichander",
        2: "aggarwal"
    },
    "song": "Kannama xx"
 }

 console.log(myMusic.song);
 console.log(myMusic['song']);
 console.log(myMusic.artist[1]);
 //console.log(myMusic.artist.2); this isn't possible
 console.log(myMusic['artist'][2]);


 //Array of Objects
 var myMusic = [
{
    "artist" : {
        1: "anirudh ravichander",
        2: "aggarwal"
    },
    "song": "Kannama xx"
},
{
    "artist" : {
        1: "U1",
        2: "aggarwal"
    },
    "song": "ayin"
}
]
console.log(myMusic[0].artist[2]);
console.log(myMusic[1]['artist'][1]);
console.log(myMusic[1]['song']);

//Record Collection - Nested Objects

var myMusic = {
    0:{
        "artist" : {
            1: "anirudh ravichander",
            2: "aggarwal"
        },
        "song": "Kannama xx"
    },
    
    1: {
        "artist" : {
            1: "U1",
            2: "aggarwal"
        },
        "song": "ayin"
    }
}
console.log(myMusic['0']['song']);

//2:08:57 video time to Create a function for Assigment
//iterate with while loops
var studentName=[]
var i=0;
while(i<5){

studentName.push(i)
i++;
}
console.log(JSON.stringify(studentName));
//iterate with for loops
var myArray=[] 
//for(initailizing var,condition,var operator)
for(var i=0;i<5;i++){
    myArray.push(i);
}

console.log(JSON.stringify(myArray));

//json.stringify explanation
console.log(typeof((myArray)));
console.log(myArray);

console.log(typeof(JSON.stringify(myArray)));
// Method 1
//iterate odd numbers with for loops
var oddArray=[]
for(var i=1;i<100;i+=2){
    oddArray.push(i);
}
console.log(oddArray);
console.log(typeof(oddArray));

//iterate evan numbers with for loops
var evenArray=[]
for(var i=0;i<100;i+=2){
    evenArray.push(i);
}
console.log(evenArray);
//method 2 Modulus
//iterate odd numbers with for loops
var oddArray=[]
for(var i=1;i<100;i++){
    if(i%2!=0){
    oddArray.push(i);
    }
}
console.log(oddArray);
console.log(typeof(oddArray));

//iterate evan numbers with for loops
var evenArray=[]
for(var i=0;i<100;i++){ //i<100 is range ,not a condition
    if(i%2==0){
    evenArray.push(i);
}
}
console.log(evenArray);
//count backwards with for loops
//method 1
var evenBackArray=[]
for(var i=100;i>0;i--){ //i<100 is range ,not a condition
    if(i%2==0){
    evenBackArray.push(i);
}
}
console.log(evenBackArray);
//method 2
var evenBackArray=[]
for(var i=100;i>0;i-=2) //i<100 is range ,not a condition
{
    evenBackArray.push(i);
}

console.log(evenBackArray);
//odd numbers
var oddBackArray=[]
for(var i=99;i>0;i-=2) //i<100 is range ,not a condition
{
    oddBackArray.push(i);
}

console.log(oddBackArray);
//iterate through array with  for loops

//Itterate for loop
var total=0;
for(var i=0;i<oddBackArray.length;i++){
  total+=oddBackArray[i];
}
console.log(total);

//nesting for loops

var a =[[2,7,3,8],[1,1,1],[2,2,2],[9,7,4,5]]

//console.log(a[0][2]);
for(var i=0;i<a.length;i++){
    for(var j=0;j<a[i].length;j++){
console.log(a[i][j]);
    }
}

//by using nested for loops find the product of all the elements in array a

function productArray(myArray){
    var product =1;
    for(var i=0;i<a.length;i++){
        for(var j=0;j<a[i].length;j++){
            product*=a[i][j];
        }
    }
    return product;
}
console.log(productArray(a));

//iterate do ...while loops

var urArray =[];
var i = 10;
while(i<5){
    urArray.push(i);
    i++
}
console.log(i,urArray);


//comparing with while
var urArray =[];
var i = 10;
do{
    urArray.push(i);
    i++
}while(i<5)
console.log(i,urArray);   //do loop executes first and then while loop checks for the condition

//profile lookup

var data=[
    {
        "name":"vikki",
        "age":90,
        "phnum":098765,
        "likes":["freefire","insta","volleyball"]
    
    },
    {
        "name":"rajesh",
        "age":95,
        "phnum":098795,
        "likes":["travel","insta","volleyball"]
    
    },
    {
        "name":"azar",
        "age":100,
        "phnum":098765,
        "likes":["thala","insta","volleyball"]
    
    }
] 
function seniorLookup(data,name,prop)
{
    
    for(var i=0;i<data.length;i++)
    {
        if(data[i]['name']===name)
        {
            return data[i][prop] || "nothing here" ; //we can give multiple option for return in JavaScript 
            
        }
    }
    return "Not found";
}
console.log(seniorLookup(data,"azar","likes"));
console.log(seniorLookup(data,"azar","gf"));


//generate random fractions

console.log(Math.random()); // 0 to 1

//generate whole no.

console.log(Math.floor(Math.random()*200));

//Generate random whole numbers within a range

function myRandomNumber(ourMin,ourMax){
    return Math.floor(Math.random()*(ourMax - ourMin + 1)) + ourMin;
}
console.log(myRandomNumber(15,1500));
console.log(myRandomNumber(6,9));

//using parseInt Function in JavaScript
// convert string into an integer

function convertNumber(str){
    return parseInt(str);
}
console.log(convertNumber("56"));
console.log(typeof(convertNumber("56")));
console.log(convertNumber("97nnn97nna"));
console.log(typeof(convertNumber("97nnn97nna")));
console.log(convertNumber("nnnnna97"));
console.log(typeof(convertNumber("nnnnna98")));
// without function
var age='23';
var stringToNumber=parseInt(age);
console.log(typeof(stringToNumber));

//use the parseInt function in JS with Radix

function myVariable(str){
    return parseInt(str,2);
}
console.log(myVariable("00010"));
console.log(myVariable("11111"));

//using the conditional ternary operator
// condition? statement-if-true : statement- if-false;
var a=9;
var b=6;
a>b?console.log(a):console.log(b); //short form of if else statement in JavaScript

// use multiple condition (ternary) operator in JS

function checkSigns(num){
    return num > 0?"positive":num<0?"negative":"zero";
}
console.log(checkSigns(-6));
console.log(checkSigns(0));
console.log(checkSigns(6));


// Difference between var and let keywords
// We cant redeclare in let
let a1 = 9;
console.log(a1)
//let a =1; // Error: We cant re-declare.
a1 = 0 // We can reassign
console.log(a1)
// "use strict" 
function useStrict()
{
    "use strict"; //Restictions are appllied below the "use strict" only.
    let aa =0
    
    let ss=10;
    console.log(ss);
    console.log(aa);

}
useStrict();

//when you don't use var or let the varibales are considered global
function difference ()
{
    a2=15;
    r=25;
    console.log(a2);
    console.log(r);
}
difference();
console.log(a2); // Works fine as the variable is global.
console.log(r); // Works fine as the variable is global.

// Restrictions inside the function
//var has global scope and let has function scope 
// var has global scope when declared inside the function

//error//let has function scope when declared inside the function.

function employee()
    {
        var a=11;//inside the function it global scope
        if(a>10)
        {
            let ii=0;// it is function scope
            console.log(ii);
            console.log(a);
        }
        else
        {
            console.log(ii);
            console.log(a);
        }
    }
employee();
//const keyword is read only we can only declare once.
//We can't re-declare and re-assign.
const pie = 3.14145;
console.log(pie);
//const pi=11; can't re-declare
//console.log(pie);
//pie=15; can't re-assign.
//console.log(pie);


//by convention variable declare with const is uppercase
//right way

const PIE=3.14145;
console.log(PIE);
//Are const array mutable:yes
//We cant reassign
// We can assign individually

const array1=[1,2,3,4,5]
console.log(array1);
array1[1]=3

console.log(array1);

//object.freeze

const CONSTANTS={
    "PI":3.14,
    "G":9.804
}
Object.freeze(CONSTANTS)//It prevent object mutation
console.log(CONSTANTS);
CONSTANTS['PI']=3.15//if we use object.freeze we can't re-assign
console.log(CONSTANTS);

//Arrow function  with parameters.....
function Addition(a,b) {
    return a+b
}
var add=Addition(5,5)
console.log(add);
//arrow function
var add = (a,b)=> a + b
console.log(add(5,5));
var Console = () => "Hey hi....."
console.log(Console());
var Concat=(array3,array4)=>array3.concat(array4);
console.log(Concat([1,2,3],[4,5,6,7]));
//High order Arrow functions

var squareNeedList=[1,0,2,7,-8,9,-6,7.7,-5]

const shortList= arr =>{
    const storeArray=arr.filter(num=>Number.isInteger(num)&&num>0).map(X=>X*X);
    return storeArray;
}
console.log(shortList(squareNeedList));
//default parameters
const valueExample=(x,y=5)=>x+y;
console.log(valueExample(5));
console.log(valueExample(5,13));


//Rest operator with function parameter.
//Rest operator converts parameters passed while calling a function to an array: ... 
const restExample=(...args1)=> args1.concat(5);
console.log(restExample(9,8,7));


//spread Array using spread operator

const month=["jan","feb","march"]

const newMonth=[...month];//spreads the items of the array
month[3]="April";


console.log(newMonth);
console.log(month);

//Destructuring Objects in js

var value = {
    u:3.64,// u is converted to a string data type in js automatically.
    v:6.5,
    w:6.87
}
console.log(value["u"]);

// long,old form
var a = value.u
var b = value.v
var c = value.w
console.log(value.u,value.v,value.w);
console.log(a,b,c);

//short form in js
value['u']=5.78
value['v']=6.98
value['w']=4.63
console.log(value.u,value.v,value.w);

const {u:a3,v:b1,w:c1} = value; //a3,b1,c1 are keys,u,v,w are values,value:key
console.log(value.u,value.v,value.w);
console.log(a3,b1,c1);

//average temperature
const AVGTEMP = {
    today:77,
    tomorrow:79.5,
    yesterday:67.9
};
function getTomorrow(object){
    "use strict";
    // Long Form
    //var tommorrowTemperature = undefined;
    //var todayTemperature = undefined;
    //tommorrowTemperature = object['tomorrow'];
    //todayTemperature = object['today'];

    //short form
    const {today:t1,tomorrow:t2} = object;
    return [t1,t2];

}
console.log(getTomorrow(AVGTEMP));
//console.log(t2);//the variable created in destructuring syntax has local scope.



//Destructuring nested objects
const AVGTEMP1 = {
    today:{min:77,max:78},
    tomorrow:{min:79.5,max:81.5},
    yesterday:{min:67.9,max:70}
};
function getMaxMin(object){
    "use strict";
    const {today:{min:t3},tomorrow:{max:t4}} = object;
    return [t3,t4];

}
function getMaxMinAll(object){
    "use strict";
    const {today:{min:t5,max:t6},tomorrow:{max:t7,min:t8}} = object;
    return [t5,t6,t7,t8];

}

console.log(getMaxMinAll(AVGTEMP1));
console.log(getMaxMin(AVGTEMP1));
//destructuring arrays
var arrayNew = [1,2,3,4,5];
const [a4,b4,c4,d4,e4] = arrayNew;
console.log(a4,b4,c4,d4,e4); 
const [a6,b6,,,c6] = arrayNew;
console.log(a6,b6,c6); 

//swaping variables
let g1=78;
let h1=89;
console.log(g1,h1);

[g1,h1]=[h1,g1]
console.log(g1,h1);

//Using rest operator in destructuring syntax.
const [a9,b9,c9,...args7] = arrayNew;
console.log(a9,b9,c9,args7); 

// use Destructuring assignment to pass an Object as a function Parameters.
stats = {
    min:77,max:78
}
// Without using destructuring syntax.
const value1 = (stats) => (stats.max + stats.min)/2
console.log(value1(stats));
//Using destructuring syntax to pass an Object as a function Parameters.
const value2 = ({max, min}) => (max + min)/2 // Defined for that object.....
console.log(value2(stats));

// Create String Using Templet Literals
const name3="RAJESH";
const age5=22;

const info=`Hi my name is ${name3} and 
my age is ${age5}`;
console.log(info);
// It acts like both multiline and format string.


const result={
    sucess:["max-length","min-length"]
}

const showHtml=(arr) => {
    let emptyArr=[];
    for(var i=0;i<arr.length;i++){
        emptyArr.push(`<li class="Text"> ${arr[i]}</li>`);
    }
    return emptyArr;
}
console.log(showHtml(result.sucess));

//Write simple fields.
// Long form.
const person5=(name5,age,gender) =>{return {name:name5,age1:age,gender1:gender}};
console.log(person5("prawina",99,"Male"));
// Short form.
const person=(name5,age,gender) =>({name5,age,gender});
console.log(person("prawin",99,"Male"));

//Write concise declarative function.

let insideFun={
    'a':6,
    'b':(a) => a*6
}

console.log(insideFun);
console.log( insideFun.b(5));
insideFun.b(5)
console.log(insideFun.b(7));
insideFun.b(7)
console.log(insideFun);

// Use class syntax to defined a constructor function.

class space{
    constructor(planet){
        this.planet=planet;
    }
}
let planet1=new space("jupiter");
console.log(planet1);
console.log(planet1.planet);

//getter and setter access to object.
class Book{
    constructor(author,bookName){
        this._author=author;
        this._bookName=bookName;
    }
//getter
   get writer(){
    return this._author;
   }
//Setter
   set writer(value){
    this._author=value;
   }
}

let book1=new Book("Prawin","My Idol");
console.log(book1);
book1.writer= "Vikki";
console.log(book1.writer)












