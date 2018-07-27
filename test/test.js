const assert = require('assert');
const moduleOne = require('../moduleOne/moduleOne.js');

describe('moduleOne', function() {
	it('should add numbers', function() {
		assert.equal(moduleOne(-275,279), 4)
	});
});

