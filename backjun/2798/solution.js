
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', function (line) {
  input.push((line));
}).on('close', function () {
    let start = input[0].split(" ");
    let nums = input[1].split(" ").map(ele=>Number(ele));
    let sum = Number(start[1]);
    nums = nums.sort(function(a,b){
        return a - b;
    })
    //남은건 내일 
    console.log(nums);
    process.exit();
});

