/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for(var i = 0;i<nums.length;i++){
    const j = nums.indexOf(target - nums[i]);
    if(j != -1 && i != j) {
      return [i,j]
    }
  }
};
// var twoSum = function(nums, target) {
//   var map = {}
//   for(var i = 0;i<nums.length;i++){
//     if(map[nums[i]] != undefined){
//       if(target == nums[i]*2){
//         return [map[nums[i]],i];
//       }
//     }
//     map[nums[i]] = i;
//     // const j = nums.indexOf(target - nums[i]);
//     const j = map[target - nums[i]]
//     if(j!=undefined && j!=i) {
//       return [j,i]
//     }
//   }
// };
// @lc code=end

