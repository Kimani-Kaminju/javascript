//Comparison operators
//they evaluate to true or false..for compariong two or more values

let number1 = 5
let number2 = 10
console.log(number1 > number2)
console.log(number1 == number2)
console.log(number1 < number2)
console.log(number1 >= number2)
console.log(number1 <= number2)
console.log(number1 != number2)
console.log(number1 === number2)//strict equal to-evaluates both the data type and the value
console.log(number1 !== number2)//strict not equal to-evaluates both the data type and the value

////logical operators
//used in evaluating multiple conditionsnand they also return a Boolean

///Logical AND (&&)
//evaluate to true only if both the conditions are true

console.log((number1 < number2) && (number2 > number1))

///Logical OR (||)
//evaluates to true if one of the conditions is true
console.log((6 > 3)|| (3 > 8))

///Logical not
//negates a condition
console.log(!(4 < 5))