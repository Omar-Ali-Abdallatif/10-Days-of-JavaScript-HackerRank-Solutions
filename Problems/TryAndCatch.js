function reverseString(s) {
    try {
        let reversed = s.split('').reverse().join('')
        return reversed
    } catch (error) {
        console.log(error.message)
        return s
    }
    
}

console.log(reverseString("1234"))