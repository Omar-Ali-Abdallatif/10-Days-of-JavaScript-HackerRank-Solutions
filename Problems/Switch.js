let SA = ['a','e','i','o','u']
let SB = ['b','c','d','f','g']
let SC = ['h','j','k','l','m']
let SD = ['n','p','q','r','s','t','v','w','x','y','z']

function getLetter(letter) {
    switch (true) {
        case SA.includes(letter):
            console.log("A")
            break;
        case SB.includes(letter):
            console.log("B")
            break;
        case SC.includes(letter):
            console.log("C")
            break;
        case SD.includes(letter):
            console.log("D")
            break;
        default:
            break;
    }

}

console.log(getLetter("b"))