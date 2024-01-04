import React, { Fragment,useEffect,useCallback  } from "react";
import PropTypes from "prop-types";
import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  useFilters,
  useExpanded,
  usePagination,
} from "react-table";
import { Table, Row, Col, Button, Input } from "reactstrap";
import { Filter, DefaultColumnFilter } from "./filters";
import { useSelector, useDispatch } from "react-redux";

// Define a default UI for filtering
    const TableContainer = ({
      columns,
      data,
      customPageSize,
      className,
      getAuctionnerID,
      getRecords,
      count
    }) => {
      const {
       
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
        handleRowClick = (recordId) => {
           getAuctionnerID(recordId)// Call the provided function with the selected auctioneer ID
          }
      } = useTable(
        {
          columns,
          data,
          defaultColumn: { Filter: DefaultColumnFilter },
          manualPagination: true, // Enable manual pagination
          pageCount: Math.ceil(count / 10), 
          
          initialState: { 
            pageIndex: 0, 
            pageSize: customPageSize,
            sortBy: [
              {
                desc: true,
              },
            ],
          },
        },
    useGlobalFilter,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination
  );
  const dispatch = useDispatch()
  const generateSortingIndicator = column => {
    return column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : "";
  };

  const onChangeInSelect = event => {
    setPageSize(Number(event.target.value));
  };

  // const onChangeInInput = event => {
  //   const page = event.target.value ? Number(event.target.value) - 1 : 0;
  //   gotoPage(page);
  //   dispatch(getRecords(pageSize, page*pageSize));
  // };
  const onChangeInInput = useCallback(
    event => {
      const page = event.target.value ? Number(event.target.value) - 1 : 0;
      gotoPage(page);
      dispatch(getRecords(pageSize, page*pageSize));
    },
    [gotoPage]
  );
  const handleNext = () =>{
    nextPage();
    dispatch(getRecords(pageSize, pageIndex*pageSize));
  }
   
  // const data = useSelector(state => state.AuctioneerReducer.auctioneersList)
 useEffect(() => {
  console.log("Updated pageIndex:", pageIndex);
  dispatch(getRecords(pageSize, pageIndex));
}, [dispatch]);
 
  console.log(pageCount,"pageCount");
  return (
    <Fragment>
      <div className="table-responsive react-table">
        <Table bordered hover {...getTableProps()} className={className}>
          <thead className="table-light table-nowrap">
            {headerGroups.map(headerGroup => (
              <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th key={column.id}>
                    <div className="mb-2" {...column.getSortByToggleProps()}>
                      {column.render("Header")}
                      {generateSortingIndicator(column)}
                    </div>
                    <Filter column={column} />
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map(row => {
              prepareRow(row);
              return (
                <Fragment key={row.getRowProps().key}>
                  <tr onClick={()=>{
                     const recordId = row.original.id;
                     handleRowClick(recordId)
                   
                  }}>
                    {row.cells.map(cell => {
                      return (
                        <td key={cell.id} {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </Table>
      </div>

      <Row className="justify-content-md-end justify-content-center align-items-center">
        <Col className="col-md-auto">
          <div className="d-flex gap-1">
            <Button
              color="primary"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              {"<<"}
            </Button>
            <Button
              color="primary"
              onClick={previousPage}
              disabled={!canPreviousPage}
            >
              {"<"}
            </Button>
          </div>
        </Col>
        <Col className="col-md-auto d-none d-md-block">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </Col>
        <Col className="col-md-auto">
          <Input
            type="number"
            min={1}
            style={{ width: 70 }}
            max={pageOptions.length}
            defaultValue={pageIndex + 1}
            onChange={onChangeInInput}
          />
        </Col>

        <Col className="col-md-auto">
          <div className="d-flex gap-1">
            <Button color="primary" onClick={handleNext} disabled={!canNextPage}>
              {">"}
            </Button>
            <Button
              color="primary"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>"}
            </Button>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

TableContainer.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
};

export default TableContainer;
