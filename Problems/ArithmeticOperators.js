/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/

function getArea(length, width){
    let area;
    area = length * width
    return area
}

function getPerimeter(length, width){
    let perimeter
    perimeter = 2 * (length + width)
    return perimeter
}

let length = 3
let width = 4.5

console.log(getArea(length, width))

console.log(getPerimeter(length, width))