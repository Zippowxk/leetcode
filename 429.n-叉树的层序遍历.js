/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = [];
    const helper = (node,level) =>{
      if(!node) return;
      if(!res[level]){
        res[level] = []
      }
      res[level].push(node.val);
      node.children.forEach(el => {
        helper(el,level+1);
      });
    }
    helper(root,0); 
    return res;
};
// @lc code=end

