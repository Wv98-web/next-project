import * as types from '../types';

export const getAllproducts = () => (dispatch) => {
  fetch('http://jx.xuzhixiang.top/ap/api/allproductlist.php')
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      dispatch({
        type: types.ALLPRODUCTS,
        payload: res.data,
      });
    });
};
