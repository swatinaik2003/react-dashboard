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

onst data = [
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

