// Code your solution here
const findMatching = (drivers, string) => {
    let matches = drivers.filter(driver => {
        return driver.toLowerCase() === string.toLowerCase()
    })
    return matches
}

const fuzzyMatch = (drivers, string) => {
    let matches = drivers.filter(driver => {
        return driver.substring(0,2) === string
    })
    return matches
}

const matchName = (drivers, string) => {
    let matches = drivers.filter(driver => {
        return driver.name === string
    })
    return matches
}