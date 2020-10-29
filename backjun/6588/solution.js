//골드 바흐의 추측
// 4보다 큰 모든 짝수는 두 홀수 소수의 합으로 나타낼 수 있다.
//

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//필요한 함수
// 소수.. 
//1000000
function solution(n) {
    const arr = [];
    let result = [];
    // 인덱스 번호가 주어진 숫자 n과 대응하도록 
    // 빈 배열을 만들고 원소는 true 값으로 채워준다.
    for (let i = 0; i < n + 1; i++) {
        arr.push(true);
    }
    for (let i = 2; i * i <= n; i++) {
        if (arr[i]) {
            for (let j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
    }
    // 0과 1은 소수가 아니므로 false 값으로 바꿔준다.
    arr.splice(0, 2, false, false);
    //배열에서 true인 값만 걸러내고, true인 값의 개수를 출력한다.
    return arr;
}

let input = [];
rl.on('line', function (line) {
    input.push(Number(line));
}).on('close', function () {
    let prearr = solution(1000000);
    let result = "";
    for (let i = 0; i < input.length; i++) {
        let number = input[i];
        let num1 = 0;
        let num2 = 0;

        if (input[i] === 0) {
            continue;
        }
        for (let j = 3; j < number; j = j + 2) {
            if (prearr[j] && prearr[number - j]) {
                num1 = j;
                num2 = number - j;
                break;
            }
        }
        console.log(input[i] + " = " + num1 + " + " + num2)
    }
    process.exit();
});


