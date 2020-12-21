/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {


    const maxPre = [nums[0]];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const cur = nums[i];
        maxPre.push(Math.max(cur,cur+maxPre[i-1]))
        max = Math.max(max,Math.max(cur,cur+maxPre[i-1]));
    }
    return max;
};
// @lc code=end

