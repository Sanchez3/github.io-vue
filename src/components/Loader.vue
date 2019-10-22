<template>
    <div id='loader'>
        <svg version='1.1' id='logo-icon' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 205.3 93.6' style='fill: none;stroke: #000;' xml:space='preserve' display='none'>
            <path class='st0' d='M33.1,0.7c-2.9,0.9-5.8,2.2-8.8,2.5c-1.9,0.2-4.3-1-6.1-0.1c-4,2.1-0.5,3.3,2,4.6c7.3,3.9,14.2,9.8,22.8,9.5
    c5.7-0.2,19-2.8,12.5-10.7C51,1.1,39.5-1.3,33.1,0.7z' />
            <path class='st0' d='M47.6,37.3c-7,4.5-15.7,5.6-23.7,6.6c-2.7,0.4-11.7-1-8.8,2.7c2.7,3.4,10.6,2.3,13.7,4.8
     c5.6,4.7-4.6,6.6-3.4,8.7c0.1,0.2,20.7-6.5,22.5-7c12.6,1,17-2.7,13.3-11.1C59.1,40.8,50.1,35.7,47.6,37.3z' />
            <path class='st0' d='M6,79.4c-2.4,1-5.7,2.8-5.9,5.7c-0.5,6.4,1.4,1,1.7,0.9c3.2-1.3,2.5-2.3,6.5-0.4c2.5,1.2,4.6,2.9,7,4
    c8,3.6,15.8,4,24.3,2.9c2.8-0.4,14.6,1.4,15.9-2.3c-1.7,4,0.5,3.2,4.1,3.4c2.6,0.1,5.7,0.4,8.3-0.1c1.4-0.3,9.4-3,9.3-3
    c0.2-0.1-7.6-7.4-8.7-8c-6.9-4.1-15.1-1.6-22.6-1.2C44,81.4,3.6,86.9,6.5,79.2C6.8,78.9,7.2,78.5,6,79.4z' />
            <path class='st0' d='M104.4,24.6c-2.8,2,2.2,20.1,2.6,23.6c0.4,3.4,1.3,6.9,1.2,10.4c-0.1,2.1-1.6,5.2-0.9,7.3
    c2,5.4,5.3,0.4,8.2-2.1c8.3-7.2,11.1-17,4.1-26.3C118,35.2,107.6,22.2,104.4,24.6z' />
            <path class='st0' d='M153.1,28.8c-7.8,2-3.8,19.5-3,24.7c0.5,3.3,1,6.5,0.9,9.9c-0.1,4.1-1.9,11.2,0.3,15.1c2.9,5.1,7.2,0.3,9-3.7
    c2.8-6.3-0.3-13.3-1.7-19.7c-1.2-6-2.3-10.8-2.2-16.9C156.5,36,157.2,27.7,153.1,28.8z' />
            <path class='st0' d='M187.2,18c-9.2,3.9,2.1,25.9,4,31.8c2,6,1.6,26.3,8.1,28.7c6.1,2.3,6.3-9.6,6-12.9c-0.8-7.3-4.5-14.2-6.7-21.2
     C197.6,41.6,190.4,16.6,187.2,18z' />
        </svg>
    </div>
</template>
<script>
export default {
    name: 'loader'
}
</script>
<style scoped>
#loader {
    position: absolute;
    width: 10rem;
    height: 5.66rem;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 1000;
}

svg {
    position: relative;
    width: auto;
    height: 100%;
    overflow: visible;
    left: 0;
    right: 0;
    margin: auto;
}

.icon-logo {
    position: absolute;
    z-index: auto;
    height: 100%;
    width: 5rem;
    margin: auto;
    left: 0;
    /*right: 0;*/
    top: 0;
    bottom: 0;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    text-align: center;
}

.logo>span {
    display: inline-block;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: 50%;
    -moz-transform-origin: 50%;
    -ms-transform-origin: 50%;
    -o-transform-origin: 50%;
    transform-origin: 50%;
}

.icon-logo svg {
    position: absolute;
    height: auto;
    width: 100%;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}

@media screen and (max-width: 500px) {
    .loading {
        left: 0;
        right: 0;
        margin: auto;
    }
}
</style>