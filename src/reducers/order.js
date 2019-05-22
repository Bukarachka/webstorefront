import createReducer from './create_reducer';
import Const from '../config/const';

const getDefaultState = () => ({
    orders: {
        orders: [
            {
                id: "",
                userId: "",
                postId: "",
                comment: "",
                date: 0,
                completed: false
            }
        ]
    }
});

const orderReducer = createReducer(getDefaultState(), {
    [Const.order.saved]: (state, { order }) => ({
        ...state
    })
});

export default orderReducer;