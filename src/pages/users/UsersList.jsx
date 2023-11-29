import React from "react";

import {
  Table,
  Row,
  Col,
  Card,
} from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { Link } from "react-router-dom";
document.title = "Users List | Bsstah";

const UsersList = () => {
  return (
    <React.Fragment>
        <div className="page-content">
        <div className="container-fluid">
        <Breadcrumbs title="User" breadcrumbItem="User List" />
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
              </div>
            </Card>
                    
                
              
                  <div className="table-responsive">
                    <Table className="table mb-0">
                      <thead className="table-light">
                        <tr>
                          <th>User ID</th>
                          <th>Display Name</th>
                          <th>Phone</th>
                          <th>Account Status</th>
                          <th>UserName</th>
                          <th>Nationality</th>
                          
                          
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
              </Card>
            </Col>
            </Row>
        </div>
        </div>
    </React.Fragment>
   
  )
}

export default UsersList