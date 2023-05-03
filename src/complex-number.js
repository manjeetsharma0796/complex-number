const complexNumber = function(real, imaginary) {
  const getReal = function() {
    return real;
  };

  const getImaginary = function() {
    return imaginary;
  };

  const add = function(addend) {
    const realSum = real + addend.getReal();
    const imaginarySum = imaginary + addend.getImaginary();

    return complexNumber(realSum, imaginarySum);
  };

  const multiply = function(multiplier) {
    const multiplierReal = multiplier.getReal();
    const multiplierImaginary = multiplier.getImaginary();

    const realSum = real * multiplierReal - imaginary * multiplierImaginary;
    const imaginarySum = real * multiplierImaginary +  multiplierReal * imaginary;

    return complexNumber(realSum, imaginarySum);
  };

  const toString = function() {
    if(imaginary === 0) {
      return `${real}`;
    }

    if (real === 0) {
      return `${imaginary}i`;
    }

    const operator = (imaginary < 0) ? '-' : '+';
    return `${real} ${operator} ${Math.abs(imaginary)}i`;

  };

  return {getReal, getImaginary, add, multiply, toString};
};

exports.complexNumber = complexNumber;
