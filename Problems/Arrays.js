function getSecondLargest(nums) {
    // Complete the function
    n = nums.length;
    let isSwapped;
    for(let i = 0; i < n; i++){
        isSwapped = false
        for(let j = 0; j < n-i-1; j++){
            if (nums[j] < nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
                isSwapped = true;
            }
        }
        if (!isSwapped) break;
    }
    let numbers = new Set (nums)
    return Array.from(numbers)[1]
}

let nums = [2,3,6,6,5]
console.log(getSecondLargest(nums))