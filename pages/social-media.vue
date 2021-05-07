<template>
  <div class="container p-4">
    <h1 class="text-3xl">Social Media Images</h1>
    <button class="button" @click="downloadSVG('all')">
      Download All Images
    </button>
    <div class="py-4">
      <div class="option-container flex flex-row">
        <div
          v-for="(c, i) in contentTypes"
          :key="'option' + c.name"
          div
          class="options p-4"
        >
          <h3 class="text-xl">{{ c.title }} Settings</h3>
          <label>Logo Colour: </label>
          <select v-model="logoColor[i]">
            <option
              v-for="option in logoColors"
              :key="option + 'logoColor'"
              :value="option"
            >
              {{ option }}
            </option></select
          ><br />
          <label for="background">Use Background</label>
          <input v-model="useBackground[i]" type="checkbox" name="background" />
          <br /><label>Background Hex Size: </label>
          <select v-model="backgroundSize[i]">
            <option
              v-for="option in backgroundSizes"
              :key="option + 'bg'"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
          <br />
          <label for="gradient">Use Gradients</label>
          <input
            v-model="useGradients[i]"
            type="checkbox"
            name="gradient"
          /><br />
          <label>Gradient Colour: </label>
          <select v-model="gradColor[i]">
            <option
              v-for="option in gradColors"
              :key="option + 'gradColor'"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div v-for="soc in social" :key="soc.name" class="social-each">
      <h2 class="text-2xl mt-4">{{ soc.name }}</h2>
      <a :href="soc.href" target="_blank">{{ soc.href }}</a
      ><br />
      <button class="button" @click="downloadSVG(soc.name)">
        Download {{ soc.name }} Images
      </button>
      <div
        v-for="con in contentTypes"
        :key="soc.name + con.name"
        class="content"
      >
        <h3 class="text-xl">{{ con.title }}:</h3>
        <span>{{ dimensions(soc[con.name]) }}</span>

        <canvas
          :ref="'canvas-' + soc.name + '-' + con.name"
          :width="soc[con.name].raw.x"
          :height="soc[con.name].raw.y"
          class="canvas"
          :style="{
            width: soc[con.name].display.x + 'px',
            height: soc[con.name].display.y + 'px',
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import social from '~/content/json/social.json'
export default {
  data() {
    return {
      social,
      useBackground: [false, true],
      backgroundSize: ['normal', 'small'],
      backgroundSizes: ['normal', 'small'],
      useGradients: [false, true],
      logoColor: ['black', 'white'],
      logoColors: ['black', 'white'],
      gradColor: ['black', 'black'],
      gradColors: ['black', 'darkgreen'],
      contentTypes: [
        { title: 'Avatar', name: 'avatar' },
        { title: 'Banner', name: 'banner' },
        // { title: 'Content', name: 'content' },
      ],
      svg: {
        root: '~/assets/svg/',
        square: 'cs-logo-16x16.svg',
        squareWhite: 'cs-logo-white-16x16.svg',
        wide: 'cs-logo-two-line.svg',
        wideWhite: 'cs-logo-white-two-line-font.svg',
        tall: 'cs-toplogo-two-line-font.svg',
        tallWhite: 'cs-toplogo-white-two-line-font.svg',
      },
    }
  },
  watch: {
    logoColor() {
      this.drawAllCanvases()
    },
    useBackground() {
      this.drawAllCanvases()
    },
    backgroundSize() {
      this.drawAllCanvases()
    },
    useGradients() {
      this.drawAllCanvases()
    },
    gradColor() {
      this.drawAllCanvases()
    },
  },
  mounted() {
    this.drawAllCanvases()
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
      const [s, c] = canvasRef.split('-').slice(1, 3)
      const canvas = this.$refs[canvasRef][0]
      const soc = this.social.find((n) => n.name === s)[c]
      const src = soc.logo.src

      this.drawImage(canvas, src, soc, c)
    },
    /**
     * calcSizing
     * Calculates the offsets and sizing for svg image to be drawn on the canvas
     * @input soc the relevant entry in social.json for this canvas
     * @input img the image created in drawImage (in case passing URL to it directly)
     * @input t the type of image (avatar or banner) that is being created
     */
    calcSizing(soc, img, t) {
      const logo = soc.logo
      const raw = soc.raw
      const type = t

      const sWidth = logo.x
      const sHeight = logo.y
      const dWidth = raw.x
      const dHeight = raw.y
      const sRatio = sWidth / sHeight
      const dRatio = dWidth / dHeight

      const p = 0.1 // padding ratio
      let imgType
      let dx, dy, dW, dH
      // for ratios similar (Avatar) add padding and return
      if (type === 'avatar') {
        dx = dWidth * p
        dy = dHeight * p
        dW = dWidth * (1 - 2 * p)
        dH = dHeight * (1 - 2 * p)
        imgType = 'square'
      } else if (dRatio > sRatio) {
        // for ratio > 1, height restricted
        // - calculate target height and width
        // - calculate dx = dWidth/2 - sWidth/2
        // - calculate dy = padding * dHeight
        // - calcualte dH = dHeight - 2 * padding
        // - calculate dW = dH * sRatio
        dH = dHeight * (1 - 2 * p)
        dW = (dH / sHeight) * sWidth
        dx = dWidth / 2 - dW / 2
        dy = dHeight * p
        imgType = 'wide'
      } else {
        // for ratio < 1, width restricted
        // - calculate dH target height after padding
        // - calculate dy = dHeight/2 - dH/2
        // - calculate dx = padding * dWidth
        // - calcualte dH = dHeight * (1 - 2 * p)
        // - calculate dW = dH * sRatio
        dW = dWidth * (1 - 2 * p)
        dH = (dW / sWidth) * sHeight
        dx = p * dWidth
        dy = dHeight / 2 - dH / 2
        imgType = dRatio >= 2 ? 'wide' : 'tall'
      }

      return [imgType, 0, 0, sWidth, sHeight, dx, dy, dW, dH]
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
    drawImage(canvas, src, soc, t) {
      const ctx = canvas.getContext('2d')
      // clear the canvas in between draws
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      const i = t === 'avatar' ? 0 : 1
      // draw background
      if (this.useBackground[i]) {
        const background = new Image(3.45, 2)
        background.onload = function () {
          const ptrn = ctx.createPattern(background, 'repeat') // Create a pattern with this image, and set it to "repeat".
          ctx.fillStyle = ptrn
          ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height) // context.fillRect(x, y, width, height);
        }
        const bgsvg =
          this.backgroundSize[i] === 'normal'
            ? 'hex-fill.svg'
            : 'hex-fill-small.svg'
        background.src = require(`~/assets/svg/${bgsvg}`)
      }

      // draw gradients
      if (this.useGradients[i]) {
        const grd = ctx.createLinearGradient(
          0,
          0,
          ctx.canvas.width,
          ctx.canvas.height
        )
        grd.addColorStop(0, 'black')
        grd.addColorStop(0.5, this.gradColor[i])
        grd.addColorStop(1, 'black')
        ctx.fillStyle = grd
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      }

      // draw logo
      const img = new Image()
      // sizing calculations...
      const [type, ...dimensions] = this.calcSizing(soc, img, t)
      img.onload = function () {
        ctx.drawImage(img, ...dimensions)
      }
      const typeColor = this.logoColor[i] === 'black' ? type : type + 'White'
      img.src = require('~/assets/svg/' + this.svg[typeColor])
    },
    dimensions(d) {
      return `Recommended: ${d.raw.x}x${d.raw.y}px, Display: ${d.display.x}x${d.display.y}px`
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
      if (param === 'all') {
        param = social.map((n) => n.name)
      } else {
        param = [param]
      }
      const items = ['avatar', 'banner']
      social
        .filter((s) => param.includes(s.name))
        .forEach((p) => {
          items.forEach((i) => {
            const ref = 'canvas-' + p.name + '-' + i // [social]-[avatar]
            const filename = `${p.name}-${i}`.toLowerCase()
            const canvas = this.$refs[ref][0]
            const imgURI = canvas
              .toDataURL('image/png')
              .replace('image/png', 'image/octet-stream')

            triggerDownload(imgURI, filename)
          })
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
}
/* .svg-avatar {
  height: 100%;
  width: 100%;
  padding: 10%;
}
.banner {
  color: white;
  background: black;
  background-image: url('~assets/svg/hex-fill.svg');
  background-size: cover;
  position: relative;
}
.svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.content {
} */
</style>
