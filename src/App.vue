<template>
    <div id="app" class="overflow">
        <div id="logo-container">
            <router-link to="/about">
                <Logo0></Logo0>
            </router-link>
        </div>
        <router-link to="/">
            <div id="close-btn" v-on:click="doNoise">
                <div class="line-container">
                    <div class="cb-line line0"></div>
                </div>
                <div class="line-container">
                    <div class="cb-line line1"></div>
                </div>
            </div>
        </router-link>
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
import Logo0 from './components/Logo0'
// import { TweenMax } from 'gsap'
// import TimelineMax from 'gsap/TimelineMax'
export default {
    name: 'App',
    components: {
        Logo0
    },
    data() {
        return {
            lineTl: null,
            nosieTl: null
        }
    },
    mounted() {
        this.$nextTick(function() {
            this.renderClosebtn();
            // this.doClosebtn();
        })
    },
    methods: {
        doHover: function(event) {
            event.target.classList.add('hover')
        },
        disHover: function(event) {
            event.target.classList.remove('hover')
        },
        renderClosebtn: function() {
            var line0 = document.getElementsByClassName('line0')[0];
            var line1 = document.getElementsByClassName('line1')[0];
            // TweenMax.to(line0, 0.3, { width: 0 });
            // TweenMax.set([line0, line1], { scaleX: 0 });
            this.lineTl = new TimelineLite({
                paused: true
            })
            this.lineTl.to(line1, 0.1, { scaleX: 1 })
                .to(line0, 0.1, { scaleX: 1 }, "-=0.1")
                .to(line1, 0.2, { rotation: 45 })
                .to(line0, 0.2, { rotation: -45 }, "-=0.2")
        },
        doNoise: function(d) {
            var event = arguments[0];
            console.log(event)
            if (!event.target.classList.contains('noise-filter'))
                event.target.classList.add('noise-filter')
            d = parseInt(d)
            var turbVal = { val: 0.000001 };
            var turb = document.querySelectorAll('#noise feTurbulence')[0];
            if (this.nosieTl === null) {
                this.nosieTl = new TimelineLite({
                    paused: true,
                    delay: d,
                    onUpdate: function() {
                        turb.setAttribute('baseFrequency', '0 ' + turbVal.val);
                    }
                })
                this.nosieTl.to(turbVal, 0.1, { val: 0.2 })
                    .to(turbVal, 0.1, { val: 0.000001 });
            }
            if (d) {
                this.nosieTl.restart(true);
            } else {
                this.nosieTl.restart();
            }
            this.disClosebtn();
        },
        disClosebtn: function() {
            this.lineTl.reverse();
        },
        doClosebtn: function() {
            this.lineTl.play();
        }
    },
    watch: {
        '$route'(to, from) {
            // 对路由变化作出响应...
            if (to.name === 'about') {
                console.log('cbtn')
                this.doClosebtn();
            }
        }
    }
}
</script>
<style scoped>
#close-btn {
    position: absolute;
    right: 0;
    margin: 0.35rem 1rem;
    top: 0;
    cursor: pointer;
    z-index: 1001;
}

#close-btn.hover .cb-line {
    width: 0.7rem;
    height: 0.1rem;
}

.cb-line {
    width: 0.8rem;
    height: .114rem;
    background: #fff;
    transform-origin: center center;

}

.line-container {
    position: absolute;
    left: 0;
    top: 0;
}

.line0 {
    transform: rotate(0deg) scaleX(0);
}

.line1 {
    transform: rotate(0deg) scaleX(0);
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, .75);
}

#logo-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #1D1E19;
}
</style>
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
}

html,
body {
    width: 100%;
    height: 100%;
    background: #1D1E19;
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



.noise-filter {
    -webkit-filter: url(#noise);
    filter: url(#noise);
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