import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LocationCard from "./LocationCard";

const styles = theme => ({
  container: {
    display: "grid"
  },
  paper: {
    // padding: theme.spacing.unit,
    textAlign: "center",
    marginBottom: theme.spacing.unit
  },

  titleText: {
    paddingTop: theme.spacing.unit * 3,
    align: "center",
    color: "textPrimary",
    fontSize: "2.5rem",
    textAlign: "center",
    paddingBottom: theme.spacing.unit * 4
  }
});

class LocationGrid extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.titleText}>Places we have adventured to...</div>
        <Grid container spacing={24}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <LocationCard
                title="Santiago"
                subheader="19th April 2019"
                bodyText="Santiago is a delight for the senses"
                image="https://s3-ap-southeast-2.amazonaws.com/reactchileapp/Santiago.jpg"
              />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <LocationCard
                title="Valparaiso"
                subheader="21st April 2019"
                bodyText="No wonder Pablo Neruda made this his home..."
                image="https://s3-ap-southeast-2.amazonaws.com/reactchileapp/Valparaiso.jpg"
              />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <LocationCard
                title="Cochalgua Valley"
                subheader="22nd April 2019"
                bodyText="Wine Country....need I say more?"
                image="https://s3-ap-southeast-2.amazonaws.com/reactchileapp/Colchagua_Valley.jpg"
              />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <LocationCard
                title="Torres del Paine"
                subheader="24th April 2019"
                bodyText="UNESCO didn't make a mistake when they said this was one of the most beautiful places on the planet"
                image="https://s3-ap-southeast-2.amazonaws.com/reactchileapp/Torres_del_paine.jpg"
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

LocationGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LocationGrid);
