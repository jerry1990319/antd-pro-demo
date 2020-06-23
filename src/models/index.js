import * as request from '@/services/api';

export default {
  namespace: 'index',
  state: {
    patternsearch: []
  },
  effects: {
    * getPatternsearch({ payload }, { call, put }) {
        const res = yield call(request.getPatternsearch, payload);
        yield put({
            type: 'SavePatternsearch',
            payload: {
                data: res
            }
        });
    }
  },
  reducers: {
    SavePatternsearch(state, action) {
      return {
        ...state,
        patternsearch: JSON.parse(action.payload.data),
      };
    },
  }
};
