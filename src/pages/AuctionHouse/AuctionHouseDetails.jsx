import React,{useState} from 'react'
import { 
    Card,
    Col, 
    Row, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    CardBody,
    Table
} from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import Breadcrumb from '../../components/Common/Breadcrumb';
import { Link } from 'react-router-dom';

document.title = "Create Auction House | Bsstah";

const AuctionHouseDetails = () => {
   
  return (
    <>
    <div className='page-content'>
        <div className="container-fluid">
            <Breadcrumb title="Auction House" breadcrumbItem="Create Auction"/>
            <Row>
                <Col>
                    <div className='d-flex justify-content-between mb-4'>
                        <h5>Auction Houses</h5>
                        <button className='btn btn-primary'>Save</button>
                    </div>
                </Col>
            </Row>
            <div>
                <Card>
                    <CardBody>
                        <div className='mb-4'>
                            <h5>Create Auctioneer Account</h5>
                        </div>
                        <Form>
                            <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label>Auction House Name</Label>
                                    <Input className='form-control'/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Trade License Number</Label>
                                    <Input className='form-control'/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Trade License Status</Label>
                                    <Input className='form-control' type='select'/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Registration Date</Label>
                                    <Input className='form-control' type='date'/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Number Of business partner</Label>
                                    <Input className='form-control'/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <Row>
                                    <Col md={6}>
                                    <FormGroup>
                                        <Label>Trade License Name EN</Label>
                                        <Input className='form-control'/>
                                    </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                    <FormGroup>
                                        <Label>Trade License Name AR</Label>
                                        <Input className='form-control'/>
                                    </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={8}>
                                    <FormGroup>
                                        <Label>Trade License Document</Label>
                                        <Input className='form-control' type='file'/>
                                    </FormGroup>
                                    </Col>
                                    <Col md={4} className='d-flex align-items-center form-check-success'>
                                        <FormGroup check>
                                          <Label check >
                                            <Input type="checkbox"/>{' '}
                                            License Verified
                                          </Label>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup>
                                        <Label>Trade License Type</Label>
                                        <Input className='form-control' type='select'/>
                                </FormGroup>
                                <FormGroup>
                                        <Label>Expiry Date</Label>
                                        <Input className='form-control' type='date'/>
                                </FormGroup>
                                <Row>
                                    <Col md={6}>
                                    <FormGroup>
                                        <Label>Billing Country</Label>
                                        <Input className='form-control' type='select'/>
                                    </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                    <FormGroup>
                                        <Label>Billing State</Label>
                                        <Input className='form-control' type='select'/>
                                    </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                            </Row>
                            <FormGroup>
                                        <Label>Billing Address</Label>
                                        <Input className='form-control'/>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </div>
            <Row>
                <Col md={6}>
                    <Card>
                        <CardBody>
                        <div className='d-flex justify-content-between mb-4'>
                            <h5>Categories</h5>
                            <button className='btn btn-primary'>Add</button>
                        </div>
                        <div className="table-responsive">
                            <Table className="table mb-0">
                            <thead>
                                    <tr>
                                        <th>Sub Category</th>
                                        <th>Main Category</th>
                                        <th>Actions</th>
                                    </tr>
                            </thead>
                            <tbody>

                            </tbody>
                            </Table>
                        </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <div>

            </div>
            <Row>
                <Col>
                <div>
                    <Link to="/member" className='btn btn-primary m-2'>Request</Link>
                    <button className='btn btn-primary m-2'>Documents</button>
                    <button className='btn btn-primary m-2'>Category </button>
                    <Link to="/member" className='btn btn-primary m-2'>Members</Link>
                    <button className='btn btn-primary m-2'>Products</button>
                    <button className='btn btn-primary m-2'>Auctions</button>
                    <button className='btn btn-primary m-2'>Lots</button>
                    <button className='btn btn-primary m-2'>Items</button>
                </div>
                </Col>
            </Row>
        </div>
    </div>
    </>
  )
}

export default AuctionHouseDetails