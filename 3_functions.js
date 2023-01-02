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









