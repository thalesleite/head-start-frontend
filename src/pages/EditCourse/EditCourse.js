import React from 'react';

import { Grid, TextField, Button, Select, MenuItem, InputLabel } from '@material-ui/core';
import { HashLink as Link } from 'react-router-hash-link';

import api from '../../services/api';

import './EditCourse.scss';

class EditCourse extends React.Component {
  constructor() {
    super();

    this.state = {
      id: '',
      name: '',
      description1: '',
      description2: '',
      description1_pt: '',
      description2_pt: '',
      type: '',
      price: 0,
      duration: 0,
      active: 0
    };
  }
  
  componentDidMount() {
    const id = this.props.match.params.id;

    api.get(`/courses/${id}`)
      .then(response => {
        const course = response.data.course;
        this.setState({
          id: id,
          name: course?.name,
          description1: course?.description1,
          description2: course?.description2,
          description1_pt: course?.description1_pt,
          description2_pt: course?.description2_pt,
          type: course?.type,
          price: course?.price,
          duration: course?.duration,
          active: course?.active
        });
    });
  }

  async handleSubmit() {
    const { 
      id,
      name, 
      description1, 
      description2, 
      description1_pt, 
      description2_pt,
      type,
      price,
      duration,
      active
    } = this.state;

    try {
        const response = await api.put(`/courses/${id}`, { 
          id,
          name,
          description1,
          description2,
          description1_pt,
          description2_pt,
          type,
          price,
          duration,
          active
        });

        this.props.history.push('/dashboard');
    } catch (error) {
        alert('Edit course error!!!');
    }
  }

  render() {
    const { 
      name, 
      description1, 
      description2, 
      description1_pt, 
      description2_pt,
      type,
      price,
      duration,
      active
    } = this.state;

    return (
      <div className="container edit">
        <h1>Edit Course</h1>

        <form
          onSubmit={(e) => { 
            e.preventDefault();
            this.handleSubmit();
          }}
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
                  value={name}
                  onChange={e => this.setState({ name: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="form-input" 
                  required
                  id="description1" 
                  label='Description 1'
                  multiline
                  rows={5}
                  value={description1}
                  onChange={e => this.setState({ description1: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="form-input" 
                  id="description2" 
                  label='Description 2'
                  multiline
                  rows={5}
                  value={description2}
                  onChange={e => this.setState({ description2: e.target.value })}
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
                  id="description1" 
                  label='Descrição 1'
                  multiline
                  rows={5}
                  value={description1_pt}
                  onChange={e => this.setState({ description1_pt: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="form-input" 
                  id="description2" 
                  label='Descrição 2'
                  multiline
                  rows={5}
                  value={description2_pt}
                  onChange={e => this.setState({ description2_pt: e.target.value })}
                />
              </Grid>
              <Grid className="form-select" item xs={12}>
                <InputLabel id="select-label">Type</InputLabel>
                <Select
                  className="form-input"
                  required
                  labelId="select-label"
                  id="type"
                  value={type}
                  onChange={e => this.setState({ type: e.target.value })}
                >
                  <MenuItem value={'online'}>Online</MenuItem>
                  <MenuItem value={'face-to-face'}>Face-to-face</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="form-input"
                  required
                  id="price" 
                  label='Price'
                  type="number"
                  value={price}
                  onChange={e => this.setState({ price: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="form-input"
                  required
                  id="duration" 
                  label='Duration(days)'
                  type="number"
                  value={duration}
                  onChange={e => this.setState({ duration: e.target.value })}
                />
              </Grid>
              <Grid className="form-select" item xs={12}>
                <InputLabel id="select-active">Active</InputLabel>
                <Select
                  className="form-input"
                  required
                  labelId="select-active"
                  id="active"
                  value={active}
                  onChange={e => this.setState({ active: e.target.value })}
                >
                  <MenuItem value={1}>Yes</MenuItem>
                  <MenuItem value={0}>No</MenuItem>
                </Select>
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