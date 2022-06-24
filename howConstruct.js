const howConstruct = (targetString, stringArray)=>{
    console.log(">> Start targetString '"+targetString+"'");
    if(targetString.length == 0){
        console.log("<< End targetString '"+targetString+"' Returning []");
         return [];
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
       return null;
    } 
    //console.log("Not a base case");
    
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
            const result = howConstruct(str, stringArray);
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

            return resultArray;
        }
    }
    console.log("<< End targetString '"+targetString+"' Returning null");
    return null;
}

console.log(howConstruct("Tesest", ['T', 'es', 't']));