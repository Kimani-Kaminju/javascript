let mark = 50

if ( mark < 35){
    console.log("Grade attained is E")
}
else if ( mark >= 35 && mark < 40){
    console.log("Grade attained is D-")
}
else if ( mark >= 40 && mark <45){
    console.log("Grade attained is D")
}
else if ( mark >= 45 && mark < 50){
    console.log("Grade attained is D+")
}
else if ( mark >= 50 && mark < 55){
    console.log("Grade attained C-")
}
else if ( mark >= 55 && mark < 60){
    console.log("Grade attained is C")
}
else if ( mark >= 60 && mark < 65){
    console.log("Grade attained is C+")
}
else if ( mark >= 65 && mark < 70){
    console.log("Grade attained is B-")
}
else if ( mark >= 70 && mark < 75){
    console.log("Grade attained is B")
}
else if ( mark >= 75 && mark < 80){
    console.log("Grade attained is B+")
}
else if ( mark >= 80 && mark < 85){
    console.log("Grade attained is A-")
}
else if ( mark>= 85 && mark <=100){
    console.log("Grade attatined id A")
}
else{
    console.log("Invalid entry")
}

console.log("==================================================================")

let year = 2000
for ( year = 2000 ; year <= 2030 ; year++){
    if(year % 4 === 0){
        console.log(year)}
}

console.log("=============================")
 
let distance = 101

if (distance <= 100){
    console.log("Pay 5 USD")
}

else if(distance > 100 && distance <= 500){
    console.log("Pay 10 USD")
}

else if(distance > 500 && distance <= 1000){
    console.log("Pay 20 USD")
}


else if(distance > 1000){
    console.log("Pay 40 USD")
}
else{
    ("Invalid Entry")
}
