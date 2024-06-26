function fibonacci(num) {
  if (num <= 0) {
      return 0;
  }
  if (num === 1) {
      return 0;
  }
  let a = 0, b = 1, c;
  for (let i = 2; i <= num; i++) {
      c = a + b;
      a = b;
      b = c;
  }
  return a;
  
}

module.exports = fibonacci;
