import React, { Fragment,useEffect,useState  } from "react";
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
import { Table, Row, Col, Button, Input, Spinner } from "reactstrap";
import { Filter, DefaultColumnFilter } from "./filters";
import { useSelector, useDispatch } from "react-redux";

// Define a default UI for filtering
    const TableContainer = ({
      columns,
      data,
      customPageSize,
      customPageIndex,
      className,
      getAuctionnerID,
      getRecords,
      count,
      isLoading,
     
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
        state,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize }
       
      } = useTable(
        {
          columns,
          data,
          defaultColumn: { Filter: DefaultColumnFilter },
          manualPagination: true, // Enable manual pagination
          pageCount: Math.ceil(count / customPageSize), 
          
          initialState: { 
            pageIndex: customPageIndex, 
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

  const onChangeInInput = (event) => {
    const page = event.target.value ? Number(event.target.value) - 1 : 0;
    gotoPage(page);
  };
  const handleRowClick = (recordId) => {
    console.log(recordId,"recordId")
    getAuctionnerID(recordId)// Call the provided function with the selected auctioneer ID
   }

 useEffect(() => {
  console.log("Updated pageIndex:", pageIndex);
  dispatch(getRecords(pageSize, pageIndex));
}, [state.pageIndex,state.pageSize]);

  return (
    
    <Fragment>
      <div className="table-responsive react-table">
      {!isLoading ? (
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
        ):(
          <div>
          <div className='d-flex justify-content-center align-items-center p-5'>
                    <Spinner
                      color="primary"
                      style={{
                        height: '3rem',
                        width: '3rem'
                      }}
                    >
                      Loading...
                    </Spinner>
            </div>
          </div>
        )}
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
            <Button color="primary" onClick={nextPage} disabled={!canNextPage}>
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
