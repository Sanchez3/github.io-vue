uniform int byp;
uniform sampler2D tDiffuse;
uniform sampler2D tDisp;
uniform float amount;
uniform float angle;
uniform float seed;
uniform float seedX;
uniform float seedY;
uniform float distortionX;
uniform float distortionY;
uniform float colS;
varying vec2 vTextureCoord;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
    if (byp < 1) {
        vec2 p = vTextureCoord;
        float xs = floor(gl_FragCoord.x / 0.5);
        float ys = floor(gl_FragCoord.y / 0.5);
        vec4 normal = texture2D(tDisp, p * seed * seed);
        if (p.y < distortionX + colS && p.y > distortionX - colS * seed) {
            if (seedX > 0.) {
                p.y = 1. - (p.y + distortionY);
            } else {
                p.y = distortionY;
            }
        }
        if (p.x < distortionY + colS && p.x > distortionY - colS * seed) {
            if (seedY > 0.) {
                p.x = distortionX;
            } else {
                p.x = 1. - (p.x + distortionX);
            }
        }
        p.x += normal.x * seedX * (seed / 5.);
        p.y += normal.y * seedY * (seed / 5.);
        vec2 offset = amount * vec2(cos(angle), sin(angle));
        vec4 cr = texture2D(tDiffuse, p + offset);
        vec4 cga = texture2D(tDiffuse, p);
        vec4 cb = texture2D(tDiffuse, p - offset);
        gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);

        vec4 snow = 200. * amount * vec4(rand(vec2(xs * seed, ys * seed * 50.)) * 0.2);

        gl_FragColor = gl_FragColor + snow;

    } else {
        gl_FragColor = texture2D(tDiffuse, vTextureCoord);
    }
}