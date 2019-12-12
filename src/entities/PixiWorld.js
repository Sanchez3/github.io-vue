import * as PIXI from 'pixi.js';
window.PIXI = PIXI;
require("pixi-layers")
import { GlitchFilter } from '@pixi/filter-glitch';
// import PixelStretchFilter from '../filters/PixelStretchFilter.js'
import * as dat from 'dat.gui';
import { gsap } from "gsap";
import Tendril from './Tendrils.js'
class PixiWorld {
    constructor() {
        if (!String.prototype.padStart) {
            String.prototype.padStart = function padStart(targetLength, padString) {
                targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
                padString = String((typeof padString !== 'undefined' ? padString : ' '));
                if (this.length > targetLength) {
                    return String(this);
                } else {
                    targetLength = targetLength - this.length;
                    if (targetLength > padString.length) {
                        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
                    }
                    return padString.slice(0, targetLength) + String(this);
                }
            };
        }

        this.init()
    }
    initSprite(res, no) {
        var layer = new PIXI.display.Layer();
        var _res = res;
        var _no = no;
        var sprite;
        var anim = false;
        console.log(_res)
        if ((_res[_no].data).hasOwnProperty('frames')) anim = true;
        if (anim) {
            var frames = _res[_no].data.frames;
            var meta = _res[_no].data.meta;
            var textures = [];
            var count = 0;
            for (var f in frames) {
                var texture = PIXI.Texture.from(f)
                textures.push(texture);
                count++;
                this.picT = texture;
            }
            sprite = new PIXI.AnimatedSprite(textures);
            sprite.animationSpeed = count / 60 / 2;
            sprite.loop = true;
            sprite.scale.set(1);
            sprite.anchor.set(0.5);
            sprite.canplay = true;
            sprite.parentLayer = layer;
            if (_no == '07') {
                var spriteb = new PIXI.Sprite(_res['p7'].texture)
                spriteb.anchor.set(0.5);
                spriteb.parentLayer = layer;
                sprite.addChild(spriteb);
                sprite.zOrder = 1;
                spriteb.zOrder = 2;
            }
            // sprite.play()
        } else {
            sprite = new PIXI.Sprite(_res[_no].texture);
            sprite.anchor.set(0.5);
            sprite.scale.set(1);
            sprite.canplay = false;
        }
        sprite.alpha = 0;


        return sprite
    }

    init() {
        var that = this;
        var iWidth = window.innerWidth;
        var iHeight = window.innerHeight;
        var app = new PIXI.Application({
            width: iWidth,
            height: iHeight,
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

        app.loader.add('00', `./img/details/00.png`)
        app.loader.add('01', './img/details/01.json')
        app.loader.add('02', './img/details/02.json')
        app.loader.add('03', './img/details/03.png')
        app.loader.add('04', './img/details/04.json')
        app.loader.add('05', './img/details/05.json')
        app.loader.add('06', './img/details/06.json')
        app.loader.add('07', './img/details/07.json')
        app.loader.add('p7', './img/details/p7.png')
        app.loader.add('08', './img/details/08.json')

        app.loader.add('09', './img/details/09.json')
        app.loader.add('10', './img/details/10.json')
        for (var i = 0; i < 11; i++) {
            i = i < 10 ? '0' + i : i;
            app.loader.add('v' + i, `./img/details/v${i}.json`)
        }

        app.loader.load(onLoaded.bind(this))

        function onLoaded(loader, resources) {
            var glitchfilter = new GlitchFilter({ slices: 1, offset: 0, direction: 90, fillMode: 0, seed: 0.5, red: [0, 0], blue: [0, 0] })
            // this.pjs.filters = [glitchfilter]
            var pjNo = 0;
            this.pjs = new PIXI.Container();
            this.pjs.width = app.screen.width * 2;
            this.pjs.height = app.screen.height * 2;
            app.stage.addChild(this.pjs)
            for (let i = 0; i < 11; i++) {
                let no = i < 10 ? '0' + i : i;
                this.pic = this.initSprite(resources, no);
                this.pic.x = app.screen.width / 2;
                this.pic.y = app.screen.height / 2;

                this.pjs.addChild(this.pic)

            }
            this.pjs.getChildAt(0).alpha = 1;
            app.stage.filters = [glitchfilter]

            // this.picT = resources.pic1.texture;
            app.stage.interactive = true;
            app.stage.on('pointerdown', function() {
                // console.log(tendril.dots)
            })

            glitchfilter.animating = false;
            console.log(glitchfilter)
            var gui = new dat.GUI({ autoPlace: false });
            document.getElementsByClassName('gui-container')[0].appendChild(gui.domElement);
            gui.add(glitchfilter, 'animating').name('(animating)');
            gui.add(glitchfilter, 'seed', 0, 1).step(0.01);
            gui.add(glitchfilter, 'slices').min(0).max(20).step(1).name('slices').listen();
            gui.add(glitchfilter, 'offset', -400, 1000).listen();;
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

            var vDelta = 0;
            var graphics = new PIXI.Graphics();
            // graphics.lineColor

            app.stage.addChild(graphics);

            var tendril = new Tendril({ spring: 0.5 })
            tendril.target = { x: Math.random() * app.screen.width, y: Math.random() * app.screen.height }
            var _pjNo = pjNo < 10 ? '0' + pjNo : pjNo;
            console.log(('' + pjNo).padStart(2, '0'))
            // var vertices = resources[`v${(''+pjNo).padStart(2,'0')}`].data[`${(''+pjNo).padStart(2,'0')}`].vertices;
            // var verticesL = vertices.length;

            function ttoV(t) {
                var vertices = resources[`v${(''+pjNo).padStart(2,'0')}`].data[`${(''+pjNo).padStart(2,'0')}`].vertices;
                var verticesL = vertices.length;
                if (vDelta >= verticesL) vDelta = 0;
                if (vDelta % 1 === 0) {

                    t.x = vertices[vDelta].x + this.pjs.getChildAt(pjNo).x;
                    t.y = vertices[vDelta].y + this.pjs.getChildAt(pjNo).y;
                    // console.log(t.x, t.y)
                }


                vDelta += 0.5;
            }

            var pressing = false;
            var startTime;
            this.pic.interactive = true;
            this.pic.on('pointerdown', function() {
                glitchfilter.animating = true;
                pressing = true;
                startTime = Date.now();
                // tendril.target = { x: Math.random() * app.screen.width, y: Math.random() * app.screen.height }
            }, this)
            var _sliceDelta = 0;
            this.pic.on('pointerup', function() {
                glitchfilter.animating = false;
                pressing = false
                gsap.set(glitchfilter, { red: [0, 0], green: [0, 0], blue: [0, 0] })
                gsap.to(glitchfilter, 0.2, {
                    offset: 0,
                    onComplete: function() {
                        glitchfilter.slices = 0;
                        _sliceDelta = 0;
                        // console.log(glitchfilter.green)
                    }
                })
            }, this)
            this.pic.on('pointerover', function() {
                if (this.pjs.getChildAt(pjNo).canplay)
                    this.pjs.getChildAt(pjNo).play();
            }, this)
            this.pic.on('pointerout', function() {
                if (this.pjs.getChildAt(pjNo).canplay)
                    this.pjs.getChildAt(pjNo).stop();
            }, this)
            var elapsed = 0;

            this.events.on('animate', function() {
                // glitchfilter.animating && (glitchfilter.seed = Math.random())
                if (glitchfilter.animating) {
                    this.events.emit('glitch');
                    // glitchfilter.offset += Math.random() * 50;
                    // glitchfilter.slices++;
                    glitchfilter.red = [Math.random() * 5 - 10, Math.random() * 5 - 10]
                    glitchfilter.green = [Math.random() * 5 - 10, Math.random() * 5 - 10]
                    glitchfilter.blue = [Math.random() * 5 - 10, Math.random() * 5 - 10]
                    ttoV.bind(this, tendril.target)()
                    elapsed = Date.now() - startTime;
                    if (elapsed > 2000) {
                        startTime = Date.now();
                        this.events.emit('change');
                    }
                }

                tendril.update();
                tendril.draw(graphics);
            }, this)
            // window.addEventListener('resize', this.handleResize.bind(this))
            // this.handleResize();
            this.animateTimer = 0;
            app.ticker.add(this.animate, this);
            var mouseX = null,
                mouseY = null;
            var windowHalfX = iWidth / 2;
            var windowHalfY = iHeight / 2;
            app.stage.interactive = true;
            app.stage
                .on('mousemove', onPointerMove)
            // document.addEventListener('mousemove', onDocumentMouseMove, false);
            function onPointerMove(event) {
                var ex = event.data.global.x
                var ey = event.data.global.y
                if (!pressing) {
                    tendril.target.x = ex;
                    tendril.target.y = ey;
                }
                // console.log(ex, ey)
                if (ex > 0.55 * iWidth) ex = 0.55 * iWidth;
                if (ex < 0.45 * iWidth) ex = 0.45 * iWidth;
                if (ey > 0.55 * iHeight) ey = 0.55 * iHeight;
                if (ey < 0.45 * iHeight) ey = 0.45 * iHeight;
                mouseX = ex;
                mouseY = ey - iHeight;
            }
            this.events.on('parallax', function() {
                if (mouseY === null || mouseX === null) return
                this.pjs.getChildAt(pjNo).x += (mouseX - this.pjs.getChildAt(pjNo).x) * 0.008;
                this.pjs.getChildAt(pjNo).y += (-mouseY - this.pjs.getChildAt(pjNo).y) * 0.008;
            }, this);

            this.events.on('glitch', function() {
                if (glitchfilter.offset < app.screen.height / 2)
                    glitchfilter.offset += Math.random() * 10;
                if (_sliceDelta < 50) {
                    _sliceDelta += 0.5;
                }
                glitchfilter.seed = Math.random()

                console.log(_sliceDelta)
                glitchfilter.slices = Math.floor(_sliceDelta);
                // if (_sliceDelta % 1 === 0){
                //     console.log(_sliceDelta)
                //     glitchfilter.slices = (_sliceDelta % 1);
                // }
            }, this)
            function renderPj(pjNo){

            }

            this.events.on('change', function() {
                var t0=gsap.to(this.pjs.getChildAt(pjNo), 0.3, { alpha: 0, paused: false })
                // .alpha = 0;
                if (this.pjs.getChildAt(pjNo).canplay)
                    this.pjs.getChildAt(pjNo).stop();
                pjNo++;
                pjNo = pjNo > 10 ? 0 : pjNo;
                var pjNo_n=pjNo;
                var t1=gsap.to(this.pjs.getChildAt(pjNo_n), 0.3, { alpha: 1, paused: false })
                // this.pjs.getChildAt(pjNo).alpha = 1;
                if (this.pjs.getChildAt(pjNo).canplay) this.pjs.getChildAt(pjNo).play();



            }, this)
            // this.events.emit('change');
        }
    }
    animate(t) {
        this.animateTimer += t;
        var n = this.animateTimer;
        this.events.emit('animate', t, n);

        this.events.emit('parallax');

    }
    handleResize() {
        var w = window.innerWidth;
        var h = window.innerHeight;
        var pic = this.pic;
        var scale0 = 0.9
        var tw = this.picT.width;
        var th = this.picT.height;
        var s = tw / th;
        // console.log(s)
        if (s > w / h) {
            if (w > tw) {
                pic.scale.set(w / tw * scale0)
            } else {
                pic.scale.set(tw / w * scale0)

            }
        } else {
            if (h > th) {
                pic.scale.set(h / th * scale0)
            } else {
                pic.scale.set(th / h * scale0)

            }
        }
        this.app.renderer.resize(w, h);
    }

}
export default PixiWorld;