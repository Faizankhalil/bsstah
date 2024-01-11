import React,{useEffect,useState,useMemo} from 'react'
import Breadcrumb from '../../components/Common/Breadcrumb';
import { Card, Col, Row, Table,Spinner, TabContent } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import {getBidders as onGetBidder, searchAuctioneersRequest as onSearchAuctioneer} from  "/src/store/actions";
import { useSelector, useDispatch } from "react-redux";
import TableContainer from '../../common/TableConatiner';



document.title = "Bsstah";

const BidderList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState('');
  // from redux state 
   const bidderList = useSelector(state => state.BidderReducer.biddersList)
  const baseBidderList = useSelector(state => state.BidderReducer)
  const isLoading = useSelector(state => state.BidderReducer.loading);
  const count = useSelector(state => state.BidderReducer.count)

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
          accessor: 'fullName.en'
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
      }
  ],
  []
);


  return (
    <>
    <div className='page-content'>
      <div className='container-fluid'>
        <Breadcrumb title="Bidder" breadcrumbItem="Bidder List"/>
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
                          <Link to="#" className="btn btn-primary text-white btn-rounded">
                            <i className='mdi mdi-plus me-1'></i>
                            Add Bidder
                          </Link>
                        </div>
              </div>
            </Card>
            <TableContainer 
            columns={columns}
            data={bidderList}
            isGlobalFilter={true}
            isAddOptions={false}
            customPageSize={baseBidderList.limit}
            customPageIndex={baseBidderList.offset}
            className="custom-header-css"
            getAuctionnerID={getAuctionnerID}
            getRecords={onGetBidder}
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

export default BidderList