// Sidebar.jsx

import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = ({ sidebarOpen, handleDrawerToggle, selectedItem, handleListItemClick }) => {
  return (
    <Drawer
      variant="permanent"
      open={sidebarOpen}
      onClose={handleDrawerToggle}
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
      }}
    >
      <List>
        {['Dashboard', 'Transactions', 'Reports'].map((text, index) => (
          <ListItem
            button
            key={text}
            selected={selectedItem === text}
            onClick={() => handleListItemClick(text)}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
