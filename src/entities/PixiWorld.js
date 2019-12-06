import * as PIXI from 'pixi.js'
import { GlitchFilter } from '@pixi/filter-glitch';
// import PixelStretchFilter from '../filters/PixelStretchFilter.js'
import * as dat from 'dat.gui';
import { gsap } from "gsap";
// import Tendril from './Tendrils.js'
var ctx,
    hue,
    buffer,
    target = { x: 0, y: 0 },
    tendrils = [],
    settings = {};
settings.debug = false;
settings.friction = 0.5;
settings.trails = 10;
settings.size = 30;
settings.dampening = 0.25;
settings.tension = 0.98;

function Tendril(options) {
    this.init(options || {});
}
Tendril.prototype = (function() {
    function Dot() {
        this.x = 0;
        this.y = 0;
        this.vy = 0;
        this.vx = 0;
    }

    return {

        init: function(options) {

            this.spring = options.spring + (Math.random() * 0.1) - 0.05;
            this.friction = settings.friction + (Math.random() * 0.01) - 0.005;
            this.dots = [];

            for (var i = 0, dot; i < settings.size; i++) {

                dot = new Dot();
                dot.x = target.x;
                dot.y = target.y;
                // console.log(dot)
                this.dots.push(dot);
            }

        },

        update: function() {

            var spring = this.spring,
                dot = this.dots[0];

            dot.vx += (target.x - dot.x) * spring;
            dot.vy += (target.y - dot.y) * spring;

            for (var prev, i = 0, n = this.dots.length; i < n; i++) {

                dot = this.dots[i];

                if (i > 0) {

                    prev = this.dots[i - 1];

                    dot.vx += (prev.x - dot.x) * spring;
                    dot.vy += (prev.y - dot.y) * spring;
                    dot.vx += prev.vx * settings.dampening;
                    dot.vy += prev.vy * settings.dampening;
                }

                dot.vx *= this.friction;
                dot.vy *= this.friction;
                dot.x += dot.vx;
                dot.y += dot.vy;

                spring *= settings.tension;
            }
        },

        draw: function(ctx) {

            var x = this.dots[0].x,
                y = this.dots[0].y,
                a, b;
            ctx.clear();
            ctx.lineStyle(2, 0xffffff, 1);
            // ctx.beginPath();
            ctx.moveTo(x, y);

            for (var i = 1, n = this.dots.length - 2; i < n; i++) {

                a = this.dots[i];
                b = this.dots[i + 1];
                x = (a.x + b.x) * 0.5;
                y = (a.y + b.y) * 0.5;

                ctx.quadraticCurveTo(a.x, a.y, x, y);
            }

            a = this.dots[i];
            b = this.dots[i + 1];

            ctx.quadraticCurveTo(a.x, a.y, b.x, b.y);
            // ctx.stroke();
            // ctx.closePath();
        }
    };
})();
class PixiWorld {
    constructor() {
        this.init()
    }
    initSprite(r) {
        var _resource = r;
        var sprite;
        var anim = false;
        console.log(_resource)
        if ((_resource.data).hasOwnProperty('frames')) anim = true;
        if (anim) {
            var frames = _resource.data.frames;
            var meta = _resource.data.meta;
            var textures = [];
            console.log(frames)
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
            sprite.play()
        } else {
            sprite = new PIXI.Sprite(_resource.texture);
            sprite.anchor.set(0.5);
            sprite.scale.set(1);
        }


        return sprite
    }

    init() {
        var that = this;
        var iWidth = window.innerWidth;
        var iHeight = window.innerHeight;
        console.log(this.animating)
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
        app.loader.add('08', './img/details/08.json')
        app.loader.add('09', './img/details/09.json')
        app.loader.add('10', './img/details/10.json')
        app.loader.load(onLoaded.bind(this))

        function onLoaded(loader, resources) {

            this.pic = this.initSprite(resources[`01`]);
            this.pic.x = app.screen.width / 2;
            this.pic.y = app.screen.height / 2;
            app.stage.addChild(this.pic)
            // this.picT = resources.pic1.texture;
            app.stage.interactive = true;
            app.stage.on('pointerdown', function() {
                // console.log(tendril.dots)
            })
            var glitchfilter = new GlitchFilter({ slices: 0, offset: 0, direction: 90, fillMode: 0, seed: 0.5, red: [0, 0], blue: [0, 0] })
            this.pic.filters = [glitchfilter]
            glitchfilter.animating = false;

            var gui = new dat.GUI({ autoPlace: false });
            document.getElementsByClassName('gui-container')[0].appendChild(gui.domElement);
            gui.add(glitchfilter, 'animating').name('(animating)');
            gui.add(glitchfilter, 'seed', 0, 1).step(0.01);
            gui.add(glitchfilter, 'slices').min(0).max(20).step(1).name('slices');
            gui.add(glitchfilter, 'offset', -400, 1000);
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

            var delta = 0;
            var radius = 0;
            var cds = [];
            var cdslength = 103;
            var graphics2 = new PIXI.Graphics();
            app.stage.addChild(graphics2);
            target = { x: Math.random() * app.screen.width, y: Math.random() * app.screen.height }
            var tendril = new Tendril({ spring: 0.5 })

            var graphics = new PIXI.Graphics();
            graphics.x = app.screen.width / 2;
            graphics.y = app.screen.height / 2

            app.stage.addChild(graphics);
            for (var i = 0; i < cdslength; i++) {
                cds.push({ x: 0, y: 0 });
            }
            // TweenMax
            function getRad(degree) {
                return degree / 180 * Math.PI;
            }
            // var zb = { i: 0 };
            // var a, b;
            // var spiralTl = gsap.timeline({
            //     repeat: 2,
            //     yoyo: true,
            //     onUpdate: function() {
            //         // drawSpiral()

            //         graphics.clear();
            //         graphics.lineStyle(6, 0x29ABE2);
            //         graphics.arc(0, 0, 45, getRad(270), getRad(360 * zb.i / 100 + 270), false);
            //         graphics.endFill();
            //         // for (let i = 0; i < cdslength; i++) {
            //         //     let _x = radius * Math.cos(getRad(delta));
            //         //     let _y = radius * Math.sin(getRad(delta));
            //         //     cds[i] = { x: _x, y: _y };
            //         //     delta = zb.i * 10;
            //         //     radius = zb.i;
            //         // }
            //         // graphics.lineStyle(2, 0xffffff, 1);
            //         // // graphics.moveTo(0, 0);
            //         // for (let i = 1, n = cdslength - 2; i < n; i++) {
            //         //     a = cds[i];
            //         //     b = cds[i + 1];
            //         //     var x = (a.x + b.x) * 0.5;
            //         //     var y = (a.y + b.y) * 0.5;
            //         //     graphics.quadraticCurveTo(a.x, a.y, x, y);
            //         // }
            //         // a = cds[cdslength - 2];
            //         // b = cds[cdslength - 1];
            //         // graphics.quadraticCurveTo(a.x, a.y, b.x, b.y);


            //     }
            // });
            // spiralTl.to(zb, {
            //     i: 80,
            //     duration: 5
            // })

            var pressing = false;
            this.pic.interactive = true;
            this.pic.on('pointerdown', function() {
                glitchfilter.animating = true;
                pressing = true;
                target = { x: Math.random() * app.screen.width, y: Math.random() * app.screen.height }


            }, this)
            this.pic.on('pointerup', function() {
                glitchfilter.animating = false;
                pressing = false
                // TweenMax.set(glitchfilter, { red: [0, 0], green: [0, 0], blue: [0, 0] })
                // TweenMax.to(glitchfilter, 0.5, {
                //     offset: 0,
                //     slices: 0,
                //     onUpdate: function() {
                //         // console.log(glitchfilter.green)
                //     }
                // })
            })
            this.pic.on('mouseover', function() {
                this.pic.play()
            }, this)
            this.pic.on('mouseout', function() {
                this.pic.stop()
            }, this)

            this.events.on('animate', function() {
                // glitchfilter.animating && (glitchfilter.seed = Math.random())
                if (glitchfilter.animating) {
                    glitchfilter.offset = Math.random() * 50 - 50;
                    glitchfilter.slices = Math.random() * 10
                    glitchfilter.red = [Math.random() * 5 - 10, Math.random() * 5 - 10]
                    glitchfilter.green = [Math.random() * 5 - 10, Math.random() * 5 - 10]
                    glitchfilter.blue = [Math.random() * 5 - 10, Math.random() * 5 - 10]
                }
                // if (pressing) {
                tendril.update();
                tendril.draw(graphics2);
                // }
            })
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
                    target.x = ex;
                    target.y = ey;
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
                this.pic.x += (mouseX - this.pic.x) * 0.008;
                this.pic.y += (-mouseY - this.pic.y) * 0.008;
            }, this);
        }
    }
    animate(t) {
        this.animateTimer += t;
        var n = this.animateTimer;
        this.events.emit('animate', t, n);
        // this.events.emit('pressing');
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