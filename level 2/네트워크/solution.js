//문제 주소
//https://programmers.co.kr/learn/courses/30/lessons/43162
//네트워크란 컴퓨터 상호 간에 정보를 교환 할 수 있도록 
//네트워크가 연결되어 있으면 하나의 네트워크로 통한다.
//
function solution(n, computers) {
    let bolArr  = new Array(n).fill().map(()=>false);
 
    let count = 0;
    for(let i=0;i<n;i++){
        if(!bolArr[i]){
            dfs(n,i, computers,bolArr);
            count++;
        }
    }
    return count;
}

function dfs(n,index,computers,bolArr){
    bolArr[index] = true;
    for(let i=0;i<n;i++){
        if(i!==index&&computers[index][i] ===1&&bolArr[i]===false){ //자기 자신이 아니고 j번이랑 연결된 컴퓨터가 1이고 탐색하지 않은 
            dfs(n,i,computers,bolArr);
        }
    }
}