/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length === 0){
        return [];
    }
    const itv = intervals.sort((a,b) => a[0]-b[0]);
    const res = []
    res.push(itv[0]);
    itv.forEach(current => {
        const pre = res.pop();
        if(pre[1]<current[0]){
            res.push(pre)
            res.push(current);
        }else{
            pre[1] = Math.max(pre[1],current[1])
            res.push(pre);
        }
    });

    return res;
    
};
// @lc code=end

