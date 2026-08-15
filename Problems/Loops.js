function vowelsAndConsonants(s) {
    let vowels = ['a','e','i','o','u']
    let stringCharacters = []
    for (let i = 0; i < s.length; i++) {
        stringCharacters.push(s.charAt(i))
    }

    for (let i = 0; i < vowels.length; i++) {
        if (vowels.includes(stringCharacters[i])) {
            console.log(stringCharacters[i])
        }
    }

    for (let i = 0; i < stringCharacters.length; i++) {
        if(!vowels.includes(stringCharacters[i])){
            console.log(stringCharacters[i])
        }
    }
    
}

let stringElement = "learnjavascriptloopsinhackerrankweekofcode"
vowelsAndConsonants(stringElement)