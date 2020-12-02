/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
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
 * @return {number[]}
 */
var postorder = function(root) {
  const res = []
    const helper = (node)=>{
      if(!node) return;
      node.children.forEach(element => {
        helper(element);
      });
      res.push(node.val)
    }
  helper(root);
  return res;
};
// @lc code=end

