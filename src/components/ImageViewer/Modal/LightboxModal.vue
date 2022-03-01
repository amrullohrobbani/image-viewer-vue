<template>
    <div class="lightbox" v-if="lightbox.visible">
        <div class="close" @click.stop="lightbox.hide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
        </div>
        <div class="flex-column">
            <div class="flex-column-grow">
                <div class="lightbox-image" @click.stop="">
                    <img :src="images[lightbox.index].url">
                </div>
                <div class="urlText">{{images[lightbox.index].url}}</div>
            </div>
            <div class="lightbox-thumbnail">
                <div class="prev"
                    @click.stop="lightbox.prev">
                    <svg class="pointer-events-none" fill="#fff" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
                        <path d="M0-.5h24v24H0z" fill="none"/>
                    </svg>
                </div>
                <div class="photos">
                    <img v-for="(image, index) in images" :key="image.id" :src="image.url" :alt="alt" loading="lazy" @click.stop="lightbox.show(index)">
                </div>
                <div class="next"
                    @click.stop="lightbox.next">
                    <svg class="pointer-events-none" fill="#fff" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                        <path d="M0-.25h24v24H0z" fill="none"/>
                    </svg>
                </div>
            </div><!-- thumbnail -->
        </div>
    </div>
</template>

<script>
import { lightbox } from '../State/lightbox.js'

export default {
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      lightbox
    }
  }
}
</script>

<style scoped>
.lightbox {
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 50;
    width: 100%;
    height: 100%;
    overflow: auto;
    justify-content: center;
    align-items: center;
    display: inline-flex;
}
.lightbox .close{
    background: rgba(0, 0, 0, 0.1);
    position: absolute;
    right: 0;
    top: 0;
    padding: 10px 10px 15px 15px;
    border-radius: 0px 0px 0px 40px;
}
.lightbox-image img {
    padding: 30px;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: calc(100vh - 35vh);
    transition: opacity 0.3s;
    -webkit-transition: opacity 0.3s;
}
.lightbox-thumbnail {
    background: rgba(0, 0, 0, 0.2);
    left: 0;
    bottom: 0;
    z-index: 50;
    height: auto;
    width: 100%;
    max-height: 25vh;
    overflow: auto;
    align-items: center;
    float: left;
    display: flex;
}
.next {
    padding: 0px 8px;
    cursor: pointer;
    align-self: center;
    height: auto;
    margin-left: auto;
}
.prev {
    padding: 0px 8px;
    cursor: pointer;
    align-self: center;
    height: auto;
}
.flex-column {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
.flex-column-grow {
    justify-content: center;
    display: flex;
    flex-direction: column;
    flex: 1 1 0;
}
.photos {
    display:flex;
    justify-content: center;
    flex: 1 1 auto;
}

.photos img {
    margin: 5px;
    height: auto;
    width: auto;
    max-height: 80px;
    flex-grow: auto;
}

@media only screen and (max-width: 600px)  {
   .photos img {
        margin: 5px;
        height: auto;
        width: auto;
        max-height: 40px;
    }
}

.photos img:hover {
    transform: scale(1.10);
    transition: all .2s ease-in-out;
    border: 1px solid whitesmoke;
}

.close-x {
  stroke: black;
  fill: transparent;
  stroke-linecap: round;
  stroke-width: 5;
}
.urlText {
    color: whitesmoke;
 }
</style>
