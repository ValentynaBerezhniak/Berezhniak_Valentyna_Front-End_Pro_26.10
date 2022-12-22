let ladder = { 
    step: 0,
  }
  
  
  Object.prototype.up = function() {
    this.step++
    return this
  };
  
  Object.prototype.down = function() {
    this.step--
    return this
  };
  
  Object.prototype.showStep = function() { 
    console.log(this.step) 
  }
 ladder.up().up().down().showStep()
   