// 백준 입력 받는 코드
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
function solution(input) {
    const index = input[0];
    let increase = 0;
    let decrease = 0;

    for(i = 2; i<= index; i++) {
        if(input[i-1] > input[i]) {
            decrease++;
        } else if(input[i-1] < input[i]) {
            increase++;
        }
    }

    if(increase === index-1) {
        console.log("INCREASING")
    } else if(decrease === index-1) {
        console.log("DECREASING")
    } else {
        console.log("NEITHER")
    }
}