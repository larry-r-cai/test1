const canSum = (s, ns, memo = {}) => {
    console.log("s="+s);

    //Define basecases
    if(s == 0){
        return true;
    }
    if( s < 0){
        return false;
    }

    if(s in memo){
        return memo[s];
    }
    
//Visit nodes until hitting true or all nodes visited
    for(let n of ns){
        //console.log("i = "+i);
        console.log("Checking "+n+", node value = "+(s-n));
        if(canSum(s-n, ns, memo)){
            return true;
        }
    }
    memo[s] = false;
    return false; 
}

const canSum1 = (s, ns) => {
    console.log("s="+s);

    //Define basecases
    if(s == 0){
        return true;
    }
    
    isBaseCase = true;
    for(let i = 0; i < ns.length; i++){
        // console.log("Checking base case: "+ns[i]);
        if(s >= ns[i] ){
            isBaseCase = false;
        }
    }
    if(isBaseCase){
        console.log(s+" is base case. Returning false.");
        return false;
    } 
    //console.log(s+" is not base case");
    
//Visit nodes until hitting true or all nodes visited
    for(let i = 0; i < ns.length; i++){
        //console.log("i = "+i);
        console.log("Checking "+ns[i]+", node value = "+(s-ns[i]));
        if(canSum(s-ns[i], ns)){
            return true;
        }
    }
    return false; 
}



console.log("Final result = "+canSum(117, [4, 5]));