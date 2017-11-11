const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.count = 0;
	}

	push(data, priority) {
		var node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
		this.count++;
	}

	pop() {
		if(this.root === null) {
			return;
		}
		let detached = this.detachRoot();
		this.restoreRootFromLastInsertedNode(detached);
		this.shiftNodeDown(this.root);
		this.count--;
		return root.data;
	}

	detachRoot() {
		let root = this.root;
		let rootIndex = this.parentNodes.indexOf(root);
		if (rootIndex >= 0) {
		  this.parentNodes.splice(rootIndex, 1);
		}
		this.root = null;
		return root;

	}

	restoreRootFromLastInsertedNode(detached) {
		if (this.parentNodes.length > 1) {
			let lastInsertedNode = this.parentNodes[this.parentNodes.length - 1];
			this.parentNodes.pop();
			this.root = lastInsertedNode;
			if (lastInsertedNode.parent === detached) {
				this.parentNodes.unshift(lastInsertedNode);
			}
			if (detached.left !== lastInsertedNode) {
				lastInsertedNode.appendChild(detached.left);
			}
			if (detached.right !== lastInsertedNode) {
				lastInsertedNode.appendChild(detached.right);
			}			
		}
		if (this.parentNodes.length === 1) {
			let lastInsertedNode = this.parentNodes[0];
			this.root = lastInsertedNode;
			this.parentNodes.pop();
		}
	}

	size() {
		return this.count;
	}

	isEmpty() {
		if (this.parentNodes.length === 0) {
			return true;
		} 
		return false;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.count = 0;
	}

	insertNode(node) {
		if (!this.root) {
			this.root = node;
		} else {
			this.parentNodes[0].appendChild(node);
		}
		this.parentNodes.push(node);
		if (this.parentNodes[0].left && this.parentNodes[0].right) {
			this.parentNodes.shift();
		}
	}

	shiftNodeUp(node) {

		if (node.parent && node.priority > node.parent.priority) {
			if (node.parent === this.root) {
				this.root = node;
			}
			const pos = this.parentNodes.indexOf(node.parent);
			const pos1 = this.parentNodes.indexOf(node);
			if (pos != -1) {
				this.parentNodes[pos] = node;
			}
			if (pos1 != -1) {
				this.parentNodes[pos1] = node.parent;
			}
			node.swapWithParent();
			this.shiftNodeUp(node);
		} else if (node.parent === null) 
			this.root = node;
	}

	shiftNodeDown(node) {
		if (node) {
			var temp;
			if (((node.left) && (node.left.priority > node.priority)) || ((node.right) && (node.right.priority > node.priority))) {
				if (node.left && node.right) { 
					if(node.left.priority > node.right.priority) {
						temp = node.left;
					} else {
						temp = node.right;
					}
				} else if (node.left) {
					temp = node.left;
				} else {
					temp = node.right;
				}
				var j = this.parentNodes.indexOf(temp);
				var i = this.parentNodes.indexOf(node);
				if (j !== -1){
					if (i !== -1){
						this.parentNodes[i] = temp;
						this.parentNodes[j] = node;
					} else {
						this.parentNodes[j] = node;
					}
				}
				if (node === this.root) {
					this.root = temp;
				}
				temp.swapWithParent();
				this.shiftNodeDown(node);
			}
		}
	}
}

module.exports = MaxHeap;
