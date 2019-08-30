// Code your solution here
function findMatching(drivers, string) {
    let matching = drivers.filter(driver => {
        return driver.toLowerCase() === string.toLowerCase()
    })
    return matching;
}

function fuzzyMatch(drivers, string) {
    let matching = drivers.filter(driver => {
        return driver.charAt(0).includes(string.charAt(0))
    })
    return matching;
}

function matchName(drivers, string) {
    let matching = drivers.filter(driver => {
        return driver.name === string
    })
    return matching;
}