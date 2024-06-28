// Dashboard.jsx

import React from 'react';
import { AppBar, Toolbar, Typography, CssBaseline, Drawer, List, ListItem, ListItemText, Box, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { mockTransactions } from './mockData/mockData'; // Assuming mockData is in src/mockData/mockData.js
import RevenueChart from './components/RevenueChart'; // Adjust import path as per your project structure

const drawerWidth = 240;

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Primary Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Dashboard', 'Transactions', 'Reports'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Container>
          <Typography variant="h4" gutterBottom>
            Revenue Generated
          </Typography>
          <RevenueChart data={mockTransactions} />
          <Typography variant="h4" gutterBottom>
            Transactions
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Transaction ID</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Cost</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mockTransactions.map((transaction) => (
                  <TableRow key={transaction.txId}>
                    <TableCell>{transaction.txId}</TableCell>
                    <TableCell>{transaction.user}</TableCell>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.cost}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;