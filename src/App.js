import React from 'react';
import { createStructuredSelector } from 'reselect';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';

import Main from './containers/Main';
import MainCourse from './containers/MainCourse';

import Language from './components/ChooseLanguage/ChooseLanguage';

import HomePage from './pages/Home/Home';
import LoginPage from './pages/Login/Login';
import CreateAccountPage from './pages/CreateAccount/CreateAccount';
import CreateAccountMessagePage from './pages/CreateAccountMessage/CreateAccountMessage';
import EditUser from './pages/EditUser/EditUser';
import CartPage from './pages/Cart/Cart';
import SecurityPolicy from './pages/SecurityPolicy/SecurityPolicy';
import DashboardPage from './pages/Dashboard/Dashboard';
import ReportPage from './pages/Reports/Reports';
import CoursePage from './pages/Course/Course';
import EditCourseDate from './pages/EditCourseDate/EditCourseDate';
import EditCoursePage from './pages/EditCourse/EditCourse';
import AddCoursePage from './pages/AddCourse/AddCourse';
import CongratulationsPage from './pages/Congratulations/Congratulations';
import SuccessPage from './pages/Success/Success';
import CancelPage from './pages/Cancel/Cancel';
import ForgotPasswordPage from './pages/ForgotPassword/ForgotPassword';
import ResetPasswordPage from './pages/ResetPassword/ResetPassword';

import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCourses } from './redux/course/course.selectors';

import api from './services/api';

import { setCourses } from './redux/course/course.actions';
import { setCurrentUser } from './redux/user/user.actions';

import './App.scss';

class App extends React.Component {

  componentDidMount() {
    const { setCourses } = this.props;
    
    api.get('/courses-active')
      .then(response => {
        setCourses(response.data);

        const userId = localStorage.getItem('userId');
        if ( userId ) {
          this.handleUser( userId );
        }
    });
  }

  async handleUser( id ) {
    const { setCurrentUser, setCourses } = this.props;

    const response = await api.get(`/user/${id}`);
    setCurrentUser({
      id: response.data._id,
      name: response.data.name,
      email: response.data.email,
      type: response.data.type,
      level: response.data.level
    });

    if ( response.data.type === 0 ) {
      api.get('/courses')
      .then(resp => {
        setCourses(resp.data);
    });
    }
  }

  render() {

    return (
      <Router>
        <Switch>
          <Route path='/course/:path?' exact>
            <MainCourse>
              <Switch>
                <Route exact path='/course' component={CoursePage} />
              </Switch>
            </MainCourse>
          </Route>

          <Route>
            <Main>
              <Language />
              <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/cart' component={CartPage} />
                <Route exact path='/login' component={LoginPage} />
                <Route exact path='/forgot-password' component={ForgotPasswordPage} />
                <Route exact path='/reset/:token' component={ResetPasswordPage} />
                <Route exact path='/create-account' component={CreateAccountPage} />
                <Route exact path='/create-account-message' component={CreateAccountMessagePage} />
                <Route exact path='/security-policy' component={SecurityPolicy} />
                
                <Route exact path='/dashboard' component={DashboardPage} />
                <Route exact path='/reports' component={ReportPage} />
                <Route exact path='/edit-user/:id' component={EditUser} />
                <Route exact path='/edit-course/:id' component={EditCoursePage} />
                <Route exact path='/edit-course-date/:id' component={EditCourseDate} />
                <Route exact path='/add-course' component={AddCoursePage} />
                <Route exact path='/congratulations' component={CongratulationsPage} />
                <Route exact path='/success' component={SuccessPage} />
                <Route exact path='/cancel' component={CancelPage} />
              </Switch>
            </Main>
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  courses: selectCourses,
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => {
  return {
    setCourses: courses => dispatch(setCourses(courses)),
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
