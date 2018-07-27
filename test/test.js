const assert = require('assert');
const testOne = require('../testOne.js');

describe('testOne', function() {
	it('should add numbers', function() {
		assert.equal(testOne(-275,279), 4)
	})
});
