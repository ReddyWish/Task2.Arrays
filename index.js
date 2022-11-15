function getSumOfSequence (num) {
    let arr = []
    for (let i = 0; i <= num; i++) {
        arr.push(i)
    }
    console.log(arr)
    return arr.at(1) + arr.at(-1)
}
console.log(getSumOfSequence(5))