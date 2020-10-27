
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr = new Set();
let input = [];
let now = 0;
rl.on('line', function (line) {
  input.push((line));
}).on('close', function () {
    let stand = parseInt(input[0].split(" ")[1]);
    let nums = input[1].split(" ").map(ele=>Number(ele));
    let length = nums.length;
    for(let i=0;i<length-2;i++){
      for(let j=i+1;j<length-1;j++){
        for(let k = j+1 ; k<length;k++){
          if(nums[i]+nums[j]+nums[k] <= stand && stand - (nums[i]+nums[j]+nums[k])<stand-now){
            now = nums[i] + nums[j] +nums[k];
          }
        }
      }
    }
    console.log(now)
    // arr.add()
    //남은건 내일 
    // console.log(nums);
    process.exit();
});

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let arr = new Set();
// let input = [];
// rl.on('line', function (line) {
//   input.push((line));
// }).on('close', function () {
//     let stand = parseInt(input[0].split(" ")[1]);
//     let nums = input[1].split(" ").map(ele=>Number(ele));
//     nums = nums.sort(function(a,b){
//         return a - b;
//     });
//     //숫자세개를 뽑는것.
//     for(let i=0;i<nums.length;i++){
//       //숫자하나가 고정되어있고..
//       let copy = nums.slice();
//       let sum = 0;
//       sum+=parseInt(copy.splice(i,1));
//       for(let i=0;i<copy.length;i++){
//         let copy2 = copy.slice();
//         let sum2 = sum + parseInt(copy2.splice(i,1));
//         for(let i=0;i<copy2.length;i++){
//           let sum3 = sum2 + parseInt(copy2[i]);
//           arr.add(sum3);
//         }
//       }
//     }
//     let result = [];
//     arr.forEach(ele=>{
//       result.push((parseInt(ele)-parseInt(stand)));
//     })

//     result = result.filter(ele=>{
//       if(ele<=0){
//         return ele;
//       }
//     })
//     result = result.sort(function(a,b){
//       return a - b;
//     })
//     console.log(result[result.length-1]+stand);

//     // arr.add()
//     //남은건 내일 
//     // console.log(nums);
//     process.exit();
// });
