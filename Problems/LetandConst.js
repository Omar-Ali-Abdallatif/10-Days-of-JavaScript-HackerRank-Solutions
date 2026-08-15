/*
Declare a constant variable PI,and assign it the value Math.PI. You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
Read a number, r , denoting the radius of a circle from stdin.
Use PI and r to calculate the area and perimeter of a circle having radius r.
Print the area as the first line of output and print the perimeter as the second line of output.
*/ 

const PI = Math.PI
console.log(PI)

function getArea(r){
    let area
    area = PI * r ** 2
    return area
}

function getPerimeter(r){
    let perimeter
    perimeter = 2 * PI * r
    return perimeter
}

let r = 2.6

console.log(getArea(r))
console.log(getPerimeter(r))
