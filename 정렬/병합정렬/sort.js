const array = [3, 2, 6, 12, 1, 7]

const sort = array => {
    if (array.length <= 1) return array;
    const mid = Math.floor(array.length / 2)
    const leftArr = sort(array.slice(0, mid))
    const rightArr = sort(array.slice(mid))
    return merge(leftArr, rightArr)
}

const merge = (leftArr, rightArr) => {
    const result = []
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            result.push(leftArr[leftIndex])
            leftIndex++
        } else {
            result.push(rightArr[rightIndex])
            rightIndex++
        }
    }

    return result.concat(leftArr.slice(leftIndex), rightArr.slice(rightIndex));

}



console.log(sort(array))