import request from '@/utils/request';
import transformParams from '@/utils/index';


export async function getPatternsearch(params={}) {
  return request('/patternsearch/hot', {
    method: 'POST',
    data: params,
  });
}
export async function getPatternsearchQuery(params={}) {
    return request('/patternsearch/query', {
      method: 'POST',
      data: params,
    });
  }
// export async function getPatternsearch(params = {}) {
//     return request(`/patternsearch/hot?${transformParams(params)}`);
// }
