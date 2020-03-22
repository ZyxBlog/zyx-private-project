/**
 * 
 * @param {*} content 
 * @param {*} n 
 */


// 解法一：
const repeat = (content, n) => {
    let result = ''
    for (let i = 0; i < n; i++) {
        result += content
    }
}

// 解法二：
const repeat2 = (content, n) => {
    return new Array(n + 1).join(content)
}

// 解法三：时间复杂度（O(log2N)），思路二分法
const repeat3 = (content, n) => {
    const product = (totalStr, num) => {
        if (num === 0) {
            return totalStr
        }
        let step = 1, total = content
        while (step <= num) {
            step *= 2
            if (step > num) {
                totalStr = totalStr + total
                product(totalStr, num - step / 2)
                return
            }
            total += total
        }
    }
    product('', n)
}

// 解法四：第三种方式的优化
const repeat4 = (content, n) => {
    if (content === '') {
        return ''
    }
    let str = content
    let time = Math.floor(Math.log2(n))
    let left = n - Math.pow(2, time)
    while (time--) {
        str += str
    }
    return left === 0 ? str : str + repeat4(content, left)
}