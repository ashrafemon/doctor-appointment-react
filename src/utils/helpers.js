export const timeGenerator = (day, duration, availability) => {
    let times = []
    let splitterRange = 60 / duration
    let visitRange = availability[day].split('-')

    let startVisit = visitRange[0].trim()
    let endVisit = visitRange[1].trim()

    let startHourMinutesArray = startVisit.split(':')
    let startMinutesMeridianArray = startHourMinutesArray[1].split(' ')

    let endHourMinutesArray = endVisit.split(':')
    let endMinutesMeridianArray = endHourMinutesArray[1].split(' ')

    let startHour = parseInt(startHourMinutesArray[0])
    let startMinutes = parseInt(startMinutesMeridianArray[0])
    let startMeridian = startMinutesMeridianArray[1]

    let endHour = parseInt(endHourMinutesArray[0])
    let endMinutes = parseInt(endMinutesMeridianArray[0])
    let endMeridian = endMinutesMeridianArray[1]

    let endHourBy24 = startMeridian === 'AM' && endMeridian === 'PM' ? endHour + 12 : endHour

    for (let i = startHour; i < endHourBy24; i++) {
        let minutes = startMinutes
        if (i === 12 && startMeridian === 'AM') {
            times.push(`${i}:${startMinutes} PM`)
        } else if (i > 12) {
            times.push(`${i - 12}:${startMinutes} PM`)
        } else {
            times.push(`${i}:${startMinutes} ${startMeridian}`)
        }

        for (let j = 0; j < splitterRange - 1; j++) {
            minutes = minutes + duration
            if (i === 12 && startMeridian === 'AM') {
                times.push(`${i}:${minutes} PM`)
            } else if (i > 12) {
                times.push(`${i - 12}:${minutes} PM`)
            } else {
                times.push(`${i}:${minutes} ${startMeridian}`)
            }
        }
    }

    times.push(`${endHour}:${endMinutes} ${endMeridian}`)

    return times
}