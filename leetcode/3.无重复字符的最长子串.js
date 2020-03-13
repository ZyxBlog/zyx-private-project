/*****
    *   @name 3.无重复字符的最长子串
    *   @type 字符串
    *   @description  给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
    * 
    *   示例 1:
    *   输入: "abcabcbb"
    *   输出: 3 
    *   解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
    *
    *   示例 2:
    *   输入: "bbbbb"
    *   输出: 1
    *   解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
    *
    *   示例 3:
    *   输入: "pwwkew"
    *   输出: 3
    *   解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
    *   请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
    * 
    * 
    ****/

// 题解
// 思路：循环求每一个不重复字串的最长序列，取最长的值（双指针法，两个指针同时移动）
// 优化点：1.每次找重复数字用hash去存，2.不能每次都从头去循环

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    let arr = []
    if (s.length <= 1) { return s.length }
    let k = 0
    for (i = 0; i < s.length; i++) {
        while(s.substring(i, i + k + 1).indexOf(s[i  + k + 1]) === -1 && i + k + 1 <= s.length - 1) {
            k++
        }
        arr.push(k + 1)
        k -= 1
    }
    return arr.sort((a, b) => {
        return b - a
    })[0]
};