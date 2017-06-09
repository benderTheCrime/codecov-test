const { expect } = require('chai');

const { bar, foo } = require('../');

describe('index', function() {
    describe('bar', function() {
        it('should return 1 given 1', function() {
            expect(bar(1)).to.equal(1);
        });
        it('should return 1 given 2', function() {
            expect(bar(2)).to.equal(1);
        });
    });
    describe('foo', function() {
        it('should return 1', function() {
            expect(foo(1)).to.equal(1);
        });
    });
});