import {
    fetchPostsApi,
    fetchPostApi,
    savePostApi,
    updatePostApi,
    deletePostApi
} from './api';
import Const from '../config/const';

const loadedOne = (post) => ({
    type: Const.post.loaded,
    posts: [
        post
    ]
})

const loaded = (posts) => ({
    type: Const.post.loaded,
    posts: posts
})

const saved = (post) => ({
    type: Const.post.saved,
    post
})

const deleted = () => ({
    type: Const.post.deleted
})

export const fetchPosts = () => (dispatch) => {
    return fetchPostsApi()
    .then((success) => {
        dispatch(loaded({...success}));
    }).catch((error) => {
        console.log(error);
    });
}

export const fetchPost = (payload) => (dispatch) => {
    return fetchPostApi(payload)
    .then((success) => {
        dispatch(loadedOne({...success}));
    }).catch((error) => {
        console.log(error);
    });
}

export const savePost = (post, token) => (dispatch) => {
    return savePostApi(post, token)
    .then((success) => {
        dispatch(saved({...success}));
    }).catch((error) => {
        console.log(error);
    });
}

export const updatePost = (post, token) => (dispatch) => {
    return updatePostApi(post, token)
    .then((success) => {
        dispatch(saved({...success}));
    }).catch((error) => {
        console.log(error);
    });
}

export const deletePost = (postId, token) => (dispatch) => {
    return deletePostApi(postId, token)
    .then((success) => {
        dispatch(deleted());
    }).catch((error) => {
        console.log(error);
    })
}