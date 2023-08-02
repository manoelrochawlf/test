function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  const primeNumbers = [];
  let number = 2;
  
  while (primeNumbers.length < 10) {
    if (isPrime(number)) {
      primeNumbers.push(number);
    }
    number++;
  }
  
  console.log('Os primeiros 10 números primos são:');
  console.log(primeNumbers);
  