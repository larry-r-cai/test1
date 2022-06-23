const canConstruct = (targetString, stringArray, memo={})=>{
    console.log("targetString="+targetString);
    if(targetString in memo){
        console.log("Found cached value = "+targetString+":"+memo[targetString]);
        return memo[targetString];
    } 

    if(stringArray.includes(targetString)){
        //console.log("Returning true, targetString="+targetString);
        memo[targetString] = true;
        return true;
    }
    let containsAnyString = false;
    for(let str of stringArray){
        if(targetString.includes(str)){
            containsAnyString = true;
        };
    }
    if(!containsAnyString){
        memo[targetString] = false;
        return false;
    } 
    //console.log("Not a base case");
    let result = false;
    for(let str of stringArray){
        const subStr = targetString.split(str);
        console.log("edge="+str+", childNodes="+subStr);
        if(subStr.length == 1){//Can't split
             continue;//Move to next string
        }
        let allChildNodesTrue = true;
        for(let str of subStr){//Return true when all splited nodes are true
            if(str.length > 0 && !canConstruct(str, stringArray, memo)){
                console.log("Child node "+str+" of parent node "+targetString+" can Not be constructed.");
                allChildNodesTrue = false;
                break;
            }
        }
        if(allChildNodesTrue){ 
            console.log("Node "+targetString+" can be constructed.");
            memo[targetString] = true; 
            return true;}
    }
    memo[targetString] = false;
    return false;
}

//console.log(canConstruct("Test", ['T','es','s','t']));
console.log(canConstruct("Testesestesst", ['T','e','es','t']));