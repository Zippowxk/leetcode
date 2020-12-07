/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

    const res = []
    var f = function(numsArr,i){
        if(i == nums.length) {
            res.push(JSON.parse(JSON.stringify(numsArr)));
            return;
        }
        f(numsArr,i+1)
        numsArr.push(nums[i])
        f(numsArr,i+1)
        numsArr.pop()
    }
    f([],0);
    return res;
};
// @lc code=end

