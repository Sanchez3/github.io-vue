<template>
    <footer id="footer">
        <ul class="actions">
            <li><a href="https://www.linkedin.com/in/sanchuan-liu-b19012139/" class="fa fa-linkedin" alt="LinkedIn"></a></li>
            <li><a href="https://github.com/Sanchez3" class="fa fa-github" alt="Github"></a></li>
            <li><a href="./static/WeChat.jpg" class="fa fa-weixin" alt="Wechat"></a></li>
            <li><a href="mailto:sanchezliu003@gmail.com" class="fa fa-envelope" alt="mail"></a></li>
        </ul>
        <ul class="menu">
            <li>&copy; 2018 SanchezLiu</li>
        </ul>
    </footer>
</template>
<script>
export default {
    name: 'Footer'
}
</script>
<style scoped>
#footer {
    position: relative;
    height: 4rem;
    line-height: 5rem;
    margin: 0;
    /*background: #172a53;*/
    color: rgba(206, 206, 206, 0.5);
    overflow: hidden;
    height: auto;
    line-height: inherit;
    text-align: center;
    padding: 2rem 1rem 1rem 1rem;
    bottom: 0;
}

a {
    color: rgba(206, 206, 206, 0.5);
}

a:hover {
    color: #cecece;
}

a {
    text-decoration: none;
    /*-webkit-tap-highlight-color: transparent;*/
    outline: none;
    /*color: rgba(0, 0, 0, 0);*/
}

ul.actions {
    position: relative;
    left: 0;
    top: 0;
    height: auto;
    line-height: inherit;
}

ul.actions li {
    font-size: 1.25rem;
    margin: 0;
}

ul.actions li a {
    padding: 0.5rem;
}

ul.menu {

    position: relative;
    right: 0;
    top: 0;
    height: auto;
    line-height: inherit;
}

ul.menu li {
    border-left: 0;
    padding: 1rem 0 0 0;
    margin: 0;
    display: block;
    border-left-color: rgba(185, 186, 187, 0.2);
    font-size: 0.9rem;
}

ul.actions li {
    display: inline-block;
    margin: 0 0 0 0.5rem;
}

.icon {
    text-decoration: none;
}

.icon:before {
    display: inline-block;
    font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    font-size: 1.25rem;
    text-decoration: none;
    font-style: normal;
    font-weight: normal;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>