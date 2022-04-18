// Given a string and an object, searches for any occurrences of the former in the latter's values. 
// Fast success: stops whenever a first "true" might be given
// returns true or false

export const searchStringInObjectValues = (someString, someObject) => 
someString === '' ? true : Object.values(someObject).some(function (val) {
  return val.toString().toLowerCase().includes(someString.toLowerCase())
})