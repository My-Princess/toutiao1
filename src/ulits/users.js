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
