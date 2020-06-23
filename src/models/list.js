import * as request from '@/services/api';

export default {
  namespace: 'list',
  state: {
    listdata: []
  },
  effects: {
    * getPatternsearchQuery({ payload }, { call, put }) {
        const res = yield call(request.getPatternsearchQuery, payload);
        yield put({
          type: 'SavePatternsearchQuery',
          payload: {
              data: res
          }
      });
    }
  },
  reducers: {
    SavePatternsearchQuery(state, action) {
      return {
        ...state,
        listdata: JSON.parse(action.payload.data),
      };
    },
  }
};
