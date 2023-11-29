import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'

const AuctioneerDetails = () => {
  return (
    <>
    <div className='page-content'>
      <div className="container-fluid">
          <Row>
            {/* left information */}
            <Col md={5}>
              {/* auctioneer info */}
              <Card>
                <CardBody>
                  <div className='d-flex align-items-center'>
                  <div className="me-4">
                    <i className="mdi mdi-account-circle text-primary" style={{fontSize:"70px"}}/>
                  </div>
                  <div className="flex-grow-1">
                    <h5>User Name</h5>
                    <h5>User Id</h5>
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
            <Col md={7}>
              <Row className='gx-3'>
                <Col>
                <Card className='px-3 py-2'>
                  <div className='d-flex align-items-center justify-content-between'>
                  <div>
                    <p>Sold</p>
                    <p>214</p>
                  </div>
                  <div>
                   <i className='bx bx-package bg-primary fs-2 text-white rounded-circle p-2'></i>
                  </div>
                  </div>
                 
                </Card>
                </Col>
                <Col>
                 <Card className='px-3 py-2'>
                  <div className='d-flex align-items-center justify-content-between'>
                  <div>
                    <p>Sold</p>
                    <p>214</p>
                  </div>
                  <div>
                   <i className='bx bx-package bg-primary fs-2 text-white rounded-circle p-2'></i>
                  </div>
                  </div>
                 
                </Card>
                </Col>
                <Col>
                <Card className='px-3 py-2'>
                  <div className='d-flex align-items-center justify-content-between'>
                  <div>
                    <p>Sold</p>
                    <p>214</p>
                  </div>
                  <div>
                   <i className='bx bx-package bg-primary fs-2 text-white rounded-circle p-2'></i>
                  </div>
                  </div>
                 
                </Card>
                </Col>
              </Row>
            <Card>
                right
            </Card>
            </Col>

          </Row>
      </div>
    </div>
    </>
  )
}

export default AuctioneerDetails