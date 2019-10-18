<template>
    <div id="app">
        <div id="nav">
            <loader></loader>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
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
}

html,
body {
    width: 100%;
    height: 100%;
}

#nav {
    position: absolute;
    top: 0;
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
</style>