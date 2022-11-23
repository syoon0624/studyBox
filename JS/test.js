//문자열 해싱
/*
function solution(str) {
    let k = {};
    let set = new Set;
    let answer = 0;
    for(let i of str) {
        k[i] = (k[i] || 0) + 1;
    }

    for(let i of Object.keys(k)) {
        while(set.has(k[i]) && k[i] > 0) {
            answer++;
            k[i]--;
        }
        set.add(k[i]);
    }

    return answer;
}

let s = "aaabbbcc";
console.log(solution(s));

*/
/*

//1차원 배열 시뮬레이션
function solution(arr) {
    let answer = 1;
    let max = arr[0];

    // for(let i in arr){
    //     for(let j=0;j<i;j++) {
    //         if(arr[j] >= arr[i]) {
    //             flag = false;
    //             break;
    //         }
    //         flag ? answer++: answer;
    //     }
    // }

    for(let i in arr) {
        if(max < arr[i]) {
            max = arr[i];
            answer++;
        }
    }

    return answer;
}

const arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));

*/
/*
//1차원 배열 시뮬레이션(바이토닉)
function solution(arr) {
    let answer = 'YES';
    let top = 0;
    let count = 0;
    let max = 0;

    for(let i = 1; i<arr.length;i++) {
        if(arr[i] > arr[i-1]) {
            top = i;
        } else if (arr[i] == arr[i-1]) {
            answer = 'NO';
            break;
        } else {
            for(let j = i;j<arr.length-1;j++)  {
                if(arr[j] < arr[j+1]) {
                    answer = 'NO';
                    break;
                }
                max++;
            }
            break;
        }
        if(top == arr.length-1) {
            answer = 'NO';
        }
    }

    return answer;
}

const arr = [1, 2, 3, 5, 2, 3, 1];
console.log(solution(arr));

*/

/*
// 최대길이 바이토닉 
function solution(arr) {
    let answer = 0;
    let count = 0;
    let index = [];

    for(let i = 0; i<arr.length;i++) {
        if(arr[i] > arr[i+1]) {
            index.push(i);
        }
    }

    for(let i = 0; i< index.length; i++) {
        //left
        for(j = index[i]; j >= 0; j--) {
            if(arr[j] > arr[j-1]) {
                count++;
            }
            else {
                break;
            }
        }

        //right
        for(j = index[i]; j <arr.length; j++) {
            if(arr[j] > arr[j+1]) {
                count++;
            }
            else {
                break;
            }
        }
        if(answer < count) {
            answer = count + 1;
        }
        count = 0;
    }

    return answer;
}

const arr = [1, 2, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(solution(arr));

*/

// 키보드
/*
function solution(str, k) {
  let upper = 0;

  const set = new Set(str.toLowerCase());

  for (let x of str) {
    if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) upper = 1;
  }

  return set.size + upper <= k ? true : false;
}

const str = "teacher"
const k = 6;
console.log(solution(str, k));
*/

/*
//2차원 배열 - 각 행의 최댓값
function solution(arr) {
    let answer = [];
    let max = 0;

    for(let i = 0; i < 9; i++) {
       for(let j = 0; j < 9; j++) {
            if(arr[j][i] > max) {
                max = arr[j][i];
            }
       }
       answer.push(max);
       max = 0;
    }

    return answer;
}

const arr = [[3, 23, 85, 34, 17, 74, 25, 52, 65], [10, 7, 39, 42, 88, 52, 14, 72, 63], [87, 42, 18, 78, 53, 45, 18, 84, 53], [34, 28, 64, 85, 12, 16, 75, 36, 55], [21, 77, 45, 35, 28, 75, 90, 76, 1], [25, 87, 65, 15, 28, 11, 37, 28, 74], [65, 27, 75, 41, 7, 89, 78, 64, 39], [47, 47, 70, 45, 23, 65, 3, 41, 44], [87, 13, 82, 38, 31, 12, 29, 29, 80]];
console.log(solution(arr));

*/

//2차원 배열 - 격자판 최대합
/*
function solution(arr) {
    let answer = [];
    let max = 0;

    for(let i = 0; i < 9; i++) {
       for(let j = 0; j < 9; j++) {
            if(arr[j][i] > max) {
                max = arr[j][i];
            }
       }
       answer.push(max);
       max = 0;
    }

    return answer;
}

const arr = [[10, 13, 10, 12, 15], [12, 39, 30, 23, 11], [11, 25, 50, 53, 15], [19, 27, 29, 37, 27], [19, 13, 30, 13, 19]];
console.log(solution(arr));
*/

// 스택, 큐
// 연속된 문자 지우기
/*
function solution(str) {
    let answer;
    let stack=[];
    for(let i=0; i<str.length; i++) {
        if(stack.length>0 && stack[stack.length-1]===str[i]){
            stack.pop();
        }
        else stack.push(s[i]);
    }
    answer=stack.join('');
    return answer;
}

let input = "acbbcaa";

console.log(solution(input));

*/

// 연속된 문자 지우기
/*
function solution(str) {
    let answer;
    let stack=[];
    for(let ele of str) {
        stack.length !== 0 && stack[stack.length-1] === ele ? stack.pop() : stack.push(ele);
    };

    answer=stack.join('');
    return answer;
}

let input = "acbbcaa";

console.log(solution(input));
*/

// 쇠막대기
/*
function solution(str) {
    let answer = 0;
    let stack = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '(') {
            stack.push(str[i]);
        } else if(str[i] === ')') {
            stack.pop();
            str[i-1] === '(' ? answer += stack.length : answer ++;
        }
    }
    return answer;
}

let input = "()(((()())(())()))(())";
console.log(solution(input));
*/

// 큐
// 공주 구하기
/*
function solution(num, k) {
    let arr = []
    let count = 0;
    for(let i = 0; i < num; i++) {
        arr.push(i+1);
    }
    while(arr.length > 1) {
        if(count === k-1) {
            arr.shift();
            count = 0;
        } else {
            arr.push(arr[0]);
            arr.shift();
            count++;
        }
    }
    return arr[0];
}

let num = 10;
let k = 4;
console.log(solution(num, k));
*/

//슬라이딩 윈도우
/*
function solution(num, k) {
    let answer = 0;
    let sum = 0;
    let lt = 0;

    for(let i = 0; i <k; i++) {
        sum += num[i];
    }

    for(let rt = k;rt < num.length;rt++) {
        sum += (num[rt] - num[lt]);
        answer = Math.max(answer, sum);
        lt++;
    }
    return answer;
}

let num = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
let k = 3;
console.log(solution(num, k));
*/

// 카드 가져가기
// function solution(num, k) {
//     let answer = num.reduce((a, b) => a + b, 0);
//     let mins = 3000000000000;
//     let j = num.length - k;
//     let sum = 0;
//     let lt = 0;

//     for(let i = 0; i < j; i++) {
//         sum += num[i];
//     }

//     for(let rt = j;rt < num.length;rt++) {
//         sum += (num[rt] - num[lt]);
//         mins = Math.min(mins, sum);
//         lt++;
//     }

//     return answer - mins;
// }

// let num = [2, 3, 7, 1, 2, 1, 5];
// let k = 4;
// console.log(solution(num, k));

// 부분 수열 (two pointer)
// function solution(num, m) {
//   let answer = 0;
//   let left = 0;
//   let sum = 0;
//   for (let r = 0; r < num.length; r++) {
//     sum += num[r];
//     while (sum > m) {
//       sum -= num[left];
//       left++;
//     }
//     if (sum === m) answer++;
//   }
//   return answer;
// }

// let num = [1, 1, 2, 1, 3, 1, 1, 1, 2];
// let k = 6;
// console.log(solution(num, k));

// 공사비용
// function solution(cost, m) {
//   let answer = 0;
//   let len = 0;
//   let left = 0;
//   let sum = 0;

//   for (let r = 0; r < cost.length; r++) {
//     sum += cost[r];
//     len++;
//     while (sum > m) {
//       sum -= cost[left];
//       left++;
//       len--;
//     }
//     if (len > answer) answer = len;
//   }

//   return answer;
// }

// let cost = [0, 150, 100, 0, 150, 0, 70, 140];
// let m = 350;
// console.log(solution(cost, m));

// 최대 길이 부분 수열
// function solution(cost, m) {
//   let answer = 0;
//   let cnt = 0;
//   let left = 0;
//   for (let right = 0; right < cost.length; right++) {
//     if (cost[right] === 0) {
//       cnt++;
//     }
//     while (cnt > m) {
//       if (cost[left] === 0) {
//         cnt--;
//       }
//       left++;
//     }
//     answer = Math.max(answer, right - left + 1);
//   }
//   return answer;
// }

// let cost = [1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1];
// let m = 2;
// console.log(solution(cost, m));

// 연속된 자연수의 합
// function solution(n) {
//   let answer = 0;
//   let left = 1;
//   let sum = 0;

//   for (let right = 1; right < n / 2 + 1; right++) {
//     sum += right;
//     while (sum > n) {
//       sum -= left;
//       left++;
//     }
//     if (sum === n) answer++;
//   }
//   return answer;
// }

// let n = 15;
// console.log(solution(n));

// 선택정렬
// function solution(nums) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[minIndex] > nums[j]) minIndex = j;
//     }
//     if (i !== minIndex) {
//       [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
//     }
//   }
//   return nums;
// }

// let nums = [2, 8, 3, 6, 1, 7, 5, 9];
// console.log(solution(nums));

// 버블정렬
// function solution(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length - i - 1; j++) {
//       if (nums[j] > nums[j + 1]) {
//         [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
//       }
//     }
//   }
// }

// const nums = [2, 8, 3, 6, 1, 7, 5, 9];
// console.log(solution(nums));

// 삽입 정렬
// function solution(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let temp = nums[i];
//     for (let j = i - 1; j >= 0; j--) {
//       if (nums[j] > temp) nums[j + 1] = nums[j];
//       else break;
//     }
//     nums[j + 1] = temp;
//   }
// }

// const nums = [2, 8, 3, 6, 1, 7, 5, 9];
// console.log(solution(nums));

// 카드 가져가기 정렬
// function solution(nums, k) {
//   nums.sort((a, b) => b - a);
//   let sum = 0;
//   let diff = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (i % 2 !== 0) sum += nums[i];
//     else diff.push(nums[i] - nums[i + 1]);
//   }
//   diff.sort((a, b) => b - a);
//   for (let i = 0; i < k; i++) {
//     sum += diff[i];
//   }
//   return sum;
// }

// const nums = [8, 2, 12, 12, 12, 12, 2, 2];
// const k = 2;
// console.log(solution(nums, k));

// 이진수 정렬
// function solution(nums, k) {
//   let pair = [];
//   let answer = [];
//   nums.forEach((element) => {
//     let count = 0;
//     let tmp = element;
//     while (tmp > 0) {
//       count += tmp % 2;
//       tmp = parseInt(tmp / 2);
//     }
//     pair.push([element, count]);
//   });
//   pair.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

//   for (let i = 0; i < nums.length; i++) {
//     answer.push(pair[i][0]);
//   }
//   return answer;
// }
// const nums = [5, 6, 7, 8, 9];
// console.log(solution(nums));

// 이분 탐색
// function solution(nums, m) {
//   nums.sort((a, b) => a - b);
//   let left = 0,
//     right = nums.length - 1;
//   while (left <= right) {
//     let mid = parseInt((left + right) / 2);
//     if (nums[mid] === m) return mid + 1;
//     else if (nums[mid] > m) right = mid - 1;
//     else left = mid + 1;
//   }
//   return -1;
// }

// const nums = [23, 87, 65, 12, 57, 32, 99, 81];
// const m = 32;
// console.log(solution(nums, m));

// 랜선 자르기
// function solution(nums, m) {
//   let answer = 0;
//   function Count(len) {
//     let cnt = 0;
//     nums.forEach((ele) => {
//       cnt += parseInt(ele / len);
//     });
//     return cnt;
//   }

//   let left = 1,
//     right = Math.max(...nums);
//   while (left <= right) {
//     let mid = parseInt((left + right) / 2);
//     if (Count(mid) >= m) {
//       answer = mid;
//       left = mid + 1;
//     } else right = mid - 1;
//   }
//   return answer;
// }

// const nums = [802, 743, 457, 539];
// const m = 11;
// console.log(solution(nums, m));

// 초코볼
// function solution(nums, m) {
//   let answer = 0;
//   let left = 1,
//     right = Math.max(...nums);
//   function Count(len) {
//     let cnt = 0;
//     nums.forEach((element) => {
//       cnt += Math.ceil(element / len);
//     });
//     return cnt;
//   }
//   while (left <= right) {
//     mid = parseInt((left + right) / 2);
//     if (Count(mid) <= m) {
//       answer = mid;
//       right = mid - 1;
//     } else left = mid + 1;
//   }
//   return answer;
// }

// const nums = [12, 24, 15, 7, 9];
// const m = 8;
// console.log(solution(nums, m));

// function solution(board) {
//   let left = 1;
//   let right = 0;
//   let sum = 0;
//   let answer = 0;

//   function Count(len) {
//     let cnt = 0;
//     board.forEach((element) => {
//       for (let i = 0; i < element.length; i++) {
//         if (element[i] >= len) cnt += len;
//         else cnt += element[i];
//       }
//     });
//     return cnt;
//   }

//   board.forEach((element) => {
//     right = Math.max(right, Math.max(...element));
//     sum += element.reduce((prev, cur) => prev + cur);
//   });

//   while (left <= right) {
//     let mid = parseInt((left + right) / 2);
//     if (Count(mid) >= sum / 2) {
//       answer = mid;
//       right = mid - 1;
//     } else left = mid + 1;
//   }
//   return answer;
// }

// const arr = [
//   [10, 9, 8, 9, 10],
//   [3, 0, 7, 4, 3],
//   [8, 5, 7, 5, 6],
//   [9, 6, 1, 5, 5],
//   [5, 5, 8, 5, 1],
// ];
// console.log(solution(arr));

function solution(arr, m) {
  let left = 1;
  arr.sort((a, b) => a - b);
  let right = arr[arr.length - 1];
  let answer = 0;

  function Count(mid) {
    let cnt = 1;
    let ep = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] - ep >= mid) {
        cnt++;
        ep = arr[i];
      }
    }
    return cnt;
  }
  while (left <= right) {
    mid = parseInt((left + right) / 2);
    if (Count(mid) >= m) {
      answer = mid;
      left = mid + 1;
    } else right = mid - 1;
  }

  return answer;
}

const arr = [5, 9, 10, 12, 14, 15],
  h = 3;
console.log(solution(arr, h));
