const complexNumber = function(real, imaginary) {
  const number = {real, imaginary}
  const extractReal = function() {
    return number.real;
  };
  const extractImaginary = function() {
    return number.imaginary;
  };

  const add = function(num1, num2) {
    const realSum = num1.real() + num2.real();
    const imaginarySum = num1.imaginary() + num2.imaginary();
    number.real = realSum;
    number.imaginary = imaginarySum;

    return number;
  };

  const multiply = function(num1, num2) {
    const realNumMul = num1.real() * num2.real();
    const pureImaginaryMul = num1.imaginary() * num2.imaginary() * (-1);
    const semiImaginaryMul1 = num1.real() * num2.imaginary() 
    const semiImaginaryMul2 = num2.real() * num1.imaginary();
    number.real = realNumMul + pureImaginaryMul
    number.imaginary = semiImaginaryMul1 + semiImaginaryMul2;

    return number;
  };

  const display = function(number) {
    if (number.real() === 0) {
      return `${number.imaginary()}i`;
    }
  };

  return {real: extractReal, imaginary: extractImaginary, add, multiply, display};
};

exports.complexNumber = complexNumber;
