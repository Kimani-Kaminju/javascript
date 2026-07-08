//Javascript function
//function is a block of code that performs a certian action
//The structure 
// function keyword,name of the function,paranthesis and body of the function

function sayHello(){
    console.log("Hello there.Hope You are doing fine")
}
//invoke the function
sayHello()

for (let i=0;i<=5; i++){
    sayHello()
}
console.log("=================================")
//addition
function addition(){
    let number1 = 10
    let number2 = 30

    let sum = number1+number2
    console.log("The sum of the number is:",sum)
}
addition()

console.log("=================================")
function Interest(){
    let principle = 50000
    let rate = 7/100
    let time = 8

    let SI = principle * rate * time
    console.log("Your interest is:",SI)

}
Interest()