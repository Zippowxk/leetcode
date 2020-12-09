/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let lowest = prices[0];
    let highest = prices[0];
    let res = 0;
    for (let index = 0; index < prices.length; index++) {
        const price = prices[index];
        const pre = index==0? prices[0]:prices[index -1]
        const next = index == prices.length - 1 ? prices[index] : prices[index + 1]

        if(pre>= price && next >= price){
            lowest = price
        }
        if(pre<price && next <= price){
            highest = price
            // 卖出
            res += highest - lowest;
        }
    }
    return res;
};
// @lc code=end

