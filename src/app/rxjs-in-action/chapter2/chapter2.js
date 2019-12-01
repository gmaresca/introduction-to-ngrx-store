/**
 *  RxJS in Action
 *  Listing 2.2
 *  @author Paul Daniels
 *  @author Luis Atencio
 */


// Listing 2.2 Custom iterator that buffers a set of bufferSize elements
export function BufferIterator(arr, bufferSize = 2) {
	let nextIndex = 0;

	return {
		next: () => {
			if (nextIndex >= arr.length) {
				return { done: true };
			}
			else {
				let buffer = new Array(bufferSize);
				for (let i = 0; i < bufferSize; i++) {
					buffer[i] = (arr[nextIndex++]);
				}
				return { value: buffer, done: false };
			}
		}
	};
}

// does not work
export class BufferIt {
	constructor(arr, bufferSize = 2) {
		this.nextIndex = 0;
	}

	[Symbol.iterator]() {
		return {
			next: () => {
				if (nextIndex >= arr.length) {
					return { done: true };
				}
				else {
					let buffer = new Array(bufferSize);
					for (let i = 0; i < bufferSize; i++) {
						buffer[i] = (arr[nextIndex++]);
					}
					return { value: buffer, done: false };
				}
			}
		};
	}
}
