
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', function (line) {
  input.push(line.trim());
}).on('close', function () {
    let arr = input[1].split(" ").map(ele=>Number(ele));
    let min = arr[0];
    let max = arr[0];
    for(let i=0;i<arr.length;i++){
        if(min > arr[i]){
            min = arr[i]
        }
        if(max < arr[i]){
           max = arr[i];
        }
    }
    console.log(min+" "+max);
    process.exit();
});

// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// let arr = input[1].split(" ").map(ele=>Number(ele.trim()));
// let min = Math.min.apply(null,arr);
// let max = Math.max.apply(null,arr);
// console.log(min+" "+max);