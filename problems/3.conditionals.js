/** Returns "It's freezing!" if the temperature is below 32, and "It's alright" otherwise
* @param {number} temp - The current temperature
* @returns {string} - A message about the temperature
*/

function temperatureMessage(f) {
  if (f < 32){
    return "It's freezing!"
  } else {
    return "It's alright"
  }
}


/** Returns "It's freezing!" if the temperature is below 32, and "It's alright" otherwise. The implementation must use a ternary.
* @param {number} temp - The current temperature
* @returns {string} - A message about the temperature
*/
function temperatureMessageUsingTernary(f) {
  return (f < 32 ? "It's freezing!" : "It's alright")
}


/** Returns "You are a senior" if the age is 65 or older, "You are an adult" if the age is 18 or older, and "You are a minor" otherwise.
* @param {number} age - The age of the user
* @returns {string} - A message about their age
*/
function ageMessage(jahre) {
  if (jahre >= 18 && jahre < 65){
    return "You are an adult"
  } else if (jahre >= 65){
    return "You are a senior"
  } else {
    return "You are a minor"
  }
}

module.exports = {
  temperatureMessage,
  temperatureMessageUsingTernary,
  ageMessage
}
