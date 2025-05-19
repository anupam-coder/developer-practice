class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (let c of word) {
      if (node[c] == null) {
        node[c] = {};
      }
      node = node[c];
    }
    node.isWord = true;
  }

  traverse(word) {
    let node = this.root;
    for (let c of word) {
      node = node[c];
      if (node == null) {
        return null;
      }
    }
    return node;
  }

  search(word) {
    const node = this.traverse(word);
    return node != null && node.isWord === true;
  }

  startsWith(prefix) {
    return this.traverse(prefix) != null;
  }
}
let word = "apple";
var obj = new Trie();
obj.insert(word);
var param_2 = obj.search(word);
var param_3 = obj.startsWith(prefix);

//Build Trie

let words = ["oath", "pea", "eat", "rain"];

const buildTrie = () => {
  const root = {};
  for (const w of words) {
    let node = root;
    for (const c of w) {
      if (node[c] == null) node[c] = {};
      node = node[c];
    }
    node.word = w;
  }
  return root;
};

//output of the buildTrie
let output = {
  o: {
    a: {
      t: {
        h: {
          word: "oath",
        },
      },
    },
  },
  p: {
    e: {
      a: {
        word: "pea",
      },
    },
  },
  e: {
    a: {
      t: {
        word: "eat",
      },
    },
  },
  r: {
    a: {
      i: {
        n: {
          word: "rain",
        },
      },
    },
  },
};
