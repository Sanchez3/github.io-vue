// precision highp float;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;

uniform float boundary;
uniform bool verticalDir;

uniform vec4 filterArea;
uniform vec2 dimensions;
//direction
uniform float sinDir;
uniform float cosDir;



vec4 stretch(sampler2D tex, float boundary, bool verticalDir){
    vec4 color = texture2D(tex, vTextureCoord);
    vec2 p = vTextureCoord;
    float zero = 0.0;
    vec2 n = vec2(vTextureCoord.x, vTextureCoord.y);
    if(verticalDir){
        float areaY = boundary * dimensions.y / filterArea.y;
        if(areaY > zero){
            float b = areaY;
            if (p.y < b){
                n.y = n.y;
            }else{
                n.y = b;
            }
        }else{
            float b = -areaY;
            if (p.y > b){
                n.y = n.y;
            }else{
                n.y = b;
            }
        }
    }else{
        float areaX = boundary * dimensions.x / filterArea.x;
        if(areaX > zero){
            float b = areaX;
            if (p.x < b){
                n.x = n.x;
            }else{
                n.x = b;
            }
        }else{
            float b = -areaX;
            if (p.x > b){
                n.x = n.x;
            }else{
                n.x = b;
            }
        }

    }
    color = texture2D(tex, n);
    return color;
}

void main(void) {
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 coord = pixelCoord / dimensions;
    vec4 color;
    color=stretch(uSampler, boundary, verticalDir);

    gl_FragColor = color;
}