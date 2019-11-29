<template>
    <div id='logo' v-on:click="doNoise">
        <svg x="0" y="0" viewBox="0 0 250 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <filter id='noise' x='0%' y='0%' width='100%' height='100%'>
                    <feTurbulence type="fractalNoise" baseFrequency="0 0.000001" result="NOISE" numOctaves="2" />
                    <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="30" xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
                </filter>
                <g>
                    <path id="sa0" d="M242,43.56V35h-9.36v-14H219.84V35H199.42V59.4q0,7.13-2.34,10.22t-7.56,3.11q-4.59,0-6.39-2.84c-1.2-1.89-1.8-4.75-1.8-8.6V35H168.55V63.63a37.5,37.5,0,0,0,.76,7.88,15,15,0,0,0,2.66,6,12.12,12.12,0,0,0,5.17,3.82,22.18,22.18,0,0,0,8.42,1.35,18.73,18.73,0,0,0,7.92-1.79,14.34,14.34,0,0,0,6.3-5.86h.27v6.48H212.2v-38h7.64V71A11.92,11.92,0,0,0,221,76.69,8.39,8.39,0,0,0,224.2,80a13.26,13.26,0,0,0,4.68,1.57,37.36,37.36,0,0,0,5.63.41c1.26,0,2.55,0,3.87-.1a28.44,28.44,0,0,0,3.6-.36V71.65a17.9,17.9,0,0,1-1.89.27c-.66.06-1.35.08-2.07.08-2.16,0-3.6-.35-4.32-1.08s-1.08-2.15-1.08-4.32v-23Z" />
                    <path id="sa1" d="M160.2,40.46a21.62,21.62,0,0,0-7.61-5,26.86,26.86,0,0,0-9.94-1.76,26.58,26.58,0,0,0-9.9,1.76A21.28,21.28,0,0,0,120.33,48.2,28,28,0,0,0,118.67,57,30.73,30.73,0,0,0,117,47.21a22.58,22.58,0,0,0-4.46-7.61,17.72,17.72,0,0,0-13.09-5.85,21.51,21.51,0,0,0-8.33,1.67,13.63,13.63,0,0,0-6.34,5.27h-.18V17.29H71.83V81.54H84V75.6h.18a11.57,11.57,0,0,0,6.12,5.49,24.55,24.55,0,0,0,9.18,1.62,17.72,17.72,0,0,0,13.09-5.85,22.53,22.53,0,0,0,4.46-7.6,30.8,30.8,0,0,0,1.66-9.66,27.43,27.43,0,0,0,1.66,8.8,21.8,21.8,0,0,0,4.86,7.7,21.11,21.11,0,0,0,7.56,4.9,27.2,27.2,0,0,0,9.9,1.71A27.49,27.49,0,0,0,152.59,81a21,21,0,0,0,7.61-4.9,21.8,21.8,0,0,0,4.86-7.7,28.12,28.12,0,0,0,1.71-10.08,28.57,28.57,0,0,0-1.71-10.12A21.79,21.79,0,0,0,160.2,40.46ZM105.31,63.9a14.63,14.63,0,0,1-2,4.77A10.3,10.3,0,0,1,100,72a10.45,10.45,0,0,1-9.76,0,10.14,10.14,0,0,1-3.42-3.29,14.63,14.63,0,0,1-2-4.77,24.41,24.41,0,0,1-.63-5.58,25,25,0,0,1,.63-5.67,14.91,14.91,0,0,1,2-4.77,10.3,10.3,0,0,1,3.42-3.28,10.37,10.37,0,0,1,9.76,0,10.47,10.47,0,0,1,3.38,3.28,14.91,14.91,0,0,1,2,4.77,25,25,0,0,1,.63,5.67A24.41,24.41,0,0,1,105.31,63.9Zm48.14-.13a14.72,14.72,0,0,1-1.84,4.77,9.84,9.84,0,0,1-3.52,3.38,10.81,10.81,0,0,1-5.44,1.25,10.58,10.58,0,0,1-5.4-1.25,9.74,9.74,0,0,1-3.46-3.38,14.51,14.51,0,0,1-1.85-4.77,27.23,27.23,0,0,1-.54-5.45,28,28,0,0,1,.54-5.49,14.18,14.18,0,0,1,1.85-4.77,9.84,9.84,0,0,1,8.86-4.68,10,10,0,0,1,9,4.68,14.38,14.38,0,0,1,1.84,4.77,28,28,0,0,1,.54,5.49A27.23,27.23,0,0,1,153.45,63.77Z" />
                    <path id="sa2" d="M32.32,17.29,8,81.54H22.24l5-14.31h24l4.86,14.31H70.84l-24-64.25ZM31,56.71l8.37-23.59h.18l8.1,23.59Z" />
                </g>
                <g style="fill:#F7F7EF">
                    <path id="sl0" d="M135,2V98H39V86h84V2" />
                    <path id="sl1" d="M93,56V12h12V68H49V56Z" />
                    <path id="sl2" d="M63,26V2H75V38H39V26Z" />
                </g>
            </defs>
            <g style="fill:#F7F7EF;line-height: 1.5;">
                <path id="sn0" d="M135,2V98H39V86h84V2" />
                <path id="sn1" d="M93,56V12h12V68H49V56Z" />
                <path id="sn2" d="M63,26V2H75V38H39V26Z" />
            </g>
        </svg>
    </div>
</template>
<script>
import TimelineLite from 'gsap/TimelineLite'
var kute = require("kute.js"); //grab the core
require("kute.js/kute-svg"); // Add SVG Plugin
export default {
    name: 'logo',
    data() {
        return {
            nosieTl: null
        }
    },
    methods: {
        resetSVG: function(d) {
            d = parseInt(d)
            for (let i = 0; i < 3; i++) {
                var tween0 = kute.fromTo(`#sn${i}`, { path: `#sa${i}` }, { path: `#sl${i}` }, { duration: 200, delay: (3 - i) * 20 + d }).start();
            }
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
        },
        initSVG: function(d) {
            d = parseInt(d)
            for (let i = 0; i < 3; i++) {
                var tween0 = kute.fromTo(`#sn${i}`, { path: `#sl${i}` }, { path: `#sa${i}` }, { duration: 200, delay: (3 - i) * 20 + d }).start();
            }
        }
    },
    watch: {
        '$route'(to, from) {
            // 对路由变化作出响应...
            console.log(to, from)
            if (to.name === 'home' && from.name === 'about') {
                this.resetSVG(200);
            }
            if (to.name === 'about') {
                this.initSVG(200);
            }
        }

    },
}
</script>
<style>
</style>
<style scoped>
#logo {
    position: absolute;
    width: 2.06rem;
    height: 0.94rem;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 1001;

}

svg {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: visible;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
}

.icon-logo {
    position: absolute;
    z-index: auto;
    height: 100%;
    width: 5rem;
    margin: auto;
    left: 0;
    /*right: 0;*/
    top: 0;
    bottom: 0;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    text-align: center;
}

.logo>span {
    display: inline-block;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: 50%;
    -moz-transform-origin: 50%;
    -ms-transform-origin: 50%;
    -o-transform-origin: 50%;
    transform-origin: 50%;
}

.icon-logo svg {
    position: absolute;
    height: auto;
    width: 100%;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}

@media screen and (max-width: 500px) {
    .loading {
        left: 0;
        right: 0;
        margin: auto;
    }
}
</style>