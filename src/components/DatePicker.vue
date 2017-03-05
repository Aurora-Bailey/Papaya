<!-- Example usage
<date-picker year month day hour minute output="MM DD, YY hh:mm" ref="ref-date-picker" id-attach="#asdf" @timestamp="time => { person.birthday_timestamp = time }" @date="date => { person.birthday = date }"></date-picker>
<input v-model="person.birthday" id="asdf" type="text" @focus="$refs['ref-date-picker'].open()" />
-->
<template>
  <div class="date-picker">
    <md-dialog class="mod-md-full-dialog" ref="ref-dialog">
      <md-dialog-content>
        <div class="date-button-container date-year" v-if="stack[stage] == 'year'">
          <div class="stage-title">Year</div>
          <div class="date-button" v-for="i in 24" @click="nextStage(stack[stage], new Date().getFullYear() - i - showYearsOffset, new Date().getFullYear() - i - showYearsOffset)">{{new Date().getFullYear() - i - showYearsOffset}}</div>
          <div class="gl-center-button">
            <md-button class="md-raised md-primary mod-md-text-white" @click.native="showYearsOffset += 12">More</md-button>
          </div>
        </div>
        <div class="date-button-container date-month" v-if="stack[stage] == 'month'">
          <div class="stage-title">Month</div>
          <div class="date-button" v-for="(m, i) in months" @click="nextStage(stack[stage], m, i)">{{m}}</div>
        </div>
        <div class="date-button-container date-day" v-if="stack[stage] == 'day'">
          <div class="stage-title">Day</div>
          <div class="date-button" v-for="(d, i) in daysInMonth" @click="nextStage(stack[stage], d, d)">{{d}}</div>
        </div>
        <div class="date-button-container date-hour" v-if="stack[stage] == 'hour'">
          <div class="stage-title">Hour</div>
          <div class="date-button" v-for="(h, i) in 24" @click="nextStage(stack[stage], h, h)">{{h}}</div>
        </div>
        <div class="date-button-container date-minute" v-if="stack[stage] == 'minute'">
          <div class="stage-title">Minute</div>
          <div class="date-button" v-for="(m, i) in 60" @click="nextStage(stack[stage], m, m)">{{m}}</div>
        </div>
      </md-dialog-content>
    </md-dialog>
  </div>
</template>

<script>
export default {
  props: {
    'output': String,
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
      date: {},
      showYearsOffset: 12
    }
  },
  computed: {
    daysInMonth () {
      if (!this.date['year'] || !this.date['month']) return 31
      return new Date(this.date['year'].value, this.date['month'].value + 1, 0).getDate()
    }
  },
  methods: {
    nextStage (type, name, value) {
      this.date[type] = {name, value}

      this.stage++
      if (this.stage === this.stack.length) {
        this.emitDate()
        this.emitTime()
        this.$refs['ref-dialog'].close()
      }
    },
    emitDate () {
      let dateString = this.output
      if (this.date['year']) dateString = dateString.replace('YY', this.date['year'].name)
      if (this.date['month']) dateString = dateString.replace('MM', this.date['month'].name)
      if (this.date['day']) dateString = dateString.replace('DD', this.date['day'].name)
      if (this.date['hour']) dateString = dateString.replace('hh', this.date['hour'].name)
      if (this.date['minute']) dateString = dateString.replace('mm', this.date['minute'].name)

      this.$emit('date', dateString)
    },
    emitTime () {
      // this.$emit('timestamp', this.timestamp)
      let timestamp = new Date(
        (this.date['year'] ? this.date['year'].value : 0),
        (this.date['month'] ? this.date['month'].value : 0),
        (this.date['day'] ? this.date['day'].value : 0),
        (this.date['hour'] ? this.date['hour'].value : 0),
        (this.date['minute'] ? this.date['minute'].value : 0)
      ).getTime()
      this.$emit('timestamp', timestamp)
    },
    open () {
      this.stage = 0
      this.date = {}
      this.showYearsOffset = 12
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
@keyframes fadeIn {
    from {opacity: 0.2;}
    to {opacity: 1;}
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

  animation-name: fadeIn;
  animation-duration: .4s;

  &:hover {
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px rgba(0,0,0,.14), 0 1px 10px rgba(0,0,0,.12);
    transform: scale(1.2)
  }
}
.stage-title {
  font-weight: bold;
  font-size: 24px;
  padding: 0 24px 24px
}
.date-button-container {
  text-align: center;
  max-width: 320px;
}
.date-year {
  .date-button {
    width: 23%;
    margin: 1%;
  }
}
.date-month {
  .date-button {
    width: 48%;
    margin: 1%;
  }
}
.date-day {
  .date-button {
    width: 23%;
    margin: 1%;
  }
}
.date-hour {
  .date-button {
    width: 31%;
    margin: 1%;
  }
}
.date-minute {
  .date-button {
    width: 23%;
    margin: 1%;
  }
}
</style>
