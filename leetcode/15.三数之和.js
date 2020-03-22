/*****
    *   @name 15.三数之和
    *   @type 数组
    *   @description 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
    *    注意：答案中不可以包含重复的三元组。
    *
    *    示例：
    *    给定数组 nums = [-1, 0, 1, 2, -1, -4]，
    *    满足要求的三元组集合为：
    *    [
    *        [-1, 0, 1],
    *        [-1, -1, 2]
    *    ]
    * 
    ****/
// 题解

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = []
    let len = nums.length
    let flag = 0
    let hash = {}
    nums.sort((a, b) => {
        return a-b
    })
    if (nums[0] > 0 || nums[len - 1] < 0) return result;
    for (let i = 0; i < len; i++){
        if (nums[i] === nums[i-1]) continue
        flag = 0 - nums[i]
        let start = i + 1, end = len - 1
        while (start < end){
            let middle = []
            if (nums[start] + nums[end] < flag) {
                start ++;
            } else if (nums[start] + nums[end] > flag) {
                end--
            } else {
                middle.push(nums[i])
                middle.push(nums[start])
                middle.push(nums[end])
                if (!hash[middle]){
                    hash[middle] = true
                    result.push(middle)
                }
                start += 1
                end -= 1
                while (start < end && nums[start] === nums[start - 1]) {
                    start += 1
                }
                while (start < end && nums[end] === nums[end + 1]) {
                    end -= 1
                }
            }
        }
    }
    return result
};
