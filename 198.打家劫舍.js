/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    let max = 0; //这次偷或者不偷的最大值
    let pre0 = 0; //这次不偷的最大值 （上次偷了 也没不偷）
    let pre1 = 0; //这次要偷的情况下 （上次一定没偷）
    nums.forEach(cur => {
        const tmp = pre0;
        pre0 = Math.max(pre1,pre0)
        max = Math.max(cur+tmp,pre1)
        pre1 = cur+tmp;
    });
    return max;
};
// @lc code=end

