import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { connect } from 'react-redux';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Language from './components/ChooseLanguage/ChooseLanguage';

import HomePage from './pages/Home/Home';
import LoginPage from './pages/Login/Login';
import CreateAccountPage from './pages/CreateAccount/CreateAccount';
import CartPage from './pages/Cart/Cart';
import SecurityPolicy from './pages/SecurityPolicy/SecurityPolicy';
import DashboardPage from './pages/Dashboard/Dashboard';
import EditCoursePage from './pages/EditCourse/EditCourse';
import AddCoursePage from './pages/AddCourse/AddCourse';
import SuccessPage from './pages/Success/Success';
import CancelPage from './pages/Cancel/Cancel';

import { selectCurrentUser } from './redux/user/user.selectors';

import api from './services/api';

import { setCourses } from './redux/course/course.actions';
import { setCurrentUser } from './redux/user/user.actions';

import './App.scss';

class App extends React.Component {

  componentDidMount() {
    const { setCourses } = this.props;
    
    api.get('/courses')
      .then(response => {
        setCourses(response.data);

        const userId = localStorage.getItem('userId');
        if ( userId ) {
          this.handleUser( userId );
        }
    });
  }

  async handleUser( id ) {
    const { setCurrentUser } = this.props;

    const response = await api.get(`/user/${id}`);
    setCurrentUser({
      id: response.data.id,
      name: response.data.name,
      email: response.data.email,
      type: response.data.type
    });
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <Language />
        <Header />
          <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/cart' component={CartPage} />
              <Route exact path='/login' component={LoginPage} />
              <Route exact path='/create-account' component={CreateAccountPage} />
              <Route exact path='/security-policy' component={SecurityPolicy} />
              {
                currentUser ? (
                  <div>
                    <Route exact path='/dashboard' component={DashboardPage} />
                    <Route exact path='/edit-course/:id' component={EditCoursePage} />
                    <Route exact path='/add-course' component={AddCoursePage} />
                    <Route exact path='/success' component={SuccessPage} />
                    <Route exact path='/cancel' component={CancelPage} />
                  </div>
                ) : (
                  <Redirect to='/login' />
                )
              }
          </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  courses: state.courses,
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => {
  return {
    setCourses: courses => dispatch(setCourses(courses)),
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
