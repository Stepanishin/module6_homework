function func(a, b) {
    let showed = a;
    let intervalId = setInterval(function() {
      console.log(showed)
      
      if (showed == b) {
        clearInterval(intervalId);
      }
      showed++
    }, 1000);
  }
  
  func(5,15)