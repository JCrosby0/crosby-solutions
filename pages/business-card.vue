<template>
  <div class="container p-4">
    <div class="">
      <h1 class="text-3xl">Business Card</h1>
      <button class="button" @click="downloadSVG('all')">
        Download All Images
      </button>
      <label for="background">Draw Background Logo: </label>
      <input v-model="drawBackground" type="checkbox" name="background" />
    </div>
    <div v-for="i in items" :key="i" class="content">
      <h3 class="text-xl">Business Card - {{ i }}:</h3>
      <canvas
        :ref="'canvas-' + i"
        :width="1481"
        :height="914"
        class="canvas"
        :style="{
          width: '740px',
          height: '457px',
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['front', 'back'],
      drawBackground: true,
      svg: {
        root: '~/assets/svg/',
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
    drawBackground() {
      this.drawAllCanvases()
    },
  },
  mounted() {
    setTimeout(() => this.drawAllCanvases(), 2000)
  },
  methods: {
    drawAllCanvases() {
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
      const canvas = this.$refs[canvasRef][0]
      const side = canvasRef.split('-').slice(1, 2)[0]
      this.drawImage(canvas, side)
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
    drawImage(canvas, side) {
      const ctx = canvas.getContext('2d')
      // clear the canvas in between draws
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      // draw background
      const background = new Image(3.45, 2)
      background.onload = function () {
        const ptrn = ctx.createPattern(background, 'repeat') // Create a pattern with this image, and set it to "repeat".
        ctx.fillStyle = ptrn
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height) // context.fillRect(x, y, width, height);
      }
      //   const backgroundChoice = true
      //   const bgsvg = backgroundChoice ? 'hex-fill.svg' : 'hex-fill-small.svg'
      const cardFront = 'hex-fill-top.svg'
      const cardBack = 'hex-fill-bottom.svg'
      const card = side === 'front' ? cardFront : cardBack
      background.src = require(`~/assets/svg/${card}`)

      // draw gradients
      const grd = ctx.createLinearGradient(
        0,
        0,
        ctx.canvas.width,
        ctx.canvas.height
      )
      grd.addColorStop(0, 'black')
      grd.addColorStop(0.5, 'black')
      grd.addColorStop(1, 'black')
      ctx.fillStyle = grd
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

      // draw front card
      if (side === 'front') {
        // background cs
        const imgBg = new Image()
        // 1481 914 457
        imgBg.onload = () => {
          this.drawBackground &&
            ctx.drawImage(imgBg, 0, 0, 16, 16, 1024, 0, 914, 914)
        }
        imgBg.src = require('~/assets/svg/' + this.svg.squareNoFill)
        // draw logo
        // const img = new Image()
        // img.onload = function () {
        //   ctx.drawImage(img, 1180, 100, 200, 200)
        // }
        // img.src = require('~/assets/svg/' + this.svg.squareWhite)
        // draw text
        const leftTextAlign = 500
        const nameTop = 500
        const line = (x) => 60 * x
        ctx.textAlign = 'right'
        ctx.font = '700 64px Montserrat'
        ctx.fillStyle = '#34D399'
        ctx.fillText('Joe Crosby', leftTextAlign, nameTop)
        ctx.font = '400 36px Montserrat'
        ctx.fillStyle = '#FFFFFF'
        ctx.fillText('Web Developer', leftTextAlign, nameTop + line(1))
        ctx.fillText('joe@crosby.solutions', leftTextAlign, nameTop + line(3))
        ctx.fillText('crosby.solutions', leftTextAlign, nameTop + line(4))
        ctx.fillStyle = '#808080'
        ctx.fillText('https://', 210, nameTop + line(4))
        ctx.fillStyle = '#FFFFFF'
        ctx.fillText('0412 276 729', leftTextAlign, nameTop + line(5))
      }
      // draw back card
      if (side === 'back') {
        // background cs
        const imgBg = new Image()
        imgBg.onload = () => {
          this.drawBackground &&
            ctx.drawImage(imgBg, 0, 0, 16, 16, -457, 0, 914, 914)

          // text needs to be in front of background image
          ctx.textAlign = 'center'
          ctx.font = '400 32px Montserrat'
          ctx.fillStyle = '#FFFFFF'
          ctx.fillText(`Empowering you to leverage your web presence`, 740, 608)
        }
        imgBg.src = require('~/assets/svg/' + this.svg.squareNoFill)

        // draw logo
        const img = new Image()
        // total: 1481 914; mid: 740 457; wideWhite: 761 220
        // centered: 360 347
        img.onload = function () {
          ctx.drawImage(img, 360, 304)
        }
        img.src = require('~/assets/svg/' + this.svg.wideWhite)
      }
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
      const items = ['front', 'back']

      items.forEach((i) => {
        const ref = 'canvas-' + i // [social]-[avatar]
        const filename = `business-card-${i}`.toLowerCase()
        const canvas = this.$refs[ref][0]
        const imgURI = canvas
          .toDataURL('image/png')
          .replace('image/png', 'image/octet-stream')

        triggerDownload(imgURI, filename)
      })
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
