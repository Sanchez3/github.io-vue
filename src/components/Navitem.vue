<template>
  <li>
    <a href="javascript:;" class="fadeInRight animated"  v-on:click="$emit('scrollto')">{{title}} </a>
  </li>
</template>
<script>
export default {
  name: 'navitem',
  props: ['title']
}

</script>
<style scoped>
li {
  display: inline-block;
  margin-left: 0.5rem;
  font-size: 0.9rem;
}

li:nth-child(1) a {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
  -webkit-animation-duration: 0.6s;
  animation-duration: 0.6s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-delay: 0.05s;
  -o-animation-delay: 0.05s;
  animation-delay: 0.05s;
}

li:nth-child(2) a {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
  -webkit-animation-duration: 0.6s;
  animation-duration: 0.6s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-delay: 0.1s;
  -o-animation-delay: 0.1s;
  animation-delay: 0.1s;
}

li:nth-child(3) a {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
  -webkit-animation-duration: 0.6s;
  animation-duration: 0.6s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-delay: 0.15s;
  -o-animation-delay: 0.15s;
  animation-delay: 0.15s;
}

li:nth-child(4) a {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
  -webkit-animation-duration: 0.6s;
  animation-duration: 0.6s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-delay: 0.2s;
  -o-animation-delay: 0.2s;
  animation-delay: 0.2s;
}

li a {
  display: block;
  color: inherit;
  text-decoration: none;
  height: 3rem;
  line-height: 3rem;
  padding: 0 0.5rem 0 0.5rem;
  outline: 0;
}

@media screen and (max-width: 500px) {
  li {
    width: 100%;
    padding: 0;
    margin: 0 auto;
    height: 5rem;
    line-height: 5rem;
    font-size: 1.5rem;
  }

  li:nth-child(1) a {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp;
    -webkit-animation-duration: 0.6s;
    animation-duration: 0.6s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-delay: 0.05s;
    -o-animation-delay: 0.05s;
    animation-delay: 0.05s;
  }

  li:nth-child(2) a {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp;
    -webkit-animation-duration: 0.6s;
    animation-duration: 0.6s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-delay: 0.1s;
    -o-animation-delay: 0.1s;
    animation-delay: 0.1s;
  }

  li:nth-child(3) a {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp;
    -webkit-animation-duration: 0.6s;
    animation-duration: 0.6s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-delay: 0.15s;
    -o-animation-delay: 0.15s;
    animation-delay: 0.15s;
  }

  li:nth-child(4) a {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp;
    -webkit-animation-duration: 0.6s;
    animation-duration: 0.6s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-delay: 0.2s;
    -o-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
}

</style>
