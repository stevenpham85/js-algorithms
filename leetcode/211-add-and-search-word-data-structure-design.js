const expect = require("expect.js");
const test = require("./test").test;

/**
 * Initialize your data structure here.
 */

function Node() {
  this.keys = new Map();
  this.isWord = false;
  this.setWord = () => {
    this.isWord = true;
  };
}

var WordDictionary = function () {
  this.root = new Node();
  this.addWord = function (word, node = this.root) {
    if (word.length == 0) {
      node.setWord();
      return;
    }
    if (node.keys.has(word[0])) {
      let oldNode = node.keys.get(word[0]);
      return this.addWord(word.substr(1), oldNode);
    } else {
      let newNode = new Node();
      node.keys.set(word[0], newNode);
      return this.addWord(word.substr(1), newNode);
    }
  };

  this.search = (word, node = this.root) => {
    if (word.length == 0) {
      if (node.isWord) return true;
      else return false;
    }
    if (word[0] !== ".") {
      let node_w0 = node.keys.has(word[0])
        ? node.keys.get(word[0])
        : new Node();
      return this.search(word.substr(1), node_w0);
    } else {
      for (let any_node of node.keys.values()) {
        if (this.search(word.substr(1), any_node)) return true;
      }
      return false;
    }
  };
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
// WordDictionary.prototype.addWord = function (word, node = this.root) {
//   this.list.push(word);
// };

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
// WordDictionary.prototype.search = function (word) {
//   let reg = new RegExp("^" + word + "$");
//   for (let w of this.list) {
//     if (reg.test(w)) return true;
//   }
//   return false;
// };

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

let dic = new WordDictionary();
dic.addWord("ball");
dic.addWord("baba");
console.log(dic);
console.log(dic.search("ball"));
console.log(dic.search("baba"));
console.log(dic.search("b.b."));
console.log(dic.search("babl"));
