<template>
  <div class="create-events using-sidebar">
    <div class="gl-narrow-wrapper-480">
      <md-whiteframe class="create-card">
        <form novalidate @submit.stop.prevent="submit">
          <md-input-container>
            <label>Title</label>
            <md-input></md-input>
          </md-input-container>

          <md-input-container>
            <label>Description</label>
            <md-textarea></md-textarea>
          </md-input-container>

          <md-input-container>
            <label>Location Public</label>
            <md-input></md-input>
          </md-input-container>

          <md-input-container>
            <label>Location Private</label>
            <md-input></md-input>
          </md-input-container>

          <md-input-container>
            <label>Details Private</label>
            <md-input></md-input>
          </md-input-container>

          <md-input-container>
            <label>Limit</label>
            <md-input></md-input>
          </md-input-container>

          <md-input-container>
            <label>Require Invitation</label>
            <md-input></md-input>
          </md-input-container>

          <md-input-container>
            <label>Close Date</label>
            <md-input></md-input>
          </md-input-container>

          <div class="gl-center-button">
            <md-button class="md-raised md-primary mod-md-text-white" type="submit">Create Event</md-button>
          </div>

        </form>
      </md-whiteframe>
    </div>
  </div>
</template>
<script>
export default {
  name: 'create-events',
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.$material.setCurrentTheme('orange')
    })
  }
}
</script>

<style lang="scss" scoped>
.create-events {
}
.create-card {
  background-color: white;
  padding: 24px;
  margin: 24px 5px 5px;
}
</style>

<style lang="scss">
</style>
