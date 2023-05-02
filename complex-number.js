const complexNumber = function(real, imaginary) {
  const numbers = {real, imaginary}
  const extractReal = function() {
    return numbers.real;
  };
  const extractImaginary = function() {
    return numbers.imaginary;
  };
  const add = function(num1, num2) {
    const realSum = num1.real() + num2.real();
    const imaginarySum = num1.imaginary() + num2.imaginary();

    return `${realSum} + ${imaginarySum}i`;
  };

  return {real: extractReal, imaginary: extractImaginary, add};
};

exports.complexNumber = complexNumber;
