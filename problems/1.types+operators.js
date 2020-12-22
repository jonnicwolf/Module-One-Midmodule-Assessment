/** Takes in a value and returns if it is a number
* @param {any} val - The input value
* @returns {boolean} - Is val a number
*/
function isNumber(n) {
  if (n%1){
    return true
  } else {
    return false
  }
}

/** Takes in a value and returns whether it is truthy
* @param {any} val - The input value
* @returns {boolean} - Is val truthy
*/
function isTruthy(n) {
  if(n!==0 && n!=='' && n!==false){
    return n
  } else {
    return n
  }
}



module.exports = {
  isNumber,
  isTruthy
}
