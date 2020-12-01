/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let i = 0
  let j=height.length-1
  let res=0
  while (i<j) {
    // res = (height[x]<height[y])?Math.max(res,(height[x++]*[y-x])):Math.max(res,(height[y--]*[y-x]));
    res = height[i] < height[j] ? 
                Math.max(res, (j - i) * height[i++]): 
                Math.max(res, (j - i) * height[j--]); 
  }
  return res;
};
// @lc code=end

