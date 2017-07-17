<template>
  <div id="app">
    <div>
      <!-- <router-link to="/">首页</router-link> -->
      <!-- <router-link to="/yunShan">yunShan</router-link>
      <router-link to="/careSystem">careSystem</router-link> -->
      <router-link to="/branch">分店介绍</router-link>
      <!-- <router-link to="/nutritionSystem">nutritionSystem</router-link>
      <router-link to="/securitySystem">securitySystem</router-link>
      <router-link to="/intelligenceDevelopment">intelligenceDevelopment</router-link>
      <router-link to="/defenseSystem">defenseSystem</router-link>
      <router-link to="/plasticBeauty">plasticBeauty</router-link> -->
      <router-link to="/professionalSystem">专业服务体系</router-link>
      <router-link to="/rehabilitationSystem">产后妈妈康复系统</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
