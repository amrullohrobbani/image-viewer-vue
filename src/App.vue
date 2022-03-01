<template>
  <TitleViewer msg="Vue">IMAGE-VIEWER</TitleViewer>
  <ImageViewer api="https://api.thecatapi.com/v1/images/search?limit=5&page=1"/>
</template>

<script>
import ImageViewer from '@/components/ImageViewer/ImageViewer.vue'
import TitleViewer from '@/components/TitleViewer/TitleViewer.vue'

export default {
  name: 'App',
  components: {
    ImageViewer,
    TitleViewer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-color: #85dcba;
}
</style>
