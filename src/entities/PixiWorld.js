import * as PIXI from 'pixi.js'
import { GlitchFilter } from '@pixi/filter-glitch';
// import PixelStretchFilter from '../filters/PixelStretchFilter.js'
import * as dat from 'dat.gui';

class PixiWorld {
    constructor() {
        this.init()
    }
    init() {
        var app = new PIXI.Application({
            width: window.innerWidth,
            height: window.innerHeight,
            autoDensity: true,
            resolution: window.devicePixelRatio || 1,
            antialias: true,
            preserveDrawingBuffer: true,
        });
        this.app = app;
        document.getElementsByClassName('hello')[0].appendChild(app.view);
        // document.body.appendChild(app.view);
        // PIXI.utils.clearTextureCache;
        app.loader.add('pic1', `./img/thumbs/0${Math.floor(Math.random()*9)}.jpg`)
        app.loader.load(onLoaded.bind(this))

        function onLoaded(loader, resources) {
            // console.log('pic')
            this.pic = new PIXI.Sprite(resources.pic1.texture)
            this.pic.anchor.set(0.5);
            this.pic.scale.set(2)
            this.pic.x = app.screen.width / 2;
            this.pic.y = app.screen.height / 2;
            app.stage.addChild(this.pic)
            this.picT = resources.pic1.texture;
            // uniform float boundary;
            // uniform float verticalDir;
            var glitchfilter = new GlitchFilter()
            app.stage.filters = [glitchfilter]

            var gui = new dat.GUI();
            // gui.add(glitchfilter, 'boundary').min(-1).max(1).step(0.01);
            // gui.add(glitchfilter, 'verticalDir').name('verticalDir');

            window.addEventListener('resize', this.handleResize.bind(this))
            this.handleResize();

            // var count = 0;
            // app.ticker.add(function() {
            // count += 0.01;
            // stretchfilter.boundary = Math.abs(Math.sin(count))
            // })
        }

    }
    handleResize() {
        var w = window.innerWidth;
        var h = window.innerHeight;
        var pic = this.pic;
        var tw = this.picT.width;
        var th = this.picT.height;
        console.log(window.devicePixelRatio)
        var s = tw / th;
        // console.log(s)
        if (s > w / h) {
            if (w > tw) {
                pic.scale.set(w / tw)
            } else {
                pic.scale.set(tw / w)

            }
        } else {
            if (h > th) {
                pic.scale.set(h / th)
            } else {
                pic.scale.set(th / h)

            }
        }
        this.app.renderer.resize(w, h);
    }

}
export default PixiWorld;