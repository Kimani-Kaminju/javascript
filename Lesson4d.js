//exporting modules in js
//we do export function,variable ,modules etc to make them available for use in other parts of the program

export const calculator = (x,y) =>{
    let difference = x-y
    console.log("The difference of the two numbers is:",difference)
}
export const simpleInterest = (principle,rate,time) =>{
    let si = (principle*rate*time)/100
    console.log("The interest gained is:",si)
}
export const distance = (speed,time)=>{
    let dist = (speed*time)
    console.log("The distance covered is:",dist)
}