<template>
  <nav id="navbar" class="cur" role="navigation">
    <ul>
      <navitem v-for="(todo, index) in todos" v-bind:title="todo" :key="todo.id" v-on:scrollto="scrollTo(index)"></navitem>
    </ul>
  </nav>
</template>
<script>
import Navitem from './Navitem'
export default {
  name: 'navbar',
  components: {
    'navitem': Navitem
  },
  data: function() {
    return {
      todos: ['Intro', 'What I Do', 'Who I Am', 'My Work']
    }
  },
  methods: {
    scrollTo: function(i) {
      var $toggle = document.getElementById('toggle')
      var hamburger = $toggle.getElementsByClassName('hamburger-box')[0]
      var $header = document.getElementById('header')
      var $navbar = document.getElementById('navbar')
      if (window.innerWidth <= 500) {
        if (hamburger.classList.contains('is-active')) {
          $navbar.classList.remove('mw-cur')
          hamburger.classList.remove('is-active')
        }
      }
      var offsetY = window.innerHeight * i - (i - 1) * $header.clientHeight
      TweenMax.to(window, 1, {
        scrollTo: {
          y: offsetY
        }
      })
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  display: none;
  position: absolute;
  top: 0;
  right: 0.5rem;
  height: 3rem;
  line-height: 3rem;
  float: right;
  width: auto;
}

.cur {
  display: block;
}

ul {
  margin: 0;
}

@media screen and (max-width: 500px) {
  #navbar.cur {
    display: none;
  }

  #navbar.cur.mw-cur {
    display: block;
  }

  #navbar {
    right: 0;
    left: 0;
    margin: auto;
    top: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    text-align: center;
    padding-top: 6rem;
    font-weight: bold;
    color: #000;
    background-color: #fff;
  }

  nav ul {
    margin-top: 3rem;
  }
}

</style>
