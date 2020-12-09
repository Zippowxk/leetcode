/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowest = prices[0];
    let highest = prices[0];
    let res = [];
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
            res.push(highest - lowest)
        }
    }
    res = res.sort((a,b)=>b-a)
    console.log(res);
    
    
    if(res.length==0){
        return 0
    }else if (res.length==1){
        return res[0]
    }else{
        return res[0]+res[1];
    }
};
// @lc code=end

