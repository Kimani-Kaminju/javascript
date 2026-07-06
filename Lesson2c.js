///if...else if...else conditional statement
//This conditional statement is used in evaluating mulitiple conditions and if a condition is met the execution of the program stops

let age  = 14

if (age < 15){
    console.log("You are too young to watch this episode ,wait and grow up")
}

else if(age >= 15 && age <=18){
    console.log("You can watch under parent supervision")
}

else if(age > 18 && age < 40){
    console.log("Have a seat and enjoy the episode")
}

else{
    console.log("This episode is not suitable for you")
}