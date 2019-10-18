import * as PIXI from 'pixi.js'
import PixelStretchFilter from '../filters/PixelStretchFilter.js'
import * as dat from 'dat.gui';

class PixiWorld {
    constructor() {
        this.init()
    }
    init() {
        var app = new PIXI.Application({
            width: window.innerWidth,
            height: window.innerHeight,
            resolution: window.devicePixelRatio,
            antialias: true,
            preserveDrawingBuffer: true,
        });
        this.app = app;
        document.body.appendChild(app.view);
        // PIXI.utils.clearTextureCache;
        app.loader.add('pic1', `./assets/img/pic${Math.floor(Math.random()*5+1)}.jpg`)
        app.loader.load(onLoaded.bind(this))

        function onLoaded(loader, resources) {
            this.pic = new PIXI.Sprite(resources.pic1.texture)
            app.stage.addChild(this.pic)
            this.picT = resources.pic1.texture;
            // uniform float boundary;
            // uniform float verticalDir;
            var stretchfilter = new PixelStretchFilter(0, false)
            app.stage.filters = [stretchfilter]

            var gui = new dat.GUI();
            gui.add(stretchfilter, 'boundary').min(-1).max(1).step(0.01);
            gui.add(stretchfilter, 'verticalDir').name('verticalDir');

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
        var s = tw / th;
        // console.log(s)
        if (s > w / h) {
            if (w > tw) {
                pic.scale.set(tw / w / window.devicePixelRatio)
            } else {
                pic.scale.set(w / tw / window.devicePixelRatio)
            }
        } else {
            if (h > th) {
                pic.scale.set(th / h / window.devicePixelRatio)
            } else {
                pic.scale.set(h / th / window.devicePixelRatio)
            }
        }
        this.app.renderer.resize(w, h);

    }

}
export default PixelStretch;