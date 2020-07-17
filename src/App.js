import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import Header from './components/Header/Header';

import HomePage from './pages/Home/Home';
import AboutUsPage from './pages/AboutUs/AboutUs';
import CoursesPage from './pages/Courses/Courses';
import ContactPage from './pages/Contact/Contact';
import LoginPage from './pages/Login/Login';

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
      </Switch>
    </div>
  );
}

export default App;