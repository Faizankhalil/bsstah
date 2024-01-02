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

const CreateAuctionHouse = () => {
   
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
                <Card>
                    <CardBody>
                        <div className='mb-4'>
                             <h5>Trade Licenses Details</h5>
                        </div>
                    <Form>
                        <Row>
                            <Col>
                            <FormGroup>
                                <Label>Auction House Name</Label>
                                <Input className='form-control'/>
                            </FormGroup>
                            </Col>
                            <Col>
                            <FormGroup>
                                <Label>TL Name English</Label>
                                <Input className='form-control'/>
                            </FormGroup>
                            </Col>
                            <Col>
                            <FormGroup>
                                <Label>TL Name Arabic</Label>
                                <Input className='form-control'/>
                            </FormGroup>
                            </Col>
                            <Col>
                            <FormGroup>
                                <Label>TL Number</Label>
                                <Input className='form-control'/>
                            </FormGroup>
                            </Col>
                            <Col>
                            <FormGroup>
                                <Label>TRN</Label>
                                <Input className='form-control'/>
                            </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <FormGroup>
                                <Label>TL Type</Label>
                                <Input className='form-control'/>
                            </FormGroup>
                            </Col>
                            <Col>
                            <FormGroup>
                                <Label>TL Status</Label>
                                <Input className='form-control' type='select'/>
                            </FormGroup>
                            </Col>
                            <Col>
                            <FormGroup>
                                <Label>Registration Date</Label>
                                <Input className='form-control' type='date'/>
                            </FormGroup>
                            </Col>
                            <Col>
                            <FormGroup>
                                <Label>Expiry Date</Label>
                                <Input className='form-control' type='date'/>
                            </FormGroup>
                            </Col>
                            <Col>
                            <FormGroup>
                                <Label>Billing Country</Label>
                                <Input className='form-control' type='select'/>
                            </FormGroup>
                            </Col>
                            <Col>
                            <FormGroup>
                                <Label>Billing State</Label>
                                <Input className='form-control' type='select'/>
                            </FormGroup>
                            </Col>
                            <Col>
                            <FormGroup>
                                <Label>Billing Address</Label>
                                <Input className='form-control'/>
                            </FormGroup>
                            </Col>
                        </Row>
                       
                    </Form>
                    </CardBody>
                    
                </Card>
                </Col>
            </Row>
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

export default CreateAuctionHouse