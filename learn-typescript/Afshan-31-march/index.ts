//1.Hello variable
let greeting:string="Hello world";
console.log("Greetings:" ,greeting);
//2.Basic Math
//Addition
let n1 = 10;
let n2 = 2;
console.log("Addition:",n1+n2);
//Subtraction
console.log("Subtraction:" ,n1-n2);
//Division
console.log("Division:" ,n1/n2);
//Multiplication
console.log("Multiplication:", n1*n2);
//Swapping value
let a=5;
let b=10;
//before swapping
console.log("Before:", "a=", a);
console.log("Before:", "b=", b);
a=a+b;
b=a-b;
a=a-b;
//After swapping
console.log("After" ,"a=", a);
console.log("After","b=", b);
console.log("After","b=", b);
//4.Type Annotation
let myString= "123";// creating a string variable
console.log("string variable:", myString);
let myNumber= Number(myString);//converting its type
console.log("Number Value:", myNumber);
//5. Modulus
console.log("Modulus:", n1%n2);
//6.Increment Challange
let n=6
console.log("increment with 1:", n+1);
console.log("increment with ++:",++n);
//7.Logical Gates
let variable1= true;
let variable2= false;
let variable3= true;
// AND gate expression
console.log("AND Gate Result:", variable1 && variable2 && variable3);
//OR gate expression
console.log("OR Gate Result:", variable1 || variable2 || variable3);
// NOT gate expression
console.log("OR Gate Result:", !variable1);
//8.Compound Assignment
let x=7;
console.log("Assignment:",x);
x+=3;
console.log("Assign +3;", x);
x-=3;
console.log("Assign -3:" , x);
//9. Even or odd
let f= 7;
if(f%2 ==0){
    console.log(f+ "is even.");
}else{
    console.log(f+ "is odd.");
}
//10. Voting elegibility
let age= 20;
if (age>18){
    console.log("You are elegible to vote!");
}else{
    console.log("You are not yet eligible to vote.");
}
//11.Grading System
let score=85;
let grade;
if (score>=90){
    grade='A';
}else if (score>=80){
    grade='B';

}else if(score>=70){
    grade='C';
}else if(score>=60){
    grade='D';
}else{
    grade='F';
}
console.log("Your grade is:"+ grade);
//12. Max of three
let num1= 12
let num2 = 23
let num3= 20
let max= Math.max(num1,num2,num3);
console.log("The max num is:"+ max);
//13. Leap checker
const currentyear= 2024;
if(currentyear %4==0 && currentyear%100!==0|| currentyear%400==0){
    console.log(currentyear+"is a leap year!");
}else{
    console.log(currentyear+"is not a leap year!");
}
//14. Fahrenheit to celcius converter
let Fahrenheit=78;
let celcius=(Fahrenheit-32)*5/9;
console.log(Fahrenheit +"degrees fahrenheit is equal to"+ celcius+ "degrees celcius");
//15. Positive, Negative or zero
const d= -7;
if (d>0){
    console.log(d + "is a positive num.");
}else if (d<0){
    console.log(d + "is a negative num.");
}else{
    console.log(d + "is zero.");
}
//16. Multiplication of table
let table=7;
for(let i=1;i<10;i++){
    console.log(table +"x" + "=" + table*i);
}



