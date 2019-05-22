import createReducer from './create_reducer';
import Const from '../config/const';

const getDefaultState = () => ({
    posts: {
        posts: [
            {
                id: "",
                title: "",
                description: "",
                price: 0.0,
                image: ""
            }
        ]
    }
});

const postReducer = createReducer(getDefaultState(), {
    [Const.post.loaded]: (state, { posts }) => ({
        ...state,
        posts: posts
    }),
    [Const.post.saved]: (state, { post }) => ({
        ...state
    }),
    [Const.post.deleted]: (state) => ({
        ...state
    })
});

export default postReducer;