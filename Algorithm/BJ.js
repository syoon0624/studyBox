// 백준 입력 받는 코드
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// readline
const rl = require('readline').createInterface({ input: process.stdin,
    output: process.stdout
    });

let input = [];
rl.on('line', function(line) {
    input.push(line);
}).on("close", function() {
    solution(input);
    process.exit();
});