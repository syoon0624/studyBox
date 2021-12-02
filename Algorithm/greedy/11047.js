const input = [];
const strToNumArr = (str) =>
  str.split(' ').map((numString) => Number(numString));

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    input.push(line.trim());
  })
  .on('close', function () {
    const [N, K] = strToNumArr(input.shift());
    const values = input.map((v) => Number(v));

    let k = K;
    let n = N;
    let result = 0;
    
    for(let i = n-1; i >= 0; i--) {
        if(parseInt(k / values[i]) > 0) {
            result += parseInt(k/values[i]);
            k = k%values[i];
        }
        if(k === 0) {
            break;
        }
    }

    console.log(result);
  });