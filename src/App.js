import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/Home/Home';
import LoginPage from './pages/Login/Login';

import DashboardPage from './pages/Dashboard/Dashboard';

import api from './services/api';

import { setCourses } from './redux/course/course.actions';

import './App.scss';

class App extends React.Component {

  componentDidMount() {
    api.get('/courses')
      .then(response => {
        setCourses(response.data);
    });
  }

  render() {
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
}

const mapStateToProps = state => ({
  courses: state.courses
});

const mapDispatchToProps = dispatch => ({
  setCourses: courses => dispatch(setCourses(courses))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);