<template>
  <div class="top bg-white p-8">
    <div class="svgcontainer flex flex-row w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        :viewBox="`-110 -110 ${totalWidth} ${totalHeight}`"
        height="264px"
        :class="{ svgBorder: showGuidelines }"
      >
        <!-- <circle r="100" stroke="#f00" stroke-width="5px" fill="none" /> -->
        <g
          v-show="showGuidelines"
          id="guidelines"
          stroke-thickness="1px"
          stroke-dasharray="5"
          stroke="red"
        >
          <!-- horizontal guidelines -->
          <path
            v-for="gy in [-100, -80, -40, 0, 40, 80, 100]"
            :key="'guideline-y_' + gy"
            :d="`M -100 ${gy} L ${totalWidth} ${gy}`"
          />
          <!-- vertical guidelines -->
          <path
            v-for="gx in [
              x.startLogo,
              x.endLogo,
              (x.endLogo + x.startText) / 2,
              x.startText,
              x.endText,
            ]"
            :key="'guideline-x_' + gx"
            :d="`M ${gx} 100 L ${gx} -100`"
          />
        </g>
        <g
          stroke-width="20px"
          stroke="#333"
          fill="none"
          :stroke-linecap="lineCapsTop"
          stroke-linejoin="round"
        >
          <!-- C Stroke and Fill -->
          <path
            id="large-c"
            :d="`M 0 -${radius}
             A ${radius} ${radius} 0 1 0 0 ${radius}`"
            fill="#10b981"
          />
          <!-- Bot S Fill -->
          <path
            id="bot-s-fill"
            :d="`M 0 ${radius}
             A ${radius} ${radius} 0 0 0 ${radius} 0
             L 0 0`"
            stroke="none"
            fill="#6ee7b7"
          />
          <!-- Top S Fill -->
          <path
            id="topSFill"
            :d="`M 0 0
             A ${radius} ${radius} 0 0 1 ${radius} -${radius}
             L ${radius} 0`"
            stroke="none"
            fill="#6ee7b7"
          />
          <!-- Bot S Stroke -->
          <path
            id="bot-s-stroke"
            :d="`M 0 ${radius}
             A ${radius} ${radius} 0 0 0 ${radius} 0`"
            :stroke-linecap="lineCapsMid"
          />
          <!-- Top S Stroke-->
          <path
            id="topSStroke"
            :d="`M 0 0
             A ${radius} ${radius} 0 0 1 ${radius} -${radius}`"
          />
          <!-- Stroke -->
          <path
            id="stroke"
            :d="`M 0 -${radius} L 0 0`"
            :stroke-linecap="lineCapsMid"
          />
        </g>
        <!-- Text -->
        <g id="text" color="#333">
          <!-- Crosby -->
          <text
            id="crosby"
            :x="x.startText - 5"
            y="0"
            :textLength="textLength"
            :style="{ fontWeight: crosbyWeight }"
          >
            crosby
          </text>
          <!-- textLength="700" -->
          <!-- Solutions -->
          <text
            id="solutions"
            :x="x.startText"
            y="80"
            :textLength="textLength"
            :style="{ fontWeight: solutionsWeight }"
          >
            SOLUTIONS
          </text>
        </g>
        <style>
          #text {
            font-family: 'Montserrat', sans-serif;
          }

          #crosby {
            font-size: 149px;
            border: 1px green dashed;
          }

          #solutions {
            font-variant: small-caps;
            font-size: 57px;
          }

          #stroke {
            animation-name: rotate-stroke;
            animation-duration: 1s;
            animation-timing-function: linear;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
          }

          <!-- #topSFill {
            animation-name rotate-arc;
            animation-delay: 1s;
            animation-duration: 1s;
            animation-timing-function: linear;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
          } -->
          #topSStroke {
            animation-name rotate-arc;
            animation-delay: 1s;
            animation-duration: 1s;
            animation-timing-function: linear;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
          }

          @keyframes rotate-stroke {
            0% {
              transform: rotate(360deg)
            }

            100% {
              transform: rotate(90deg)
            }
          }

          @keyframes rotate-arc {
            0% {
              transform: rotate(360deg);
            }

            100% {
              transform: rotate(90deg);
            }
          }
        </style>
      </svg>
      <div class="px-8">
        <ul>
          <li>Logo is created with radius = 100px</li>
          <li>let unit length (u) be 40% of the radius</li>
          <li>stroke width is 0.5u</li>
          <li>'crosby' sits on the center line of the circlular logo</li>
          <li>'crosby' x-height is 2u</li>
          <li>'crosby' font-family is Montserrat:{{ crosbyWeight }}</li>
          <li>'solutions' sits 1u below 'crosby'</li>
          <li>'solutions' cap-height is 1u</li>
          <li>
            'solutions' font-family is Montserrat:{{ solutionsWeight }}, in
            capitals
          </li>
          <li>'solutions' textLength set to same as 'crosby' textLength</li>
          <li>Logo is presented with 1u padding.</li>
        </ul>
      </div>
    </div>
    <div class="config-container py-8">
      <div class="option">
        <input v-model="showGuidelines" type="checkbox" name="showGuidelines" />
        <label for="showGuidelines">Show Guidelines</label>
      </div>
      <div class="option">
        <label for="lineCapsTop">Line-Caps: Top</label>
        <select v-model="lineCapsTop" name="lineCapsTop">
          <option
            v-for="option in lineCapOptions"
            :key="option"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
      </div>
      <div class="option">
        <label for="lineCapsMid">Line-Caps: Mid</label>
        <select v-model="lineCapsMid" name="lineCapsMid">
          <option
            v-for="option in lineCapOptions.slice(1, 3)"
            :key="option"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
      </div>
      <div class="option">
        <label for="crosbyWeight">Font Weight: Crosby</label>
        <select v-model="crosbyWeight" name="crosbyWeight">
          <option v-for="option in fontWeights" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
      </div>
      <div class="option">
        <label for="solutionsWeight">Font Weight: Solutions</label>
        <select v-model="solutionsWeight" name="solutionsWeight">
          <option v-for="option in fontWeights" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
      </div>
    </div>
    <div class="svgcontainer2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        overflow="auto"
        :viewBox="`60 -70 ${totalWidthOL - 170} 140`"
        height="150px"
        :class="{ svgBorder: showGuidelines }"
      >
        <!-- <circle r="100" stroke="#f00" stroke-width="5px" fill="none" /> -->
        <g
          v-show="showGuidelines"
          id="guidelines"
          stroke-thickness="1px"
          stroke-dasharray="5"
          stroke="red"
        >
          <!-- horizontal guidelines -->
          <path
            v-for="gy in [-70, -50, -40, 0, 40, 50, 70]"
            :key="'guideline-y_' + gy"
            :d="`M -100 ${gy} L ${totalWidthOL} ${gy}`"
          />
          <!-- vertical guidelines -->
          <path
            v-for="gx in [
              x.startText - 120,
              x.startText - 20,
              x.startText,
              x.endText,
              x.endDoubleText,
            ]"
            :key="'guideline-x_' + gx"
            :d="`M ${gx} 100 L ${gx} -100`"
          />
        </g>
        <g
          id="logo"
          stroke-width="20px"
          stroke="#333"
          fill="none"
          :stroke-linecap="lineCapsTop"
          stroke-linejoin="round"
        >
          <!-- C Stroke and Fill -->
          <path
            id="large-c"
            :d="`M 0 -${radius}
             A ${radius} ${radius} 0 1 0 0 ${radius}`"
            fill="#10b981"
          />
          <!-- Bot S Fill -->
          <path
            id="bot-s-fill"
            :d="`M 0 ${radius}
             A ${radius} ${radius} 0 0 0 ${radius} 0
             L 0 0`"
            stroke="none"
            fill="#6ee7b7"
          />
          <!-- Top S Fill -->
          <path
            id="topSFill"
            :d="`M 0 0
             A ${radius} ${radius} 0 0 1 ${radius} -${radius}
             L ${radius} 0`"
            stroke="none"
            fill="#6ee7b7"
          />
          <!-- Bot S Stroke -->
          <path
            id="bot-s-stroke"
            :d="`M 0 ${radius}
             A ${radius} ${radius} 0 0 0 ${radius} 0`"
            :stroke-linecap="lineCapsMid"
          />
          <!-- Top S Stroke-->
          <path
            id="topSStroke"
            :d="`M 0 0
             A ${radius} ${radius} 0 0 1 ${radius} -${radius}`"
          />
          <!-- Stroke -->
          <path
            id="stroke"
            :d="`M 0 -${radius} L 0 0`"
            :stroke-linecap="lineCapsMid"
          />
        </g>
        <!-- Text -->
        <g id="text" color="#333">
          <!-- Crosby -->
          <text
            id="crosby"
            :x="x.startText - 5"
            y="40"
            :textLength="textLength"
            :style="{ fontWeight: crosbyWeight }"
          >
            crosby
          </text>
          <!-- textLength="700" -->
          <!-- Solutions -->
          <text
            id="solutionsOL"
            :x="x.endText"
            y="40"
            :style="{ fontWeight: solutionsWeight }"
            :textLength="textLengthOL"
          >
            solutions
          </text>
        </g>
        <style>
          #text {
            font-family: 'Montserrat', sans-serif;
          }

          #crosby {
            font-size: 149px;
            border: 1px green dashed;
          }

          #solutionsOL {
            font-size: 160px;
          }

          #stroke {
            animation-name: rotate-stroke;
            animation-duration: 1s;
            animation-timing-function: linear;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
          }

          <!-- #topSFill {
            animation-name rotate-arc;
            animation-delay: 1s;
            animation-duration: 1s;
            animation-timing-function: linear;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
          } -->
          #topSStroke {
            animation-name rotate-arc;
            animation-delay: 1s;
            animation-duration: 1s;
            animation-timing-function: linear;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
          }

          @keyframes rotate-stroke {
            0% {
              transform: rotate(360deg)
            }

            100% {
              transform: rotate(90deg)
            }
          }

          @keyframes rotate-arc {
            0% {
              transform: rotate(360deg);
            }

            100% {
              transform: rotate(90deg);
            }
          }
        </style>
      </svg>
    </div>
    <div class="complete-svgs w-full m-20">
      <object
        type="image/svg+xml"
        :data="require('~/assets/svg/cs-logo.svg')"
        height="200px"
      ></object>
      <object
        id="cs-logo-1l"
        class="cs-logo"
        type="image/svg+xml"
        :data="require('~/assets/svg/cs-logo-one-line.svg')"
        height="100px"
      />
      <object
        id="cs-logo-2l"
        class="cs-logo"
        type="image/svg+xml"
        :data="require(`~/assets/svg/cs-logo-two-line.svg`)"
        height="200px"
      />
      <object
        id="cs-logo-2l"
        class="cs-logo"
        type="image/svg+xml"
        :data="require(`~/assets/svg/cs-toplogo-two-line-font.svg`)"
        height="400px"
      />
    </div>
  </div>
</template>

<script>
export default {
  // components: { Logo },
  data() {
    return {
      showGuidelines: true,
      lineCapsTop: 'round',
      lineCapsMid: 'round',
      lineCapOptions: ['butt', 'square', 'round'],
      crosbyWeight: 600,
      solutionsWeight: 300,
      c: {
        lineThickness: 20,
        space: 80,
        logoSize: 200,
      },
      fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    }
  },
  computed: {
    x() {
      return {
        startLogo: parseInt(-100),
        endLogo: parseInt(-100 + this.c.logoSize),
        startText: parseInt(-100 + this.c.logoSize + this.c.space),
        endText: parseInt(
          -100 + this.c.logoSize + this.c.space + this.textLength
        ),
        endDoubleText: parseInt(
          -100 +
            this.c.logoSize +
            this.c.space +
            this.textLength +
            this.textLengthOL
        ),
      }
    },
    netLogo() {
      return this.logoSize - 100
    },
    startText() {
      return this.netLogo + this.c.space
    },
    radius() {
      return 100 - this.c.lineThickness / 2
    },
    textLength() {
      return 465
    },
    textLengthOL() {
      return this.textLength * 1.2
    },
    totalWidth() {
      return this.c.logoSize + this.c.space + this.textLength + 16
    },
    totalWidthOL() {
      return (
        this.c.logoSize +
        this.c.space +
        this.textLength +
        this.textLengthOL +
        16
      )
    },
    totalHeight() {
      return this.c.logoSize + this.c.lineThickness
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
svg {
  padding: 20px;
  box-sizing: border-box;
  border: 1px transparent;
}
.complete-svgs > object {
  margin-top: 50px;
}
.svgBorder {
  border: green 1px dashed;
}
/* oneline modification */
#logo {
  transform-origin: 0 0;
  transform: scale(0.5) translateX(220px);
}
/* montserrat-100 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 100;
  src: local(''),
    url('~/assets/fonts/montserrat-v15-latin-100.woff2') format('woff2'),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('~/assets/fonts/montserrat-v15-latin-100.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* montserrat-200 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 200;
  src: local(''),
    url('~/assets/fonts/montserrat-v15-latin-200.woff2') format('woff2'),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('~/assets/fonts/montserrat-v15-latin-200.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* montserrat-300 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  src: local(''),
    url('~/assets/fonts/montserrat-v15-latin-300.woff2') format('woff2'),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('~/assets/fonts/montserrat-v15-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* montserrat-regular - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: local(''),
    url('~/assets/fonts/montserrat-v15-latin-regular.woff2') format('woff2'),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('~/assets/fonts/montserrat-v15-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* montserrat-500 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  src: local(''),
    url('~/assets/fonts/montserrat-v15-latin-500.woff2') format('woff2'),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('~/assets/fonts/montserrat-v15-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* montserrat-600 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  src: local(''),
    url('~/assets/fonts/montserrat-v15-latin-600.woff2') format('woff2'),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('~/assets/fonts/montserrat-v15-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* montserrat-700 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  src: local(''),
    url('~/assets/fonts/montserrat-v15-latin-700.woff2') format('woff2'),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('~/assets/fonts/montserrat-v15-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* montserrat-800 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  src: local(''),
    url('~/assets/fonts/montserrat-v15-latin-800.woff2') format('woff2'),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('~/assets/fonts/montserrat-v15-latin-800.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* montserrat-900 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  src: local(''),
    url('~/assets/fonts/montserrat-v15-latin-900.woff2') format('woff2'),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('~/assets/fonts/montserrat-v15-latin-900.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
</style>
