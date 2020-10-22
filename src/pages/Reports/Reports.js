import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';

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
  Paper
} from '@material-ui/core';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

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
      report: '',
      page: 0,
      rowsPerPage: 5
    }
  };

  async componentDidMount() {
    const userId = localStorage.getItem('userId');

    if ( userId ) {
      await api.get(`/reports/`)
          .then(response => {
            console.log(response.data)
            this.setState({ report: response.data });
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

  render() {
    const { report, page, rowsPerPage } = this.state;
    const rows = report.length > 0 ? report : [];
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
      <div className="container reports">
        <div className="report">
          <h1>Reports</h1>

          <Grid container spacing={4}>
            <Grid item xs={12}>

              <TableContainer component={Paper}>
                <Table className="table" aria-label="customized pagination table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Course</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>Date Purchase</TableCell>
                      <TableCell>Voucher</TableCell>
                      <TableCell>Date Course</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(rowsPerPage > 0
                      ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      : rows
                    ).map((row) => (
                      <TableRow key={row._id}>
                        <TableCell component="th" scope="row">{row?.user?.name}</TableCell>
                        <TableCell>{row?.course?.name}</TableCell>
                        <TableCell>{row?.course?.type}</TableCell>
                        <TableCell>{this.formatDate(row?.date_purchase)}</TableCell>
                        <TableCell>{row?.voucher}</TableCell>
                        <TableCell>{this.formatDate(row?.date_course)}</TableCell>
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