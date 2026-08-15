function modifyArray(nums){
    let modifiedArray = [];
    for (let num of nums){
        if (num % 2 === 0){
            modifiedArray.push(num * 2)
        }else{
            modifiedArray.push(num * 3)
        }
    }
    return modifiedArray
}