import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
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
    color: theme.palette.text.secondary,
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

function LocationGrid(props) {
  const { classes } = props;

  return (
    <div>
      <div className={classes.titleText}>Places we have adventured to...</div>
      <Grid container spacing={24}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <LocationCard />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <LocationCard />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <LocationCard />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <LocationCard />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

LocationGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LocationGrid);
