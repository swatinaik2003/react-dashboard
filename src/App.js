// src/App.js
import React from 'react';
import { Container, Grid, Paper, Typography, List, ListItem, ListItemText, ListItemIcon, IconButton, Divider, Drawer, Box } from '@mui/material';
import { LineChart, Line, PieChart, Pie, Cell, BarChart, Bar, Tooltip, ResponsiveContainer } from 'recharts';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const data = [
  { name: 'Jan', revenue: 4000, expenses: 2400 },
  { name: 'Feb', revenue: 3000, expenses: 1398 },
  { name: 'Mar', revenue: 2000, expenses: 9800 },
  { name: 'Apr', revenue: 2780, expenses: 3908 },
  { name: 'May', revenue: 1890, expenses: 4800 },
  { name: 'Jun', revenue: 2390, expenses: 3800 },
  { name: 'Jul', revenue: 3490, expenses: 4300 },
];

// Dummy activities data
const activities = [
  'Order #12345 placed by John Doe',
  'Payment of $125 received from Anna Smith',
  'Product #678 added to inventory',
  'Order #678 shipped to customer',
  'Review received for Product #123',
  'New customer sign-up: Maria Garcia',
];

// Sidebar content
const sidebarItems = [
  { text: 'Dashboard', icon: <DashboardIcon /> },
  { text: 'Analytics', icon: <AnalyticsIcon /> },
  { text: 'Sales', icon: <BarChartIcon /> },
  { text: 'Reports', icon: <ReportIcon /> },
  { text: 'Settings', icon: <SettingsIcon /> },
];

const drawerWidth = 240;

const Sidebar = () => (
  <Drawer
    variant="permanent"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        backgroundColor: '#1e88e5', // Set blue color for sidebar background
        color: 'white', // Set text color to white
        height: '100vh', // Make sidebar full height
      },
    }}
  >
    <Box sx={{ overflow: 'auto', height: '100vh' }}>
      <Typography variant="h5" sx={{ padding: '16px', color: 'white' }}>
        Menu
      </Typography>
      <Divider sx={{ backgroundColor: 'white' }} />
      <List>
        {sidebarItems.map((item, index) => (
          <ListItem
            button
            key={index}
            sx={{
              '&:hover': {
                backgroundColor: '#1565c0', // Darker blue on hover
              },
              color: 'white',
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>
              <IconButton sx={{ color: 'white' }}>
                {item.icon}
              </IconButton>
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  </Drawer>
);

const Dashboard = () => {
  const handleAddClick = () => {
    // Handle the Add click event
    alert("Add action");
  };

  const handleRemoveClick = () => {
    // Handle the Remove click event
    alert("Remove action");
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, height: '100vh', overflow: 'auto' }}
      >
        <Container>
          <Typography variant="h4" gutterBottom>
            Dashboard Overview
          </Typography>
          <Grid container spacing={3}>

            {/* Overview Cards */}
            <Grid item xs={12} md={3}>
              <Paper style={{ padding: '16px' }}>
                <Typography variant="h6">Total Revenue</Typography>
                <Typography variant="h4">$58,094</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper style={{ padding: '16px' }}>
                <Typography variant="h6">Yearly Sales</Typography>
                <Typography variant="h4">127</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper style={{ padding: '16px' }}>
                <Typography variant="h6">Earnings</Typography>
                <Typography variant="h4">10.56%</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper style={{ padding: '16px' }}>
                <Typography variant="h6">Today's Visits</Typography>
                <Typography variant="h4">18.4k</Typography>
              </Paper>
            </Grid>

            {/* Pie Chart Section */}
            <Grid item xs={12} md={6}>
              <Paper style={{ padding: '16px' }}>
                <Typography variant="h6">Invoices Overview</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={data} dataKey="revenue" outerRadius={100}>
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#8884d8' : '#82ca9d'} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>

            {/* Bar Chart Section */}
            <Grid item xs={12} md={6}>
              <Paper style={{ padding: '16px' }}>
                <Typography variant="h6">Revenue vs Expenses</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data}>
                    <Bar dataKey="revenue" fill="#8884d8" />
                    <Bar dataKey="expenses" fill="#82ca9d" />
                    <Tooltip />
                  </BarChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>

            {/* Line Chart Section */}
            <Grid item xs={12}>
              <Paper style={{ padding: '16px' }}>
                <Typography variant="h6">Budget vs Expenses</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data}>
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                    <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
                    <Tooltip />
                  </LineChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>

            {/* Action Buttons with Icons */}
            <Grid item xs={12} md={6}>
              <Paper style={{ padding: '16px' }}>
                <Typography variant="h6">Actions</Typography>
                <IconButton onClick={handleAddClick} aria-label="add">
                  <AddIcon />
                </IconButton>
                <IconButton onClick={handleRemoveClick} aria-label="remove">
                  <RemoveIcon />
                </IconButton>
              </Paper>
            </Grid>

            {/* Recent Activities Section */}
            <Grid item xs={12} md={6}>
              <Paper style={{ padding: '16px' }}>
                <Typography variant="h6">Recent Activities</Typography>
                <List>
                  {activities.map((activity, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={activity} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>

          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
