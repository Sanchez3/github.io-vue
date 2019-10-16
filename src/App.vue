<template>
    <div id="app">
        <HelloWorld msg="Welcome to My App" />
    </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'app',
    components: {
        HelloWorld
    }
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>