<template>
  <div>
      <el-form class="user-list">
        <el-form-item>
          <span class="iconfont icon-yonghu"></span>
          <el-input size="mini" v-model="userList.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <span class="iconfont icon-mima"></span>
          <el-input size="mini" type="password" v-model="userList.password" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <div class="btn-list">
        <el-row>
          <el-col :span="12">
            <el-button type="primary" size="mini" @click="register">注册</el-button>
          </el-col>
          <el-col :span="12">
            <el-button type="primary" size="mini" @click="cancel">取消</el-button>
          </el-col>
        </el-row>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    userList: {
      type: Object
    }
  },
  methods: {
    register () {
      this.$emit('register')
    },
    cancel () {
      this.$emit('register')
    }
  }
}
</script>
