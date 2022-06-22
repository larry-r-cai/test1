const gridTraveller = (n,m, memo = {}) =>{
    if(n==0 || m == 0) return 0;
    if(n==1 && m == 1) return 1;
    const k = n+"-"+m;
    const k1 = m+"-"+n;
    if( k in memo){
        console.log("found key "+k);
        return memo[k];
    }

    memo[k] = gridTraveller(n-1,m,memo)+gridTraveller(n,m-1,memo);
    memo[k1] = memo[k];
    return memo[k];
}

let n = 10;
let m = 10;
console.log("(n,m) ->"+gridTraveller(n,m));