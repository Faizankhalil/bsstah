import React,{useEffect} from 'react'
import Breadcrumb from '../../components/Common/Breadcrumb';
import { Card, Col, Row, Table,Spinner } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import {getAuctioneers as onGetAuctioneers} from  "/src/store/actions";
import { useSelector, useDispatch } from "react-redux";
import CustomPagination from '../../components/Common/Pagination';



document.title = "Auctioneer List | Bsstah";

const AuctioneerList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  // from redux state 
  const auctioneerList = useSelector(state => state.AuctioneerReducer.auctioneersList)
  const loading = useSelector(state => state.AuctioneerReducer.loading);
  const count = useSelector(state => state.AuctioneerReducer.count)

useEffect(() => {
dispatch(onGetAuctioneers(10,0))
}, [dispatch])

const getAuctionnerID = (recordId) =>{
  history.push(`/auctioneer-details/${recordId}`);
}

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
            { auctioneerList && count ? (
              <div className="table-responsive">
              <Table className="table mb-0">
                <thead className="table-light">
                  <tr>
                    <th>ID</th>
                    <th>Display Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Nationality</th>
                    <th>Account Status</th>
                    <th>Auction House Name</th>
                  </tr>
                </thead>
                <tbody>
                {auctioneerList.map((item)=>(
                  <tr key={item.id} onClick={()=>{getAuctionnerID(item.id)}}>
                    <th scope="row">{item.id}</th>
                    <td>{item.fullName}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{item.userName}</td>
                    <td>{item.nationality}</td>
                    <td>{item.accountStatus}</td>
                    <td>{item.auctionHouseName}</td>
                  </tr>
                ))}
                  
                </tbody>

              </Table>
              <CustomPagination arrayCount={count} getNewReord={onGetAuctioneers}/>
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

export default AuctioneerList