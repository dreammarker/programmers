
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = new Set();
rl.on('line', function (line) {
  input.add(parseInt(line)%42);
}).on('close', function () {
    console.log(input.size)
    process.exit();
});

