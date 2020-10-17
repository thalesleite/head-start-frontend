import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { Grid, TextField, Button, Select, MenuItem, InputLabel } from '@material-ui/core';
import { HashLink as Link } from 'react-router-hash-link';

import api from '../../services/api';

import './AddCourse.scss';

function AddCourse() {
  const [name, setName] = useState();
  const [description1, setDesc1] = useState();
  const [description2, setDesc2] = useState();
  const [description1_pt, setDesc1Pt] = useState();
  const [description2_pt, setDesc2Pt] = useState();
  const [type, setType] = useState(0);
  const [price, setPrice] = useState();
  const [duration, setDuration] = useState(1);
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
        const response = await api.post('/courses', { 
          name,
          description1,
          description2,
          description1_pt,
          description2_pt,
          type,
          price,
          duration
        });

        history.push('/dashboard');
        window.location.reload(false);
    } catch (error) {
        alert('Add course error!!!');
    }
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
                value={name}
                onChange={e => setName(e.target.value)}
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
                onChange={e => setDesc1(e.target.value)}
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
                onChange={e => setDesc2(e.target.value)}
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
                onChange={e => setType(e.target.value)}
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
                onChange={e => setPrice(e.target.value)}
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
                onChange={e => setDuration(e.target.value)}
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
                id="description1_pt" 
                label='Descrição 1'
                multiline
                rows={5}
                value={description1_pt}
                onChange={e => setDesc1Pt(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="form-input"
                id="description2_pt" 
                label='Descrição 2'
                multiline
                rows={5}
                value={description2_pt}
                onChange={e => setDesc2Pt(e.target.value)}
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