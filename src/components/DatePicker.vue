<!-- Example usage
<date-picker year month day hour ref="ref-date-picker" id-attach="#asdf" @timestamp="time => { person.birthday_timestamp = time }" @date="date => { person.birthday = date }"></date-picker>
<input v-model="person.birthday" id="asdf" type="text" @focus="$refs['ref-date-picker'].open()" />
-->
<template>
  <div class="date-picker">
    <md-dialog class="mod-md-full-dialog" :md-open-from="idAttach" :md-close-to="idAttach" ref="ref-dialog">
      <md-dialog-content>
        <div class="date-year" v-if="stack[stage] == 'year'">
          <div class="date-button" v-for="i in 40" @click="nextStage(new Date().getFullYear() - i - 12, new Date().getFullYear() - i - 12)">{{new Date().getFullYear() - i - 12}}</div>
        </div>
        <div class="date-month" v-if="stack[stage] == 'month'">
          <div class="date-button" v-for="(m, i) in months" @click="nextStage(m, i)">{{m}}</div>
        </div>
        <div class="date-day" v-if="stack[stage] == 'day'">
          <div class="date-button" v-for="(d, i) in daysInMonth" @click="nextStage(d, d)">{{d}}</div>
        </div>
        <div class="date-hour" v-if="stack[stage] == 'hour'">
          hour
        </div>
        <div class="date-minute" v-if="stack[stage] == 'minute'">
          minute
        </div>
        <button @click="nextStage('asdf', 10)">asdf</button>
      </md-dialog-content>
    </md-dialog>
  </div>
</template>

<script>
export default {
  props: {
    'idAttach': String,
    'year': { type: Boolean, default: false },
    'month': { type: Boolean, default: false },
    'day': { type: Boolean, default: false },
    'hour': { type: Boolean, default: false },
    'minute': { type: Boolean, default: false }
  },
  name: 'date-picker',
  data () {
    return {
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      stack: [],
      stage: 0,
      date: [],
      timestamp: 0
    }
  },
  computed: {
    daysInMonth () {
      if (!this.date[0] || !this.date[1]) return 30
      return new Date(this.date[0].value, this.date[1].value + 1, 0).getDate()
    }
  },
  methods: {
    nextStage (name, value) {
      this.date.push({name, value})

      this.stage++
      if (this.stage === this.stack.length) {
        this.emitDate()
        this.emitTime()
        this.$refs['ref-dialog'].close()
      }
    },
    emitDate () {
      this.$emit('date', '' + this.date[1].name + ' ' + this.date[2].name + ', ' + this.date[0].name)
    },
    emitTime () {
      this.$emit('timestamp', this.timestamp)
    },
    open () {
      this.stage = 0
      this.date = []
      this.timestamp = 0
      this.$refs['ref-dialog'].open()
    }
  },
  created () {
    // Computed based on the props passed in
    if (this.year) this.stack.push('year')
    if (this.month) this.stack.push('month')
    if (this.day) this.stack.push('day')
    if (this.hour) this.stack.push('hour')
    if (this.minute) this.stack.push('minute')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.date-picker {
}
.date-button {
  cursor: pointer;
  display: inline-block;
  margin: 3px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0,0,0,.2), 0 1px 1px rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
  width: 60px;
  height: 30px;
  line-height: 30px;
  text-align: center;

  &:hover {
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px rgba(0,0,0,.14), 0 1px 10px rgba(0,0,0,.12);
    transform: scale(1.2)
  }
}

.date-year {
  width: 320px;
  text-align: center;
  .date-button {
    width: 70px;
  }
}
.date-month {
  width: 320px;
  text-align: center;
  .date-button {
    width: 150px;
  }
}
.date-day {
  width: 320px;
  text-align: center;
}
.date-hour {
  width: 320px;
  text-align: center;
}
.date-minute {
  width: 320px;
  text-align: center;
}
</style>
