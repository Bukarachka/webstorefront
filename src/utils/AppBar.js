import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  var content
  var signUpContent
  if(props.reducer.loggedIn === false){
      content = <LoginForm />
      signUpContent = <SignUpForm />
  }else{
      content = <Typography variant="h6" color="inherit">{props.reducer.user.name}</Typography>
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <span className={classes.menuButton}/>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Web Store
          </Typography>
          {signUpContent}
          {content}
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);