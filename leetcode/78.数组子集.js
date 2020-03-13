/*****
    *   @name 78.数组子集【不包含重复元素】 
    *   @type 数组
    *   @description  给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。 
    * 
    *   输入: nums = [1,2,3]
    *    输出:
    *    [
    *       [3],
    *       [1],
    *       [2],
    *       [1,2,3],
    *       [1,3],
    *       [2,3],
    *       [1,2],
    *       []
    *    ]
    *
    * 
    ****/

// 题解
// 思路：遍历一遍数组，遇到一个数就把所有子集加上该数组成新的子集，遍历完毕即是所有子集
// 经典方案： 回溯法（back tracking）（探索与回溯法）是一种选优搜索法，又称为试探法，按选优条件向前搜索，以达到目标。但当探索到某一步时，发现原先选择并不优或达不到目标，就退回一步重新选择，这种走不通就退回再走的技术为回溯法，而满足回溯条件的某个状态的点称为“回溯点”。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function(nums) {
    let arr = [[]]
    for (let i = 0; i < nums.length; i++) {
        arr.forEach(item => {
            arr.push(item.concat(nums[i]))
        })
    }
    return arr
};

// 【数组子集】题目变形（取固定长度为N的子集）

/**
 * @param {number[]} nums
 * @param {number} len
 * @return {number[][]}
 */

var subsetsN = function(nums, N) {
    let arr = [[]]
    let formalArr = []
    for (let i = 0; i < nums.length; i++) {
        arr.forEach(item => {
            arr.push(item.concat(nums[i]))
            if (item.concat(nums[i]).length === N) {
                formalArr.push(item.concat(nums[i]))
            }
        })
    }
    return formalArr
};
