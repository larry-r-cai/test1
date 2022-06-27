const allConstruct = (targetString, stringArray, memo={}) => {
    if(targetString === ''){
        return [[]];
    }
    if(targetString in memo){
        return memo[targetString];
    }

    let result = [];
    for(let str of stringArray){
        if(targetString.indexOf(str) === 0){
            const remainder = targetString.slice(str.length);
            const arr = allConstruct(remainder, stringArray, memo);

            if(arr.length > 0){
                for(let arr1 of arr){
                    result.push([str, ...arr1]);
                }                    
            }
        }
    }

     memo[targetString] = result;
     return result;

}

for(let arr of allConstruct("Tesestesest", ['T', 'es', 's', 't', 'Tesestesest'])){
    console.log(arr);
}
console.log(allConstruct("aaa", ['a', 'aa']));
//console.log(allConstruct("Tesestesest", ['T', 'es', 's', 't', 'Tesestesest']));
//console.log(allConstruct("aaaa", ['a', 'aa']));
