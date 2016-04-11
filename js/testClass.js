var TeslaModelS = function() {
  this.numWheels    = 4;
  this.manufacturer = 'Tesla';
  this.make         = 'Model S';
}

TeslaModelS.prototype = function() {

  var first = function() {
    console.warn("this is first page")
  };

  var second = function() {
    console.warn("this is second page")
  };
  
  var third = function() {
    console.warn("this is third page")
  };
  
  var forth = function() {
    console.warn("this is forth page")
  };

  return {
    first: first,
    second: second
  }

}();
