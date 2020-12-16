import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
});

function EmptyMessage(props) {

  const { classes } = props;

  return (<div className={classes.root}>
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography variant="title" gutterBottom align="center" color="error">
            Whoa, your're lost buddy!
          </Typography>
          <br />
          <Typography variant="body2" gutterBottom align="center" color="error">
            {`You don't find Chuck Norris, Chuck Norris finds you!`}
          </Typography>
          <br/>
          <Typography variant="body1" gutterBottom align="center" color="error">
            Search for <strong>{props.searchText}</strong> did not match any jokes currently available. Please try a different text !!!
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </div>);
}
EmptyMessage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmptyMessage);