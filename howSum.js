const howSum = (s, ns, p, memo = {}) => {
    console.log("s="+s+", p="+p);

    //Define basecases
    if(s == 0){
        return p;
    }
    if( s < 0){
        p.pop();
         return null;
    }

    if(s in memo){
        return memo[s];
    }
    
//Visit nodes until hitting 0 or all nodes visited
    for(let n of ns){
        //console.log("i = "+i);
        console.log("Checking "+n+", node value = "+(s-n));
        p.push(n);
        if(howSum(s-n, ns, p, memo) != null){
            memo[s] = p;
            return p;
        }
    }
    memo[s] = null;
    p.pop();
    return null; 
}

const howSum1 = (s, ns, memo = {}) => {
    console.log("s="+s);

    //Define basecases
    if(s == 0){
        return [];
    }
    if( s < 0){
         return null;
    }

    if(s in memo){
        return memo[s];
    }
    
//Visit nodes until hitting 0 or all nodes visited
    for(let n of ns){
        //console.log("i = "+i);
        console.log("Checking "+n+", node value = "+(s-n));
        let r = howSum1(s-n, ns, memo);
        if(r != null){
            r.push(n);
            memo[s] = r;
            return r;
        }
    }
    memo[s] = null;
    return null; 
}


console.log("Final result = "+howSum1(300, [7, 14], []));