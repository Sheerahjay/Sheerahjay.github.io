import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Send from '@material-ui/icons/Send';
import Search from '@material-ui/icons/Search';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
    margin: {
      margin: theme.spacing.unit,
    },
    textField: {
      flexBasis: 200,
    },
  });

class SearchForm extends React.Component {
    /**
     * Handle on text change
     * @memberof SearchForm
     */
    handleOnChange = (event) => {
        this.props.onChange(event.target.value)
    }

    render() {
        const { classes } = this.props;

        return (
            <FormControl className={classNames(classes.margin, classes.textField)} fullWidth>
                <InputLabel htmlFor="adornment-send">Free Text Search</InputLabel>
                <Input
                    id="adornment-send"
                    type={'text'}
                    onChange={this.handleOnChange}
                    onKeyPress={this.props.onHandleKeyPress}
                    startAdornment={
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    }
                    endAdornment={
                        !this.props.isFetching &&
                        <Tooltip id="tooltip-send" title="SEARCH" placement="left">
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Search"
                                    onClick={this.props.onSubmit}
                                    onMouseDown={this.props.onSubmit}>
                                    <Send />
                                </IconButton>
                            </InputAdornment>
                        </Tooltip>
                    }
                />
            </FormControl>
        );
    };
}
SearchForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(SearchForm);