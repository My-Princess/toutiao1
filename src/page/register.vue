<template>
  <div id="app">
    <div class="container">
      <div class="close">
        <span class="iconfont icon-guanbi2"></span>
      </div>
      <div class="logo">
        <span class="iconfont icon-maomao"></span>
      </div>
      <div class="inputs">
        <myinput placeholder="请输入您的手机号"
         type="text"
         class="input"
         v-model="users.username"
         :rules='/^1\d{10}$/'
         err_msg="手机格式输入错误"
          />
        <myinput placeholder="请输入您的呢称"
        type="text"
        :rules="/^\w+$/"
        class="input"
        v-model="users.nickname"
        err_msg="呢称格式输入有误"
         />
        <myinput type="password"
        placeholder="密码"
        class="input"
        v-model="users.password"
        />
      </div>
      <p class="tips">
        有账号？
        <a href="#/login" class>去登录</a>
      </p>
      <mybutton class="button" text="注册" @btnclick="register" type="danger">注册按钮</mybutton>
    </div>
  </div>
</template>

<script>
import mybutton from '@/components/mybutton'
import myinput from '@/components/myinput'
import { register } from '../ulits/users'
export default {
  data () {
    return {
      users: {
        username: '',
        password: '',
        nickname: ''
      }
    }
  },
  components: {
    mybutton, myinput
  },
  methods: {
    async register (data) {
    //   console.log(this.users)
      var res = await register(this.users)
      console.log(res)
      if (res.data.message === '注册成功') {
        this.$toast.fail('注册成功，跳转到登录')
        this.$router.push({ name: 'Login' })
      } else {
        this.$toast.fail('注册失败')
      }
    }
  }
}
</script>

<style lang="less">
.container {
  padding: 20px;
}

.close {
  span {
    font-size: 3.6vw;
  }
}

.logo {
  display: flex;
  justify-content: center;

  span {
    display: block;
    font-size: 126 / 360 * 100vw;
    color: #d81e06;
  }
}

.inputs {
  input {
    margin-bottom: 20px;
  }
}

.tips {
  text-align: right;
  margin-bottom: 20px;

  a {
    color: #3385ff;
  }
}
</style>
