import ajax from '../lib/ajaxRequest';

export const geStatistics = () => {
  return ajax.request({
    url: '/statistics',
    method: 'get'
  })
}
