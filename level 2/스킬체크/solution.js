function solution(skill,skill_tree){
    let skillL = skill.split('');
    let count = 0;
    for(let i =0;i<skill_tree.length;i++){
        let eleArr  = skill_tree[i].split("");
        let skillArr = eleArr.filter(element=>skill.includes(element));
        let skLn = skillArr.length;
        if(skill.substring(0,skLn)===skillArr.join("")){
            count++;
        }
    }
    return count;
  }