<template>
    <div id="about" class="overflow">
        <header id="heaWder">
            <navbar></navbar>
            <loader></loader>
            <toggle></toggle>
        </header>
        <intro></intro>
        <one></one>
        <two></two>
        <work></work>
        <myfooter></myfooter>
    </div>
</template>
<script>
import Navbar from '../components/Navbar'
import Loader from '../components/Loader'
import Toggle from '../components/Toggle'
import Intro from '../components/Intro'
import One from '../components/One'
import Two from '../components/Two'
import Work from '../components/Work'
import Footer from '../components/Footer'
export default {
    name: 'About',
    components: {
        'navbar': Navbar,
        'loader': Loader,
        'toggle': Toggle,
        'intro': Intro,
        'one': One,
        'two': Two,
        'work': Work,
        'myfooter': Footer
    }
}
</script>
<style scoped>
.overflow {
    overflow: hidden;
}

* {
    margin: 0;
    padding: 0;
}

#about {
    height: 100%;
    width: 100%;
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
    height: 3rem;
    align-items: center;
    background: #fff;
    justify-content: center;
    z-index: 1000;
    box-shadow: 0 0 0.3rem 0 rgba(0, 0, 0, 0.5);
}

.main.fullscreen {
    height: 100%;
    width: 100%
}
</style>