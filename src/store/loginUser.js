import * as userApi from "../api/user"

//loginUser的配置对象
export default {
  namespaced: true,//开启命名空间
  state:{
    loading:false,
    user:null
  },
  getters:{
    status(state){
      //getters 相当于组件中的computed
      if(state.user){
        return "login"
      }else if(state.loading){
        //正在登录中
        return "loading"
      }else{
        return "unlogin"
      }
    }
  },
  mutations: {
    setLoading(state,payload){
      state.loading = payload;
    },
    setUser(state,payload){
      
      state.user = payload
    }

  },
  actions: {
    /**
     * 
     * @param {*} ctx 配置对象本身
     * @param {Object}} payload 传入的登录参数
     *                {
     *                  loginId:"",
     *                  loginPwd:""
     *                }
     */
    async login(ctx,payload){
      ctx.commit("setLoading",true);
      //得到登录后的结果
      const resp = await userApi.login(payload.loginId,payload.loginPwd);
      //将结果设置为用户 结果是一个对象
      /**
       * {
          loginId,
          name: "我的"
         };
       *  */ 
      ctx.commit("setUser",resp);
      ctx.commit("setLoading",false);
      return resp
    },
    async loginOut(ctx){
      ctx.commit("setLoading",true);
      await userApi.loginOut();
      ctx.commit("setUser",null);

      ctx.commit("setLoading",false)

    },
    async whoAmI(ctx){
      ctx.commit("setLoading",true);
      const resp = await userApi.whoAmI();
      ctx.commit("setUser",resp);
      ctx.commit("setLoading",false)
    }
  },
}