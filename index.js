function map(source, fn){
    let newArray = []
    for (let i=0; i<source.length; i++){
        let index = source[i]
        newArray.push(fn(index))
    }
    return newArray;
}

function reduce(source, fn, start){
    let r = (!!start) ? start : source[0]
    let i = (!!start) ? 0 : 1
    for (; i<source.length; i++){
        r = fn(source[i], r)
    }
    return r;
}