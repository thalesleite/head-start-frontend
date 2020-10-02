import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { HashLink as Link } from 'react-router-hash-link';

import EditIcon from '@material-ui/icons/Edit';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import ScheduleIcon from '@material-ui/icons/Schedule';

import { selectCourses } from '../../redux/course/course.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { setCourses } from '../../redux/course/course.actions';

import api from '../../services/api';

import './Dashboard.scss';

class Dashboard extends React.Component {
  constructor() {
    super();

    this.state = {
      userCourses: ''
    }
  };

  async componentDidMount() {
    const userId = localStorage.getItem('userId');

    if ( userId ) {
      await api.get(`/user-courses/${userId}`)
          .then(response => {
            this.setState({ userCourses: response.data.course });
      });
    } else {
      this.props.history.push('/login');
    }
  }

  formatDate( date ) {
    const formDate = new Date(date);
    const day = formDate.getDate();
    const year = formDate.getFullYear();
    const month = formDate.getMonth() + 1;

    return day + '/' + month + '/' + year;
  }

  isDeadline(deadline) {
    const formDate = new Date(deadline);
    const today = new Date();

    return this.formatDate(formDate) === this.formatDate(today);
  }

  render() {
    const { courses, currentUser } = this.props;
    const { userCourses } = this.state;

    return (
      <div className="container dashboard">
        <h1>Hi, { currentUser?.name }!</h1>

        {
          currentUser?.type === 0 ? (
            <div>
              <p>Admin</p>

              <div>
                <Link
                  className="add-button"
                  to='/add-course/'
                >
                  Add Course <AddCircleOutlineIcon />
                </Link>
              </div>
              {
                courses && courses.map( course => (
                  <div key={ course.id } className="course">
                    <span className="name"> { course.name }</span>
                    {/* <Link
                      className="delete-button"
                      onClick={() => {}}
                    >
                      delete 
                      <DeleteIcon />
                    </Link> */}
                    <Link
                      className="edit-button"
                      to={`/edit-course/${course.id}`}
                    >
                      edit 
                      <EditIcon />
                    </Link>
                  </div>
                ))
              }
            </div>
          ) : (
            <div>
              <p>Student</p>

              {
                userCourses ? 
                  (userCourses.map( course => (
                    <div key={ course?.id } className="course">
                      <span className="name"> { course?.name }</span>

                      <span className="deadline">
                        DEADLINE: <b>{ this.formatDate(course?.deadline) }</b>
                      </span>

                      {
                        course?.type === 'online' ? (
                          
                          course?.level === 0 ? (
                            <Link
                              className="add-button"
                              to='#'
                              disabled={true}
                            >
                              Finished
                            </Link>
                          ) : (

                            this.isDeadline(course?.deadline) ? (
                              <Link
                                className="add-button"
                                to='#'
                                disabled={true}
                              >
                                Expired
                            </Link>
                            ) : (
                              <Link
                                className="edit-button"
                                to='/course'
                                target="_blank"
                              >
                                Open 
                                <OpenInNewIcon />
                              </Link>
                            )
                          )

                        ) : (

                          this.isDeadline(course?.deadline) ? (
                            <Link
                              className="add-button"
                              to='#'
                              disabled={true}
                            >
                              Purchased
                            </Link>
                          ) : (
                            <Link
                              className="edit-button"
                              to='#'
                            >
                              Schedule 
                              <ScheduleIcon />
                            </Link>
                          )
                        )
                      }
                    </div>
                  ))
                ) : ''
              }
            </div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  courses: selectCourses,
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => {
  return {
    setCourses: courses => dispatch(setCourses(courses))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);