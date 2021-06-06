function delay(interval = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, interval);
  })
}

export async function login(loginId, loginPwd) {
  await delay(1000)
  if (loginId == "zy" && loginPwd == "sb") {
    const user = {
      loginId,
      name: "张毅"
    };
    //存储进localStorage
    localStorage.setItem("user", JSON.stringify(user))
    return user
  }
  return null;
}

export async function loginOut() {
  await delay(1000);
  //删除localStorage user
  //容错，有的话再删除
  localStorage.getItem("user") && localStorage.removeItem("user");
}

export async function whoAmI() {
  await delay(1000);
  //拿到localStorage里的user数据
  return localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
}