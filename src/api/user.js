import ajax from '../lib/ajaxRequest';

export const getUser = () => {
  return ajax.request({
    url: '/user',
    method: 'get'
  })
}
