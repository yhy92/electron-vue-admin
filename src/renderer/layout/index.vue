<template>
  <div class="content-container">
    <sider-bar></sider-bar>
    <router-view></router-view>
  </div>
</template>
<script>
import SiderBar from './SiderBar/index'
export default {
  components: {
    SiderBar
  }
}
</script>
<style lang="scss" scoped>
.content-container {
  display: flex;
  flex-direction: row;
}
</style>

