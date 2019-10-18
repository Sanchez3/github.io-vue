<template>
  <section id="intro" class="main style1 fullscreen" @mousemove="">
    <div class="content">
      <div class="move">
        <header id="hello">
          <div class="sayhello"></div>
          <br>
          <div class="saywelcome"></div>
        </header>
        <footer>
          <a href="javascript:;" class="fa fa-hand-o-down fa-2x" v-on:click="initFa"></a>
        </footer>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'intro',
  methods: {
    initFa: function() {
      TweenMax.to(window, 1, { scrollTo: { y: window.innerHeight } })
    },
    onDocumentMouseMove: function(event) {
      var windowHalfX = window.innerWidth / 2
      var windowHalfY = window.innerHeight / 2
      var mouseX = (event.clientX - windowHalfX)
      var mouseY = (event.clientY - windowHalfY)
      var move = document.getElementsByClassName('move')[0]

      if (move.style.left === '' || move.style.top === '') {
        move.style.left = 0
        move.style.top = windowHalfY - parseFloat(move.clientHeight) + 'px'
      }
      TweenMax.set(move, {
        x: +(mouseX - parseFloat(move.style.left)) * 0.05,
        y: -(mouseY - parseFloat(move.style.top)) * 0.05
      })
    }
  }
}

</script>
<style>
h2 {
  font-size: 2.25rem;
  letter-spacing: -0.05rem;
}

.main {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  position: relative;
  margin: 0;
  overflow-x: hidden;
}

</style>
<style scoped>
#intro {
  background-image: url(../assets/img/fulls/01.jpg);
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  background-size: cover;
  background-attachment: fixed;
}

.main>.content {
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
}

#intro .content {
  color: #fff;
  width: 45rem;
}

.move {
  position: absolute;
  width: 100%;
  height: auto;
  transition: all 0.1s;
  left: 0;
  /*top: 50%;*/
  /*transform: translateY(50%);*/
  /*margin-top:50%; */
}

a {
  margin-top: 2rem;
  color: #fff;
  -webkit-animation-name: rubberBand;
  animation-name: rubberBand;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.sayhello {
  display: inline-block;
}

.saywelcome {
  display: inline-block;
}

.main.style1 {
  -moz-align-items: center;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -moz-justify-content: center;
  -webkit-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  text-align: center;
}

.fa.fa-hand-o-down.fa-2x {
  display: none;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.typed-cursor {
  opacity: 1;
  animation: typedjsBlink 0.7s infinite;
  -webkit-animation: typedjsBlink 0.7s infinite;
  animation: typedjsBlink 0.7s infinite;
}

@keyframes typedjsBlink {
  50% {
    opacity: 0.0;
  }
}

@-webkit-keyframes typedjsBlink {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.0;
  }

  100% {
    opacity: 1;
  }
}

.typed-fade-out {
  opacity: 0;
  transition: opacity .25s;
  -webkit-animation: 0;
  animation: 0;
}

@media screen and (max-width: 500px) {
  #intro {
    background-attachment: scroll;
  }
}

</style>
