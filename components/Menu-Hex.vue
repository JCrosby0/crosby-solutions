<template>
  <div>
    <div class="menu-container z-30">
      <nuxt-link
        v-for="(opt, i) in menuOptions"
        :key="opt.name"
        :to="opt.to"
        class=""
      >
        <Hex
          :l="hexSize"
          :s="0.25"
          :fill="fill[i]"
          class="hex-menu"
          :style="hexStyle(i)"
          @clack="(e) => handleClick(e, i)"
          @mouseenter="handleEnter(e, i)"
          @mouseleave="handleLeave(e, i)"
        >
          <span class="hex-name">
            {{ opt.name }}
          </span>
        </Hex>
      </nuxt-link>
      <Hex
        :l="hexSize"
        :s="0.25"
        class="hex-front"
        :style="hexStyle('front')"
        @clack="(e) => handleClick(e, 'front')"
      >
        <span>{{ menuText }}</span>
      </Hex>
    </div>
    <div v-show="menuExpanded" class="modal z-20"></div>
  </div>
</template>

<script>
import Hex from '~/components/hex'
export default {
  components: { Hex },
  props: {
    menuOptions: {
      required: false,
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      menuExpanded: false,
      direction: 1,
      hexSize: 50,
      fill: ['white', 'white', 'white', 'white'],
    }
  },
  computed: {
    menuText() {
      return this.menuExpanded ? '✕' : '☰'
    },
  },

  methods: {
    hexStyle(i) {
      switch (i) {
        case 'front': {
          return {
            '--loc-x': 'calc(0px)',
            '--loc-y': `calc(${this.direction * (0 + this.hexSize / 2)}px)`,
            '--delay': '0s',
          }
        }
        case 0: {
          return {
            '--loc-x': `calc(${-this.hexSize * 2}px)`,
            '--loc-y': `calc(${this.direction * (0 + this.hexSize / 2)}px)`,
            '--delay': '0.2s',
          }
        }
        case 1: {
          return {
            '--loc-x': `calc(${-this.hexSize * 3}px)`,
            '--loc-y': `calc(${
              this.direction * ((this.hexSize * 5) / 3 + this.hexSize / 2)
            }px)`,
            '--delay': '0.05s',
          }
        }
        case 2: {
          return {
            '--loc-x': `calc(${-this.hexSize}px)`,
            '--loc-y': `calc(${
              this.direction * ((this.hexSize * 5) / 3 + this.hexSize / 2)
            }px)`,
            '--delay': '0.15s',
          }
        }
        case 3: {
          return {
            '--loc-x': `calc(${-this.hexSize * 2}px)`,
            '--loc-y': `calc(${
              this.direction * ((this.hexSize * 10) / 3 + this.hexSize / 2)
            }px)`,
            '--delay': '0.1s',
          }
        }
      }
    },
    handleEnter(e, i) {
      this.fill[i] = 'green'
    },
    handleLeave(e, i) {
      this.fill[i] = 'white'
    },
    handleClick(e, h = 'front') {
      // // console.log('event', e)
      // // console.log('hex: ', h)

      // only evaluate the direction the menu should expand if its closed
      // if evaluate while open (ie on the close click) options may jump
      if (!this.menuExpanded) {
        this.direction = e.y < screen.height / 2 ? 1 : -1
      }
      document.documentElement.style.setProperty('--radial-x', e.x + 'px')
      document.documentElement.style.setProperty('--radial-y', e.y + 'px')
      this.menuExpanded = !this.menuExpanded
      this.$emit('toggleModal', e)

      // event is coming from inside the component
      // look through the path of the event to find the
      // intersection of the clicked target with our hexes
      // if we don't find it, click was on central hex or outside
      // so just close everything.

      // clicked target hex
      let target = null
      // dealing with html elements so can't treat as normal array
      for (const n of e.path) {
        if (n.classList && n.classList.contains('hex-open')) {
          target = n
        }
      }
      // all menu hexes
      const hexes = document.getElementsByClassName('hex-menu')

      // again iterate html elements
      for (const hex of hexes) {
        // clicked target should he handled differenetly to other targets
        if (hex === target) {
          target.classList.toggle('hex-selected')
          setTimeout(() => {
            target.classList.toggle('hex-open')
            target.classList.toggle('hex-selected')
          }, 1000)
        } else {
          // handle other targets
          hex.classList.toggle('hex-open')
        }
      }
      // and for hex-front
      document
        .getElementsByClassName('hex-front')[0]
        .classList.toggle('hex-open')
    },
  },
}
</script>

<style>
/* page is z-index 10, modal is z-index 20 */
.menu-container {
  position: relative;
  height: 30px;
  border: 1px red solid;
  width: 30px;
}
.hex-front,
.hex-menu {
  position: absolute;
  top: 50%;
  left: 50%;
  cursor: pointer;
}
.hex-front {
  animation: shrink 0.2s forwards;
  z-index: 30;
}
.hex-menu {
  animation: retreat 0.2s forwards;
}
.hex-front:hover {
  --angle: 0deg;
  animation: grow 0.2s forwards;
}
.hex-name {
  font-size: 0.4em;
  vertical-align: middle;
}

.hex-open,
.hex-open:hover {
  animation: 0.4s fly-out var(--delay) forwards;
  z-index: 30;
}
.hex-open:hover {
  color: green;
  font-weight: 600;
  font-size: 1.1em;
}
.hex-selected {
  animation: 0.5s selection;
}
.hex-front + .hex-open:hover {
  color: red;
}
.modal {
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
}

@keyframes grow {
  0% {
    transform: rotate(0deg) scale(1);
  }
  100% {
    transform: rotate(var(--angle)) scale(1.2);
  }
}
@keyframes shrink {
  100% {
    transform: rotate(0deg) scale(1);
  }
  0% {
    transform: rotate(var(--angle)) scale(1.2);
  }
}
@keyframes fly-out {
  0% {
    transform: rotate(120deg) translate(0);
  }
  100% {
    transform: rotate(0deg) translate(var(--loc-x), var(--loc-y)) scale(2);
  }
}
@keyframes retreat {
  /* 100% {
    transform: translate(0);
  } */
  0% {
    transform: rotate(0deg) translate(var(--loc-x), var(--loc-y)) scale(2);
  }
}
@keyframes selection {
  0% {
    transform: scale(2);
  }
  50% {
    transform: scale(2.25);
  }
  100% {
    transform: scale(2);
  }
}
</style>
