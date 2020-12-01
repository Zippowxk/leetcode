/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    const res = []
    vnode(root,res)
    return res
    
};
function vnode(node,arr){
  if(!node){return}
  arr.push(node.val)
  if(node.children){
    node.children.forEach(el => {
      vnode(el,arr)
    });
  }
}
// @lc code=end

