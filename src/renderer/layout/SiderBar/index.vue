<template>
  <div>
    <el-menu>
      <el-submenu index="1">
        <template slot="title">
          <span>导航一</span>
        </template>
        <el-menu-item index="dashboard">驾驶舱</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">导航二</el-menu-item>
    </el-menu>
  </div>
</template>
<style lang="scss" scoped>
.el-menu {
  width: 200px;
}
</style>
