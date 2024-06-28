// Reports.jsx

import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

// Mock data for reports
const mockReports = [
  { id: 1, title: 'Monthly Sales Report', date: '2024-05-01' },
  { id: 2, title: 'Quarterly Financial Review', date: '2024-04-15' },
  { id: 3, title: 'Yearly Performance Analysis', date: '2023-12-31' },
];

const Reports = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Reports
      </Typography>
      <List>
        {mockReports.map((report) => (
          <ListItem button key={report.id}>
            <ListItemText primary={report.title} secondary={`Date: ${report.date}`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Reports;
