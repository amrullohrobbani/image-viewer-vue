<template>
  <div class="container">
    <ImageList v-bind:image="source" />
    <LightboxModal v-bind:images="source" />
  </div>
</template>

<script>
import ImageList from '@/components/ImageViewer/ImageList/ImageList.vue'
import LightboxModal from '@/components/ImageViewer/Modal/LightboxModal.vue'
import { lightbox } from './State/lightbox'

export default {
  name: 'ImageViewer',
  components: { ImageList, LightboxModal },
  props: {
    api: String
  },
  data () {
    return {
      source: []
    }
  },
  mounted () {
    fetch(this.api)
      .then(res => res.json())
      .then(data => {
        lightbox.changeMax(data.length)
        this.source = data
      })
      .catch(err => console.log(err.message))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
  }

  h1 {
    color: #41b3a3;
  }

</style>
