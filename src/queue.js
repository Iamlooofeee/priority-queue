const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		if (maxSize) {
			this.maxSize = maxSize;
		} else {
			this.maxSize = 30;
		}
		this.heap = new MaxHeap;
		this.count = 0;

		this.countForEach = 0;
		this.maxCountForEach = 0;
		this.maxHeap = new MaxHeap();
	}

	push(data, priority) {
		if (this.count >= this.maxSize) {
			throw new Error;
		} else {
			this.data = data;
			this.priority = priority;
			this.heap.push(data, priority);
			this.count++;
		}
	}

	shift() {
		if (this.count === 0) {
			throw new Error;
		}
		this.heap.pop();
		this.count--;
		return this.data;
	}

	size() {
		return this.count;
	}

	isEmpty() {
		if (this.count !== 0) {
			return false;
		} 
		return true;
	}
}

module.exports = PriorityQueue;
