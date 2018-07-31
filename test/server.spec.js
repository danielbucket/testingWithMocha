const chai = require('chai');
const should = require('chai').should();
const chaiHTTP = require('chai-http');
const express = require('express');

const server = require('../server/server');

chai.use(chaiHTTP);

describe('server', () => {

	it('should respond', (done) => {
		chai.request(server)
		.get('/')
		.end((err,res) => {
			res.should.have.status(200);

			done();
		});
	});
});
