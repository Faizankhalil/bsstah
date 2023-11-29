import React from 'react'
import {
    Table,
    Row,
    Col,
    Card,
    UncontrolledTooltip,
    Button
  } from "reactstrap"
  import { Link } from 'react-router-dom'

const SubCategoryTable = ({deleteRecord,toggle}) => {
  return (
    <>
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
                        <Button
                            type="button"
                            color="success"
                            className="btn-rounded  mb-2 me-2"
                            onClick={toggle}
                        >
                        <i className="mdi mdi-plus me-1" />
                            Sub Category
                        </Button>
                        </div>
              </div>
            </Card>
                    
                
              
                  <div className="table-responsive">
                    <Table className="table mb-0">
                      <thead className="table-light">
                        <tr>
                          <th>ID</th>
                          <th>Category</th>
                          <th>Sub Category</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">CAT-001</th>
                          <td>Mark</td>
                          <td>Mark</td>
                          <td>
                            <div className="d-flex gap-3">
                            <Link to="" className="text-success">
                            <i className="mdi mdi-pencil font-size-18" id="edittooltip" />
                            <UncontrolledTooltip placement="top" target="edittooltip">
                                Edit
                            </UncontrolledTooltip>
                            </Link>
                            <Link to="#" className="text-danger" onClick={deleteRecord}>
                            <i className="mdi mdi-delete font-size-18" id="deletetooltip" />
                            <UncontrolledTooltip placement="top" target="deletetooltip">
                                Delete
                            </UncontrolledTooltip>
                            </Link>
                            </div>
                            
                          </td>
                          
                        </tr>
                        <tr>
                          <th scope="row">CAT-002</th>
                          <td>Jacob</td>
                          <td>Jacob</td>
                          
                        </tr>
                        <tr>
                          <th scope="row">CAT-003</th>
                          <td>Larry</td>
                          <td>Larry</td>
                          
                        </tr>
                      </tbody>
                    </Table>
                  </div>
              </Card>
            </Col>
            </Row>
    </>
  )
}

export default SubCategoryTable