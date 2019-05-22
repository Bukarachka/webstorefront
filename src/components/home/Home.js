import React from 'react';
import { connect } from 'react-redux';
import { login, logout, signUp } from '../../actions/auth';
import { fetchPosts, fetchPost, savePost, updatePost, deletePost } from '../../actions/post';
import ButtonAppBar from '../../utils/AppBar';
import GridList from '../../utils/GridList';

class Home extends React.PureComponent{
    componentDidMount(){
        this.props.fetchPosts();
    }

    render(){
        var col = this.props.state.PostReducer.posts.posts;
        return<div>
            <ButtonAppBar reducer={this.props.state.AuthReducer}/>
            <GridList posts={col} loggedIn={this.props.state.AuthReducer.loggedIn}/>
        </div>
    }
}

const mapStateToProps = (store) => ({
    state: {...store}
})

const mapDispatchToProps = (dispatch) => ({
    login: (credentials) => dispatch(login(credentials)),
    logout: () => dispatch(logout()),
    signUp: (credentials) => dispatch(signUp(credentials)),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchPost: (payload) => dispatch(fetchPost(payload)),
    savePost: (payload, token) => dispatch(savePost(payload, token)),
    updatePost: (payload, token) => dispatch(updatePost(payload, token)),
    deletePost: (payload, token) => dispatch(deletePost(payload, token))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);