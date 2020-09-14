import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Language from './components/ChooseLanguage/ChooseLanguage';

import HomePage from './pages/Home/Home';
import LoginPage from './pages/Login/Login';
import CreateAccountPage from './pages/CreateAccount/CreateAccount';
import CheckoutPage from './pages/Checkout/Checkout';
import CartPage from './pages/Cart/Cart';
import SecurityPolicy from './pages/SecurityPolicy/SecurityPolicy';

import DashboardPage from './pages/Dashboard/Dashboard';

import api from './services/api';

import { setCourses } from './redux/course/course.actions';

import './App.scss';

class App extends React.Component {

  componentDidMount() {
    const { setCourses } = this.props;
    
    api.get('/courses')
      .then(response => {
        setCourses(response.data);
    });
  }

  render() {
    return (
      <div>
        <Language />
        <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/cart' component={CartPage} />
            <Route path='/checkout' component={CheckoutPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/create-account' component={CreateAccountPage} />
            <Route path='/security-policy' component={SecurityPolicy} />
  
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

const mapDispatchToProps = dispatch => {
  return {
    setCourses: courses => dispatch(setCourses(courses))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
