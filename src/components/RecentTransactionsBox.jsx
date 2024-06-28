import React from 'react';
import { Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material';
import { mockTransactions } from '../mockData/mockData';

const RecentTransactionsBox = () => (
  <Box sx={{ height: '100%', overflowY: 'auto' }}>
    <Typography variant="h6" gutterBottom>
      Recent Transactions
    </Typography>
    <TableContainer component={Paper} sx={{ maxHeight: 300 }}>
      <Table sx={{ minWidth: 650 }} aria-label="recent transactions">
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
  </Box>
);

export default RecentTransactionsBox;
