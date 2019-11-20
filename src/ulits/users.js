import axios from './myaxios'
export const login = (data) => {
  return axios({
    url: '/login',
    method: 'post',
    data
  })
}
export const register = (data) => {
  return axios({
    url: '/register',
    method: 'post',
    data
  })
}

// 根据id获取用户数据值
export const getuserInfoById = id => {
  return axios({
    // 在配置中一个属性：headers，它就可以用来设置我们需要添加的headers成员
    headers: {
      Authorization: localStorage.getItem('toutiao1_Authorization')
    },
    url: `/user/${id}`
  })
}
