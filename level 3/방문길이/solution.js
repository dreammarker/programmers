//게임 캐릭터를 4자리 명령어를 통해 움직이려 한다.
//명령어는 다음과 같다.
// U: 위쪽으로 한 칸 가기
// D: 아래쪽으로 한 칸 가기
// R: 오른쪽으로 한 칸 가기
// L: 왼쪽으로 한 칸 가기
// 처음 걸어본 길이...
function solution(dirs) {
    //L [(n,) (n-1,)]
    //처음 위치..
    let object = {
        now  : "0,0",
        next : "0,0"
    }
    let dirsArr = dirs.split("")
    let setArr = new Set();
    for(let i=0;i<dirsArr.length;i++){
        if(dirsArr[i]==="L"){
            let element = object["now"].split(",")[0];
            if(Number(element)===-5){
                continue;
            }
            L(object);
            let arr = [object["now"] , object["next"]];
            arr.sort()
            setArr.add(JSON.stringify(arr));
        }
        else if(dirsArr[i]==="R"){
            let element = object["now"].split(",")[0];
            if(Number(element)===5){
                continue;
            }
            R(object);
            let arr = [object["now"] , object["next"]];
            arr.sort()
            setArr.add(JSON.stringify(arr));
        }
        else if(dirsArr[i]==="U"){
            let element = object["now"].split(",")[1];
            if(Number(element)===5){
                continue;
            }
            U(object);
            let arr = [object["now"] , object["next"]];
            arr.sort()
            setArr.add(JSON.stringify(arr));
        }
        else if(dirsArr[i]==="D"){
            let element = object["now"].split(",")[1];
            if(Number(element)===-5){
                continue;
            }
            D(object);
            let arr = [object["now"] , object["next"]];
            arr.sort()
            setArr.add(JSON.stringify(arr));
        }
        let next = object["next"];
        object["now"] = next
    }
    setArr.forEach(element=>{
        console.log(element)
    })
    var result  = setArr.size;
    return result;
}
//좌측..
function L(object){
    let element = object["next"].split(",")[0]
    element = Number(element)-1;
    object["next"] = String(element)+","+object["next"].split(",")[1];
    return object;
}

//위로..
function U(object){
    let element = object["next"].split(",")[1];
    element = Number(element)+1;
    object["next"] = object["next"].split(",")[0]+","+String(element);
    return object;
}
//우측..
function R(object){
    let element = object["next"].split(",")[0]
    element = Number(element)+1;
    object["next"] = String(element)+","+object["next"].split(",")[1];
    return object;
}
//아래
function D(object){
    let element = object["next"].split(",")[1];
    element = Number(element)-1;
    object["next"] = object["next"].split(",")[0]+","+String(element);
    return object;
}