<template>
  <div>
    <el-form class="user-list">
      <el-form-item>
        <span class="iconfont icon-shoujihao"></span>
        <el-input
        size="mini"
        v-model="userList.telphone"
        placeholder="请输入手机号"
        name="telphone"
        v-validate="'required|mobile'"></el-input>
      </el-form-item>
      <el-form-item>
        <span class="iconfont icon-mima"></span>
        <el-input size="mini" type="password" v-model="userList.password" placeholder="请输入密码"></el-input>
      </el-form-item>
    </el-form>
    <div v-show="errors.has('telphone')" class="validate-text">{{errors.first('telphone')}}</div>
    <div class="btn-list">
      <el-button size="mini" type="primary" plain @click="goDash">登录</el-button>
      <el-button size="mini" type="danger">注册</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userList: {
        telphone: '',
        password: ''
      }
    }
  },
  props: {
    goDash: {
      type: Function
    }
  }
}
</script>