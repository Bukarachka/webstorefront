import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../actions/auth';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class FormDialog extends React.Component {
  state = {
    open: false,
    username: "",
    password: "",
    phoneNumber: "",
    name: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleUsernameInput = (el) => {
      this.setState({
          username: el.target.value
      })
  }

  handlePasswordInput = (el) => {
    this.setState({
        password: el.target.value
    })
  }

  handlePhoneInput = (el) => {
      this.setState({
        phoneNumber: el.target.value
      })
  }

  handleNameInput = (el) => {
    this.setState({
        name: el.target.value
      })
  }

  signupHandle = () => {
    this.handleClose()
    this.props.signUp({
        username: this.state.username,
        password: this.state.password,
        phoneNumber: this.state.phoneNumber,
        name: this.state.name
    })
  }

  render() {
    return (
      <div>
        <Button color="inherit" onClick={this.handleClickOpen}>
          Signup
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="username"
              type="text"
              value={this.state.username}
              fullWidth
              onChange={this.handleUsernameInput}
            />
            <TextField
              margin="dense"
              id="name"
              label="password"
              type="password"
              value={this.state.password}
              fullWidth
              onChange={this.handlePasswordInput}
            />
            <TextField
              margin="dense"
              id="name"
              label="phone number"
              type="text"
              value={this.state.phoneNumber}
              fullWidth
              onChange={this.handlePhoneInput}
            />
            <TextField
              margin="dense"
              id="name"
              label="full name"
              type="text"
              value={this.state.name}
              fullWidth
              onChange={this.handleNameInput}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.signupHandle} color="primary">
              Sign Up
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
    state: {...store}
})

const mapDispatchToProps = (dispatch) => ({
    signUp: (credentials) => dispatch(signUp(credentials))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormDialog)