/*****
    *   @name 5.最长回文子串
    *   @type 字符串
    *   @description  给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
    * 
    *    示例 1：
    *    输入: "babad"
    *    输出: "bab"
    *    注意: "aba" 也是一个有效答案。
    *    
    *    示例 2：
    *    输入: "cbbd"
    *    输出: "bb"
    * 
    * 
    ****/

// 题解

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length <= 1) {
        return s
    }
    let arr = []
    // 动态规范，循环一次数据，从一个数奇偶向两边扩散,判断是否是回文字符串
    for (let i = 0; i < s.length; i++) {
        // odd(奇数情况)
        let m = 0
        while(s[i - m] === s[i + m] && i - m >= 0 && s[i + m]) {
            m++
        }
        arr.push(s.substring(i - m + 1, i + m))
        m = 0
        // even(偶数情况)
        let n = 0
        while(s[i - n] === s[i + 1 + n] && s[i - n] && s[i + 1 + n]) {
            n++
        }
        arr.push(s.substring(i - n + 1, i + 1 + n))
        n = 0
    }
    return arr.sort((a, b) => {
        return b.length - a.length
    })[0]
};