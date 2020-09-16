import React, { useState } from 'react';

import { Grid, TextField, Button } from '@material-ui/core';
import { HashLink as Link } from 'react-router-hash-link';

import api from '../../services/api';

import './AddCourse.scss';

function AddCourse() {
  const [ptName, setPtName] = useState();
  const [ptDesc1, setPtDesc1] = useState();
  const [ptDesc2, setPtDesc2] = useState();
  const [engName, setEngName] = useState();
  const [engDesc1, setEngDesc1] = useState();
  const [engDesc2, setEngDesc2] = useState();
  //const history = useHistory();

  async function handleSubmit(event) {
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

  return (
    <div className="container edit">
      <h1>Add Course</h1>

      <form
        onSubmit={handleSubmit}
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
                value={ptName}
                onChange={e => setPtName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="form-input" 
                id="description1" 
                label='Description 1'
                multiline
                rows={5}
                value={ptDesc1}
                onChange={e => setPtDesc1(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="form-input" 
                id="description2" 
                label='Description 2'
                multiline
                rows={5}
                value={ptDesc2}
                onChange={e => setPtDesc2(e.target.value)}
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
                value={engName}
                onChange={e => setEngName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="form-input" 
                id="description1" 
                label='Description 1'
                multiline
                rows={5}
                value={engDesc1}
                onChange={e => setEngDesc1(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="form-input" 
                id="description2" 
                label='Description 2'
                multiline
                rows={5}
                value={engDesc2}
                onChange={e => setEngDesc2(e.target.value)}
              />
            </Grid>
          </Grid>
          
          <Grid item xs={12}>
            <Button 
              className="btn-save float-r"
              type="submit"
            >
              Add
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
}

export default AddCourse;