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

// 마구간 정하기
// function solution(arr, m) {
//   let left = 1;
//   arr.sort((a, b) => a - b);
//   let right = arr[arr.length - 1];
//   let answer = 0;

//   function Count(mid) {
//     let cnt = 1;
//     let ep = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] - ep >= mid) {
//         cnt++;
//         ep = arr[i];
//       }
//     }
//     return cnt;
//   }
//   while (left <= right) {
//     mid = parseInt((left + right) / 2);
//     if (Count(mid) >= m) {
//       answer = mid;
//       left = mid + 1;
//     } else right = mid - 1;
//   }

//   return answer;
// }

// const arr = [5, 9, 10, 12, 14, 15],
//   h = 3;
// console.log(solution(arr, h));

// 그리디 알고리즘
// 침몰하는 타이타닉
// function solution(nums, m) {
//   let answer = 0;
//   nums.sort((a, b) => a - b);
//   let sum = 0;
//   let left = 0;
//   let right = nums.length - 1;
//   while (left <= right) {
//     if (nums[left] + nums[right] <= m) {
//       left++;
//       right--;
//       answer++;
//     } else {
//       right--;
//       answer++;
//     }
//   }
//   return answer;
// }
// const nums = [
//   68, 72, 30, 105, 55, 115, 36, 67, 119, 111, 95, 24, 25, 80, 55, 85, 75, 83,
//   21, 81,
// ];
// const m = 120;

// // 제일 무거운 사람과 제일 가벼운사람을 차례대로 비교
// console.log(solution(nums, m));

// 이동 횟수
// function solution(nums) {
//   let answer = 0;
//   let kg = 5;
//   nums.sort((a, b) => a - b);
//   let left = 0;
//   let right = nums.length - 1;
//   while (left <= right) {
//     if (nums[left] + nums[right] <= kg) {
//       left++;
//       right--;
//       answer++;
//     } else {
//       right--;
//       answer++;
//     }
//   }
//   return answer;
// }
// const nums = [2, 5, 3, 4, 2, 3];
// console.log(solution(nums));

// 선긋기
// function solution(nums) {
//   nums.sort((a, b) => a[0] - b[0]);
//   let answer = 0;
//   let start = nums[0][0];
//   let e = nums[0][1];
//   for (i = 1; i < nums.length; i++) {
//     if (nums[i][0] <= e && nums[i][1] > e) {
//       e = nums[i][1];
//     } else if (nums[i][0] < e) {
//     } else {
//       answer += e - start;
//       start = nums[i][0];
//       e = nums[i][1];
//     }
//   }
//   answer += e - start;
//   return answer;
// }

// const nums = [
//   [2, 5],
//   [1, 3],
//   [3, 4],
//   [6, 8],
// ];
// console.log(solution(nums));

// 회의실 배정
// function solution(nums) {
//   nums.sort((a, b) => a[1] - b[1]);
//   let endtime = 0;
//   let answer = 0;
//   for (let i of nums) {
//     if (i[0] >= endtime) {
//       answer++;
//       endtime = i[1];
//     }
//   }
//   return answer;
// }

// const times = [
//   [1, 4],
//   [2, 3],
//   [3, 5],
//   [4, 6],
//   [5, 7],
// ];
// console.log(solution(times));

// BFS
// function solution() {
//   let answer = '';
//   function BFS() {
//     let queue = [];
//     queue.push(1);
//     let L = 0;
//     while (queue.length) {
//       let len = queue.length;
//       answer += L + ' : ';
//       for (let i = 0; i < len; i++) {
//         let v = queue.shift();
//         answer += v + ' ';
//         for (let nv of [v * 2, v * 2 + 1]) {
//           if (nv > 7) break;
//           queue.push(nv);
//         }
//       }
//       console.log(answer);
//       answer = '';
//       L++;
//     }
//   }
//   BFS();
//   return;
// }
// solution();

// 송아지 찾기
// function solution(s, e) {
//   let answer = 0;
//   function BFS() {
//     let queue = [];
//     let ch = Array(10001).fill(0);
//     let L = 0;
//     queue.push(s);
//     ch[s] = 1;
//     while (queue.length) {
//       let len = queue.length;
//       for (let i = 0; i < len; i++) {
//         let v = queue.shift();
//         if (v === e) return L;
//         for (let nv of [v - 1, v + 1, v + 5]) {
//           if (nv === e) return L + 1;
//           if (ch[nv] === 0 && nv > 0 && nv <= 10000) {
//             ch[nv] = 1;
//             queue.push(nv);
//           }
//         }
//       }
//       L++;
//     }
//   }
//   answer = BFS();
//   return answer;
// }

// let s = 5,
//   e = 14;
// console.log(solution(s, e));

// 그래프
// function solution(n, edge) {
// const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
// for (let [a, b] of edge) {
//   graph[a][b] = 1;
//   graph[b][a] = 1;
// }
// return graph;
// }
// console.log(
//   solution(5, [
//     [1, 2],
//     [1, 5],
//     [2, 4],
//     [3, 5],
//     [1, 3],
//   ])
// );

// 경로 탐색(인접행렬, DFS)
// function solution(n, edge) {
//   let answer = 0;
//   const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
//   const ch = Array(n + 1).fill(0);

//   for (let [start, end] of edge) {
//     graph[start][end] = 1;
//   }

//   function DFS(v) {
//     if (v === n) answer++;
//     else {
//       for (let i = 1; i <= n; i++) {
//         if (graph[v][i] === 1 && ch[i] === 0) {
//           ch[i] = 1;
//           DFS(i);
//           ch[i] = 0;
//         }
//       }
//     }
//   }
//   ch[1] = 1;
//   DFS(1);
//   return answer;
// }

// const n = 5;
// const edge = [
//   [1, 2],
//   [1, 3],
//   [1, 4],
//   [2, 1],
//   [2, 3],
//   [2, 5],
//   [3, 4],
//   [4, 2],
//   [4, 5],
// ];
// console.log(solution(n, edge));

// 인접리스트
// function solution(n, edge) {
//   let answer = 0;
//   let ch = Array(n + 1).fill(0);
//   let graph = Array.from(Array(n + 1), () => Array());
//   let path = [];
//   for (let [a, b] of edge) {
//     graph[a].push(b);
//   }
//   function DFS(v) {
//     if (v === n) {
//       answer++;
//       console.log(path);
//     } else {
//       for (let nv of graph[v]) {
//         if (ch[nv] === 0) {
//           ch[nv] = 1;
//           path.push(nv);
//           DFS(nv);
//           path.pop();
//           ch[nv] = 0;
//         }
//       }
//     }
//   }
//   ch[1] = 1;
//   path.push(1);
//   DFS(1);
//   return answer;
// }

// const n = 5;
// const edge = [
//   [1, 2],
//   [1, 3],
//   [1, 4],
//   [2, 1],
//   [2, 3],
//   [2, 5],
//   [3, 4],
//   [4, 2],
//   [4, 5],
// ];
// console.log(solution(n, edge));

// 컴퓨터 개수
// function solution(n, edge) {
//   let answer = n;
//   let graph = Array.from(Array(n + 1), () => Array());
//   let ch = Array(n + 1).fill(0);

//   for (let [a, b] of edge) {
//     graph[a].push(b);
//     graph[b].push(a);
//   }

//   let cnt = 1;

//   function DFS(v) {
//     for (let nv of graph[v]) {
//       if (ch[nv] === 0) {
//         ch[nv] = 1;
//         cnt++;
//         DFS(nv);
//       }
//     }
//   }
//   ch[1] = 1;
//   DFS(1);
//   return answer - cnt;
// }

// let n = 12;
// let edge = [
//   [1, 2],
//   [1, 7],
//   [1, 8],
//   [1, 6],
//   [8, 11],
//   [11, 12],
// ];

// console.log(solution(n, edge));

// 동아리 개수
// function solution(n, edge) {
//   let answer = 0;
//   let graph = Array.from(Array(n + 1), () => Array());
//   let ch = Array(n + 1).fill(0);
//   for (let [a, b] of edge) {
//     graph[a].push(b);
//     graph[b].push(a);
//   }

//   function DFS(v) {
//     for (let nv of graph[v]) {
//       if (ch[nv] === 0) {
//         ch[nv] = 1;
//         DFS(nv);
//       }
//     }
//   }
//   for (let i = 1; i <= n; i++) {
//     if (ch[i] === 0) {
//       answer++;
//       ch[i] = 1;
//       DFS(i);
//     }
//   }
//   return answer;
// }

// const n = 7,
//   edge = [
//     [1, 2],
//     [2, 3],
//     [1, 4],
//     [1, 5],
//   ];
// console.log(solution(n, edge));

// 섬 아일랜드
// function solution(board) {
//   let answer = 0;
//   let n = board.length;
//   let dx = [-1, 0, 1, 0];
//   let dy = [0, 1, 0, -1];
//   function DFS(x, y) {
//     for (let k = 0; k < 4; k++) {
//       let nx = x + dx[k];
//       let ny = y + dy[k];
//       if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
//         board[nx][ny] = 0;
//         DFS(nx, ny);
//       }
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (board[i][j] === 1) {
//         answer++;
//         board[i][j] = 0;
//         DFS(i, j);
//       }
//     }
//   }
//   return answer;
// }

// let board = [
//   [1, 1, 0, 0, 0, 1, 0],
//   [0, 1, 1, 0, 1, 1, 0],
//   [0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 0, 0, 0],
//   [1, 1, 0, 1, 1, 0, 0],
//   [1, 0, 0, 0, 1, 0, 0],
//   [1, 0, 1, 0, 1, 0, 0],
// ];
// console.log(solution(board));

function solution(ingredient) {
  var answer = 0;

  for (let i = 0; i < ingredient.length; i++) {
    if (ingredient[i] === 1 && ingredient[i + 1] === 2 && ingredient[i + 2] === 3 && ingredient[i + 3] === 1) {
      ingredient.splice(i, 4);
      i -= 3;
      answer++;
    }
  }

  return answer;
}
const ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];

solution(ingredient);
