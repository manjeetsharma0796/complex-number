const {complexNumber} = require('../complex-number.js');
const {describe, it} = require('node:test');
const {strictEqual,deepStrictEqual} = require('assert');

describe("Testing complex-number and it's sub functions", function() {
  describe("Testiing extractReal", function() {
    const number = complexNumber(2, 3);

    it("Should give real part", function() {
      strictEqual(number.getReal(), 2);
    });
  });

  describe("Testing extractImaginary", function() {
    const number = complexNumber(2, 3);

    it("Should give imaginary part", function() {
      strictEqual(number.getImaginary(), 3);
    });
  });

  describe("Testing Add", function() {
    it("Should add two complex numbers", function() {
      const num1 = complexNumber(1, 2);
      const num2 = complexNumber(3, 5);
      const result = num1.add(num2);
      deepStrictEqual(result.getReal(), 4) 
      deepStrictEqual(result.getImaginary(), 7)
    });
  });

  describe("Testing Multiply", function() {
    it("Should multiply two complex numbers", function() {
      const num1 = complexNumber(2, 3);
      const num2 = complexNumber(1, 2);
      const result = num1.multiply(num2);
      deepStrictEqual(result.getReal(), -4);
      deepStrictEqual(result.getImaginary(), 7);
    });
  });

  describe("Testing toString", function() {
    it("Should display negative complex number without real part as it is 0", function() {
      const num1 = complexNumber(0, -1);
      strictEqual(num1.toString(), '-1i');
    });

    it("Should display positive complex number without real part as it is 0", function() {
      const num1 = complexNumber(0, 1);
      strictEqual(num1.toString(), '1i');
    });

    it("Should display positive complex number with positive real", function() {
      const num1 = complexNumber(1, 1);
      strictEqual(num1.toString(), '1 +1i');
    });

    it("Should display negative complex number with positive real", function() {
      const num1 = complexNumber(1, -1);
      strictEqual(num1.toString(), '1 -1i');
    });
  });
});
