/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length == 0) return 0;
  let j = 0;
  for (let index = 1; index < nums.length; index++) {
    if(nums[j] != nums[index]){
      j++;
      nums[j] = nums[index];
    }
  }
  return j+1;
};
// @lc code=end

