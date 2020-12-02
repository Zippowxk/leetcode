/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(!s) return true;
    const isLeft = (e)=>{
        return e=='{'|e=='['|e=='(';
    }
    const isPair = (l,r)=>{
        return (l=='{'&&r=='}')|(l=='('&&r==')')|(l=='['&&r==']')
    }
    const array = s.split('');
    const stack = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(isLeft(element)){
            stack.push(element);
        }else{
            if(!isPair(stack.pop(),element)){
                return false;
            }
        }
    }
    
    return stack.length == 0;
};
// @lc code=end

