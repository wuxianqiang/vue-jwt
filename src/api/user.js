import ajax from '../lib/ajaxRequest';

export const getUser = () => {
  return ajax.request({
    url: '/user',
    method: 'get'
  })
}

export const getMenu = () => {
  return ajax.request({
    url: '/menu',
    method: 'get'
  })
}
