/*****
    *   @name 102. 二叉树的层次遍历
    *   @type 数
    *   @description  给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
    * 
    *    例如:
    *    给定二叉树: [3,9,20,null,null,15,7],
    *       3
    *      / \
    *     9  20
    *       /  \
    *      15   7
    *    返回其层次遍历结果：
    *    [
    *      [3],
    *      [9,20],
    *      [15,7]
    *    ]
    * 
    ****/

// 题解（广度优先遍历/深度优先遍历）

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root, floor = 0, arr = []) {
    if (!root) return arr
    levelOrder(root.left, floor + 1, arr)
    if (arr[floor]) {
        arr[floor].push(root.val)
    } else {
        arr[floor] = [root.val]
    }
    levelOrder(root.right, floor + 1, arr)
    return arr
};