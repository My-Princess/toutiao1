<template>
    <div class="personal">
    <router-link to="/edit_profile">
      <div class="profile">
        <!-- $axios.defaults.baseURL读取axios的服务器路径 -->
        <img :src="users.head_img" alt />
        <div class="profile-center">
          <div class="name">
            <span class="iconfont iconxingbienan"></span>ll
          </div>
          <div class="time">2019-11.2</div>
        </div>
        <span class="iconfont iconjiantou1"></span>
      </div>
    </router-link>
     <router-link to="/ffff">
      <mycell title="我的关注" desc="关注的用户"></mycell>
      <mycell title="我的跟帖" desc="跟帖/回复"></mycell>
      <mycell title="我的收藏" desc="文章/视频"></mycell>
      <mycell title="设置"></mycell>
    </router-link>
  </div>

</template>

<script>
import mycell from '@/components/mycell'
export default {
  data () {
    return {
      users: { }
    }
  },
  components: {
    mycell
  },
  mounted () {
    let id = this.$route.params.id
    console.log(id)
    // let res = await getuserInfoById(id)
    // console.log(res)
  }
}
</script>

<style lang='less' scoped>
.personal{
    width: 100vw;
    height: 100vh;
    background-color: #eee;
}
a{
    color: #666;
}
.profile {
  display: flex;
  padding: 20px 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 5px #ddd solid;

  img {
    width: 70 / 360 * 100vw;
    height: 70 / 360 * 100vw;
    border-radius: 50%;
  }

  .profile-center {
    flex: 1;
    padding: 0 10px;
  }

  .name {
    span {
      color: #75b9eb;
    }
  }
  .time {
    color: #666;
    font-size: 14px;
    margin-top: 5px;
  }
}

</style>
