const array = [3, 2, 6, 12, 1, 7]

const sort = (array) => {
    for (let i = 1; i < array.length; i++) {
        const temp = array[i];
        let j;
        for (j = i - 1; j >= 0 && array[j] > temp; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = temp;
    }
    return array;
}

console.log(sort(array))