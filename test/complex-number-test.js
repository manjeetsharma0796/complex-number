const {complexNumber, multiply} = require('../complex-number.js');
const {describe, it} = require('node:test');
const {strictEqual,deepStrictEqual} = require('assert');

describe("Testing complex-number", function() {
  describe("Testiing complexNumber and it's sub functions", function() {
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
      const sum = complexNumber().add;
      deepStrictEqual(sum(num1, num2), { 
        real: 4,
        imaginary: 7

      });
    });
  });

  describe("Testing Multiply", function() {
    it("Should multiply two complex numbers", function() {
      const num1 = complexNumber(2, 3);
      const num2 = complexNumber(1, 2);
      strictEqual(multiply(num1, num2), '-4 + 7i');
    });
  });
});
