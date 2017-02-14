import Vue from 'vue'

Vue.filter('date', function (time) {
  let d = new Date(parseInt(time))
  return d.toDateString()
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

  if (years) return new Date(parseInt(startTime)).toDateString()
  else if (weeks) return weeks + 'w'
  else if (days) return days + 'd'
  else if (hours) return hours + 'h'
  else if (minutes) return minutes + 'm'
  else if (seconds) return seconds + 's'
  else return 0 + 's'
})
