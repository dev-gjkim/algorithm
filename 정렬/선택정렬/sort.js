const array = [3, 2, 6, 12, 1, 7]

const sort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }

        }
        [array[i], [array[minIndex]]] = [array[minIndex], [array[i]]]
    }
    return array;
}


console.log(sort(array))