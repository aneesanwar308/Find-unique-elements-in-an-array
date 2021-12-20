// first program to find unique elements

let array = [1, 4, 2, 5, 3, 45, 3, 2, 45, 76, 4, 5, 3, 2, 9]
let uniqueArray = []

array.forEach((elem, index, array) => {
    if (array.indexOf(elem) == index) {
        uniqueArray.push(elem)
    }
})
console.log(uniqueArray)



// second program to find unique elements
let array2 = [1, 4, 2, 5, 3, 45, 3, 2, 45, 76, 4, 5, 3, 2, 9, 10, 11, 91, "anees", "awais", "1", '1', "awais"]
let uniqueArray2 = []

for (var i = 0; i < array2.length; i++) {
    let num = 0
    if (uniqueArray2 < 1) {
        uniqueArray2.push(array2[i])
    } else {
        for (var j = 0; j < uniqueArray2.length; j++) {
            if (array2[i] === uniqueArray2[j]) {
                num++
            }
        }
        if (num <= 0) {
            uniqueArray2.push(array2[i])
        }
    }

}
console.log(uniqueArray2)