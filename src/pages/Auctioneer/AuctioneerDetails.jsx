import React, { useEffect } from 'react'
import { Card, CardBody, Col, Row ,Table} from 'reactstrap'
import {Link,useParams} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import {getAuctioneerDetails as onGetAuctioneerDetails} from "/src/store/actions";

const AuctioneerDetails = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const auctioneerDetail = useSelector(state => state.AuctioneerReducer.auctioneerDetails)
  useEffect(() => {
    if(id){
      dispatch(onGetAuctioneerDetails(id))
    }
  }, [dispatch,id])
 
  return (
    <>
    <div className='page-content'>
      <div className="container-fluid">
          <Row>
            {/* left information */}
            <Col md={4}>
              {/* auctioneer info */}
              <Card>
                <CardBody>
                  <div className='d-flex align-items-center'>
                  <div className="me-4">
                    {auctioneerDetail && auctioneerDetail.image ?(
                       <span className="avatar-title rounded-circle bg-primary mb-4">
                            <img src={auctioneerDetail.image} className='rounded-circle header-profile-user' style={{width:"85px", height:"85px"}}/>
                      </span>
                    ):(
                      <i className="mdi mdi-account-circle text-primary" style={{fontSize:"70px"}}/>
                    )}
                  </div>
                  <div className="flex-grow-1">
                    <h5>{auctioneerDetail.fullName}</h5>
                    <h5>User ID : {auctioneerDetail.id}</h5>
                  </div>
                  </div>
                  <div>
                    <h4>Auctioneer Information</h4>
                  </div>
                  <div className="border-bottom d-flex justify-content-between align-items-center p-3">
                    <div className="fw-bold">Nationality:</div>
                    <div>United Arab Emirates</div>
                  </div>
                  <div className="border-bottom d-flex justify-content-between align-items-center p-3">
                    <div className="fw-bold">EN Full Name:</div>
                    <div>United Arab Emirates</div>
                  </div>
                  <div className="border-bottom d-flex justify-content-between align-items-center p-3">
                    <div className="fw-bold">User Name:</div>
                    <div>United Arab Emirates</div>
                  </div>
                  <div className="border-bottom d-flex justify-content-between align-items-center p-3">
                    <div className="fw-bold">Email:</div>
                    <div>United Arab Emirates</div>
                  </div>
                  <div className="border-bottom d-flex justify-content-between align-items-center p-3">
                    <div className="fw-bold">Main Phone number:</div>
                    <div>United Arab Emirates</div>
                  </div>
                  <div className="border-bottom d-flex justify-content-between align-items-center p-3">
                    <div className="fw-bold">User type:</div>
                    <div>United Arab Emirates</div>
                  </div>
                  <div className="border-bottom d-flex justify-content-between align-items-center p-3">
                    <div className="fw-bold">Account Status:</div>
                    <div>United Arab Emirates</div>
                  </div>
                  <div className="border-bottom d-flex justify-content-between align-items-center p-3">
                    <div className="fw-bold">Role:</div>
                    <div>United Arab Emirates</div>
                  </div>
                </CardBody>
              </Card>
              {/* business info */}
              <Card>
                <CardBody>
                <div>
                    <h4> Business information</h4>
                  </div>
                  <div className="border-bottom d-flex justify-content-between align-items-center p-3">
                    <div className="fw-bold">Business Name:</div>
                    <div>United Arab Emirates</div>
                  </div>
                  <div className="border-bottom d-flex justify-content-between align-items-center p-3">
                    <div className="fw-bold">Trade Licenses Number:</div>
                    <div>United Arab Emirates</div>
                  </div>
                  <div className="border-bottom d-flex justify-content-between align-items-center p-3">
                    <div className="fw-bold">Expiry Date:</div>
                    <div>United Arab Emirates</div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            {/* right col */}
            <Col md={8}>
              <Row className='gx-3'>
                <Col>
                <Card className='px-3 py-2 mini-stats-wid'>
                  <div className='d-flex align-items-center justify-content-between'>
                  <div>
                    <p>Sold</p>
                    <p>214</p>
                  </div>
                  <div>
                   <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                    <span className="avatar-title rounded-circle bg-primary">
                      <i className="bx bx-package font-size-24"></i>
                    </span>
                  </div>
                  </div>
                  </div>
                 
                </Card>
                </Col>
                <Col>
                 <Card className='px-3 py-2 mini-stats-wid'>
                  <div className='d-flex align-items-center justify-content-between'>
                  <div>
                    <p>Post</p>
                    <p>12</p>
                  </div>
                  <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                    <span className="avatar-title rounded-circle bg-primary">
                      <i className="bx bx-hourglass font-size-24"></i>
                    </span>
                  </div>
                  </div>
                 
                </Card>
                </Col>
                <Col>
                <Card className='px-3 py-2 mini-stats-wid'>
                  <div className='d-flex align-items-center justify-content-between'>
                  <div>
                    <p>Followers</p>
                    <p>214</p>
                  </div>
                  <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                    <span className="avatar-title rounded-circle bg-primary">
                      <i className="mdi mdi-check-circle-outline font-size-24"></i>
                    </span>
                  </div>
                  
                  </div>
                 
                </Card>
                </Col>
              </Row>
              {/* wallet */}
            <Card>
                <CardBody className="border-bottom">
                  <div className='d-flex justify-content-between'>
                    <div>
                      <h5>Wallet</h5>
                      <p className='text-muted'>WID</p>
                    </div>
                    <div className="text-center">
                    <div className='font-size-24 text-primary mb-2'>
                      <i className='bx bx-wallet'></i>
                      </div>
                      <p className='text-muted mb-2'>Available Balance</p>
                      <h5>AED 2999</h5>
                      <Link to="#" className="btn btn-primary rounded-3 text-white mt-2">
                      Ledger
                      </Link>

                    </div>
                    <div className="text-center">
                    <div className='font-size-24 text-primary mb-2'>
                      <i className='bx bx-send'></i>
                      </div>
                      <p className='text-muted mb-2'>Payables</p>
                      <h5>AED 2999</h5>
                      <Link to="#" className="btn btn-primary rounded-3 text-white mt-2">
                      Invoice
                      </Link>
                    </div>
                    <div className="text-center">
                      <div className='font-size-24 text-primary mb-2'>
                        <i className='bx bx-import'></i>
                      </div>
                      
                      <p className='text-muted mb-2'>Receivables</p>
                      <h5>AED 2999</h5>
                      <Link to="#" className="btn btn-primary rounded-3 text-white mt-2">
                      Payments
                      </Link>

                    </div>
                  </div>
                </CardBody>
                <CardBody>
                  <div className='d-flex justify-content-between align-items-end'>
                    <div>
                      <h5>Bank Details</h5>
                      <p className='text-muted'>Account Holder : </p>
                    </div>
                    <div>
                      <p className='text-muted'>IBAN:00000000000000000000000</p>
                    </div>
                    <div>
                      <p className='text-muted'>Bank Name :</p>
                    </div>
                    <div>
                      <p className='text-muted'>Swift Code :</p>
                    </div>

                  </div>
                </CardBody>
                <CardBody className='border-top'>
                  <div className='d-flex justify-content-between align-items-end'>
                    <div>
                      <h5>Card Details</h5>
                      <p className='text-muted'>Card Holder Name : </p>
                    </div>
                    <div>
                      <p className='text-muted'>CARD : 0000-0000-0000-0000</p>
                    </div>
                    <div>
                      <p className='text-muted'>Date : 12/25</p>
                    </div>
                    <div>
                      <p className='text-muted'>Code : </p>
                    </div>

                  </div>
                </CardBody>
            </Card>
            {/* Auction Request */}
            <Card>
              <h5 className='p-3'>Auction Request</h5>
              <div className="table-responsive">
              <Table className="table mb-0">
                <thead className="table-light">
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Type</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <th scope="row">1</th>
                  <td>Admin</td>
                  <td>12345678</td>
                  <td>admin@me.com</td>
                  <td>@admin123</td>
                  <td>UAE</td>

                  </tr>
                  
                </tbody>

              </Table>

            </div>
            </Card>

             {/* Documents */}
             <Card>
              <h5 className='p-3'>Documents</h5>
              <div className="table-responsive">
              <Table className="table mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Doc ID</th>
                    <th>Title</th>
                    <th>Doc Number</th>
                    <th>Expiry Date</th>
                    <th>Actions</th>
                   
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <th scope="row">1</th>
                  <td>Admin</td>
                  <td>12345678</td>
                  <td>admin@me.com</td>
                  <td>@admin123</td>
                

                  </tr>
                  
                </tbody>

              </Table>

            </div>
            </Card>
            </Col>

          </Row>
      </div>
    </div>
    </>
  )
}

export default AuctioneerDetails