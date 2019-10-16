<template>
  <section id="work" class="main style3 primary">
    <div class="content">
      <header>
        <h2>My Work</h2>
        <p>What I do, Technical Part</p>
        <p>Recommend Use Chrome DevTools, Toggle Device Mode Or Wechat</p>
      </header>
      <!-- Gallery  -->
      <div class="gallery">
        <work-item v-for="todo in todos" v-bind:id="todo.id" v-bind:title="todo.title" v-bind:imgTitle="todo.imgTitle" v-bind:url="todo.url" v-bind:overview="todo.overview" v-bind:key="todo.id"></work-item>
      </div>
    </div>
  </section>
</template>
<script>
import Workitem from './Workitem'
export default {
  name: 'work',
  components: {
    'work-item': Workitem
  },
  data: function() {
    return {
      todos: [{
        id: 0,
        title: '地球最后的净土，我在南极等你加入',
        imgTitle: 'QQ-X南极',
        url: 'https://qzs.qzone.qq.com/qzone/qzact/act/external/qqx_116/qqx_1116/dist/',
        overview: 'https://github.com/Sanchez3/MyProject/tree/master/QQ-X/README.md'
      }, {
        id: 1,
        title: '你的美学气质报告',
        imgTitle: 'Thinkpad X1',
        url: 'https://thinkpadx1.lxustudio.cn/',
        overview: 'https://github.com/Sanchez3/MyProject/tree/master/Thinkpad/README.md'
      }, {
        id: 2,
        title: '刷脸送福迎新春',
        imgTitle: 'Citicbank',
        url: 'https://citicbank.lxustudio.com/',
        overview: 'https://github.com/Sanchez3/MyProject/tree/master/Citicbank/README.md'
      }, {
        id: 3,
        title: 'GD教你穿Kappa',
        imgTitle: 'Kappa',
        url: 'https://www.digitaling.com/projects/17370.html',
        overview: 'https://github.com/Sanchez3/MyProject/tree/master/Kappa/README.md'
      }, {
        id: 4,
        title: '你发现TA了吗？',
        imgTitle: 'WWF',
        url: 'https://wwf-opf.lxustudio.com/',
        overview: 'https://github.com/Sanchez3/MyProject/tree/master/WWF/README.md'
      }, {
        id: 5,
        title: '让你在现场',
        imgTitle: '腾讯体育NBA',
        url: '',
        overview: 'https://github.com/Sanchez3/MyProject/tree/master/NBA1/README.md'
      }, {
        id: 6,
        title: 'Breaking News',
        imgTitle: '北美进口天然宠物粮',
        url: 'https://tpro.lxustudio.cn/pet/',
        overview: 'https://github.com/Sanchez3/MyProject/tree/master/TMD/README.md'
      }, {
        id: 7,
        title: 'AR封印已开，布狗袋宝物显灵啦！',
        imgTitle: 'AR, 布狗袋',
        url: 'https://lxunogodie.applinzi.com/',
        overview: 'https://github.com/Sanchez3/MyProject/tree/master/2018NewYear/README.md'
      }, {
        id: 8,
        title: '让事实发声',
        imgTitle: '事实派',
        url: '',
        overview: 'https://github.com/Sanchez3/MyProject#%E4%BA%8B%E5%AE%9E%E6%B4%BE/README.md'
      }, {
        id: 9,
        title: '声援小美好，我的夏之声',
        imgTitle: '音乐,国潮行动',
        url: 'https://tm24.lxustudio.cn/',
        overview: 'https://github.com/Sanchez3/MyProject/tree/master/Tm24/README.md'
      }, {
        id: 10,
        title: 'More',
        imgTitle: 'github more',
        url: 'https://github.com/Sanchez3/MyProject/',
        overview: 'https://github.com/Sanchez3/MyProject/'
      }]
    }
  }
}

</script>
<style scoped>
#work .content {
  z-index: 1;
  padding: 6rem 0 6rem 0;
}

.gallery {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
  max-width: 100%;
  margin: 0 auto 2rem auto;
}

.main.style3 .content>header {
  margin-bottom: 2rem;
}

.main.style3.primary {
  background: #ffffff;
}

.main.style3 {
  text-align: center;
}

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

</style>
