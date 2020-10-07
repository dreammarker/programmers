// 문제 주소
//https://programmers.co.kr/learn/courses/30/lessons/17676
function solution(lines) {
    let logArr = [];
    let logPointArr = [];

    lines.forEach(log=>{
        let finishSec = (Number(log.substring(11,13))*3600+Number(log.substring(14,16)*60)+Number(log.substring(17,23)));
        let duration = Number(log.substring(24,log.length-1));
        let startSec = Number((finishSec-duration+0.001).toFixed(3));

        logArr.push([startSec, finishSec, duration]);
        logPointArr.push(finishSec);
        logPointArr.push(startSec);
    });

    let max = 0;
    logPointArr.sort();
    logPointArr.forEach(log=>{
        let beginRange = log;
        let endRange = log+1;
        let count = 0;
        logArr.forEach(logItem=>{
            let startPoint  = logItem[0];
            let finishPoint = logItem[1];

            if((startPoint>=beginRange && startPoint<endRange)||
               (finishPoint>=beginRange&&finishPoint<endRange)||
               (startPoint<=beginRange && finishPoint>=endRange)){
                count++;
            }

            if(count > max){
                max = count;
            }
        })
    })

    return max;
}