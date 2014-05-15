"use strict";
/* global describe */
/* global it */

var search = require('../api/search');

var chai = require('chai');
chai.use(require('chai-as-promised'));
var expect = chai.expect;

describe('search', function() {

	describe('artist', function() {
		it('should return results', function() {
			return expect(search.artist('snoop'))
				.to.eventually.be.instanceof(Array);
		});
	});

	describe('station', function() {
		it('should return results', function() {
			return expect(search.station('snoop'))
				.to.eventually.be.instanceof(Array);
		});
	});

	describe('song', function() {
		it('should return a result containing a songs array', function() {
			return expect(search.song('snoop'))
				.to.eventually.haveOwnProperty('songs');
		});
	});

	describe('situation', function() {
		it('should return results', function() {
			return expect(search.situation('snoop'))
				.to.eventually.be.instanceof(Array);
		});
	});

	describe('gallery', function() {
		it('should return results', function() {
			return expect(search.gallery('snoop'))
				.to.eventually.be.instanceof(Array);
		});
	});

});
