import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/Home/Home';
import LoginPage from './pages/Login/Login';

import DashboardPage from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/login' component={LoginPage} />

          <Route path='/dashboard' component={DashboardPage} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;