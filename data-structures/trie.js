class Node {
  constructor() {
    this.keys = new Map();
    this.isWord = false;
  }

  setWord = () => (this.isWord = true);
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  addWord(word, node = this.root) {
    if (word.length == 0) {
      node.setWord();
      return;
    } else {
      if (node.keys.has(word[0])) {
        let oldNode = node.keys.get(word[0]);
        return this.addWord(word.substr(1), oldNode);
      } else {
        let newNode = new Node();
        node.keys.set(word[0], newNode);
        return this.addWord(word.substr(1), newNode);
      }
    }
  }

  search(word, node = this.root) {
    if (word.length == 0) {
      if (node.isWord) return true;
      else return false;
    }
    if (!node.keys.has(word[0])) return false;
    node = node.keys.get(word[0]);
    return this.search(word.substr(1), node);
  }
}

// let trie = new Trie();
// trie.addWord("ball");
// trie.addWord("baba");
// trie.addWord("Boba");
// trie.addWord("hello");
// console.log(trie.search("ball"));
// console.log(trie.search("baba"));
// console.log(trie.search("bababa"));
// console.log(trie.search("hello"));
