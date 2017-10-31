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


		for (var i = 0; i < this.count; i++) {
			for (var j = i++; j < i; j++) {
				if (this.expectedData[i] >= this.expectedData[j]) {
					this.maxCountForEach = this.expectedData[i];
				} else {
					this.maxCountForEach = this.expectedData[j];
				}
			}
		}


		return this.data;
	}

	size() {
		
	}

	isEmpty() {
		
	}
}

module.exports = PriorityQueue;
