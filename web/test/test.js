var expect = require('chai').expect;

describe('Basic Config', function () {
	beforeEach(module('efficientApp'));

	it('Should pass if the default config is working.', function () {
		expect(true).to.be.true;
	})
})