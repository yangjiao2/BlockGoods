import React from "react";
import { Grid, Card, Icon, IconButton, Tooltip } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  icon: {
    fontSize: "44px",
    opacity: 0.6,
    color: theme.palette.primary.main
  }
});

const StatCards = ({ classes }) => {
  return (
    <Grid container spacing={3} className="mb-3">
      <Grid item xs={12} md={6}>
        <Card className="play-card p-sm-24 bg-paper" elevation={6}>
          <div className="flex items-center">
            <Icon className={classes.icon}>group</Icon>
            <div className="ml-3">
              <small className="text-muted">Number of Consumers</small>
              <h6 className="m-0 mt-1 text-primary font-medium">37</h6>
            </div>
          </div>
          <Tooltip title="View Details" placement="top">
            <IconButton>
              <Icon>arrow_right_alt</Icon>
            </IconButton>
          </Tooltip>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className="play-card p-sm-24 bg-paper" elevation={6}>
          <div className="flex items-center">
            <Icon className={classes.icon}>attach_money</Icon>
            <div className="ml-3">
              <small className="text-muted">Amount in Wallet</small>
              <h6 className="m-0 mt-1 text-primary font-medium">12402 UTC</h6>
            </div>
          </div>
          <Tooltip title="View Details" placement="top">
            <IconButton>
              <Icon>arrow_right_alt</Icon>
            </IconButton>
          </Tooltip>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className="play-card p-sm-24 bg-paper" elevation={6}>
          <div className="flex items-center">
            <Icon className={classes.icon}>store</Icon>
            <div className="ml-3">
              <small className="text-muted">Track your Watchlist</small>
              <h6 className="m-0 mt-1 text-primary font-medium">
                8.5% Stock Surplus
              </h6>
            </div>
          </div>
          <Tooltip title="View Details" placement="top">
            <IconButton>
              <Icon>arrow_right_alt</Icon>
            </IconButton>
          </Tooltip>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className="play-card p-sm-24 bg-paper" elevation={6}>
          <div className="flex items-center">
            <Icon className={classes.icon}>shopping_cart</Icon>
            <div className="ml-3">
              <small className="text-muted">Incoming Orders</small>
              <h6 className="m-0 mt-1 text-primary font-medium">5 Orders</h6>
            </div>
          </div>
          <Tooltip title="View Details" placement="top">
            <IconButton>
              <Icon>arrow_right_alt</Icon>
            </IconButton>
          </Tooltip>
        </Card>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles, { withTheme: true })(StatCards);
