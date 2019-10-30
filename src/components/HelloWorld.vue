<template>
    <div class="hello">
    </div>
</template>
<script>
import PixiWorld from '../entities/PixiWorld.js'
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    mounted() {
        this.$nextTick(function() {
            var world = new PixiWorld();
        })
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}

</style>