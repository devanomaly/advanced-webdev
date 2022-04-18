// Given a string and an object, searches for any occurrences of the former in the latter's values. 
// returns true or false

export const searchStringInObjectValues = (someString, someObject) => 
someString === '' ? true : Object.values(someObject).some(function (val) {
  return val.toString().toLowerCase().includes(someString.toLowerCase())
})