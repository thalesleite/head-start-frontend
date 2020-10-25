import React from 'react';

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

import { Grid, TextField, Button, Select, MenuItem, InputLabel } from '@material-ui/core';
import { HashLink as Link } from 'react-router-hash-link';

import api from '../../services/api';

import './EditCourseDate.scss';

class EditCourseDate extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      dateCourse: new Date()
    };
  }
  
  componentDidMount() {
    const id = this.props.match.params.id;

    api.get(`/user-courses-course/${id}`)
      .then(response => {
        const course = response.data._doc;
        const userCourse = response.data.userCourse;
        this.setState({
          id: userCourse._id,
          name: course?.name
        });
    });
  }

  filterWeekdays(date) {
    // Return false if Sunday or Monday or Wednesday or Friday
    return date.getDay() === 0 || date.getDay() === 1 || date.getDay() === 3 || date.getDay() === 5;
  }

  TextFieldComponent(props){
    return <TextField {...props} disabled={true} />
  }

  async handleSubmit() {
    const { 
      id,
      dateCourse
    } = this.state;

    try {
        await api.put(`/user-courses-date/`, {
          id,
          dateCourse
        });

        this.props.history.push('/dashboard');
        window.location.reload(false);
    } catch (error) {
        alert('Edit user error!!!');
    }
  }

  render() {
    const { 
      name, 
      dateCourse
    } = this.state;

    return (
      <div className="container edit">
        <h1>Course Schedule</h1>

        <form
          onSubmit={(e) => { 
            e.preventDefault();
            this.handleSubmit();
          }}
          className="form-container" 
          noValidate 
          autoComplete="off"
        >

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Grid item xs={12}>
                Course: <b>{ name }</b>
              </Grid>
              <Grid item xs={12}>
                 <MuiPickersUtilsProvider utils={DateFnsUtils}>
                     <KeyboardDatePicker
                      disablePast
                      margin="normal"
                      id="date-picker-dialog"
                      label="Date Course"
                      format="dd/MM/yyyy"
                      value={dateCourse}
                      onChange = {
                        date => this.setState({
                          dateCourse: date
                        })
                      }
                      shouldDisableDate={this.filterWeekdays}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                      TextFieldComponent={this.TextFieldComponent}
                    />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={12}>
                Time: <b>1:00 PM</b>
              </Grid>
            </Grid>
           
            <Grid item xs={12}>
              <Button 
                className="btn-save float-r"
                type="submit"
              >
                Save
              </Button>
              <Link 
                className="btn-cancel float-r"
                to='/dashboard'
              >
                Cancel
              </Link>
            </Grid>
          </Grid>

        </form>
      </div>
    )
  };
}

export default EditCourseDate;