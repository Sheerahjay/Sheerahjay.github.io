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

function WelcomeGrid(props) {

  const { classes } = props;

  return (<div className={classes.root}>
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>

          <Typography variant="title" gutterBottom align="center">
            Chuck Norris Jokes
                </Typography>
          <Typography variant="subheading" gutterBottom align="center">
            For hand curated Chuck Norris facts
                </Typography>
          <br />
          <Typography variant="caption" gutterBottom align="center">
            Chuck Facts
                </Typography>
          <Typography variant="body2" gutterBottom>
            {`
                 Chuck Norris facts have spread around the world, leading not only to translated versions, but also spawning localized versions mentioning country-specific advertisements and other Internet phenomena.
                  `}
          </Typography>
          <br />
         
     

        </Paper>
      </Grid>
    </Grid>
  </div>);
}
WelcomeGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WelcomeGrid);
