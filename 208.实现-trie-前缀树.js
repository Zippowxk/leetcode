/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */

var Trie = function() {
    this.root = new TrieNode();
};
function TrieNode(){
    this.links = {};
    this.length = 26;
    this.isEnd = false;
}
TrieNode.prototype.get = function(char){
    return this.links[char];
}
TrieNode.prototype.contains = function(char){
    return this.links[char]!==undefined;
}
TrieNode.prototype.put = function(char,node){
    this.links[char] = node;
}
TrieNode.prototype.setEnd = function(){
    this.isEnd = true;
}
TrieNode.prototype.isEnd = function(){
    return this.isEnd;
}
/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    const arr = word.split('');
    let node = this.root;
    for (let i = 0; i < arr.length; i++) {
        const char = arr[i];
        if (!node.contains(char)){
            let child = new TrieNode()
            node.put(char,child)
            node = child;
        }else{
            node = node.get(char)
        }
    }
    node.setEnd();
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    const arr = word.split('');
    let node = this.root;
    for (let i = 0; i < arr.length; i++) {
        const char = arr[i];
        if (node.contains(char)){
            node = node.get(char)
        }else{
            return false;
        }
    }
    return node.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    const arr = prefix.split('');
    let node = this.root;
    for (let i = 0; i < arr.length; i++) {
        const char = arr[i];
        if (node.contains(char)){
            node = node.get(char)
        }else{
            return false;
        }
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

