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
         class="input"
         v-model="users.username"
         :rules='/^1\d{10}$/'
         err_msg="手机格式输入错误"
          />
        <myinput type="password"
        placeholder="密码"
        class="input"
        v-model="users.password"
        />
      </div>
      <p class="tips">
        没有账号？
        <a href="#/register" class>去注册</a>
      </p>
      <mybutton class="button" text="登录" @btnclick="login" type="danger">登录按钮</mybutton>
    </div>
  </div>
</template>

<script>
import mybutton from '@/components/mybutton'
import myinput from '@/components/myinput'
import { login } from '../ulits/users'
export default {
  data () {
    return {
      users: {
        username: 'tt',
        password: '123'
      }
    }
  },
  components: {
    mybutton, myinput
  },
  methods: {
    login () {
      // console.log(this.users)
      login(this.users)
        .then(res => {
          if (res.data.message === '登录成功') {
            // 将token数据存储在本地
            localStorage.setItem('toutiao1_Authorization', res.data.data.token)
            this.$router.push({ path: `/personal/${res.data.data.user.id}` })
            // this.$router.push({ path: '/personal' })
          } else {
            this.$toast.fail(res.data.message)
          }
          console.log(res)
        })
        .catch(err => {
          console.log(err)
          this.$toast.fail('服务器异常')
        })
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
