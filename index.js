function findMatching(driversArray, driverName){
  let matchedName = driversArray.filter(name => {
    return name.toLowerCase() === driverName.toLowerCase()
  })
  return matchedName
}

function fuzzyMatch(driversArray, driverName){
  let matchedName = driversArray.filter(name => {
    return name.charAt(0).includes(driverName.charAt(0))
  })
  return matchedName
}

function matchName(driversArray, driverName){
  let matchedObject = driversArray.filter(driverObject => {
    return driverObject.name === driverName
  })
  return matchedObject
}
