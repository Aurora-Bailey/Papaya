<template>
  <div class="events page using-sidebar">
    <md-tabs md-centered :md-dynamic-height="false">
      <md-tab md-label="Movies" md-icon="ondemand_video">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
      </md-tab>

      <md-tab md-label="Music" md-icon="music_note">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
      </md-tab>

      <md-tab md-label="Books" md-icon="books">
        <div v-for="i in 50">
          Events {{i}}
        </div>
        {{$root.$data.scroll}}
        <div v-for="i in 50">
          Events {{i}}
        </div>
      </md-tab>

      <md-tab md-label="Pictures" md-icon="photo">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
      </md-tab>
    </md-tabs>
  </div>
</template>
<script>
export default {
  name: 'events'
}
</script>

<style lang="scss" scoped>

.events {
}
</style>

<style lang="scss">
</style>
