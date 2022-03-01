<template>
  <div class="photo">
    <img :src="imageUrl" :alt="alt" loading="lazy" @click.prevent="lightbox.show(id)">
  </div>
</template>

<script>
import { lightbox } from '../State/lightbox.js'

export default {
  props: ['imageUrl', 'alt', 'id'],
  data () {
    return {
      lightbox
    }
  }
}
</script>

<style scoped>
.photo {
  margin-bottom: 5px;
  margin: 2px;
  z-index: 1;
}
img {
  width: 100%;
  border-radius: 5px;
}
img:hover {
  transform: scale(1.01);
  transition: all .2s ease-in-out;
  border: 1px solid whitesmoke;
}
</style>
