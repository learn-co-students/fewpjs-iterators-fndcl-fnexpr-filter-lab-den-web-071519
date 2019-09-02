// Code your solution here
function findMatching(driverArray, nameStr){
    let matching = driverArray.filter(driver => {
        return driver.toLowerCase() === nameStr.toLowerCase()
    })
    return matching
}

function fuzzyMatch(driverArray, nameStr){
    let matching = driverArray.filter(driver => {
        return driver.charAt(0) === nameStr.charAt(0)
    })
    return matching
}

function matchName(driverArray, nameStr){
    let matching = driverArray.filter(driver => {
        return driver.name === nameStr
    })
    return matching
}