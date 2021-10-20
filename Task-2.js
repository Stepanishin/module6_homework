function isPrime(number) {
    if (number > 1000) {
      return 'need number less then 1000';
    }else if (number === 0 || number === 1) {
      return 'it is prime and not prime number';
    }
    let value;
    if (number > 1) {
          for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          value = false;
          break
        }
      }  
    }
    if (value === false) {
      return 'it is not prime number';
    } else {
      return 'it is prime';
    }
  }
  let enteredNumber = +prompt('enter the number please')
  alert(isPrime(enteredNumber))