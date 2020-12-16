import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
} from 'react-share';
import ShareIcon from '@material-ui/icons/Share';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  root: {
    width: 500,
  },
  networShare: {
    'background-color': '#ffffff'
  },
  networShareButton: {
    cursor: 'pointer'
  }
});

class SharePopper extends React.Component {

  render() {
    const { classes, anchorEl, joke } = this.props;
    const title = "#ChuckFact";

    return (
      <div>
        {
          anchorEl &&
          joke &&
          <Menu
            id="popper-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.props.handleCloseShare.bind(this)}>
            <MenuItem onClick={this.props.handleCloseShare.bind(this)} className={classes.networShare}>
              <FacebookShareButton
                url={joke.url}
                quote={joke.value}
                className={classes.networShareButton}>
                <FacebookIcon
                  size={32}
                  round />
              </FacebookShareButton>
            </MenuItem>

            <MenuItem onClick={this.props.handleCloseShare.bind(this)} className={classes.networShare}>
              <TwitterShareButton
                url={joke.url}
                title={title}
                className={classes.networShareButton}>
                <TwitterIcon
                  size={32}
                  round />
              </TwitterShareButton>
            </MenuItem>

            <MenuItem onClick={this.props.handleCloseShare.bind(this)} className={classes.networShare}>
              <TelegramShareButton
                url={joke.url}
                title={title}
                className={classes.networShareButton}>
                <TelegramIcon size={32} round />
              </TelegramShareButton>
            </MenuItem>

            <MenuItem onClick={this.props.handleCloseShare.bind(this)} className={classes.networShare}>
              <WhatsappShareButton
                url={joke.url}
                title={title}
                separator="::"
                className={classes.networShareButton}>
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </MenuItem>

            <MenuItem onClick={this.props.handleCloseShare.bind(this)} className={classes.networShare}>
              <GooglePlusShareButton
                url={joke.url}
                className={classes.networShareButton}>
                <GooglePlusIcon
                  size={32}
                  round />
              </GooglePlusShareButton>
            </MenuItem>

            <MenuItem onClick={this.props.handleCloseShare.bind(this)} className={classes.networShare}>
              <LinkedinShareButton
                url={joke.url}
                title={title}
                windowWidth={750}
                windowHeight={600}
                className={classes.networShareButton}>
                <LinkedinIcon
                  size={32}
                  round />
              </LinkedinShareButton>
            </MenuItem>

          </Menu>}
      </div>
    );
  }
}

SharePopper.propTypes = {
  classes: PropTypes.object.isRequired,
  anchorEl: PropTypes.object,
  joke: PropTypes.object
};

export default withStyles(styles)(SharePopper);
