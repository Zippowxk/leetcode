/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const map = {0:0,1:1,2:2,3:3};
  const helper = (m) => {
    if(map[m]>=0) return map[m];
    if(m==0){
      return 0;
    }
    if(m<0){
      return 0;
    }
    map[m-1] = helper(m-1)
    map[m-2] = helper(m-2)
    return map[m-1]+map[m-2];
  }
  
  return helper(n);
};
// @lc code=end

