const findMatching = (drivers, string) => {
    return drivers.filter(driver =>
        driver === string || driver === string.toLowerCase()
    )
}

const fuzzyMatch = (drivers, string) => {
    let lettersCount = string.length
    return drivers.filter(driver => 
        driver.slice(0, lettersCount) === string
    )
}

const matchName = (drivers, string) => {
    return drivers.filter(driver => 
        driver.name === string)
}