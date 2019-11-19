<template>
<input type="text"
class="input"
:placeholder="placeholder"
:value="value"
@input="datainp"
:class="{green:statu==='succeed',red:statu==='erro'}"
@blur="blurdata"
>
</template>

<script>
export default {
  props: ['placeholder', 'value', 'rules', 'err_msg'],
  data () {
    return {
      statu: ''
    }
  },
  methods: {
    datainp (event) {
      // 获取输入框的数据
      let data = event.target.value
      //  判断是否符合规则
      if (this.rules && typeof this.rules === 'object') {
        if (this.rules.test(data)) {
          this.statu = 'succeed'
        } else {
          this.statu = 'erro'
        }
      }
      console.log(this.rules)
      // 发送输入框数据
      this.$emit('input', event.target.value)
    },
    blurdata (event) {
      let data = event.target.value
      if (this.rules && typeof this.rules === 'object') {
        if (!this.rules.test(data)) {
          this.$toast.fail(this.err_msg)
        }
      }
    }
  }
}
</script>

<style>
.input{
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
    border-bottom: 2px #999 solid;
    font-size: 16px;
    padding-left: 10px;
}
.red{
    border-bottom: 2px red solid;
    color:red
}
.green{
    border-bottom: 2px green solid;
}

</style>
