const complexNumber = function(real, imaginary) {
  const getReal = function() {
    return real;
  }

  const getImaginary = function() {
    return imaginary;
  }

  return {getReal, getImaginary};
}
