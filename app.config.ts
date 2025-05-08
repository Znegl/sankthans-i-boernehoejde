const date = '2025-06-23'
const startTime = '16:30'
const fireTime = '17:30'

const dateTimeFormatter = new Intl.DateTimeFormat('da-DK', { weekday: 'long',year: "numeric", day: "numeric", month: "long"})

export default {
    dateTime: {
        raw: {
            date,
            startTime,
            fireTime
        },
        complete: {
            startTime: `${date}T${startTime}`,
            fireTime: `${date}T${fireTime}`
        },
        formatted: {
            date: dateTimeFormatter.format(new Date(date)),
            startTime: startTime.replace(':', '.'),
            fireTime: fireTime.replace(':', '.')
        }
    }
}