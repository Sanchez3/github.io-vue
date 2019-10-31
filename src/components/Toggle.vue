<template>
  <a href="javascript:;" id="toggle" class="hamburger cur" v-on:click="initToggle">
    <span class="hamburger-box hamburger--emphatic"><span class="hamburger-inner"></span></span>
</a>
</template>
<script>
export default {
  name: 'toggle',
  methods: {
    initToggle: function() {
      var $toggle = document.getElementById('toggle')
      var $navbar = document.getElementById('navbar')
      if ($toggle.getElementsByClassName('hamburger-box')[0].classList.contains('is-active')) {
        $navbar.classList.remove('mw-cur')
        $toggle.getElementsByClassName('hamburger-box')[0].classList.remove('is-active')
      } else {
        $navbar.classList.add('mw-cur')
        $toggle.getElementsByClassName('hamburger-box')[0].classList.add('is-active')
      }
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#toggle {
  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
  display: none;
}

.hamburger {
  position: relative;
  width: 30px;
  height: 30px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px;
}

.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: 30px;
  height: 4px;
  background-color: #F7F7EF;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}

.hamburger-inner::before,
.hamburger-inner::after {
  content: "";
  display: block;
}

.hamburger-inner::before {
  top: -10px;
}

.hamburger-inner::after {
  bottom: -10px;
}

.hamburger--emphatic {
  overflow: hidden;
}

.hamburger--emphatic .hamburger-inner {
  transition: background-color 0.125s 0.175s ease-in;
}

.hamburger--emphatic .hamburger-inner::before {
  left: 0;
  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;
}

.hamburger--emphatic .hamburger-inner::after {
  top: 10px;
  right: 0;
  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;
}

.hamburger--emphatic.is-active .hamburger-inner {
  transition-delay: 0s;
  transition-timing-function: ease-out;
  background-color: transparent;
}

.hamburger--emphatic.is-active .hamburger-inner::before {
  left: -30px;
  top: -30px;
  transform: translate3d(30px, 30px, 0) rotate(45deg);
  transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.hamburger--emphatic.is-active .hamburger-inner::after {
  right: -30px;
  top: -30px;
  transform: translate3d(-30px, 30px, 0) rotate(-45deg);
  transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
}

</style>
