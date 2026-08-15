function getCounter(objects){
    let counter = 0
    for(let object of objects){
        if (object.x === object.y) {
            counter++
        }
    }
    return counter
}

let objects = [];
objects.push({x: +(3), y: +(3)});
objects.push({x: +(2), y: +(3)});
objects.push({x: +(1), y: +(1)});
console.log(getCounter(objects));
