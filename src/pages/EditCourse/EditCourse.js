import React from 'react';

import { Grid, TextField, Button } from '@material-ui/core';
import { HashLink as Link } from 'react-router-hash-link';

import api from '../../services/api';

import './EditCourse.scss';

class EditCourse extends React.Component {
  constructor() {
    super();

    this.state = {
      pt: {
        name: '',
        description1: '',
        description2: ''
      },
      eng: {
        name: '',
        description1: '',
        description2: ''
      }
    };
  }
  
  componentDidMount() {
    const id = this.props.match.params.id;

    api.get(`/courses/${id}`)
      .then(response => {
        const course = response.data.course;
        this.setState({
          pt: {
            name: course?.name,
            description1: course?.description1,
            description2: course?.description2
          },
          eng: {
            name: course?.name,
            description1: course?.description1,
            description2: course?.description2
          },
        });
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    // try {
    //     const response = await api.post('/sessions', { email });

    //     localStorage.setItem('userEmail', email);
    //     setCurrentUser({
    //       name: response.data.name,
    //       email: response.data.email,
    //       type: response.data.type
    //     });

    //     history.push('/dashboard');
    // } catch (error) {
    //     alert('Login error, try again!');
    // }
  }

  render() {
    const { pt, eng } = this.state;

    return (
      <div className="container edit">
        <h1>Edit Course</h1>

        <form
          onSubmit={this.handleSubmit}
          className="form-container" 
          noValidate 
          autoComplete="off"
        >

          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Grid item xs={12}>
                <h4>English</h4>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="form-input" 
                  required 
                  id="name" 
                  label='Name'
                  type="text"
                  value={pt.name}
                  onChange={e => this.setState({ eng: {name: e.target.value} })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="form-input" 
                  id="description1" 
                  label='Description 1'
                  multiline
                  rows={5}
                  value={pt.description1}
                  onChange={e => this.setState({ eng: {description1: e.target.value} })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="form-input" 
                  id="description2" 
                  label='Description 2'
                  multiline
                  rows={5}
                  value={pt.description2}
                  onChange={e => this.setState({ eng: {description2: e.target.value} })}
                />
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Grid item xs={12}>
                <h4>Portuguese</h4>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="form-input" 
                  required 
                  id="name" 
                  label='Name'
                  type="text"
                  value={pt.name}
                  onChange={e => this.setState({ pt: {name: e.target.value} })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="form-input" 
                  id="description1" 
                  label='Description 1'
                  multiline
                  rows={5}
                  value={pt.description1}
                  onChange={e => this.setState({ pt: {description1: e.target.value} })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="form-input" 
                  id="description2" 
                  label='Description 2'
                  multiline
                  rows={5}
                  value={pt.description2}
                  onChange={e => this.setState({ pt: {description2: e.target.value} })}
                />
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

export default EditCourse;