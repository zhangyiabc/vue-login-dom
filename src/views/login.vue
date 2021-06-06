<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-item">
      <label>账号：</label>
      <input type="text" v-model="loginId" />
    </div>
    <div class="form-item">
      <label>密码：</label>
      <input type="password" autocomplete="new-password" v-model="loginPwd" />
    </div>
    <div class="form-item">
      <label></label>
      <button :disabled="loading">
        {{loading?"登录中":"登录"}}
      </button>
    </div>
  </form>
</template>

<script>
  import {
    mapState
  } from "vuex"
  export default {
    //此时需要获取仓库的getters里面的属性
    computed: {
      ...mapState("loginUser", ["loading"])
    },
    data() {
      return {
        loginId: '',
        loginPwd: ""
      }
    },
    methods: {
      async handleSubmit() {
        console.log("密码", this.loginId, this.loginPwd);

        //下面开始密码验证工作
        //不要忘记命名空间
        const resp = await this.$store.dispatch("loginUser/login", {
          loginId: this.loginId,
          loginPwd: this.loginPwd
        });
        // console.log(resp)
        if (resp) {
          //登录成功
          //跳转页面
          //获取路由query参数
          const query = this.$route.query.returnurl;
          this.$router.push(query).catch(() => {});
        } else {
          alert("登录失败，请检查用户名、密码是否错误")
        }
        //验证完成清除密码
        this.loginId = ''
        this.loginPwd = ''
      }
    }
  }
</script>

<style scoped>
  .form-item {
    margin: 1em auto;
    width: 300px;
    display: flex;
    align-items: center;
  }

  .form-item input {
    height: 26px;
    font-size: 14px;
    flex: 1 1 auto;
  }

  .form-item label {
    width: 70px;
  }

  .form-item button {
    flex: 1 1 auto;
    background: #50936c;
    border: none;
    outline: none;
    color: #fff;
    border-radius: 5px;
    height: 35px;
    font-size: 16px;
  }
</style>