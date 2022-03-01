<template>
  <div class="wrapper">
    <div class="photos">
      <ImageItem
        v-for="(photo, index) in image"
        :key="photo.id"
        :id="index"
        :alt="photo.url"
        :image-url="photo.url"
      />
    </div>
  </div>
</template>

<script>
import ImageItem from './ImageItem.vue'
export default {
  name: 'ImageList',
  components: { ImageItem },
  props: {
    image: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
    .wrapper {
        height: 600px;
        overflow-y: auto;
    }
    .photos {
        width: 60vw;
        column-count: 3;
        padding: 2rem;
    }
    @media screen and (min-width: 576px) {
        .photos {
            width: 50vw;
            column-count: 4;
        }
    }
</style>
