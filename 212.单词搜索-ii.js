/*
 * @lc app=leetcode.cn id=212 lang=javascript
 *
 * [212] 单词搜索 II
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {

    // trie
    let root = {};
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const chars = word.split("");
        let node = root;
        for (let j = 0; j < chars.length; j++) {
            const char = chars[j];
            if(!node[char]){
                let newNode = {}
                node[char] = newNode
                node = newNode;
            }else{
                node = node[char];
            }
        }
        node["#"] = true;
    }

    const dx = [0,0,1,-1];
    const dy = [1,-1,0,0];
    const m = board.length;
    const n = board[0].length;
    var res = [];
    // DFS
    var DFS = function(board,i,j,trie,currentWord) {
        currentWord += board[i][j]
        const node = trie[board[i][j]]
        if(node['#'] && res.indexOf(currentWord)==-1){
            res.push(currentWord);
        }
        const tmp = board[i][j];
        board[i][j] = '@'
        for (let k = 0; k < dx.length; k++) {
            const x = dx[k]+i;
            const y = dy[k]+j;
            if( 0<=x && x<m && 0<=y && y<n && board[x][y] != '@' && node[board[x][y]]){
                DFS(board,x,y,node,currentWord);
            }
        }
        board[i][j] = tmp;
    }

    for (let i = 0; i < board.length; i++) {
        const row = board[i];
        for (let j = 0; j < row.length; j++) {
            const item = row[j];
            if(root[item]){
                DFS(board,i,j,root,'');
            }
        }
    }
    return res;
};
// @lc code=end

