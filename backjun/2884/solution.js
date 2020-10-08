//45분 알람 설정하기
//원래 설정되어있는 알람을 45분 앞서는 시간으로 바꾸는 것
//시간과 분..

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', function (line) {
  input.push((line));
}).on('close', function () {
    input = input[0].split(" ");
    let num1 = parseInt(input[0]);
    let num2 = parseInt(input[1]);
    num2 = num2-45;//분을 뺸다...
    if(num2<0){ //분이 음수가 될경우 시간도 같이 뺸다.
        num2 = 60+num2;
        num1 = num1 - 1;
    }
    if(num1<0){
      num1 = 23;
    }
    console.log(num1+" "+num2)
    process.exit();
});

