var input = require('fs').readFileSync('/dev/stdin').toString().trim();
//윤년구하기
// 1. 윤년이면 1 아니면 0을 출력한다
// 윤년은 4의 배수이면서, 100의 배수가 아닐 떄 또는 400 배수일 떄이다.
let num = Number(input);
if(num%4===0&&(num%100!==0||num%400===0)){
    console.log(1);
}
else{
    console.log(0);
}