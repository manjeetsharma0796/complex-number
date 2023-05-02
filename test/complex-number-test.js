const {complexNumber} = require('../complex-number.js');
const {describe, it} = require('node:test');
const {strictEqual} = require('assert');

describe("Testing complex-number", function() {
  describe("Testiing complexNumber", function() {
    const number = complexNumber(2, 3);

    it("Should give real part", function() {
      strictEqual(number.real(), 2);
    });

    it("Should give imaginary part", function() {
      strictEqual(number.imaginary(), 3);
    });
  });
});
