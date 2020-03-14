/*****
    *   @name 94.二叉树的中序遍历
    *   @type 树
    *   @description  给定一个二叉树，返回它的中序遍历。
    * 
    *  示例:
    *  输入: [1,null,2,3]
    *   1
    *    \
    *     2
    *    /
    *   3
    * 输出: [1,3,2] 
    * 
    ****/

// 题解

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 解法一：递归算法
var inorderTraversal = function(root) {
    let list = []
    let findChildTree = (dot, arr) => {
        if (dot == null) return
        if (dot.left != null) {
            findChildTree(dot.left, arr)
        }
        arr.push(dot.val)
        if (dot.right != null) {
            findChildTree(dot.right, arr)
        }
    }
    findChildTree(root, list)
    return list
};

// 解法二：使用栈：先将根节点入栈，找到所有左节点入栈，直到没有左节点为止，然后出栈存入结果数组，每出一个，对比该根节点的右子节点是否有左节点，若有则入栈，否则继续出栈
var inorderTraversal = function(root) {
    let list = []
    let stack = []
    while(root || stack.length > 0) {
        //直至左节点为空，即没有左节点为止
        while(root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        list.push(root.val)
        root = root.right
    }
    return list
};