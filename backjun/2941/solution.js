
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let word = "";
let count = 0;
rl.on('line', function (line) {
  word = String(line);
}).on('close', function () {
  for(let i=0;i<word.length;i++){
    let two = word.slice(i,i+2);
    let three =word.slice(i,i+3);
    if(two==="c="){
      count++;
      i++;
    }
    else if(two==="c-"){
      count++;
      i++;
    }
    else if(two==="d-"){
      count++;
      i++;
    }
    else if(two==="lj"){
      count++;
      i++;

    }
    else if(two==="nj"){
      count++;
      i++;

    }
    else if(two==="s="){
      count++;
      i++;

    }
    else if(two==="z="){
      count++;
      i++;
    }
    else if(three==="dz="){
      count++;
      i = i+2;
    }
    else{
      count++;
    }

  }
  console.log(count);
});

