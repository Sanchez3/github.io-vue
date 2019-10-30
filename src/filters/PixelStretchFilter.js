import { Filter, defaultVertex } from 'pixi.js';
// import { Matrix, Point } from 'pixi.js/math';
// import vertex from './pixelStretch.vert';
import fragment from './pixelStretch.frag';

class PixelStretchFilter extends Filter {
    constructor(boundary, verticalDir) {
        super(defaultVertex, fragment);

        this.boundary = boundary || 0.0;
        if(verticalDir === null || verticalDir === undefined){
            this.verticalDir = false;
        }else{
            this.verticalDir = verticalDir;
        }
        
        this.uniforms.dimensions = new Float32Array(2);
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
    /**
     * The boundary of the stretch. -1 to 1
     * Negative number, Negative direction. Positive number, Positive direction.
     *
     * @member {number}
     * @default 0
     */
    set boundary(value) {
        this.uniforms.boundary = value;
    }
    get boundary() {
        return this.uniforms.boundary;
    }
    /**
     * The direction of the stretch. `true` vertical, `false` horizontal
     *
     * @member {boolean}
     * @default false
     */
    set verticalDir(value) {
        this.uniforms.verticalDir = value;
    }
    get verticalDir() {
        return this.uniforms.verticalDir;
    }
}

export default PixelStretchFilter;