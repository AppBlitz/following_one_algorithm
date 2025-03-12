// Javascript program to implement Tree Sort

// Class containing left and right child of current node and key value
class Node {
  constructor(item) {
    this.key = item;
    this.left = this.right = null;
  }
}

// Root of BST
let root = new Node();

root = null;

// This method mainly calls insertRec()
function insert(key) {
  root = insertRec(root, key);
}

/* A recursive function to insert a new key in BST */
function insertRec(root, key) {
  /* If the tree is empty, return a new node */
  if (root == null) {
    root = new Node(key);
    return root;
  }

  /* Otherwise, recur down the tree */
  if (key < root.key) root.left = insertRec(root.left, key);
  else if (key > root.key) root.right = insertRec(root.right, key);

  /* return the root */
  return root;
}

// A function to do inorder traversal of BST
function inorderRec(root) {
  if (root != null) {
    inorderRec(root.left);
    console.log(root.key + " ");
    inorderRec(root.right);
  }
}

function treeins(arr) {
  for (let i = 0; i < arr.length; i++) {
    insert(arr[i]);
  }
}

// Driver Code

function createList(n) {
  let list = [];
  for (let i = 0; i < n; i += 1) {
    let number = Math.random() * n;
    list[i] = Math.floor(number);
  }
  return list;
}
let arr = createList(10);
console.log("Original array: " + arr);

// Measure execution time
const start = performance.now(); // Start timing
treeins(arr);
const end = performance.now(); // End timing

console.log("Sorted array: ");
console.log(arr.join());
// inorderRec(root);

// Display execution time
console.log(`El tiempo de ejecución fue: ${(end - start).toFixed(4)} ms`);
