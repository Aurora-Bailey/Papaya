import Vue from 'vue'

let month = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

let day = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
]
function DateToString (timestamp) {
  let dateString = ''
  let d = new Date(parseInt(timestamp))

  dateString += month[d.getMonth()]
  dateString += ' '
  dateString += d.getDate()
  dateString += ' '
  dateString += d.getFullYear()
  return dateString
}

function DateTimeToString (timestamp) {
  let dateString = ''
  let d = new Date(parseInt(timestamp))

  dateString += day[d.getDay()]
  dateString += ' '
  dateString += month[d.getMonth()]
  dateString += ' '
  dateString += d.getDate()
  dateString += ' '

  dateString += d.getHours()
  dateString += ':'
  dateString += (d.getMinutes() < 10 ? '0' : '') + d.getMinutes()
  return dateString
}

Vue.filter('date', function (time) {
  return DateToString(time)
})

Vue.filter('datetime', function (time) {
  return DateTimeToString(time)
})

Vue.filter('elapsed', function (startTime) {
  let endTime = Date.now()

  let timeDiff = endTime - startTime
  timeDiff /= 1000

  if (timeDiff < 0) return 0 + 's'

  let seconds = Math.round(timeDiff % 60)
  timeDiff = Math.floor(timeDiff / 60)

  let minutes = Math.round(timeDiff % 60)
  timeDiff = Math.floor(timeDiff / 60)

  let hours = Math.round(timeDiff % 24)
  timeDiff = Math.floor(timeDiff / 24)

  let days = Math.round(timeDiff % 7)
  timeDiff = Math.floor(timeDiff / 7)

  let weeks = Math.round(timeDiff % 52)
  timeDiff = Math.floor(timeDiff / 52)

  let years = Math.floor(timeDiff)

  if (years) return DateToString(startTime)
  else if (weeks) return weeks + 'w'
  else if (days) return days + 'd'
  else if (hours) return hours + 'h'
  else if (minutes) return minutes + 'm'
  else if (seconds) return seconds + 's'
  else return 0 + 's'
})
