
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//A만원의 고정 비용이 든다
//B 재료비와 인건비
//170 노트북 한개의 값
let input = "";
rl.on('line', function (line) {
  input = line.trim().split(" ");
}).on('close', function () {
    let num1 = parseInt(input[0]); //고정비용 
    let num2 = parseInt(input[1]); //가변비용
    let num3 = parseInt(input[2]); //노트북 가격.
    //num1 + num2*n  < num3*n
    if(num2 >= num3){
        console.log(-1+"\n");
    }
    else{
       console.log(Math.floor(num1/(num3-num2))+1+"\n");
    } 
    process.exit();
});