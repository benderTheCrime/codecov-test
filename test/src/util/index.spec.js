const { expect } = require('chai');

const { isPOJsO } = require('../../../src/util');

describe('util', function() {
    describe('isPOJsO', function() {
        it('should return false given an undefined value', function() {
            expect(isPOJsO()).to.equal(false);
            expect(isPOJsO(undefined)).to.equal(false);
        });
        it('should return false given a null value', function() {
            expect(isPOJsO(null)).to.equal(false);
        });
        it('should return false given a number value', function() {
            expect(isPOJsO(1)).to.equal(false);
        });
        it('should return false given a number value', function() {
            expect(isPOJsO('foo')).to.equal(false);
        });
    });
});