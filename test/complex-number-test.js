const {complexNumber} = require('../complex-number.js');
const {describe, it} = require('node:test');
const {strictEqual} = require('assert');

describe("Testing complex-number", function() {
  describe("Testiing complexNumber", function() {
    it("Should give real part", function() {
      const number = complexNumber(2, 3);
      strictEqual(number.real(), 2);
    });
  });
});
