const complexNumber = function(real, imaginary) {
  const number = {real, imaginary}

  const extractReal = function() {
    return number.real;
  };

  const extractImaginary = function() {
    return number.imaginary;
  };

  const add = function(addend) {
    const realSum = number.real + addend.real();
    const imaginarySum = number.imaginary + addend.imaginary();
    return complexNumber(realSum, imaginarySum);

  };

  const multiply = function(num2) {
    const realNumMul = number.real * num2.real();
    const pureImaginaryMul = number.imaginary * num2.imaginary() * (-1);
    const semiImaginaryMul1 = number.real * num2.imaginary() 
    const semiImaginaryMul2 = num2.real() * number.imaginary;
    const realSum = realNumMul + pureImaginaryMul
    const imaginarySum = semiImaginaryMul1 + semiImaginaryMul2;

    return complexNumber(realSum, imaginarySum);
  };

  const display = function(number) {
    if (number.real() === 0) {
      return `${number.imaginary()}i`;
    }

    if(number.imaginary() > 0) {
      return `${number.real()} +${number.imaginary()}i`;
    }

    return `${number.real()} ${number.imaginary()}i`;

  };

  return {real: extractReal, imaginary: extractImaginary, add, multiply, display};
};

exports.complexNumber = complexNumber;
