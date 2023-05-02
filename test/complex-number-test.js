const {extractReal} = require('../complex-number.js');
const {describe, it} = require('node:test');
const {strictEqual} = require('assert');

describe("Testing complex-number", function() {
  describe("Testiing extractReal", function() {
    it("Should give real part", function() {
      strictEqual(extractReal(true), true);
    })
  })
})
