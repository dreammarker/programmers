// const line = require("fs").readFileSync("/dev/stdin").toString();
// let input = line.trim().split("\n"); 
// //1사분면 x , y 값 두개다 양수
// //2사분면 x값은 음수, y값은 양수
// //3사분면 x <0 , y<0
// //4사분면 x >0 , y<0
// let num1 = parseInt(input[0]);
// let num2 = parseInt(input[1]);
// if(num1 > 0 && num2 > 0){
//     console.log(1);
// }
// else if(num1<0 && num2>0){
//     console.log(2);
// }
// else if(num1 < 0 && num2 <0){
//     console.log(3);
// }
// else if(num1 >0 && num2 < 0){
//     console.log(4);
// }

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', function (line) {
  input.push(parseInt(line));
}).on('close', function () {
    let num1 = parseInt(input[0]);
    let num2 = parseInt(input[1]);
    if(num1 > 0 && num2 > 0){
        console.log(1);
    }
    else if(num1<0 && num2>0){
        console.log(2);
    }
    else if(num1 < 0 && num2 <0){
        console.log(3);
    }
    else if(num1 >0 && num2 < 0){
        console.log(4);
    }
    process.exit();
});

