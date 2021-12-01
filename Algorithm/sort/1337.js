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
    let count = 0;
    let maxCount = 0;
    let inputArr = [];
    for(i = 1; i<= index; i++) {
        inputArr.push(input[i]);
    }
    inputArr = inputArr.sort((a,b) => a - b);

    for(i=1;i<index;i++) {
        if(inputArr[i] - inputArr[i-1] === 1) {
            console.log("!");
            count++;
        } else {
            maxCount = count;
            count = 0;
        }
    }
    if(maxCount >= 5) {
        console.log(0);
    }
    if(maxCount < 5) {
        console.log(5-maxCount);
    }

}