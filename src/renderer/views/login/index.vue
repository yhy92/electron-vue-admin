<template>
  <div class="login-wrap">
    <div class="login-container">
      <el-button class="login-button" type="primary" round @click="login(1)">账号密码登录</el-button>
      <el-button class="login-button" type="primary" round @click="login(2)">手机号登录</el-button>
      <el-button class="login-button" type="primary" round @click="login(3)">微信登录</el-button>
      <!-- <password-login v-if="index===1"></password-login>
      <telphone-login v-if="index===2"></telphone-login>
      <wechat-login v-if="index===3"></wechat-login> -->
      <!-- 账号密码登录 -->
      <el-dialog :visible="index===1" @close="closeDialog">
        <password-login :goDash="goDash"></password-login>
      </el-dialog>

      <!-- 手机号登录 -->
      <el-dialog :visible="index===2" @close="closeDialog">
        <telphone-login :goDash="goDash"></telphone-login>
      </el-dialog>

      <!-- 微信登录 -->
      <el-dialog :visible="index===3" @close="closeDialog">
        <wechat-login></wechat-login>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PasswordLogin from '@/components/Login/PasswordLogin'
import TelphoneLogin from '@/components/Login/TelphoneLogin'
import WechatLogin from '@/components/Login/WechatLogin'
export default {
  components: {
    PasswordLogin,
    TelphoneLogin,
    WechatLogin
  },
  computed: {
    ...mapState('login', ['index'])
  },
  methods: {
    /** 根据 login 参数不同选择显示哪个登录对话框 */
    login (index) {
      this.$store.dispatch('login/setIndex', index)
    },
    closeDialog () {
      let index = 0
      this.$store.dispatch('login/setIndex', index)
    },
    goDash () {
      this.$router.push('/dashboard/index')
    }
  }
}
</script>