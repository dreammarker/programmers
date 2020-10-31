// push_front X: 정수 X를 덱의 앞에 넣는다.
// push_back X: 정수 X를 덱의 뒤에 넣는다.
// pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// pop_back: 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 덱에 들어있는 정수의 개수를 출력한다.
// empty: 덱이 비어있으면 1을, 아니면 0을 출력한다.
// front: 덱의 가장 앞에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 덱의 가장 뒤에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = []
let result = [];
rl.on('line', function (line) {
  input.push(line.trim());
}).on('close', function () {
    input.shift();
    for(let i=0;i<input.length;i++){
        if(input[i].includes("push_front")){
           let num = input[i].split(" ")[1].trim();
           num = parseInt(num);
           result.unshift(num);
        }
        else if(input[i].includes("push_back")){
            let num = input[i].split(" ")[1].trim();
            num = parseInt(num);
            result.push(num);
        }
        else if(input[i].includes("pop_front")){
            if(result.length===0){
                console.log(-1);
            }
            else{
                console.log(result.shift());
            }
        }
        else if(input[i].includes("pop_back")){
            if(result.length===0){
                console.log(-1);
            }
            else{
                console.log(result.pop());
            }
        }
        else if(input[i].includes("size")){
           console.log(result.length);
        }
        else if(input[i].includes("empty")){
            if(result.length===0){
                console.log(1);
             }
             else{
                 console.log(0);
             }
        }
        else if(input[i].includes("back")){
            if(result[result.length-1]){
                console.log(result[result.length-1]);
             }
             else{
                 console.log(-1);
             }
        }
        else if(input[i].includes("front")){
            if(result[0]){
               console.log(result[0])
            }
            else{
                console.log(-1);
            }
        }

    }
    process.exit();
});
