
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let dp = [];

let num = 0;
rl.on('line', function (line) {
  num = parseInt(line.trim());
  dp = new Array(num+1).fill(0);
}).on('close', function () {
    dp[0] = 0;
    dp[1] = 1;
    for(let i=2;i<num+1;i++){
        dp[i] = dp[i-1]+dp[i-2];
    }
    console.log(dp[num])
    process.exit();
});
