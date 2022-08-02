import * as types from '../types';

const initialAllproducts = [
  {
    pid: 'sl001',
    pname: '示例001',
    pprice: '0.00',
    pimg: '',
    pdesc: '',
    cate_id: '0',
    uid: null,
    cate_name: '全部',
  },
  {
    pid: 'sl002',
    pname: '示例002',
    pprice: '',
    pimg: '',
    pdesc: '',
    cate_id: '0',
    uid: 'null',
    cate_name: '全部',
  },
];

// COUNTER REDUCER
export const productsReducers = (
  state = initialAllproducts,
  { type, payload }
) => {
  switch (type) {
    case types.ALLPRODUCTS:
      return {
        data: payload,
      };
    default:
      return state;
  }
};
