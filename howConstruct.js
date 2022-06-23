const howConstruct = (targetString, stringArray)=>{
    if(targetString.length == 0) return [];
    if(stringArray.includes(targetString)){
        //console.log("Returning true, targetString="+targetString);

        return [targetString];
    }
    let containsAnyString = false;
    for(let str of stringArray){
        if(targetString.includes(str)){
            containsAnyString = true;
        };
    }
    if(!containsAnyString){
        return null;
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
        let resultArray = [];
        for(let str of subStr){//Return true when all splited nodes are true
            const result = howConstruct(str, stringArray);
            if(result == null){
                console.log("Child node "+str+" of parent node "+targetString+" can Not be constructed.");
                allChildNodesTrue = false;
                break;
            }
            resultArray=resultArray.concat(result);
        }
        if(allChildNodesTrue){ 
            console.log("Node "+targetString+" can be constructed.");
            //memo[targetString] = [subStr[0],str,subStr[1]]; 
            return resultArray.concat(str);
        }
    }

    return null;
}

console.log(howConstruct("Tesest", ['T', 'es', 's', 't']));