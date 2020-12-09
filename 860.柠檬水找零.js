/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    const map = {
        5:0,
        10:0,
        20:0,
        50:0,
        100:0,
    }

    const reduce = (value,cash)=>{
        console.log(map)
        const useCash = Math.floor(value/cash)
        const last = value%cash;
        if(map[cash]>=useCash){
            if(last==0){
                map[cash] = Number(map[cash]-useCash);
                return true;
            }else{
                map[cash] = Number(map[cash]-useCash);
                return reduce(value-useCash*cash,cash/2);
            }
        }else{
            if(cash == 5){
                return false;
            }
            const mapcash = map[cash]
            map[cash] = 0;
            return reduce(value-mapcash*cash,cash/2);
        }
    }
    for (let index = 0; index < bills.length; index++) {
        const bill = bills[index];
        map[bill] = map[bill]+1;
        if(bill==5){
            continue;
        }
        if(!reduce(bill-5,20)){
            return false;
        }
    }
    return true;
};
// @lc code=end

