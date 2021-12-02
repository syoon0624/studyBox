const input = [];
const strToNumArr = (str) =>
  str.split(' ').map((numString) => Number(numString));

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    input.push(line.trim());
  })
  .on('close', function () {
    const n = Number(input[0]);
    input.shift();
    const values = input.map((v) => strToNumArr(v));
    let result = 1;

    let start = 0;

    //회의가 끝나는 시간을 기준으로 오름차순 정렬
    values.sort((a,b) => {
        if(a[1] === b[1]){
            return a[0] - b[0];
        } else {
            return a[1] - b[1];
        }
    })

    start = values[0][1]; 

    for(let i=1;i<n;i++) {
        // 제일 먼저 끝나는 시간이기때문에 불변하게 개수 +1
        if(values[i][0] >= start) {
            start = values[i][1];
            result++;
        }
    }
   
    console.log(result);
  });