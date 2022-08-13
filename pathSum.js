class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const pathSum = (root, sum) => {
    if (!root) return false;
    if (root.val === sum && !root.left && !root.right) return true;
    return pathSum(root.left, sum - root.val) || pathSum(root.right, sum - root.val)
}

console.log(pathSum(a, 4))