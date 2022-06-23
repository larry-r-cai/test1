const canConstruct = (targetString, stringArray)=>{
    console.log("targetString="+targetString);
    if(stringArray.includes(targetString)){
        console.log("Returning true, targetString="+targetString);
        return true;
    }
    let containsAnyString = false;
    for(let str of stringArray){
        if(targetString.includes(str)){
            containsAnyString = true;
        };
    }
    if(!containsAnyString) return false;
    //console.log("Not a base case");
    let result = false;
    for(let str of stringArray){
        const subStr = targetString.split(str);
        console.log("str="+str+", subStr="+subStr);
        if(subStr.length == 1){//Can't split
             continue;//Move to next string
        }
        let allChildNodesTrue = true;
        for(let str of subStr){//Return true when all splited nodes are true
            if(str.length > 0 && !canConstruct(str, stringArray)){
                //console.log("Here returning true: str="+str);
                allChildNodesTrue = false;
                break;
            }
        }
        if(allChildNodesTrue) return true;
    }
    return false;
}

//console.log(canConstruct("Test", ['T','es','s','t']));
console.log(canConstruct("Test", ['T','e','es','t']));