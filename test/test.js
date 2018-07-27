const assert = require('assert');
const moduleOne = require('../moduleOne/moduleOne.js');

import moduleTwo from '../moduleTwo/moduleTwo.js';
// to use the import statements with Mocha you must first
// transpile the code using Babel

describe('moduleOne', function() {
	it('01: should add numbers', function() {
		assert.equal(moduleOne(-275,279), 4)
	});
});

describe('moduleTwo', () => {
	it('01: should multiply numbers', () => {
		assert.equal(moduleTwo(5,5), 25)
	});
});