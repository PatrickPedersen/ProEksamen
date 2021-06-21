let array1 = [[4,3],[2,1]]
let array2 = [[5,6],[7,8]]

function minus2DimArray(arr1, arr2) {
    // Vores return array, der indeholder alle svarene
    let ret = []

    // Looper igennem alle arrays i array 1
    for (const array in arr1) {
        // Holder alle vores svar for det enkelte array
        let res = []

        // Looper igennem tallene i det givne array
        for (const index in arr1) {
            // Skubber svarene til array res
            res.push(arr1[array][index] - arr2[array][index])
        }

        // Skubber svarene fra array res til array ret
        ret.push(res)
    }

    return ret
}
//console.log(minus2DimArray(array1, array2))

class myClass {
    constructor(arr1, arr2) {
        this.arr1 = arr1
        this.arr2 = arr2
    }

    minus2DimArray() {
    let ret = []
    for (const array in this.arr1) {
        let res = []
        for (const index in this.arr1) {
            res.push(this.arr1[array][index] - this.arr2[array][index])
        }
        ret.push(res)
    }
    return ret
    }
}

calc = new myClass(array1, array2)
console.log(calc.minus2DimArray())