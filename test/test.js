const assert = require('assert');
const { addNumbers } = require('../someFunction');

describe('Array', () => {
	describe('someFunc', () => {
		it('should add numbers', () => {
			assert.equal(addNumbers(1,3), 4)
		})
	});

	describe('#indexOf()', () => {
		it('should return -1 when the value is not present', () => {
			assert.equal([1,2,3].indexOf(4), -1)
		})
	});
});