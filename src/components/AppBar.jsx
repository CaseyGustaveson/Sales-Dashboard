import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const CustomAppBar = ({ handleDrawerToggle }) => (
  <AppBar position="fixed">
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        edge="start"
        sx={{ marginRight: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div">
        Primary Dashboard
      </Typography>
    </Toolbar>
  </AppBar>
);

export default CustomAppBar;
