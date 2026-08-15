function isPositive(number){
    if (number > 0) {
        console.log("YES")
    }
    else if (number == 0){
        throw new Error("Zero Error")
    }
    else{
        throw new Error("Negative Error")
    }
}


console.log(isPositive(10))