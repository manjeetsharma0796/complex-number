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

const add = function(num1, num2) {
  const realSum = num1.real() + num2.real();
  const imaginarySum = num1.imaginary() + num2.imaginary();

  return `${realSum} + ${imaginarySum}i`;
};

const multiply = function(num1, num2) {
  const realNumMul = num1.real() * num2.real();
  const pureImaginaryMul = num1.imaginary() * num2.imaginary() * (-1);
  const semiImaginaryMul1 = num1.real() * num2.imaginary() 
  const semiImaginaryMul2 = num2.real() * num1.imaginary();

  return `${realNumMul + pureImaginaryMul} + ${semiImaginaryMul1 + semiImaginaryMul2}i`;
};

exports.complexNumber = complexNumber;
exports.add = add;
exports.multiply = multiply;
