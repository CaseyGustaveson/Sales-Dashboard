import React from 'react';
import { Typography, Button, Grid, Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { mockTransactions } from '../mockData/mockData';

const TransactionsTable = ({ openDialog }) => (
  <Grid item xs={12}>
    <Button variant="contained" color="primary" onClick={openDialog}>
      Add Transaction
    </Button>
    <TableContainer component={Paper} sx={{ marginTop: 2 }}>
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
  </Grid>
);

export default TransactionsTable;
