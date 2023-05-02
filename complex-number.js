const complexNumber = function(real, imaginary) {
  const numbers = {real, imaginary}
  const extractReal = function() {
    return numbers.real;
  };
  const extractImaginary = function() {
    return numbers.imaginary;
  };

  return {real: extractReal, imaginary: extractImaginary};
};

exports.complexNumber = complexNumber;
