'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
function getMaxLessThank(n, k){
    let s = []
    let max = -Infinity
    for(let a = 1; a <= n; a++){
        s.push(a)
        for(let b = a+1; b <= n; b++){
            let bit = a & b 
            if(bit < k && bit > max){
                max = bit
            }
        }
    }
    return max;
    
}

function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}