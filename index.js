function introduction(n) {
    return `Hi, my name is ${n}.`;
}


function introductionWithLanguage(n,l){
    return `Hi, my name is ${n} and I am learning to program in ${l}.`;
}

function introductionWithLanguageOptional(n, l ="JavaScript"){
    return `Hi, my name is ${n} and I am learning to program in ${l}.`;
}