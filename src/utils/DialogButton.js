import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Icon from '@material-ui/icons/ShoppingCart';
import { saveOrder } from '../actions/order';
import { connect } from 'react-redux';

class FormDialog extends React.Component {
  state = {
    open: false,
    text: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleSubmit = () => {
    this.handleClose()
    this.props.saveOrder({
        userId: this.props.state.AuthReducer.user.id,
        postId: this.props.post.id,
        comment: this.state.text
    }, this.props.state.AuthReducer.user.token);
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleInput = (el) => {
    this.setState({
        text: el.target.value
    })
    console.log(this.state.text)
  }

  render() {
    return (
      <div>
        <IconButton className={this.props.buttonClass} variant="outlined" color="primary" onClick={this.handleClickOpen}>
            <Icon />
        </IconButton>
        <Dialog
          fullWidth={true}
          open={this.state.open}
          onClose={this.handleClose}
          scroll="body"
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Buy</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {this.props.post.description}
              <br/>
              You want to buy {this.props.post.title}, which costs ${this.props.post.price}.
              <br/>
              Please, add comment and confirm.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Comment"
              type="text"
              value={this.state.text}
              fullWidth
              onChange={this.handleInput}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Confirm
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
    saveOrder: (payload, token) => dispatch(saveOrder(payload, token))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormDialog)