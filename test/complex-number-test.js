const {complexNumber, add} = require('../complex-number.js');
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
  describe("Testing Add", function() {
    it("Should add two complex numbers", function() {
      const num1 = complexNumber(1, 2);
      const num2 = complexNumber(3, 5);
      strictEqual(add(num1, num2), '4 + 7i');
    })
  })
});
