import React,{useEffect,useState,useMemo} from 'react'
import Breadcrumb from '../../components/Common/Breadcrumb';
import { Card, Col, Row, Table,Spinner, TabContent } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import {getAuctioneers as onGetAuctioneers, searchAuctioneersRequest as onSearchAuctioneer} from  "/src/store/actions";
import { useSelector, useDispatch } from "react-redux";
import TableContainer from '../../common/TableConatiner';



document.title = "Auctioneer List | Bsstah";

const AuctioneerList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState('');
  // from redux state 
   const auctioneerList = useSelector(state => state.AuctioneerReducer.auctioneersList)
  const baseAuctioneerList = useSelector(state => state.AuctioneerReducer)
  const isLoading = useSelector(state => state.AuctioneerReducer.loading);
  const count = useSelector(state => state.AuctioneerReducer.count)

      const getAuctionnerID = (recordId) =>{
        history.push(`/auctioneer-details/${recordId}`);
      }
      const handleChange = (e) =>{
        const value = e.target.value;
        setSearchQuery(value);
        if(value == ""){
          dispatch(onGetAuctioneers(10,0))
        }else{
          dispatch(onSearchAuctioneer(100000,0,value))
        }
       
      }
const columns = useMemo(
  () => [
      {
          Header: 'ID',
          accessor: 'id',
      },
      {
          Header: 'Display Name',
          accessor: 'fullName'
      },
      {
          Header: 'Phone',
          accessor: 'userName'
      },
      {
          Header: 'Email',
          accessor: 'email'
      },
      {
          Header: 'Username',
          accessor: ''
      },
      {
          Header: 'Nationality',
          accessor: 'nationality'
      },
      {
        Header:'Account Status',
        accessor:'accountStatus'
      },
      {
        Header:'Auction House Name',
        accessor:'auctionHouseName'
      }
  ],
  []
);


  return (
    <>
    <div className='page-content'>
      <div className='container-fluid'>
        <Breadcrumb title="Auctioneer" breadcrumbItem="Auctioneer List"/>
        <Row>
          <Col md={12}>
            <Card>
            <Card className="mb-3">
            <div className="d-flex justify-content-between p-2 align-items-center">
                        <div>
                        <form className="app-search d-none d-lg-block">
                        <div className="position-relative">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                            value={searchQuery}
                            name='searchAuctioneer'
                            onChange={handleChange}
                            />
                            <span className="bx bx-search-alt" />
                        </div>
                        </form>
                        </div>
                        <div>
                          <Link to="create-auctioneer" className="btn btn-primary text-white btn-rounded">
                            <i className='mdi mdi-plus me-1'></i>
                            Add Auctioneer
                          </Link>
                        </div>
              </div>
            </Card>
            <TableContainer 
            columns={columns}
            data={auctioneerList}
            isGlobalFilter={true}
            isAddOptions={false}
            customPageSize={baseAuctioneerList.limit}
            customPageIndex={baseAuctioneerList.offset}
            className="custom-header-css"
            getAuctionnerID={getAuctionnerID}
            getRecords={onGetAuctioneers}
            count={count}
            isLoading={isLoading}
            searchRequest={onSearchAuctioneer}
          />    
          
            </Card>
          </Col>
        </Row>
      </div>
    </div>
    </>
  )
}

export default AuctioneerList