class Node {
    constructor(data) {
        this.data = data;
        this.count = 0;
        this.left =  null;
        this.right = null;
        this.balanceFac = 0;
    }

    getCount() {
        return this.count;
    }

    incrementCount() {
        this.count += 1;
    }
    
    getData() {
        return this.data;
    }
}

//Add should make sure that the tree is balanced
class BST {

    constructor() {
        this.root = null;
    }

    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function(node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } 
                else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };

            return searchTree(node);
        }
    }

    //finds and returns node with data
    find(data) {
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            } 
            if (current === null) {
                return null;
            }
        }
        return current;
    }

    

    //get root node's count
    getCount() {
        return this.root.getCount();
    }
}

module.exports = BST;