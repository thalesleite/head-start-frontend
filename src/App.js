import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/Home/Home';
import AboutUsPage from './pages/AboutUs/AboutUs';
import CoursesPage from './pages/Courses/Courses';
import ContactPage from './pages/Contact/Contact';
import LoginPage from './pages/Login/Login';

import DashboardPage from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about-us' component={AboutUsPage} />
          <Route path='/courses' component={CoursesPage} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/login' component={LoginPage} />

          <Route path='/dashboard' component={DashboardPage} />
        </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;