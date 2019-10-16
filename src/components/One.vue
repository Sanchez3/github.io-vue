<template>
  <section id="one" class="main style2 right dark fullscreen">
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
@media screen and (max-width: 700px) {
  .main.style2 {
    padding: 3rem 1rem;
  }

  .main.style2 .content {
    width: 100%;
    max-width: 100%;
    text-align: center;
  }
}

.box {
  background: #ffffff;
  color: #39454b;
  padding: 2rem;
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
  margin: 0;
}

.main.style2>.content p {
  text-align: left;
}

.main.style2.left {
  -moz-justify-content: -moz-flex-start;
  -webkit-justify-content: -webkit-flex-start;
  -ms-justify-content: -ms-flex-start;
  justify-content: flex-start;
}

.main.style2.right {
  -moz-justify-content: -moz-flex-end;
  -webkit-justify-content: -webkit-flex-end;
  -ms-justify-content: -ms-flex-end;
  justify-content: flex-end;
}

@media screen and (max-width: 700px) {
  .main.style2 {
    padding: 3rem 1rem;
  }
}

</style>
<style scoped>
#box1 {
  left: 100%;
  transition: all 1s ease-out;
}

#box1.movein {
  left: 0;
}

#one {
  background: url(../assets/img/fulls/02.jpg) center no-repeat;
  object-fit: cover;
  background-size: cover;
  background-attachment: fixed;
}

@media screen and (max-width: 500px) {
  .main.style2 .content {
    width: 100%;
    max-width: 100%;
    text-align: center;
  }
}

/*@media screen and (max-width: 700px) {
  #one {
    background-attachment: scroll;
  }
}*/

</style>
