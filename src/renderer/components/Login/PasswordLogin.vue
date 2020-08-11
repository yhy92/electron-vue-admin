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
      <el-button size="mini" type="primary" plain @click="goDash">登录</el-button>
      <el-button size="mini" type="danger" @click="register">注册</el-button>
    </div>
    <!-- 账号密码 注册 对话框 -->
    <div class="register-container" v-show="dialogVisible">
      <register-dialog :userList="userList" @register="register"></register-dialog>
    </div>
  </div>
</template>

<script>
import RegisterDialog from './RegisterDialog'
export default {
  components: {RegisterDialog},
  data () {
    return {
      userList: {
        username: '',
        password: ''
      },
      dialogVisible: false
    }
  },
  props: {
    goDash: {
      type: Function
    }
  },
  methods: {
    register () {
      this.dialogVisible = !this.dialogVisible
    }
  }
}
</script>
