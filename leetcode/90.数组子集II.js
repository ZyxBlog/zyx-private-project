/*****
    *   @name 78.数组子集【可能包含重复元素】 
    *   @type 数组
    *   @description  给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。 
    * 
    *   输入: [1,2,2]
    *   输出:
    *   [
    *       [2],
    *       [1],
    *       [1,2,2],
    *       [2,2],
    *       [1,2],
    *       []
    *   ]
    *
    * 
    ****/

// 题解思路：回溯 + 排序

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsetsWithDup = function(nums) {
    let res = []
    nums.sort((a,b) => a-b)
    function backtrack(arr,index) {
        res.push(arr)
        for (let i = index; i < nums.length; i++){
            backtrack([...arr, nums[i]], i+1)
            while (nums[i] === nums[i+1]) i++
        }
    }
    backtrack([], 0)
    return res
};