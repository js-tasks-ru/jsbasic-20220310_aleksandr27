function isEmpty(obj) {
  for ( let key in obj ) {
    if (obj.hasOwnProperty(key) ) {
      return false
    }
    return false
  }
  return true
}

let obj = {};
