import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import LocationGrid from "./../modules/LocationGrid";
import LocationShowPage from "./LocationShowPage";

const styles = theme => ({
  pageWrapper: {
    // paddingTop: theme.spacing.unit * 3
  }
});

class LocationIndexPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.pageWrapper}>
          <LocationGrid />
        </div>
      </div>
    );
  }
}

LocationIndexPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LocationIndexPage);
