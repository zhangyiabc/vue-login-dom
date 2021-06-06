<template>
  <div class="loading">
    <h1>正在加载中……</h1>
  </div>
</template>

<script>
export default {
  //需要监听登录状态的变化
  created() {
    this.$store.watch(
    () => {
      return this.$store.getters["loginUser/status"];
    },
    (status)=>{
      console.log("登录状态",status);
      if(status !== "loading"){
        //监控到用户已经登录成功
        //获取路由参数query后面的信息
        //再次跳转该地址
        const url = this.$route.query.returnurl ?? "/";
        this.$router.push(url).catch(() => {})
      }
    },
    {
      immediate:true
    }
    );
  },
};
</script>

<style>
</style>