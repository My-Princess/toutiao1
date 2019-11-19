<template>
<input type="text"
class="input"
:placeholder="placeholder"
>
</template>

<script>
export default {
  props: ['placeholder']
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
