/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const res = [];
    // 自助维护栈结构 不适用递归
    const stack = [{status:0,node:root}];
    while (stack.length>0){
      const {status,node} = stack.pop();
      if (!node) continue;
      if(status == 0){
        // 注意顺序，先入栈的 后添加到数组res中
        stack.push({status:0,node:node.right})
        stack.push({status:1,node:node})
        stack.push({status:0,node:node.left})
      }else{
        res.push(node.val);
      }
    }
    return res;
};
// @lc code=end

