import { reactive } from 'vue'

export const lightbox = reactive({
  visible: false,
  index: 0,
  maxIndex: 10,
  show (e) {
    this.index = e
    this.visible = true
    console.log(this.maxIndex)
  },
  hide () {
    this.visible = false
    this.index = 0
  },
  hasNext () {
    return this.index + 1 < this.maxIndex
  },
  hasPrev () {
    return this.index - 1 >= 0
  },
  prev () {
    if (this.hasPrev()) {
      this.index -= 1
    } else {
      this.index = this.maxIndex - 1
    }
  },
  next () {
    if (this.hasNext()) {
      this.index += 1
    } else {
      this.index = 0
    }
  },
  changeMax (e) {
    this.maxIndex = e
  },
  onKeydown (e) {
    if (this.visible) {
      switch (e.key) {
        case 'ArrowRight':
          this.next()
          break
        case 'ArrowLeft':
          this.prev()
          break
        case 'ArrowDown':
        case 'ArrowUp':
        case ' ':
          e.preventDefault()
          break
        case 'Escape':
          this.hide()
          break
      }
    }
  },
  addListener (keyDown) {
    window.addEventListener('keydown', keyDown)
  },
  removeListener (keyDown) {
    window.removeEventListener('keydown', keyDown)
  }
})
