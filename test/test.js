const assert = require('assert');

import testOne from '../testOne/testOne';
import testTwo from '../testTwo/testTwo';
// using the import keyword with Mocha you must first transpile

describe('Array', () => {
	describe('testOne', () => {
		it('01: should add numbers', () => {
			assert.equal(testOne(1,3), 4)
		})
	});

	describe('testTwo', () => {
		it('01: should multiply numbers', () => {
			assert.equal(testTwo(2,3), 6)
		})
	});
});