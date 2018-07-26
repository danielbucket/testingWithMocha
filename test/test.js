const assert = require('assert');
const addNumbers = require('../someFunction');

describe('Array', () => {
	describe('someFunc', () => {
		it('should add numbers', () => {
			assert.equal(addNumbers(1,3), 4)
		})
	});
});