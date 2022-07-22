function checkObj(obj, checkProp) {
    const result = obj
    if (result.hasOwnProperty(checkProp)) {
      return result[checkProp]
    } else {
      return "Not Found"
    }
    // Only change code above this line
  }