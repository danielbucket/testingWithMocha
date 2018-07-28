const assert = require('assert');
const expect = require('chai').expect;

const moduleOne = require('../01_moduleOne/moduleOne.js');

import { moduleTwo } from '../02_moduleTwo/moduleTwo.js';
// to use the import statements with Mocha you must first
// transpile the code using Babel

import combineModules from '../03_moduleThree/moduleThree';

describe('moduleOne', function() {
	it('01: should add numbers', function() {
		const moduleOneResult = moduleOne(-275,279);

		assert.equal(moduleOneResult, 4);
	});
});

describe('moduleTwo', () => {
	it('01: should multiply numbers', () => {
		const moduleTwoResult = moduleTwo(5,5);

		assert.equal(moduleTwoResult, 25);
	});
});

// this third test is what is called an integration test. combineModules() 
// does exactly that, it combines moduleOne and moduleTwo into a single function.
describe('moduleThree', () => {
	it('01: moduleOne() should be a function', () => {
		expect(moduleOne).to.be.a('function');
	});

	it('02: moduleTwo() should be a function', () => {
		expect(moduleTwo).to.be.a('function');
	});

	it('03: combineModules() should be a function', () => {
		expect(combineModules).to.be.a('function');
	});

	describe('combineModules() functionality', () => {
		it('03.01: combineModules() should give the same result as moduleOne() being subtracted from moduleTwo()', () => {
			const num1 = 12;
			const num2 = 13;
			const combinedResult = (moduleTwo(num1,num2) - moduleOne(num1,num2));

			assert.equal(combinedResult, combineModules(num1,num2));
		});

		it('03.02: should accept only numbers', () => {
			const blister = combineModules('string','gnirts')

			expect(combineModules('string','gnirts'))
				.to.have.string('arguments must be numbers');

			expect(combineModules('string',13))
				.to.equal('arguments must be numbers');

			expect(combineModules(12,'string'))
				.to.equal('arguments must be numbers');
		});
	});

	it('04: should behave as expected', () => {
		assert.equal(combineModules(5,5), 15)
	});
});