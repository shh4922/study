const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath, 'utf-8').toString().trim().split("\n")


const N = input[1].split(" ").map(Number)
const map = new Map()
for(const n of N) {
    map.set(n,n)
}

const M = input[3].split(" ").map(Number)
let result = ""
for(const m of M) {
    if(map.has(m)) {
        result+='1 '
    } else {
        result+= "0 "
    }
}

console.log(result.trim())