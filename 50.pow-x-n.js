/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {

    if(n<0){
        return 1/myPow(x,-n);
    }
    if(n == 0){
        return 1;
    }
    if(n == 1){
        return x;
    }
    if(n%2 == 1){
        const pow =  myPow(x,Math.floor((n-1)/2));
        return pow*pow*x;    
    }
    const pow =  myPow(x,n/2);
    return pow*pow
};
// @lc code=end

