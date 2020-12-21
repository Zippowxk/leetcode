/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {

    let res = [0];
    coins = coins.sort((a,b)=>b-a)
    
    for (let i = 1; i < amount+1; i++) {
        let min = NaN;
        for (let j = 1; j < coins.length; j++) {
            const coin = coins[j];
            if(i>=coin){
                min = min==NaN ? (res[i-coin]+1) : Math.min(res[i-coin]+1,min)
            }
        }
        res.push(min);
    }
    console.log(res);
    return res[amount]
};
// @lc code=end

