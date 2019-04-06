import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class ButtonComponent extends Component {
  onClick = () => {
    const { _id } = this.props;
    this.props.history.push(`/locations/chile/${_id}`);
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <input
          className={classes.input}
          id="outlined-button-file"
          z
          multiple
          type="file"
        />
        <label htmlFor="outlined-button-file">
          <Button
            variant="outlined"
            color="primary"
            onClick={this.onClick}
            className={classes.button}
          >
            Take Me There...
          </Button>
        </label>
      </div>
    );
  }
}

ButtonComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(ButtonComponent));
