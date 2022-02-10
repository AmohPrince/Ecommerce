import React from "react";

import {
  AppBar,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Toolbar,
  IconButton,
} from "@material-ui/core";

import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" className={classes.AppBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src="https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg?cs=srgb&dl=pexels-karolina-grabowska-5632382.jpg&fm=jpg"
              alt="Commerce.js"
              height="25px"
              className={classes.image}
            />
            Getyours.com
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
