<template>
    <section id="two" class="main style2 dark fullscreen">
        <div class="content box style2" id="box2">
            <header>
                <h2>What I Do</h2>
            </header>
            <p>
                Working closely with designers and back-end engineers, as a sole front-end or in <strong>Agile</strong> teams.
            </p>
            <div class="skills">
                <p>
                    <strong>Skills:</strong>
                </p>
                <ul class="half">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Git</li>
                </ul>
                <ul class="half">
                    <li>Gulp / Webpack</li>
                    <li>Canvas 2D</li>
                    <li>three.js 3D</li>
                    <li>Vue</li>
                </ul>
            </div>
            <p>
                Taking advantage of my development knowledge I can find the best way to make a layout <strong>reliable and consistent</strong>.
            </p>
        </div>
    </section>
</template>
<script>
export default {
    name: 'two'
}
</script>
<style scoped>
#two {
  color:#F7F7EF;
    /*  background: url(../assets/img/fulls/03.jpg) center no-repeat;
  object-fit: cover;
  background-size: cover;
  background-attachment: fixed;*/
}

#box2.movein {
    left: 0;
}

#box2 {
    /*  left: -100%;
  transition: all 1s ease-out;*/
}

.skills {
    /*border: 1px double #01abe9;*/
    padding: 0.5rem;
    box-shadow: inset 0rem 0rem 0.3rem 0.3rem rgba(0, 0, 0, 0.5);
}

.half {
    width: 35%;
    margin: 1rem;
    margin-top: 0;
    display: inline-block;
    text-align: left;
}
</style>