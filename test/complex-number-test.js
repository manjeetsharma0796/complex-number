const {complexNumber} = require('../complex-number.js');
const {describe, it} = require('node:test');
const {strictEqual} = require('assert');

describe("Testing complex-number", function() {
  describe("Testiing complexNumber", function() {
    it("Should give real part", function() {
      strictEqual(complexNumber(2, '3i').real(), 2);
    });
  });
});
