import _React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Box,
  Drawer,
} from "@mui/material";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Button color="inherit" component={Link} to="/">
        Home
      </Button>
      <Button color="inherit" component={Link} to="/destination">
        Destinations
      </Button>
      <Button color="inherit" component={Link} to="/TripType">
        Trip Types
      </Button>
      {/* <Button color="inherit" component={Link} to="/">Blog</Button> */}
      <Button color="inherit" component={Link} to="/Contact">
        Contact
      </Button>
    </Box>
  );
  return (
    <AppBar position="static" sx={{ bgcolor: "grey" }} component={"nav"}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open Drawer"
          edge="start"
          sx={{ mr: 2, sm: "none" }}
          onClick={handleDrawerToggle}
        >
          <IoMenuSharp />
        </IconButton>
        <Box sx={{ alignItems: "center", mr: 2 }}>
          <img src="/image.png" alt="Zaph Tours Logo" style={{ height: 40 }} />
        </Box>
        <Typography color="goldenrod" variant="h6" sx={{ flexGrow: 1 }}>
          Zaph Tours
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/destination">
            Destinations
          </Button>
          <Button color="inherit" component={Link} to="/TripType">
            Trip Types
          </Button>
          {/* <Button color="inherit" component={Link} to="/">Blog</Button> */}
          <Button color="inherit" component={Link} to="/Contact">
            Contact
          </Button>
        </Stack>
      </Toolbar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        {drawer}
      </Drawer>
      <Box sx={{ p: 1 }}></Box>
    </AppBar>
  );
};

export default Header;
