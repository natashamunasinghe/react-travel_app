import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const MyLink = props => <Link to="/locations/" {...props} />;

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

function ButtonComponent(props) {
  const { classes } = props;
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
          component={MyLink}
          className={classes.button}
        >
          Take Me There...
        </Button>
      </label>
    </div>
  );
}

ButtonComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonComponent);
