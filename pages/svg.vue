<template>
  <div class="container p-4">
    <h1 class="text-3xl">SVG Download</h1>
    Select SVG:
    <select v-model="selection">
      <option
        v-for="entry in Object.entries(svg)"
        :key="entry[0]"
        :value="entry[1]"
      >
        {{ entry[0] }}
      </option>
    </select>
    <label for="forceSize">Force Size: </label>
    <input v-model="forceSize" type="checkbox" name="forceSize" />
    <br />
    <button class="button" @click="downloadSVG('all')">
      Download All Images
    </button>
    <h2>SVG in Object</h2>
    <object
      ref="theObject"
      type="image/svg+xml"
      :data="require('~/assets/svg/' + selection)"
    />
    <h2>SVG on Canvas</h2>
    <canvas
      ref="canvas-selection"
      class="canvas"
      :width="width"
      :height="height"
    ></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selection: 'cs-logo-16x16.svg',
      forceSize: true,
      forceWidth: 913,
      forceHeight: 913,
      width: 16,
      height: 16,
      svg: {
        // root: '~/assets/svg/',
        thin: 'cs-logo-one-line.svg',
        thinWhite: 'cs-logo-white-one-line.svg',
        square: 'cs-logo-16x16.svg',
        squareNoFill: 'cs-logo-16x16-nofill.svg',
        squareWhite: 'cs-logo-white-16x16.svg',
        wide: 'cs-logo-two-line.svg',
        wideWhite: 'cs-logo-white-two-line-font.svg',
        tall: 'cs-toplogo-two-line-font.svg',
        tallWhite: 'cs-toplogo-white-two-line-font.svg',
      },
    }
  },
  watch: {
    selection(n) {
      // add delay to allow the image to be required in the object
      setTimeout(() => {
        this.drawAllCanvases()
      }, 500)
    },
    forceSize() {
      this.drawAllCanvases()
    },
  },
  mounted() {
    setTimeout(() => this.drawAllCanvases(), 2000)
  },
  methods: {
    drawAllCanvases() {
      this.width = this.forceSize
        ? this.forceWidth
        : this.$refs.theObject.clientWidth
      this.height = this.forceSize
        ? this.forceHeight
        : this.$refs.theObject.clientHeight
      Object.keys(this.$refs)
        .filter((r) => r.slice(0, 6) === 'canvas')
        .forEach((r) => this.drawCanvas(r))
    },
    /**
     * drawCanvas()
     * @input canvasRef vue reference to the canvas
     * called on each canvas in the template after mounted
     * calls drawImage() to render svgs in the canvases
     */
    drawCanvas(canvasRef) {
      const canvas = this.$refs[canvasRef]
      this.drawImage(canvas)
    },
    /**
     * drawImage()
     * calculate the sizing and then draw the svg onto the canvas
     * @input canvas canvas element being used
     * @input src image source if passing direclty to img
     * @input soc relevant object in social.json
     * @input t type of image (avatar / banner) being drawn
     *
     */
    drawImage(canvas) {
      const ctx = canvas.getContext('2d')
      // clear the canvas in between draws
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      // draw background
      //   const background = new Image(3.45, 2)
      //   background.onload = function () {
      //     const ptrn = ctx.createPattern(background, 'repeat') // Create a pattern with this image, and set it to "repeat".
      //     ctx.fillStyle = ptrn
      //     ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height) // context.fillRect(x, y, width, height);
      //   }
      //   const backgroundChoice = true
      //   const bgsvg = backgroundChoice ? 'hex-fill.svg' : 'hex-fill-small.svg'
      //   background.src = require(`~/assets/svg/${card}`)

      // draw gradients
      //   const grd = ctx.createLinearGradient(
      //     0,
      //     0,
      //     ctx.canvas.width,
      //     ctx.canvas.height
      //   )
      //   grd.addColorStop(0, 'black')
      //   grd.addColorStop(0.5, 'black')
      //   grd.addColorStop(1, 'black')
      //   ctx.fillStyle = grd
      //   ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      //   const width = this.$refs.theObject.clientWidth
      //   const height = this.$refs.theObject.clientHeight
      const img = new Image()
      img.onload = () => {
        ctx.drawImage(
          img,
          0,
          0,
          this.$refs.theObject.clientWidth,
          this.$refs.theObject.clientHeight,
          0,
          0,
          this.width,
          this.height
        )
      }
      img.src = require('~/assets/svg/' + this.selection)
      //   this.$refs.theObject
      //   console.log('this.$refs.theObject: ', this.$refs.theObject)
      //   console.log('this.$refs: ', this.$refs)
    },
    downloadSVG(param) {
      function triggerDownload(imgURI, fileName) {
        const evt = new MouseEvent('click', {
          view: window,
          bubbles: false,
          cancelable: true,
        })

        const a = document.createElement('a')
        a.setAttribute('download', fileName + '.png')
        a.setAttribute('href', imgURI)
        a.setAttribute('target', '_blank')

        a.dispatchEvent(evt)
      }

      const ref = 'canvas-selection' // [social]-[avatar]
      const filename = `svg-${this.selection}`.toLowerCase()
      const canvas = this.$refs[ref]
      const imgURI = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream')

      triggerDownload(imgURI, filename)
    },
  },
}
</script>
<style scoped>
.button {
  @apply border-2 border-green-700 bg-green-100 py-2 px-4;
}
.canvas {
  @apply bg-gray-200 border-2 border-gray-900 relative;
  text-rendering: optimizeLegibility;
  font-kerning: normal;
}
</style>
