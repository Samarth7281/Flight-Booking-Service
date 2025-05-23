function compareDatetime(timeString1,timeString2){
    let datetime1 = new Date(timeString1)
    let dateTime2 = new Date(timeString2)

    return datetime1.getTime() > dateTime2.getTime()
}

module.exports = {
    compareDatetime
}