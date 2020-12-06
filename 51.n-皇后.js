/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {

    // 任意绝对值相同 return false
    // 绝对值可以有不同 继续递归
    // 最终都不同 return true
    const returnArr = [];
    if(n==1){
        return [['Q']]
    }
    function helper(xyAddMap, yxMinusMap, avaliableYMap, x, res) {

        for (let y in avaliableYMap) {
            const xyAdd = Number(x) + Number(y);
            const yxMinus = y - x;
            if (xyAddMap[xyAdd] || yxMinusMap[yxMinus]) {
            } else {
                const newRes = JSON.parse(JSON.stringify(res));
                newRes[x][y] = 'Q';

                if (x >= n - 1) {
                    console.log(xyAddMap)
                    console.log(xyAdd)
                    const newOne = []
                    newRes.forEach(element => {
                        newOne.push(element.join(''));
                    });
                    returnArr.push(newOne);
                } else {
                    const newxy = JSON.parse(JSON.stringify(xyAddMap));
                    const newyx = JSON.parse(JSON.stringify(yxMinusMap));
                    const avaliableY = JSON.parse(JSON.stringify(avaliableYMap));
                    newxy[`${xyAdd}`] = true;
                    newyx[`${yxMinus}`] = true;
                    delete avaliableY[`${y}`]
                    if (x == 3 && y == 2) {
                        console.log(newyx)
                    }
                    helper(newxy, newyx, avaliableY, x + 1, newRes);
                }

            }
        }
    }
    const avaliableYMap = {}
    const res = []
    for (let y = 0; y < n; y++) {
        avaliableYMap[`${y}`] = true;
        let arr = []
        for (let x = 0; x < n; x++) {
            arr.push('.');
        }
        res.push(arr);
    }

    for (let y = 0; y < n; y++) {
        const x = 0;
        const xyAdd = x + y;
        const yxMinus = y - x;
        const avaliableY = JSON.parse(JSON.stringify(avaliableYMap));
        const newres = JSON.parse(JSON.stringify(res));
        delete avaliableY[`${y}`]
        const xyAddMap = {};
        const yxMinusMap = {};
        xyAddMap[`${xyAdd}`] = true;
        yxMinusMap[`${yxMinus}`] = true;
        newres[x][y] = 'Q'

        helper(xyAddMap, yxMinusMap, avaliableY, 1, newres)
    }
    return returnArr;
};
// @lc code=end

