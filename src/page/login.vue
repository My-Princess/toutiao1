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
        <input placeholder="请输入手机号" class="input" />
        <input placeholder="密码" class="input" type="password" />
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
export default {
  components: {
    mybutton
  },
  methods: {
    login () {
      console.log('111')
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
