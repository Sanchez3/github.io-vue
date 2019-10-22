<template>
    <div id="app" class="overflow">
      <div id="nav-about">
        <router-link to="/about">
            <loader></loader>
        </router-link>
      </div>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/menu">Menu</router-link>
        </div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<script>
import Loader from './components/Loader'
export default {
    name: 'App',
    components: {
        Loader
    }
}
</script>
<style>
#app {
    font-family: "Helvetica Neue", Helvetica, "Hiragino Sans GB", "STHeitiSC-Light", "Microsoft YaHei", "微软雅黑", "PingFang SC", "Heiti SC", "WenQuanYi Micro Hei", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

* {
    margin: 0;
    padding: 0;
    background: #1D1E19
}

html,
body {
    width: 100%;
    height: 100%;
    background: #1D1E19
}

.overflow {
  overflow: hidden;
}

#nav {
    position: absolute;
    top: 0;
    right: 0;
    padding: 15px;
    z-index: 1001;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
#nav-about{
  position: absolute;
  top: 0;
  left:0;
  width: 100%;
  height: 100%;
  /*background: #fff;*/
}
</style>