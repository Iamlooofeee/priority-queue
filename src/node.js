class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;

	}

	appendChild(node) {
		if (this.left === null) {
			this.left = node;
			node.parent = this;
		} else if (this.right === null) {
			this.right = node;
			node.parent = this;
		} 
	}

	removeChild(node) {
		if (this.left === node) {
			this.left = null;
			node.parent = null;
		} else if (this.right === node) {
			this.right = null;
			node.parent = null;
		} else {
			throw new Error;
		}
	}

	remove() {
		if (this.parent) {
			this.parent.removeChild(this);
		} 
	}

	swapWithParent() {
	if (this.parent === null) {
		return;
	}
	var parent = this.parent,
		parentOfParent = this.parent.parent,		
		left = this.left,
		right = this.right,		
		parentSA = null,
		parentSB = null;
	
	if (parentOfParent !== null) {
	     parentOfParent.removeChild(parent);
		 parentOfParent.appendChild(this);		 
	}
	if(parent !== null) {
	    if(parent.left === this) {
	    	parent.left = null;
	    }

		else if (parent.right === this) {
			parent.right = null;
		}
		
		if(parentOfParent === null) {
			this.parent = null;
		}
		  

		if(parent.left !== null) {
			parentSA = parent.left; 
			parent.left = null;}

			else if(parent.right !== null) {
				parentSB = parent.right;
				parent.right = null;
			}

			if(left !== null) {
				this.removeChild(left);
				parent.appendChild(left);
			}
			if(right !== null) {
				this.removeChild(right);
				parent.appendChild(right);
			}
			this.appendChild(parent);
			if(parentSA !== null) {
				this.appendChild(parentSA);
			}
			if(parentSB !== null) {
				this.appendChild(parentSB);
			}
			}

	} 
}

module.exports = Node;
