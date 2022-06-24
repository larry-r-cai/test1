const log = (arg)=>{
    console.log(arg);
}

const bestConstruct = (targetString, stringArray, memo={})=>{
    console.log(">> Start targetString '"+targetString+"'");
    if(targetString.length == 0){
        console.log("<< End targetString '"+targetString+"' Returning []");
         return [];
    }
    if(targetString in memo){
        log("Found cached value ["+memo[targetString]+"] for "+targetString);
        return memo[targetString];
    }
    if(stringArray.includes(targetString)){
        //console.log("Returning true, targetString="+targetString);
        const result = [targetString];
        console.log("<< End targetString '"+targetString+"' Returning ["+result+"]");

        return result;
    }
    let containsAnyString = false;
    for(let str of stringArray){
        if(targetString.includes(str)){
            containsAnyString = true;
        };
    }
    if(!containsAnyString){
        console.log("<< End targetString '"+targetString+"' Returning null");
        memo[targetString] = null;
       return null;
    } 
    //console.log("Not a base case");
    let bestResultArray = null;
    for(let edge of stringArray){
        const subStr = targetString.split(edge);
        console.log("edge="+edge+", childNodes="+subStr);
        if(subStr.length == 1){//Can't split
            console.log("Cannot split "+targetString+" by edge "+edge);
             continue;//Move to next string
        }
        let allChildNodesTrue = true;
        let resultArray = [];
        let isFirstLoop = true;
        for(let str of subStr){//Return true when all splited nodes are true
            const result = bestConstruct(str, stringArray, memo);
            if(result == null){
                console.log("Child node "+str+" of parent node "+targetString+" can Not be constructed.");
                allChildNodesTrue = false;
                //isFirstLoop = true;
                break;
            }
            if(isFirstLoop){
                resultArray= resultArray.concat(result);
                isFirstLoop = false;
            }
            else{
                resultArray= resultArray.concat(edge).concat(result);
            }
            //console.log("Result = "+result);
            //console.log("ResultArray = "+resultArray);

        }
        if(allChildNodesTrue){ 
            //console.log("Node "+targetString+" can be constructed. Returning "+resultArray);
            //memo[targetString] = [subStr[0],str,subStr[1]]; 
            // const finalResult = [];
            // for(const result of resultArray){
            //     finalResult.concat(result).concat(edge);
            // }
            console.log("<< End targetString '"+targetString+"' Returning ["+resultArray+"]");
            if(bestResultArray == null || resultArray.length < bestResultArray.length){
                bestResultArray = resultArray;
            }

        }
    }
    console.log("<< End targetString '"+targetString+"' Returning "+bestResultArray);
    memo[targetString] = bestResultArray;
    return bestResultArray;
}

console.log(bestConstruct("Tesestestest", ['T', 'es', 't', 'eses','est']));