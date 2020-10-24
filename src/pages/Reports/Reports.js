import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { CSVLink } from 'react-csv';
import {
  IconButton,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableFooter,
  TablePagination,
  Paper,
  TextField
} from '@material-ui/core';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import GetAppIcon from '@material-ui/icons/GetApp';

import api from '../../services/api';

import './Reports.scss';

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

class Reports extends React.Component {
  constructor() {
    super();

    this.state = {
      report: [],
      reportFiltered: [],
      page: 0,
      rowsPerPage: 5,
      name: '',
      email: '',
      course: '',
      dateScheduled: '',
      type: '',
      datePurchased: '',
      voucher: ''
    }
  };

  async componentDidMount() {
    const userId = localStorage.getItem('userId');

    if ( userId ) {
      await api.get(`/reports/`)
          .then(response => {
            this.setState({ report: response.data });
            this.setState({ reportFiltered: response.data });
      });
    } else {
      this.props.history.push('/login');
    }
  }

  formatDate(date) {
    if (!date) return '';

    const formDate = new Date(date);
    const day = formDate.getDate();
    const year = formDate.getFullYear();
    const month = formDate.getMonth() + 1;

    return day + '/' + month + '/' + year;
  }

  handleDataCSV(rowsData) {
    const csv = [];

    csv.push(['Name', 'Email', 'Course', 'Date Scheduled', 'Type', 'Date Purchased', 'Voucher']);
    if( rowsData.length > 0 ) {
      rowsData.forEach((cell) => {
        csv.push([
          cell?.user?.name,
          cell?.user?.email,
          cell?.course?.name,
          this.formatDate(cell?.date_course),
          cell?.course?.type,
          this.formatDate(cell?.date_purchase),
          cell?.voucher
        ]);
      });
    }

    return csv;
  }

  handleNameFilter(e) {
    const filter = e.target.value;
    const tag = e.target.id;

    const { report } = this.state;
    if ( report.length > 0 ) {
      const result = report.filter(
        data => {
          if ( tag === 'name' ) {
            this.setState({
              name: e.target.value
            });

            return data?.user?.name?.toLowerCase()?.includes(filter?.toLowerCase());
          }

          if (tag === 'email') {
            this.setState({
              email: e.target.value
            });

            return data?.user?.email?.toLowerCase()?.includes(filter?.toLowerCase());
          }

          if (tag === 'course') {
            this.setState({
              course: e.target.value
            });

            return data?.course?.name?.toLowerCase()?.includes(filter?.toLowerCase());
          }

          if (tag === 'dateScheduled') {
            this.setState({
              dateScheduled: e.target.value
            });

            const scheduled = this?.formatDate(data?.date_course);
            return scheduled?.toLowerCase()?.includes(filter?.toLowerCase());
          }

          if (tag === 'type') {
            this.setState({
              type: e.target.value
            });

            return data?.course?.type?.toLowerCase()?.includes(filter?.toLowerCase());
          }

          if (tag === 'datePurchased') {
            this.setState({
              datePurchased: e.target.value
            });

            const purchased = this.formatDate(data?.date_purchase);
            return purchased?.toLowerCase()?.includes(filter?.toLowerCase());
          }

          if (tag === 'voucher') {
            this.setState({
              voucher: e.target.value
            });
            return data?.voucher?.toLowerCase()?.includes(filter?.toLowerCase());
          }
        }
      );

      if (result && filter) {
        this.setState({ reportFiltered: result });
      } else {
        this.setState({ reportFiltered: report });
      }
    }
  }

  render() {
    const {
      reportFiltered,
      page,
      rowsPerPage,
      name,
      email,
      course,
      dateScheduled,
      type,
      datePurchased,
      voucher
    } = this.state;
    const rows = reportFiltered.length > 0 ? reportFiltered : [];
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    const rowsData = rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows;

    return (
      <div className="container reports">
        <div className="report">
          <h1>Reports</h1>

          <Grid container spacing={4}>
            <Grid  className="download" item xs={12}>
              <CSVLink data={this.handleDataCSV(rowsData)}>Download <GetAppIcon/></CSVLink>
            </Grid>
             <Grid className="filter" item xs={12}>
               <Grid item xs={12}>
                <TextField
                  className="form-input" 
                  required 
                  id="name" 
                  label='Name'
                  type="text"
                  value={name}
                  onChange={e => {
                    this.handleNameFilter(e);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="form-input" 
                  required 
                  id="email" 
                  label='Email'
                  type="text"
                  value={email}
                  onChange={e => {
                    this.handleNameFilter(e);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="form-input" 
                  required 
                  id="course" 
                  label='Course'
                  type="text"
                  value={course}
                  onChange={e => {
                    this.handleNameFilter(e);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="form-input" 
                  required 
                  id="dateScheduled" 
                  label='Date Scheduled'
                  type="text"
                  value={dateScheduled}
                  onChange={e => {
                    this.handleNameFilter(e);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="form-input" 
                  required 
                  id="type" 
                  label='Type'
                  type="text"
                  value={type}
                  onChange={e => {
                    this.handleNameFilter(e);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="form-input" 
                  required 
                  id="datePurchased" 
                  label='Date Purchased'
                  type="text"
                  value={datePurchased}
                  onChange={e => {
                    this.handleNameFilter(e);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="form-input" 
                  required 
                  id="voucher" 
                  label='Voucher'
                  type="text"
                  value={voucher}
                  onChange={e => {
                    this.handleNameFilter(e);
                  }}
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>

              <TableContainer component={Paper}>
                <Table className="table" aria-label="customized pagination table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Course</TableCell>
                      <TableCell>Date Scheduled</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>Date Purchased</TableCell>
                      <TableCell>Voucher</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowsData.map((row) => (
                      <TableRow key={row._id}>
                        <TableCell component="th" scope="row">{row?.user?.name}</TableCell>
                        <TableCell>{row?.user?.email}</TableCell>
                        <TableCell>{row?.course?.name}</TableCell>
                        <TableCell>{this.formatDate(row?.date_course)}</TableCell>
                        <TableCell>{row?.course?.type}</TableCell>
                        <TableCell>{this.formatDate(row?.date_purchase)}</TableCell>
                        <TableCell>{row?.voucher}</TableCell>
                      </TableRow>
                    ))}

                    {emptyRows > 0 && (
                      <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                        colSpan={3}
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        SelectProps={{
                          inputProps: { 'aria-label': 'rows per page' },
                          native: true,
                        }}
                        onChangePage={(event ,newPage) => this.setState({ page: newPage })}
                        onChangeRowsPerPage={event => {
                          this.setState({
                            rowsPerPage: parseInt(event.target.value, 10),
                            page: 0
                          });
                        }}
                        ActionsComponent={TablePaginationActions}
                      />
                    </TableRow>
                  </TableFooter>
                </Table>
              </TableContainer>

            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Reports;