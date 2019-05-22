import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import DialogButton from '../utils/DialogButton';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '80%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

function TitlebarGridList(props) {
  const { classes } = props;

  var button = (post) => {}
  if(props.loggedIn){
      button = (post) => <DialogButton post={post} buttonClass={classes.icon}/>
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={400} cols={3} className={classes.gridList}>
        {props.posts.map((post, index) => (
          <GridListTile 
            key={index}>
            <img src={post.image} 
            alt={post.title} />
            <GridListTileBar
              title={post.title}
              subtitle={post.description}
              actionIcon={button(post)}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);