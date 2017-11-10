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
		if (this.isEmpty()) {
			return;
		}
		let fakeDetachedNode = this.detachRoot();
		if (this.isEmpty()) {
			return fakeDetachedNode.data;
		}
		this.restoreRootFromLastInsertedNode(fakeDetachedNode);
		this.shiftNodeDown(this.root);
		return fakeDetachedNode.data;
		this.count--;
		
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
		
	}

	size() {
		if (this.isEmpty()) {
			return 0;
		} else {
			return this.count;
		}
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
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
