<template>
  <div class="cell">
      <span>{{title}}</span>
      <div>
          <span>{{desc}}</span>
          <span class="iconfont icon-xiangyoujiantou1"></span>
     </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'desc']
}
</script>

<style>
.cell{
    display: flex;
    justify-content:space-between;
    align-content: center;
    /* padding: 20 / 360 * 100vw; */
    padding: 3.333vw;
    border-bottom: 2px solid #ccc
}
.cell > span{
    font-size: 18px;
    color: #000;
}
.cell > div>span{
    color: #999
}

</style>
