/**
 *  @description 快速排序
 */

const quickSort = function(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr.splice(pivotIndex, 1)[0]
    let left = [], right = []
    arr.forEach(item => {
        item < pivot ? left.push(item) : right.push(item)
    })
    return quickSort(left).concat([pivot], quickSort(right))
}