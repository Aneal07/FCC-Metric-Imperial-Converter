function numberStringSplitter (input) {
  let number = input.match(/[.\d\/]+/g) || ["1"]
  let string = input.match(/[a-zA-Z]+/g)[0]

  return [number[0], string]
}
function checkDiv(possibleFraction) {
  let nums = possibleFraction.split("/")
  if(nums.length > 2) {
    return false
  }
  return nums
}


function ConvertHandler() {
  
 
  

  
 
  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
