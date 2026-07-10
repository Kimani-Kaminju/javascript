//arrow functions
//function that was introduced in the ECMA script 6 and they give the latest way of defining functions in a compact manner
// at times the arrow function can be said to be an anonymous function why?because they use the names of the variables they are connected to

//examples
const sayHello = () =>{
    console.log("This is an arrow function.")
}
sayHello()
console.log("=======================")
//create arrow function
const product = () =>{
   let a = 40
   let b = 20
   let c = 20
   let ans = a*b*c
   console.log("The product of the numbers is:",ans)
}
product()