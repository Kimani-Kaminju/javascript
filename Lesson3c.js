///Functions with parameters
//parameters are values that get passed as arguments when calling a function
//Parameters helps us create functions that are reusable throughout a program
//parameters appear inside the brackets of the functions

function greeting(name){
    console.log("Hello",name,"How have you been?")
}
//from above,greeting is the name of the function .Inside of the Paranthesis , we have "name" as the parameter

greeting("Joseph Simon")
greeting("Margret Lucy")

///Multiplication
function Multiplication(number1,number2,number3){
    let product = number1 * number2 *number3
    console.log("The product of the numbers is:",product)
}
Multiplication(10,5,6)
Multiplication(10,10,10)

console.log("=================================")

///area of triangle
function area(base,height){
    let product = 0.5 * base * height
    console.log("The area is:",product)
}
area(10,5)

console.log("=================================")
///speed=180 dist=80km,function to find time taken
function time(dist,speed){
    let time = dist/speed
    console.log("The time in hours is:",time)
}
time(80,180)