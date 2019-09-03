// Code your solution here
function findMatching(array, name){
    let matchedDrivers = array.filter(driver => {
        return driver.toLowerCase() == name.toLowerCase()
    })
    return matchedDrivers
}

function fuzzyMatch(array, name){
    let matchedDrivers = array.filter(driver =>{
        return driver.slice(0, name.length) == name
    })
    return matchedDrivers
}

function matchName(array, name){
    let matchedDrivers = array.filter(driverObj => {
        return driverObj.name == name
    })
    return matchedDrivers
}