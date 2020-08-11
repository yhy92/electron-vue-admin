import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'

// 配置中文
Validator.addLocale(zh_CN)
const config = {
  locale: 'zh_CN',
  errorBagName: 'errors',
  fieldsBagName: 'fieldBags'
}
Vue.use(VeeValidate, config) // 引入中文文件

// 自定义校验规则
Validator.extend('mobile', {
  messages: {
    cn: () => '必须是11位手机号码'
  },
  validate: value => {
    return value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
})

const dictionary = {
  cn: {
    messages: {
      mobile: () => '请输入11位手机号码',
      alpha: () => 'alpha类型'
    }
  }
}
Validator.updateDictionary(dictionary)
