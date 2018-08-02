const chai = require('chai');
const should = require('chai').should();
const chaiHTTP = require('chai-http');
const request = require('supertest');

const appServer = require('../server/server');

chai.use(chaiHTTP);

describe('appServer', () => {
// tested with Chai
	it('should respond via Chai via Chai', () => {
		chai.request(appServer)
			.get('/')
			.end((err,res) => res.should.have.status(200));
	});

	// tested with Jest
	it('should to the GET method via Jest', () => {
			return request(appServer)
						 	.get('/')
						 	.expect(200);
		});
});
