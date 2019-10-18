import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'animate.css'
import 'font-awesome.css'
import Vivus from 'vivus'
import imagesLoaded from 'imagesloaded'
import { TweenMax, Power2 } from 'gsap'
import Typed from 'typed.js'

Vue.config.productionTip = false

var v = new Vue({
    router,
    store,
    methods: {
        initTitle: function() {
            var OriginTitile = document.title
            var titleTime
            document.addEventListener('visibilitychange', function() {
                if (document.hidden) {
                    document.title = '|!lil!|(lll´+д+)っ消沉中…|!lil!|'
                    clearTimeout(titleTime)
                } else {
                    document.title = 'ꉂ೭(˵¯̴͒ꇴ¯̴͒˵)౨” 再瞅瞅~'
                    titleTime = setTimeout(function() {
                        document.title = OriginTitile
                    }, 2000)
                }
            })
        },
        initLoader: function() {
            var v = { p: 0 }
            var l = new Vivus('logo-icon', {
                onReady: function(myVivus) {
                    myVivus.el.setAttribute('display', 'block')
                },
                type: 'oneByOne',
                duration: 10,
                animTimingFunction: Vivus.EASE
            })
            l.stop().reset()
            var counts = document.getElementsByTagName('img').length
            var t1 = TweenMax.fromTo('.st0', 1, { fill: '#FFF' }, {
                fill: '#000',
                paused: true
            })

            var imgLoad = new imagesLoaded('#app', {
                background: true
            })
            imgLoad.on('always', function(instance) {
                console.log('all images loaded')
            })
            imgLoad.on('progress', function(instance, image) {
                var result = image.isLoaded ? 'loaded' : 'broken'
                console.log('image is ' + result + ' for ' + image.img.src)
                var _p = Math.round(instance.progressedCount / counts * 100)
                TweenMax.to(v, 0.5, {
                    p: _p,
                    onUpdate: function() {
                        if (v.p / 100 < 0.6) {
                            l.setFrameProgress(v.p / 100 / 0.6)
                        } else {
                            l.setFrameProgress(1)
                            t1.progress((v.p - 60) / 100 / 0.4)
                        }
                    }
                })
            })
            imgLoad.on('done', function(instance) {
                console.log('all images successfully loaded')
                t1.progress(1)
                document.getElementById('app').classList.remove('overflow')
                window.scrollTo(0, 0)
                TweenMax.to('#header', 0.5, {
                    height: '3rem',
                    onComplete: function() {
                        document.getElementById('navbar').classList.add('cur')
                        document.getElementById('toggle').classList.add('cur')
                    }
                })
                TweenMax.to(document.getElementById('loader'), 0.5, {
                    height: '2.4rem',
                    margin: 'auto 0.5rem'
                })
            })
            imgLoad.on('fail', function(instance) { console.log('all images loaded, at least one is broken') })
        },
        initType: function() {
            new Typed('.sayhello', {
                strings: ['<h2>Aloha!</h2>'],
                typeSpeed: 30,
                loop: false,
                onComplete: function() {
                    document.getElementsByClassName('typed-cursor')[0].style.display = 'none'
                    new Typed('.saywelcome', {
                        strings: ['<p>Welcome to <b>My Website!<b></p>'],
                        typeSpeed: 50,
                        loop: false,
                        onComplete: function() {
                            document.getElementsByClassName('fa-hand-o-down')[0].style.display = 'block'
                        }
                    })
                }
            })
        }
    },
    render: h => h(App)
})
v.$mount('#app')
v.initLoader()
v.initType()
v.initTitle()