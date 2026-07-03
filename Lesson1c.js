//Object data type
//an object is a data type that stores data items in terms of key-value pairs

let person = {
    Name : "James Atieno",
    Age : 54,
    isRegistered :true

};
console.log("The details of the person:",person)

//to access the items of an object,we use:
//1)square brackets
console.log(person["Name"])
console.log(person["Age"])
//2)use of the dot separator
console.log(person.isRegistered)
console.log(person.Name)

//array data type
//array-collections of items that are related in a certain way and are registeres into indexes
let fruits = ["Banana","Apples","Mango","Melon","Pineapple","Grapes"]

//to access items in array
console.log(fruits[3])
console.log(fruits[5])

console.log(fruits.slice(2,5))