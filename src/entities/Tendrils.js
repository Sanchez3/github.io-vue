import Color from 'color'
// import * as PIXI from 'pixi.js'
// import { gsap } from "gsap";
// import { PixiPlugin } from "gsap/PixiPlugin";
// gsap.registerPlugin(PixiPlugin)
// PixiPlugin.registerPIXI(PIXI);

class Tendril {
    constructor(options, settings) {
        this.settings = {
            friction: 0.45,
            trails: 10,
            size: 40,
            dampening: 0.25,
            tension: 0.98
        }
        this.target = { x: 0, y: 0 };
        this.hueDelta = 0;
        Object.assign(this.settings, settings);
        // PIXI.Graphics.prototype.updateLineStyle = function(lineWidth, color, alpha) {
        //     var len = this.graphicsData.length;
        //     for (var i = 0; i < len; i++) {
        //         var data = this.graphicsData[i];
        //         data.lineWidth = lineWidth;
        //         data.lineColor = color;
        //         data.alpha = alpha;
        //         this.dirty++;
        //         this.clearDirty++;
        //     }
        // }
        this.init(options);
    }
    init(options) {
        function Dot() {
            this.x = 0;
            this.y = 0;
            this.vy = 0;
            this.vx = 0;
        }
        this.spring = options.spring + (Math.random() * 0.1) - 0.05;
        this.friction = this.settings.friction + (Math.random() * 0.01) - 0.005;
        this.dots = [];
        for (var i = 0, dot; i < this.settings.size; i++) {
            dot = new Dot();
            dot.x = 0;
            dot.y = 0;
            this.dots.push(dot);
        }

    }
    update() {
        var spring = this.spring,
            dot = this.dots[0];

        var target = this.target;
        dot.vx += (target.x - dot.x) * spring;
        dot.vy += (target.y - dot.y) * spring;

        for (var prev, i = 0, n = this.dots.length; i < n; i++) {
            dot = this.dots[i];
            if (i > 0) {
                prev = this.dots[i - 1];
                dot.vx += (prev.x - dot.x) * spring;
                dot.vy += (prev.y - dot.y) * spring;
                dot.vx += prev.vx * this.settings.dampening;
                dot.vy += prev.vy * this.settings.dampening;
            }

            dot.vx *= this.friction;
            dot.vy *= this.friction;
            dot.x += dot.vx;
            dot.y += dot.vy;
            spring *= this.settings.tension;
        }
    }
    draw(ctx) {
        var x = this.dots[0].x,
            y = this.dots[0].y,
            a, b;
        ctx.clear();
        this.hueDelta++;
        // console.log(this.hueDelta)
        var _color = Color(`hsla(${this.hueDelta % 360},90%,50%,0.25)`)
        // console.log(_color.hex())
        // var _hsl = colorString.to.hsl([this.hueDelta % 360, 90 , 50 ])
        // console.log(colorString)
        ctx.lineStyle(1, _color.rgbNumber(), 0.5, 0);
        // console.log(PixiPlugin.parseColor)
        // gsap.to(ctx, 0.01, { pixi: { lineColor: "hsl(+=1,90%,50%)" } })
        // console.log(ctx.lineColor)

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

    }

}
export default Tendril;