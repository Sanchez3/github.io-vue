import { Filter, defaultVertex } from 'pixi.js';
// import { Matrix, Point } from 'pixi.js/math';

import fragment from './myGlitch.frag';

class MyGlitchFilter extends Filter {
    constructor(options) {
        //tDiffuse, tDisp, byp, amount, angle, seed, seedX, seedY, directionX, directionY, colS
        super(defaultVertex, fragment);
        this.uniforms.dimensions = new Float32Array(2);

        Object.assign({
            tDiffuse: null,
            tDisp: null,
            byp: 0,
            amount: 0.08,
            angle: 0.02,
            seed: 0.02,
            seedX: 0.02,
            seedY: 0.02,
            directionX: 0.5,
            directionY: 0.6,
            colS: 0.05
        }, options)
    }
    /**
     * Override existing apply method in PIXI.Filter
     * @private
     */
    apply(filterManager, input, output, clear) {
        this.uniforms.dimensions[0] = input.filterFrame.width;
        this.uniforms.dimensions[1] = input.filterFrame.height;
        filterManager.applyFilter(this, input, output, clear);
    }


    set byp(value) {
        this.uniforms.byp = value;
    }
    get byp() {
        return this.uniforms.byp;
    }

    set amount(value) {
        this.uniforms.amount = value;
    }
    get amount() {
        return this.uniforms.amount;
    }

    set angle(value) {
        this.uniforms.angle = value;
    }
    get angle() {
        return this.uniforms.angle;
    }
    set seed(value) {
        this.uniforms.seed = value;
    }
    get seed() {
        return this.uniforms.seed;
    }
    set seedX(value) {
        this.uniforms.seedX = value;
    }
    get seedX() {
        return this.uniforms.seedX;
    }
    set seedY(value) {
        this.uniforms.seedY = value;
    }
    get seedY() {
        return this.uniforms.seedY;
    }
    set directionX(value) {
        this.uniforms.directionX = value;
    }
    get directionX() {
        return this.uniforms.directionX;
    }
    set directionY(value) {
        this.uniforms.directionY = value;
    }
    get directionY() {
        return this.uniforms.directionY;
    }
    set colS(value) {
        this.uniforms.colS = value;
    }
    get colS() {
        return this.uniforms.colS;
    }

}

export default MyGlitchFilter;