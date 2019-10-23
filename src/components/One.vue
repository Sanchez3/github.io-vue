<template>
    <section id="one" class="main style2 dark fullscreen">
        <div class="content box style2" id="box1">
            <header>
                <h2>Who I Am</h2>
            </header>
            <p>A font-end developer with 2+ years of professional experience, based in Beijing</p>
        </div>
    </section>
</template>
<script>
export default {
    name: 'one'
}
</script>
<style>
.box {
    /*background: #ffffff;*/
    color:#F7F7EF;
    padding: 2rem;
    line-height: 150%;
}

.box.style2 {
    padding: 2rem 1rem 2rem 1rem;
}

.main.style2 {
    -moz-align-items: center;
    -webkit-align-items: center;
    -ms-align-items: center;
    align-items: center;
    -moz-justify-content: center;
    -webkit-justify-content: center;
    -ms-justify-content: center;
    justify-content: center;
    padding: 3rem 0;
    overflow: hidden;
}

.main.style2>.content {
    /*  -moz-transition: -moz-transform 1s ease;
    -webkit-transition: -webkit-transform 1s ease;
    -ms-transition: -ms-transform 1s ease;
    transition: transform 1s ease;
    -moz-transform: translateZ(0);
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);*/
    position: relative;
    /* min-width: 245px;*/
    width: 50%;
    margin: auto;
}

.main.style2>.content p {
    text-align: left;
}
</style>