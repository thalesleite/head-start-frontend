import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { HashLink as Link } from 'react-router-hash-link';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import ScheduleIcon from '@material-ui/icons/Schedule';

import { selectCourses } from '../../redux/course/course.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { selectLanguage } from '../../redux/language/language.selectors';

import EN_DATA from '../../data/language/english.data';
import PT_DATA from '../../data/language/portuguese.data';

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
    const { courses, language, currentUser } = this.props;
    const { userCourses } = this.state;
    const text = language === 'EN' ? EN_DATA.sections.dashboard : PT_DATA.sections.dashboard;

    return (
      <div className="container dashboard">
        <div className="user">
          <h1>{ text[0] }, {currentUser?.name}!</h1>
          <Link className="edit-button" to={`/edit-user/${currentUser?.id}`}>
            { text[1] }
            <AccountCircleIcon />
          </Link>
        </div>

        {currentUser?.type === 0 ? (
          <div>
            <p>Admin</p>

            <div>
              <Link className="add-button" to="/add-course/">
                Add Course <AddCircleOutlineIcon />
              </Link>
            </div>
            {courses &&
              courses.map((course) => (
                <div key={course?._id} className="course">
                  <span className="name"> {course.name}</span>
                  <Link
                    className="edit-button"
                    to={`/edit-course/${course._id}`}
                  >
                    Edit
                    <EditIcon />
                  </Link>
                </div>
              ))}
          </div>
        ) : (
          <div>
            <p>{ text[2] }</p>

            {userCourses
              ? userCourses.map((course) => (
                  <div key={course?._id} className="course">
                    <span className="name"> {course?.name}</span>

                      {
                        !course?.dateCourse ? (
                          <span className = "deadline" >
                            { text[3] } <b>{this.formatDate(course?.deadline)}</b>
                          </span>
                        ) : (
                          <span className = "deadline" >
                            { text[4] } <b>{this.formatDate(course?.dateCourse)} - 5:30 PM</b>
                          </span>
                        )
                      }

                    {course?.type === "online" ? (
                      course?.level === 0 ? (
                        <Link className="add-button" to="#" disabled={true}>
                          { text[5] }
                        </Link>
                      ) : this.isDeadline(course?.deadline) ? (
                        <Link className="add-button" to="#" disabled={true}>
                          { text[6] }
                        </Link>
                      ) : (
                        <Link
                          className="edit-button"
                          to="/course"
                          target="_blank"
                        >
                          { text[7] }
                          <OpenInNewIcon />
                        </Link>
                      )
                    ): this.isDeadline(course?.deadline) || course?.dateCourse ? (
                      <Link className="add-button" to="#" disabled={true}>
                        { text[8] }
                      </Link>
                    ) : (
                      <Link
                        className="edit-button"
                        to = {`/edit-course-date/${course?.userCourseId}`}
                      >
                        { text[9] }
                        <ScheduleIcon />
                      </Link>
                    )}
                  </div>
                ))
              : ""}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  courses: selectCourses,
  currentUser: selectCurrentUser,
  language: selectLanguage
});

export default connect(mapStateToProps, null)(Dashboard);