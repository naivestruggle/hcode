<template>
  <div class="body-box">
    <header-box></header-box>

    <!--  内容模块 -->
    <router-view></router-view>

    <footer-box></footer-box>
  </div>
</template>
<script>
  import Header from '../components/header/Header'
  import Footer from '../components/footer/Footer'
  export default {
    name: 'Body',
    components: {
      'header-box': Header,
      'footer-box': Footer,
    }
  }
</script>
<style>
  body{
    background-color: #eee;
  }
</style>
