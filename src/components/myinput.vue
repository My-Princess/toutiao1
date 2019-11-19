<template>
<input type="text"
class="input"
:placeholder="placeholder"
@input="datainp"
>
</template>

<script>
export default {
  props: ['placeholder'],
  methods: {
    datainp (event) {
      // 获取输入框的数据
      //   let data = event.target.value
      // 发送输入框数据
      this.$emit('input', event.target.value)
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
