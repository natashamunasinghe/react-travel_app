import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  pageWrapper: {
    // paddingTop: theme.spacing.unit * 3
  }
});

class LocationShowPage extends Component {
  // state = { location: this.props.locations[this.props.match.params.id] };

  render() {
    const { classes, locations } = this.props;

    return (
      <div>
        <div className={classes.pageWrapper} />
        <div>still working on this bit!</div>
      </div>
    );
  }
}

LocationShowPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LocationShowPage);
