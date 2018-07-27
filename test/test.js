const assert = require('assert');
const testOne = require('../testOne/testone.js');

import testTwo from '../testTwo/testTwo';
// using the import keyword with Mocha you must first transpile

describe('Array', () => {
	describe('testOne', () => {
		it('01: should add numbers', () => {
			assert.equal(testOne(-275,279), 4)
		})
	});

	describe('testTwo', () => {
		it('01: should multiply numbers', () => {
			assert.equal(testTwo(5,5), 25)
		})
	});
});