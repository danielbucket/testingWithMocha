const assert = require('assert');
const expect = require('chai').expect;

const moduleOne = require('../01_moduleOne/moduleOne.js');

import { moduleTwo } from '../02_moduleTwo/moduleTwo.js';
// to use the import statements with Mocha you must first
// transpile the code using Babel

import combineModules from '../03_moduleThree/moduleThree';

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

describe('moduleThree', () => {
	it('01: moduleOne should be a function', () => {
		expect(moduleOne).to.be.a('function')
	})

	it('02: moduleTwo should be a function', () => {
		expect(moduleTwo).to.be.a('function')
	})

	it('03: combineModules() should be a function', () => {
		expect(combineModules).to.be.a('function')
	})


// this third test is what is called an integration test. combineModules() 
// does exactly that, it combines moduleOne and moduleTwo into a single function.
	it('03: should behave as expected', () => {
		assert.equal(combineModules(5,5), 15)
	})
})