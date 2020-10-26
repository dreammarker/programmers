
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
let input = [];
rl.on('line', function (line) {
  input.push(parseInt(line));
}).on('close', function () {
    let max = input[0];
    for(let i=0;i<input.length;i++){
        if(max < input[i]){
            max = input[i];
        }
    }
    console.log(max+"\n"+(input.indexOf(max)+1));
    process.exit();
});

