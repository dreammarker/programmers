
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = "";
rl.on('line', function (line) {
  input = line.trim().split(" ");
}).on('close', function () {
  let E = parseInt(input[0]);
  let S = parseInt(input[1]);
  let M = parseInt(input[2]);
  let result = 0;
  let e=1,s=1,m=1;
  while(true){
    result++;
    if (e == E && s == S && m == M) { // 주어진 E S M 연도와 같다면 중지 
        break;
    }
    e++; s++; m++; // 각 연도를 1씩 증가 
    if (e == 16) e = 1; // 한계값을 넘으면 1을 대입하여 초기화 
    if (s == 29) s = 1; // 한계값을 넘으면 1을 대입하여 초기화 
    if (m == 20) m = 1; // 한계값을 넘으면 1을 대입하여 초기화 
  }
  console.log(result)
  process.exit();
});