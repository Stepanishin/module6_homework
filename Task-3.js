function getSum(number1) {

    return function(number2) {
        console.log(number1 + number2)
      
    }
  }
  
  getSum(2)(9);