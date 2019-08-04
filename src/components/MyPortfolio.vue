<template>
  <div :class="`col-${col}`" :style="{ height: `${height}vh`, border: '1px solid black' }">
    <!-- Se o portfólio não existe, haverá um espaço vazio -->
    <div v-if="!portfolio" class="relative-position full-width full-height"></div>
    <!-- Senão, os dados do portfólio serão exibidos -->
    <div v-if="portfolio" :class="`my-img-container relative-position full-width full-height`">
      <q-img
        :id="`myImg_${index}`"
        class="my-img"
        :src="portfolio.image"
        :style="getImgCSS()"
        spinner-color="white"
      ></q-img>
      <div
        :id="`myTextContainerAll_${index}`"
        class="my-text-containter-all absolute-bottom full-width q-py-lg text-white q-pb-xl"
      >
        <div
          :id="`myTextContainer_${index}`"
          class="my-text-containter full-width full-height"
          :style="getTextCSS()"
        ></div>
        <div class="absolute-center full-width text-right q-pr-md">
          <div>
            <span class="text-subtitle1 text-bold">{{portfolio.company}}</span>
          </div>
          <div>
            <span class="text-caption">
              <i>{{portfolio.service}}</i>
            </span>
          </div>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    index: Number,
    col: Number,
    height: Number
  },
  data () {
    return {
      portfolio: null
    }
  },
  computed: {
    ...mapState('General', ['portfolios'])
  },
  watch: {
    portfolios: function () {
      this.getPortfolio()
    }
  },
  mounted () {
    this.getPortfolio()
  },
  methods: {
    getPortfolio () {
      if (this.portfolios.length >= this.index) {
        this.portfolio = this.portfolios[this.index]
        setTimeout(() => {
          // Inicia as animações provenientes do plugin 'gsap'
          this.listenHover()
        }, 200)
      }
    },
    listenHover () {
      const self = this
      let myImg = window.$(`#myImg_${self.index}`)
      let myTextContainerAll = window.$(`#myTextContainerAll_${this.index}`)
      // Utilizando jQuery, o evento de hover é detectado tanto na imagem quanto no texto
      window.$(myImg).hover(
        function () { self.onMouseOver(this) },
        function () { self.onMouseOut(this) })
      window.$(myTextContainerAll).hover(
        function () { self.onMouseOver(myImg) },
        function () { self.onMouseOut(myImg) })
    },
    onMouseOver (img) {
      // Utilizando o plugin 'gsap', é realizada a animação na imagem e no texto com o evento de hover
      this.$gsap.TweenMax.to(img, 1, { css: this.getImgCSS(true), ease: this.$gsap.Circ.easeOut })
      this.$gsap.TweenMax.to(window.$(`#myTextContainer_${this.index}`), 1, { css: this.getTextCSS(true), ease: this.$gsap.Circ.easeOut })
    },
    onMouseOut (img) {
      // Utilizando o plugin 'gsap', é realizada a animação na imagem e no texto sem o evento de hover
      this.$gsap.TweenMax.to(img, 1, { css: this.getImgCSS(), ease: this.$gsap.Circ.easeOut })
      this.$gsap.TweenMax.to(window.$(`#myTextContainer_${this.index}`), 1, { css: this.getTextCSS(), ease: this.$gsap.Circ.easeOut })
    },
    getImgCSS (isMouseOver) {
      // No evento de hover, a imagem aumenta o brilho e recebe zoom
      if (isMouseOver) {
        return {
          filter: 'brightness(100%)',
          scaleX: 1.3,
          scaleY: 1.3
        }
      } else {
        return {
          filter: 'brightness(50%)',
          scaleX: 1,
          scaleY: 1
        }
      }
    },
    getTextCSS (isMouseOver) {
      // No evento de hover, o background do texto fica mais opaco
      if (isMouseOver) {
        return {
          background: 'rgba(0, 0, 0, 0.7)'
        }
      } else {
        return {
          background: 'rgba(0, 0, 0, 0)'
        }
      }
    }
  }
}
</script>

<style scoped>
.my-img-container {
  display: inline-block;
  overflow: hidden;
}
.my-img {
  width: 100%;
  height: 100%;
}
.my-text-containter {
  position: absolute;
  top: 0;
}
</style>
