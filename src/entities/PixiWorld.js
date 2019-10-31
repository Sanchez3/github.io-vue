import * as PIXI from 'pixi.js'
import { GlitchFilter } from '@pixi/filter-glitch';
// import PixelStretchFilter from '../filters/PixelStretchFilter.js'
import * as dat from 'dat.gui';

class PixiWorld {
    constructor() {
        this.init()
    }
    init() {
        var that = this;
        console.log(this.animating)
        var app = new PIXI.Application({
            width: window.innerWidth,
            height: window.innerHeight,
            autoDensity: true,
            resolution: window.devicePixelRatio || 1,
            antialias: true,
            preserveDrawingBuffer: true,
        });
        this.app = app;
        this.events = new PIXI.utils.EventEmitter();
        document.getElementsByClassName('canvas-element')[0].appendChild(app.view);
        // document.body.appendChild(app.view);
        // PIXI.utils.clearTextureCache;
        app.loader.add('pic1', `./img/thumbs/0${Math.floor(Math.random()*9)}.jpg`)
        app.loader.load(onLoaded.bind(this))

        function onLoaded(loader, resources) {
            // console.log('pic')
            this.pic = new PIXI.Sprite(resources.pic1.texture)
            // this.pic.anchor.set(0.5);
            this.pic.scale.set(0.5)
            this.pic.x = 0;
            this.pic.y = 0;
            app.stage.addChild(this.pic)
            this.picT = resources.pic1.texture;
            // uniform float boundary;
            // uniform float verticalDir;
            var glitchfilter = new GlitchFilter({ fillMode: 3, seed: 0.5, red: [1, 2], blue: [2, 1] })
            app.stage.filters = [glitchfilter]
            glitchfilter.animating = false;
            this.events.on('animate', function() {
                glitchfilter.animating && (glitchfilter.seed = Math.random())
            })

            var gui = new dat.GUI({ autoPlace: false });
            document.getElementsByClassName('gui-container')[0].appendChild(gui.domElement);
            gui.add(glitchfilter, 'animating').name('(animating)');
            gui.add(glitchfilter, 'seed', 0, 1).step(0.01);
            gui.add(glitchfilter, 'slices').min(0).max(20).step(1).name('slices');
            gui.add(glitchfilter, 'offset', -400, 400);
            gui.add(glitchfilter, "direction", -180, 180);
            gui.add(glitchfilter, "fillMode", {
                TRANSPARENT: 0,
                ORIGINAL: 1,
                LOOP: 2,
                CLAMP: 3,
                MIRROR: 4
            });
            gui.add(glitchfilter.red, '0', -50, 50).name("red.x");
            gui.add(glitchfilter.red, "1", -50, 50).name("red.y");
            gui.add(glitchfilter.blue, "0", -50, 50).name("blue.x");
            gui.add(glitchfilter.blue, "1", -50, 50).name("blue.y");
            gui.add(glitchfilter.green, "0", -50, 50).name("green.x");
            gui.add(glitchfilter.green, "1", -50, 50).name("green.y");


            window.addEventListener('resize', this.handleResize.bind(this))
            this.handleResize();
            this.animateTimer = 0;
            app.ticker.add(this.animate, this);

            var mouseX = 0,
                mouseY = 0;
            var windowHalfX = window.innerWidth / 2;
            var windowHalfY = window.innerHeight / 2;
            document.addEventListener('mousemove', onDocumentMouseMove, false);


            function onDocumentMouseMove(event) {
                mouseX = event.clientX - windowHalfX;
                mouseY = event.clientY - windowHalfY;
            }
            this.events.on('parallax', function() {
                this.pic.x += (mouseX - this.pic.x ) * 0.01;
                this.pic.y += (-mouseY - this.pic.y) * 0.01;
            }, this);
        }
    }
    animate(t) {
        this.animateTimer += t;
        var n = this.animateTimer;
        this.events.emit('animate', t, n);
        this.events.emit('parallax');
        // if(this.animating){

        // }

    }
    handleResize() {
        var w = window.innerWidth;
        var h = window.innerHeight;
        var pic = this.pic;
        var scale0=0.5
        var tw = this.picT.width;
        var th = this.picT.height;
        console.log(window.devicePixelRatio)
        var s = tw / th;
        // console.log(s)
        if (s > w / h) {
            if (w > tw) {
                pic.scale.set(w / tw*scale0)
            } else {
                pic.scale.set(tw / w*scale0)

            }
        } else {
            if (h > th) {
                pic.scale.set(h / th*scale0)
            } else {
                pic.scale.set(th / h*scale0)

            }
        }
        this.app.renderer.resize(w, h);
    }

}
export default PixiWorld;