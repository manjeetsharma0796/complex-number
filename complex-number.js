const complexNumber = function(real, imaginary) {
  const getReal = function() {
    return real;
  };

  const getImaginary = function() {
    return imaginary;
  };

  const add = function(addend) {
    const addendReal = addend.getReal();
    const addendImaginary = addend.getImaginary();
    const realSum = real + addendReal;
    const imaginarySum = imaginary + addendImaginary;
    return complexNumber(realSum, imaginarySum);

  };

  const multiply = function(multiplier) {
    const multiplierReal = multiplier.getReal();
    const multiplierImaginary = multiplier.getImaginary();
    const realSum = real * multiplierReal + imaginary * multiplierImaginary * (-1);
    const imaginarySum = real * multiplierImaginary +  multiplierReal * imaginary;

    return complexNumber(realSum, imaginarySum);
  };

  const display = function() {
    if (real === 0) {
      return `${imaginary}i`;
    }

    if(imaginary > 0) {
      return `${real} +${imaginary}i`;
    }

    return `${real} ${imaginary}i`;

  };

  return {getReal, getImaginary, add, multiply, display};
};

exports.complexNumber = complexNumber;
