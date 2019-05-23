function sample(arr1, arr2) {
    var leng = Math.min(arr1.length, arr2.length)
    var result = []
    for (var i = 0; i < leng; i++) {
        result.push(`${arr1[i]} ${arr2[i]}`)
    }
    return result
}
console.log(sample([1,2,3,4,5,6], [4,54,3,2]))