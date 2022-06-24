// Modified comment from develop branch
const bestSum = (s, ns, memo = {}) => {
    console.log(">> Start bestSum("+s+")...");

    //Define basecases
    if(s == 0){
        return [];
    }
    if( s < 0){
         return null;
    }

    if(s in memo){
        console.log("Found memo["+s+"]="+memo[s]);
        return memo[s];
    }
    
//Visit nodes until hitting 0 or all nodes visited
    memo[s] = null;
    for(let n of ns){
        
        console.log("s="+s+", Checking -"+n+", node value = "+(s-n));
        const r = bestSum(s-n, ns, memo);
        console.log("s="+s+", r = "+r);
        if(r != null){
            const r1 = [...r, n];//Make a copy of it. Don't reference it because it is linked to a previously cached value, o.w. the next step will change the previously cached value.

            if(memo[s] == null || r1.length < memo[s].length){
                memo[s] = r1;   
            }
        }
    }

    console.log("memo["+s+"]="+memo[s]);
    console.log("<< End bestSum("+s+")... returning "+memo[s]);
    return memo[s];

}

console.log("bestSum: "+bestSum(9, [2,3, 7]));