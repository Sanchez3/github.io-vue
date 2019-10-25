<template>
    <div id="about" class="overflow">
        <header id="header">
            <router-link to="/">
                <div class="close-btn"></div>
            </router-link>
        </header>
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