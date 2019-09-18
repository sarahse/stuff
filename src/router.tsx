import React from 'react';
import Dashboard from './pages/dashboard';
import Login from './pages/login';

const Routes = {
  '/login': () => <Login />,
  '/': () => <Dashboard />
};

export default Routes;
