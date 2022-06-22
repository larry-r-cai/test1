console.log("Hello world!");

// function fib(n){
const fib = (n) => {
    if(n<=2) return 1;
    return fib(n-1) + fib(n-2);
}

const fib2 = (n) => {
   if(n <=2) return 1;
   const fa = [];
   fa[0] = 1;
   fa[1] = 1;
   for(i = 2; i < n; i++){
     fa[i] = fa[i-1] + fa[i-2];
   }
   return fa[i-1];
}

const fib3 = (n, memo = {}) => {
  if(n <= 2) return 1;
  if(n in memo){
    //console.log("Found "+n);
    return memo[n];
  }
  //calculate and store in memo
  memo[n] = fib3(n-1, memo)+fib3(n-2, memo);
  return memo[n];
}


for(i=1;i<=50;i++){
    console.log(i+":"+fib3(i));
}

