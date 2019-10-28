<template>
    <div id="about" class="overflow">
        <router-link to="/">
            <div id="close-btn">
                <div class="line-container">
                    <div class="cb-line line0"></div>
                </div>
                <div class="line-container">
                    <div class="cb-line line1"></div>
                </div>
            </div>
        </router-link>
        <one></one>
        <two></two>
        <myfooter></myfooter>
    </div>
</template>
<script>
import Toggle from '../components/Toggle'
import One from '../components/One'
import Two from '../components/Two'
import Work from '../components/Work'
import Footer from '../components/Footer'
export default {
    name: 'About',
    components: {
        'toggle': Toggle,
        'one': One,
        'two': Two,
        'myfooter': Footer
    }
}
</script>
<style>
.main.fullscreen {
    height: 100%;
    width: 100%
}
</style>
<style scoped>
.overflow {
    overflow: hidden;
}

#about {
    height: 100%;
    width: 100%;
    padding-top: 0.9rem;
}

#close-btn {
    position: absolute;
    right: 0;
    margin: 0.35rem 1rem;
    top: 0;
    cursor: pointer;
    z-index: 1001;
}

#close-btn:hover .cb-line{
    width: 0.7rem;
    height: 0.1rem;
}

.cb-line {
    width: 0.8rem;
    height: .114rem;
    background: #fff;
    transform-origin: center center;
    transition: all 400ms ease-in-out;
}

.line-container {
    position: absolute;
    left: 0;
    top: 0;
}

.line0 {
    transform: rotate(45deg);
    transition-delay: 100ms;
}

.line1 {
    transform: rotate(-45deg);
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, .75);
}

a {
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    outline: none;
    color: rgba(0, 0, 0, 0);
}

p {
    display: block;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

header p {
    display: block;
    margin: 1rem 0 0 0;
    padding: 0 0 0.5rem 0;
}

.main>.content {
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
}

#header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    /*height: 100%;*/
    height: 0.9rem;
    align-items: center;
    /*background: #fff;*/
    justify-content: center;
    z-index: 1000;
    box-shadow: 0 0 0.3rem 0 rgba(0, 0, 0, 0.5);

}
</style>