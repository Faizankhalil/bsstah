import React,{useEffect} from 'react'
import { Card, Col, Row, Table,Spinner } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import CustomPagination from '../../components/Common/Pagination';
import Breadcrumb from '../../components/Common/Breadcrumb';
import {getAuctionHouseRequested as onGetAuctioneerHouseList} from  "/src/store/actions";

document.title = "Auction House List | Bsstah";
const AuctionHouseList = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const auctionHouseList = useSelector(state => state.auctionHouseReducer.auctionHouseList)
    const loading = useSelector(state => state.auctionHouseReducer.loading);
    const count = useSelector(state => state.auctionHouseReducer.count)
    useEffect(() => {
        dispatch(onGetAuctioneerHouseList(10,0))
        }, [dispatch])
  return (
    <>
    <div className='page-content'>
        <div className="container-fluid">
            <Breadcrumb title="Auction House" breadcrumbItem="Auction House List"/>
            <Row>
                <Col>
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
                                            />
                                            <span className="bx bx-search-alt" />
                                        </div>
                                        </form>
                                        </div>
                                        <div>
                                        <Link to="/create-auction-house" className="btn btn-primary text-white btn-rounded">
                                            <i className='mdi mdi-plus me-1'></i>
                                            Add License
                                        </Link>
                                        </div>
                            </div>
                        </Card>
                        {auctionHouseList && count ? (
                             <div className="table-responsive">
                             <Table className="table mb-0">
                                 <thead>
                                     <tr>
                                         <th>AHID</th>
                                         <th>Auction House</th>
                                         <th>Trade Licenses En</th>
                                         <th>Auction Status</th>
                                         <th>TL No.</th>
                                         <th>Expiry Date</th>
                                         <th>Owner Name</th>
                                     </tr>
                                 </thead>
                                 <tbody>
                                    {auctionHouseList.map((item)=>(
                                        <tr key={item.id}>
                                            <th scope="row">{item.id}</th>
                                            <td>{item.auctionHouseName}</td>
                                            <td>{item.tradeLicensesName}</td>
                                            <td>{item.auctionHouseStatus}</td>
                                            <td>{item.tradeLicensesNumber}</td>
                                            <td>{item.expiryDate}</td>
                                            <td>unknown</td>
                                        </tr>
                                    ))}
                                     
                                 </tbody>
                             </Table>
                             <CustomPagination arrayCount={count} getNewReord={onGetAuctioneerHouseList}/>
                         </div>
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
                   
                </Card>
                </Col>
            </Row>
        </div>
    </div>
    </>
  )
}

export default AuctionHouseList