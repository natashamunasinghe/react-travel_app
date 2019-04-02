import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import LocationCard from "./../modules/LocationCard";

const styles = theme => ({
  pageWrapper: {
    // paddingTop: theme.spacing.unit * 3
  }
});

class LocationShowPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.pageWrapper}>
          <LocationCard />
        </div>
      </div>
    );
  }
}

LocationShowPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LocationShowPage);
