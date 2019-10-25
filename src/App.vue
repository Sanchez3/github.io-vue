<template>
    <div id="app" class="overflow">
        <div id="nav-about">
            <router-link to="/about">
                <Logo></Logo>
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
import Logo from './components/Logo'
export default {
    name: 'App',
    components: {
        Logo
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
    font-size: 0.32rem;
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
    z-index: 1000;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

#nav-about {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /*background: #fff;*/
}

/**
 * view-port list:
320x480
320x568
320x570
360x592
360x598
360x604
360x640
360x720
375x667
375x812
393x699
412x732
414x736
480x854
540x960
640x360
720x1184
720x1280
800x600
1024x768
1080x1812
1080x1920
 */
html {
    font-size: -webkit-calc(13.33333333vw);
    font-size: calc(13.33333333vw);
}

@media screen and (max-width: 320px) {
    html {
        font-size: 42.667px;
        font-size: -webkit-calc(13.33333333vw);
        font-size: calc(13.33333333vw);
    }
}

@media screen and (min-width: 321px) and (max-width: 360px) {
    html {
        font-size: 48px;
        font-size: -webkit-calc(13.33333333vw);
        font-size: calc(13.33333333vw);
    }
}

@media screen and (min-width: 361px) and (max-width: 375px) {
    html {
        font-size: 50px;
        font-size: -webkit-calc(13.33333333vw);
        font-size: calc(13.33333333vw);
    }
}

@media screen and (min-width: 376px) and (max-width: 393px) {
    html {
        font-size: 52.4px;
        font-size: -webkit-calc(13.33333333vw);
        font-size: calc(13.33333333vw);
    }
}

@media screen and (min-width: 394px) and (max-width: 412px) {
    html {
        font-size: 54.93px;
        font-size: -webkit-calc(13.33333333vw);
        font-size: calc(13.33333333vw);
    }
}

@media screen and (min-width: 413px) and (max-width: 414px) {
    html {
        font-size: 55.2px;
        font-size: -webkit-calc(13.33333333vw);
        font-size: calc(13.33333333vw);
    }
}

@media screen and (min-width: 415px) and (max-width: 480px) {
    html {
        font-size: 64px;
        font-size: -webkit-calc(13.33333333vw);
        font-size: calc(13.33333333vw);
    }
}

@media screen and (min-width: 481px) and (max-width: 540px) {
    html {
        font-size: 72px;
        font-size: -webkit-calc(13.33333333vw);
        font-size: calc(13.33333333vw);
    }
}

@media screen and (min-width: 541px) and (max-width: 640px) {
    html {
        font-size: 85.33px;
        font-size: -webkit-calc(13.33333333vw);
        font-size: calc(13.33333333vw);
    }
}

@media screen and (min-width: 641px) and (max-width: 720px) {
    html {
        font-size: 96px;
        font-size: -webkit-calc(13.33333333vw);
        font-size: calc(13.33333333vw);
    }
}

@media screen and (min-width: 721px) and (max-width: 768px) {
    html {
        font-size: 102.4px;
        font-size: -webkit-calc(13.33333333vw);
        font-size: calc(13.33333333vw);
    }
}

@media screen and (min-width: 769px) {
    html {
        font-size: 102.4px;
        font-size: -webkit-calc(13.33333333vw);
        font-size: calc(13.33333333vw);
    }
}
</style>