import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/Home/Home';
import LoginPage from './pages/Login/Login';

import DashboardPage from './pages/Dashboard/Dashboard';

import api from './services/api';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: []
    };
  }

  componentDidMount() {
    api.get('/courses')
      .then(response => {
        this.setState({
          courses: response.data
        });
    });
  }

  render() {
    const { courses } = this.state;
    return (
      <div>
        <Header />
          <Switch>
            <Route exact path='/' component={() => <HomePage courses={courses} />} />
            <Route path='/login' component={LoginPage} />
  
            <Route path='/dashboard' component={DashboardPage} />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;