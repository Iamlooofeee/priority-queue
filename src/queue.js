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


		return this.data;
	}

	size() {
		
	}

	isEmpty() {
		if (this.data === undefined && this.priority === undefined) {
			return true;
		} 
		return false;
	}
}

module.exports = PriorityQueue;
