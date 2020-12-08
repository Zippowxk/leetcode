/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
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
var levelOrder = function(root) {

    if(!root){
        return [];
    }
    let queue = [];
    const res = [];
    queue.push(root)
    let levelArr = []
    let levelQ = []
    while (queue.length>0){
        const node = queue.pop();
        levelArr.push(node.val)
        if(node.left) levelQ.unshift(node.left)
        if(node.right) levelQ.unshift(node.right)

        if(queue.length == 0){
            res.push(levelArr)
            queue = queue.concat(levelQ)
            levelArr = [];
            levelQ = [];
        }

    }

    return res;
};
// @lc code=end

