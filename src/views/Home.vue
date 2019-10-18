<template>
    <div class="home">
        <Toggle></Toggle>
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Toggle from '@/components/Toggle'

export default {
    name: 'home',
    components: {
        HelloWorld,
        Toggle
    }
}
</script>