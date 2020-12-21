/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const maxPre = nums[0]<0?[0]:[nums[0]]
    const maxMinusPre = nums[0]>0?[0]:[nums[0]]
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const cur = nums[i];
        if(cur == 0){
            maxMinusPre.push(0);
            maxPre.push(0);
        }else if(cur>0){
            maxPre.push(Math.max(cur*maxPre[i-1],cur));
            const maxMinus =cur*maxMinusPre[i-1]
            maxMinusPre.push(maxMinus)
        }else{
            const maxMinus = Math.min(cur*maxPre[i-1],cur)
            maxMinusPre.push(maxMinus)
            maxPre.push(Math.max(cur*maxMinusPre[i-1],0));
        }
        max = Math.max(max,maxPre[i])
    }
    return max;
};
// @lc code=end

