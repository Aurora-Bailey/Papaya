<template>
  <div class="create-events using-sidebar">
    <div class="gl-narrow-wrapper-480">
      <md-whiteframe class="create-card">
        <form novalidate @submit.stop.prevent="">
          <h2 class="md-title">Public</h2>
          <md-subheader>Anyone can see this.</md-subheader>

          <md-input-container>
            <md-icon>title</md-icon>
            <label>Title</label>
            <md-input></md-input>
          </md-input-container>

          <md-input-container>
            <md-icon>description</md-icon>
            <label>Description</label>
            <md-textarea></md-textarea>
          </md-input-container>

          <md-input-container>
            <md-icon>location_on</md-icon>
            <label>Location Public</label>
            <md-input></md-input>
          </md-input-container>

          <md-input-container>
            <md-icon>event_seat</md-icon>
            <label>Number of Openings</label>
            <md-select v-model="create.limit" class="icon-offset">
              <md-option v-for="i in 19" :value="i+1">{{i+1}}</md-option>
            </md-select>
          </md-input-container>

          <md-input-container>
            <md-icon>date_range</md-icon>
            <label>Close in {{create.close}} hours</label>
            <md-input v-model="create.close" type="number" min="1" max="72"></md-input>
          </md-input-container>

          <div class="toggle-container">
            <md-icon>lock</md-icon>
            <md-switch v-model="create.moderate" class="md-primary icon-offset">
              <span v-if="create.moderate">Only people you accept can join.</span>
              <span v-if="!create.moderate">Anyone can join.</span>
            </md-switch>
          </div>

          <h2 class="md-title">Private</h2>
          <md-subheader>Only people in the event can see this.</md-subheader>

          <md-input-container>
            <md-icon>location_on</md-icon>
            <label>Location Private</label>
            <md-input></md-input>
          </md-input-container>

          <md-input-container>
            <md-icon>description</md-icon>
            <label>Details Private</label>
            <md-input></md-input>
          </md-input-container>

          <div class="gl-center-button">
            <md-button class="md-raised md-primary mod-md-text-white" @click.native="submit">Create Event</md-button>
          </div>

        </form>
      </md-whiteframe>
    </div>
  </div>
</template>
<script>
export default {
  name: 'create-events',
  methods: {
    submit () {
      this.$router.push('/events/find')
    }
  },
  data () {
    return {
      create: {
        limit: 5,
        moderate: false,
        close: 3
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('orange')
    })
  }
}
</script>

<style lang="scss" scoped>
.create-events {

  .md-title {
    margin: 0;
    padding: 24px 8px 0;
  }
}
.create-card {
  background-color: white;
  padding: 24px;
  margin: 24px 5px 5px;

  .icon-offset {
    margin-left: 12px;
  }
  .toggle-container {
    color: rgba(0,0,0,0.54);
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>

<style lang="scss">
</style>
