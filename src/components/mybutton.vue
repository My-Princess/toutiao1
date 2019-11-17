<template>
  <button class="btn"
  @click="loginbtn"
  :class="{danger:type==='danger',primary:type==='primary',info:type==='info',warning:type==='warning'}"
  >{{text}}</button>
</template>

<script>
export default {
  props: ['text', 'type'],
  methods: {
    loginbtn (event) {
      console.log(event)
      this.$emit('btnclick', event)
    }
  }
}
</script>

<style>
.btn {
  width: 100%;
  height: 45px;
  border: none;
  border: 1px solid #ccc;
  background: red;
  border-radius: 20px;
  /* outline: none; */
  font-size: 20px;
  color: #fff;
  font-weight: 600;
  text-align: center;
  line-height: 45px;
  box-shadow: 5px 5px 5px #fff;
  outline: none
}
.danger {
  background-color: #f00;
}
.primary {
  background-color: rgb(17, 219, 94);
}
.info {
  background-color: #999;
}
.warning {
  background-color: orange;
}

</style>
