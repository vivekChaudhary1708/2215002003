
export const getPrimeNumbers = () => {
  const primes = [];
  let num = 2;
  while (primes.length < 4) { 
      if (isPrime(num)) primes.push(num);
      num++;
  }
  return primes;
};


const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
  }
  return num > 1;
};


export const getFibonacciNumbers = () => {
  const fib = [0, 1];
  while (fib.length < 4) { 
      const nextFib = fib[fib.length - 1] + fib[fib.length - 2];
      fib.push(nextFib);
  }
  return fib;
};


export const getEvenNumbers = () => {
  const evens = [];
  let num = 2;
  while (evens.length < 4) { 
      num += 2;
  }
  return evens;
};


export const getRandomNumbers = () => {
  const randoms = [];
  for (let i = 0; i < 4; i++) {
      randoms.push(Math.floor(Math.random() * 100) + 1); 
  }
  return randoms;
};
