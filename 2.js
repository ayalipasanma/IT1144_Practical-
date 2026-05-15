console.log(10=="10");//true
console.log(10==="10");//false
console.log(12!=5);//true
console.log(12>8);//true
console.log(12<=8);//false
console.log(12<8);//false
console.log(12>=8);//true

let age= 30;
let hasId= false;

console.log(age>= 18 && hasId === true); //true
console.log (age>=18 || hasId === false);//true 
console.log (!hasId);//true 

let age=20;

if(age>=18){
	console.log("You are an Adult")
}
console.log("this always runs")