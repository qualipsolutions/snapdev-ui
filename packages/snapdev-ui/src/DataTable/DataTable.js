import { Link } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import MuiTableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import PropTypes from 'prop-types';
import React from 'react';

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const getComparator = (order, orderBy) =>
  order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);

const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};

const TableHead = (props) => {
  const { classes, order, orderBy, onRequestSort, dataSource } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <MuiTableHead>
      <TableRow>
        <TableCell padding="checkbox" />
        {dataSource.head
          .filter((i) => i.visible)
          .map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
      </TableRow>
    </MuiTableHead>
  );
};

TableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  dataSource: PropTypes.object.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
    border: 'none',
    borderRadius: 0,
  },
  table: {
    minWidth: 750,
  },
  tabelRow: {
    '& a': {
      color: 'unset',
    },
    '&.Mui-selected, &.Mui-selected td, &.Mui-selected th, &.Mui-selected th .MuiTypography-colorPrimary, &.Mui-selected:hover': {
      backgroundColor: '#3f51b5',
      color: '#fff',
    },
    '&.Mui-selected th a.MuiTypography-colorPrimary': {
      cursor: 'pointer',
    },
    '& th a.MuiTypography-colorPrimary': {
      cursor: 'pointer',
    },
  },
  CheckboxColorPrimary: {
    '&.Mui-checked': {
      color: '#fff',
    },
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

const DataTable = (props) => {
  const {
    dataSource,
    orderByField,
    onSelectedRow,
    onDeselectedRow,
    navigator,
  } = props;

  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState(orderByField);
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const columns = dataSource.head.filter((i) => i.visible).map((i) => i.id);
  // console.log(columns);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClick = (event, name, row) => {
    const selectedIndex = selected.indexOf(name);
    const currentSelected = [];
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(currentSelected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(currentSelected.slice(1));
    } else if (selectedIndex === currentSelected.length - 1) {
      newSelected = newSelected.concat(currentSelected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        currentSelected.slice(0, selectedIndex),
        currentSelected.slice(selectedIndex + 1)
      );
    }

    if (newSelected.length > 0) {
      if (onSelectedRow) {
        onSelectedRow(row);
      }
    } else if (onDeselectedRow) {
      onDeselectedRow();
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, dataSource.rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <TableContainer>
        <Table
          className={classes.table}
          aria-labelledby="tableTitle"
          size="medium"
          aria-label="enhanced table"
        >
          <TableHead
            classes={classes}
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={dataSource.rows.length}
            dataSource={dataSource}
          />
          <TableBody>
            {stableSort(dataSource.rows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const isItemSelected = isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.name, row)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.name}
                    selected={isItemSelected}
                    classes={{ root: classes.tabelRow }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        classes={{ colorPrimary: classes.CheckboxColorPrimary }}
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      <Link
                        onClick={(event) => {
                          event.preventDefault();
                          if (navigator) {
                            navigator.push(row.href);
                          }
                        }}
                      >
                        {row.name}
                      </Link>
                    </TableCell>
                    {columns.slice(1).map((col) => (
                      <TableCell key={col} align="left">
                        {row[col]}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={dataSource.rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default DataTable;
