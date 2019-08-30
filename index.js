const drivers = ["Bill", "Ted", "Bill"]

function findMatching(array, string){
  return array.filter(function(name){
    return name.toLowerCase() == string.toLowerCase();
  })
}

function fuzzyMatch(array, smallString){
  return array.filter(function(name){
    return name.slice(0, smallString.length) === smallString
  })
}

function matchName(arrayOfObjects, string){
  return arrayOfObjects.filter(function(singleObject){
    return singleObject.name === string
  })
}
