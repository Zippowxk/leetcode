/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    for (let i = triangle.length-2; i >= 0; i--)
        for (let j = 0; j < triangle[i].length; j++)
            triangle[i][j] += Math.min(triangle[i+1][j], triangle[i+1][j+1])
    return triangle[0][0]
}
// var minimumTotal = function(triangle) {

//     const res = []
//     for (let i = triangle.length-1; i >= 0; i--) {
//         const level = triangle[i];
//         const levelRes = []
//         for (let j = 0; j < level.length; j++) {
//             const current = Number(level[j]);
//             if(i== triangle.length-1){
//                 levelRes.push(current)
//             }else{
//                 const preLevel = res[triangle.length-i-2]
//                 levelRes.push(Number(current + Number(Math.min(preLevel[j],preLevel[j+1]))))
//             }
//         }
//         res.push(levelRes)
//     }
//     const last = res[res.length-1];
//     const lastLast = last[last.length-1]
//     // console.log(res)
//     return lastLast

// };

// @lc code=end

