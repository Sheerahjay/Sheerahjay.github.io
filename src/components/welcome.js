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
            Chuck Norris Database
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
                    Chuck Norris facts are satirical factoids about martial artist and actor Chuck Norris that have become an Internet phenomenon and as a result have become widespread in popular culture. The 'facts' are normally absurd hyperbolic claims about Norris' toughness, attitude, virility, sophistication, and masculinity.

                    Chuck Norris facts have spread around the world, leading not only to translated versions, but also spawning localized versions mentioning country-specific advertisements and other Internet phenomena. Allusions are also sometimes made to his use of roundhouse kicks to perform seemingly any task, his large amount of body hair with specific regard to his beard, and his role in the action television series Walker, Texas Ranger.
                  `}
          </Typography>
          <br />
          <Typography variant="caption" gutterBottom align="center">
            --USAGE--
                </Typography>
          <Typography variant="body1" gutterBottom>
            {`
                    This app allows you to search for jokes by just typing phrases into the search area. A list of matching jokes is returned and you can choose or select / like jokes and they are added to a list of your favourites. You can also select a category to get random jokes from the specified category. 
                    
                    
                  `}
          </Typography>
          <Typography variant="caption" gutterBottom>
            ***NEW: Share Jokes to Social Media
          </Typography>

        </Paper>
      </Grid>
    </Grid>
  </div>);
}
WelcomeGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WelcomeGrid);