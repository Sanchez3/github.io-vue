<template>
  <article v-if="id !== 10" class="article">
    <div :href="url" class="image fit" @touchstart.self="doHover" @touchend.self="disHover" @mouseenter.self="doHover" @mouseleave.self="disHover">
      <div class="image-container">
        <canvas v-bind:id="'canvas-' + id" class="canvas-bg" ref="id"></canvas>
      </div>
      <a v-if="url !== ''" class="launch" :href="url" target="_blank"><h6>LAUNCH</h6></a>
      <a class="overview" :href="overview" target="_blank"><h6>OVERVIEW</h6></a>
      <a class="title"><h6>{{title}}</h6></a>
    </div>
  </article>
  <article v-else class="article more">
    <div :href="url" class="image fit" @touchstart.self="doHover" @touchend.self="disHover" @mouseenter.self="doHover" @mouseleave.self="disHover">
      <div class="image-container">
        <svg id='minfinite' width="100%" height="100%" viewBox="0 0 188 94" preserveAspectRatio="xMidYMid meet" style="">
          <path stroke="#fff" id="outline" fill="none" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1                c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" />
          <path id="outline-bg" opacity="0.3" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="             M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1               c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" />
        </svg>
      </div>
      <a class="overview" :href="url" target="_blank"><h6>LAUNCH</h6></a>
      <a><h6>More</h6></a>
    </div>
  </article>
</template>
<script>
// import { OldFilmFilter } from '@pixi/filter-old-film'
import * as PIXI from 'pixi.js'
export default {
  name: 'work-item',
  props: ['id', 'title', 'imgTitle', 'url', 'overview'],
  mounted: function() {
    // elements have been created, so the `ref` will return an element.
    // but the elements have not necessarily been inserted into the DOM yet.
    // you can use $nextTick() to wait for that to have happened.
    // this is espeically necessary if you want to to get dimensions or position of that element.
    if (this.$props.id === 10) return
    this.$nextTick(function() {
      this.initCanvas()
    })
  },
  methods: {
    initCanvas: function() {
      var w = document.getElementsByClassName('image-container')[0].clientWidth
      var s = w / 440
      var h = s * 276
      var app = new PIXI.Application(w, h, { transparent: false, view: this.$refs.id })
      app.renderer.plugins.interaction.autoPreventDefault = false
      app.renderer.view.style.touchAction = 'auto'
      var bg
      if (this.$props.id === 7) {
        bg = PIXI.Sprite.fromImage(require(`@/assets/img/thumbs/0${this.$props.id}.gif`))
      } else {
        bg = PIXI.Sprite.fromImage(require(`@/assets/img/thumbs/0${this.$props.id}.jpg`))
      }
      bg.scale.set(s)
      app.stage.addChild(bg)
      // var filter = new OldFilmFilter({
      //   sepia: 0.1,
      //   noise: 0.3,
      //   noiseSize: 2.0,
      //   scratch: 0.5,
      //   scratchDensity: 0.3,
      //   scratchWidth: 1.0,
      //   vignetting: 0.3,
      //   vignettingAlpha: 1.0,
      //   vignettingBlur: 0.3
      // }, 0.5)
      var filter = new PIXI.filters.NoiseFilter()
      app.stage.interactive = true
      app.stage.buttonMode = true
      app.stage.on('pointerover', function() {
        app.stage.filters = [filter]
      })
      app.stage.on('pointerout', function() {
        app.stage.filters = null
      })
      app.ticker.add(function(delta) {
        filter.seed = Math.random()
      })

      window.addEventListener('resize', resize)

      function resize() {
        console.log('213')
        var w = document.getElementsByClassName('image-container')[0].clientWidth
        var s = w / 440
        var h = s * 276
        app.renderer.resize(w, h)
        bg.scale.set(s)
        app.render()
      }
    },
    doHover: function(event) {
      event.target.classList.add('hover')
    },
    disHover: function(event) {
      event.target.classList.remove('hover')
    }
  }
}

</script>
<style scoped>
.canvas-bg {
  display: inline-block;
  width: auto;
  height: auto;
  max-width: 500px;
  min-width: 310px;
  overflow: hidden;
  cursor: pointer;
  background-color: #e0e0e0;
  object-fit: cover;
  object-position: center;

}

.image.hover svg {
  transform: scale3d(1.18, 1.18, 1.18);
}

.article a {
  overflow: hidden;
  /*position: absolute;*/
  display: inline;
  color: #fff;
  background-color: #172a53;
  letter-spacing: .1rem;
  line-height: 1.4;
  font-weight: normal;
  position: absolute;
  left: 0.5rem;
  bottom: 0.5rem;
  padding: 0.2rem 0.5rem;
  border-radius: 0.1rem;
  width: auto;
  text-transform: uppercase;
  text-align: left;
  font-weight: 500;
  /*transform: scale3d(1, 1, 1);*/
  transition: all 1.2s cubic-bezier(.19, 1, .22, 1);
}

.article .title {
  bottom: 0.5rem;
}

.article .launch {
  color: #000;
  opacity: 0;
}

.article .overview {
  color: #000;
  opacity: 0;
}

.article .hover .overview {
  opacity: 1;
  bottom: 2.5rem;
  transition: all 0.8s;
}

.article .hover .launch {
  opacity: 1;
  bottom: 4.5rem;
  transition: all 0.8s;
}

.article a:before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  background-color: #e9f6f9;
  width: 100%;
  height: 100%;
  transform: scaleX(0);
  transform-origin: left;
  transition: all .6s cubic-bezier(.19, 1, .22, 1);
}

.image.hover a:before {
  transform: scaleX(1.18);
}

.article .hover a.overview:hover::before {
  background-color: #1b30fc !important;

}

.article .hover a.launch:hover::before {
  background-color: #1b30fc !important;
}

.article .hover a.overview:hover {
  color: #fff;
  transition: all 0.5s;
}

.article .hover a.launch:hover {
  color: #fff;
  transition: all 0.5s;
}

.image.hover .image-container {
  transform: scale3d(1.18, 1.18, 1.18);
  filter: grayscale(60%);
}

.image.hover a {
  color: #000;
}

.article h6 {
  position: relative;
}

article:nth-child(2n+1) {
  margin-right: 1%;
  left: -100%;
}

article:nth-child(2n) {
  margin-left: 1%;
  left: 100%;
}
article.more {
  margin-left: auto;
  margin-right: auto;
}

#outline {
  stroke-dasharray: 2.42777px, 242.77666px;
  stroke-dashoffset: 0;
  -webkit-animation: moreinfinite 1.6s linear infinite;
  animation: moreinfinite 1.6s linear infinite;
}

@-webkit-keyframes moreinfinite {
  12.5% {
    stroke-dasharray: 33.98873px, 242.77666px;
    stroke-dashoffset: -26.70543px;
  }

  43.75% {
    stroke-dasharray: 84.97183px, 242.77666px;
    stroke-dashoffset: -84.97183px;
  }

  100% {
    stroke-dasharray: 2.42777px, 242.77666px;
    stroke-dashoffset: -240.34889px;
  }
}

@keyframes moreinfinite {
  12.5% {
    stroke-dasharray: 33.98873px, 242.77666px;
    stroke-dashoffset: -26.70543px;
  }

  43.75% {
    stroke-dasharray: 84.97183px, 242.77666px;
    stroke-dashoffset: -84.97183px;
  }

  100% {
    stroke-dasharray: 2.42777px, 242.77666px;
    stroke-dashoffset: -240.34889px;
  }
}

.article {
  display: inline-block;
  width: 45%;
  max-width: 500px;
  min-width: 310px;
  /*opacity: 1.0;*/
  float: none;
  vertical-align: top;
  position: relative;
  text-decoration: none;
  line-height: 1;
  overflow: hidden;
  cursor: pointer;
  background-color: #e0e0e0;
  margin: 0 auto 2% auto;
}

.image img {
  display: block;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.image.fit {
  display: block;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.image {
  position: relative;
  display: inline-block;
}

.image-container {
  width: 100%;
  height: 100%;
  transform: scale3d(1, 1, 1);
  filter: grayscale(0);
  transition: transform 1.2s cubic-bezier(.19, 1, .22, 1);
}

@media screen and (max-width: 700px) and (min-width: 500px) {
  .article {
    min-width: 420px;
  }
}

@media screen and (max-width: 700px) {

  article:nth-child(2n+1) {
    margin: 0 auto 3% auto;
  }

  article:nth-child(2n) {
    margin: 0 auto 3% auto;
  }

  .more {
    max-width: 100%;
    height: 263.45px;
  }
}

@media screen and (max-width: 500px) {
  .article {
    width: 100%;
    min-width: 140px;
  }
}

</style>
