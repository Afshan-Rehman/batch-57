//1. Hello variable 
let greeting = "Hello world";
console.log("Greetings:", greeting);
//2. Basic Math
// Addition
let a=10;
let b=2;
console.log("Addition:", a+b);
//Sub
console.log("Subtraction:", a-b);
//Divion
console.log("Division:", a/b);
//Multiplication
console.log("Multiplication:", a*b);
//Exponention
console.log("Exponent:", a**b);
//3.Swapping value
let c=6;
let d=8;
console.log("Before Swapping:c= ",c,"d=",d);
let temp=c;
c=d;
d=temp;
console.log("After Swapping:c=,",c,"d=",d);
//4. Type Annotation
let myString="45";
let myNumber= Number(myString);
console.log(myNumber);
//5. Modulus
console.log("Modulus:", a%b);
//6. Increment challange
let n=10;
console.log("Increment +1:",n+1);
console.log("Increment with ++n:",++n);
//7. Logical Gates
//AND gate
let input1 =true;
let input2 =false;
let output = input1 && input2;
console.log("AND Gate:",output);
//OR gate (||):
let Output = input1 || input2;
console.log("OR Gate:" ,output);
//NOT gate(!):
let input = true;
let outPut =!input;
console.log("NOT Gate:" ,output);
//8. Compound Assigmen
let z=7;
console.log("Assignment:",z);
z+=3;
console.log("Assign +3;", z);
z-=3;
console.log("Assign -3:" , z);
//9. Even or odd
let f= 7;
if(f%2 ==0){
    console.log(f+ "is even.");
}else{
    console.log(f+ "is odd.");
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
const j= -7;
if (j>0){
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


