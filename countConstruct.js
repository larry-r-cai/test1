const countConstruct = (targetString, stringArray, memo={}) => {
    if(targetString === ''){
        return 1;
    }
    if(targetString in memo){
        return memo[targetString];
    }

    let count = 0;
    for(let str of stringArray){
        if(targetString.indexOf(str) === 0){
            const remainder = targetString.slice(str.length);
            count = count + countConstruct(remainder, stringArray, memo);
        }
    }

    memo[targetString] = count;
    return count;

}

console.log(countConstruct("Tesestesest", ['T', 'es', 's', 't', 'Tesestesest']));
console.log(countConstruct("aaaaaaaaaaaaaaaaaaaa", ['a', 'aa']));
