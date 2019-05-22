import {
    saveOrderApi
} from './api';
import Const from '../config/const';

const saved = (order) => ({
    type: Const.order.saved,
    order
})

export const saveOrder = (order, token) => (dispatch) => {
    return saveOrderApi(order, token)
    .then((success) => {
        dispatch(saved({...success}));
    }).catch((error) => {
        console.log(error);
    })
}