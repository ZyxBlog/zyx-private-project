/****
    *   @name 实现斐波那契数列
    *   @type Number
    *   @description 实现数列如下 1, 1, 2, 3, 5, 8, 13 ...... 
    *
    *    示例 1：
    *    输入：5
    *    输出：5
    *
    ****/

// 解法一:传统递归
// 问题：性能很差 & 容易导致栈溢出
const fib1 = (n) => {
    if (n <= 2) return 1
    return fib1(n - 1) + fib1(n - 2)
}

// 解法二：用尾递归优化(覆盖变量，而不是在栈中去创建新的变量，任何给定递归步骤的返回值与下一个递归调用的返回值相同)
const fib2 = (n, front = 1, behind = 1) => {
    if (n <= 2) return behind
    return fib2(n - 1, behind, front + behind)
}

// 解法三：动态规划（用数组存储变量）
const fib3 = (n) => {
    let arr = [0, 1, 1]
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[n]
}
