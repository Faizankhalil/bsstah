import React from 'react'
import Breadcrumb from '../../components/Common/Breadcrumb';
import { Card, Col, Row, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
document.title = "Auctioneer List | Bsstah";

const AuctioneerList = () => {
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
                  <tr>
                  <th scope="row">1</th>
                  <td>Admin</td>
                  <td>12345678</td>
                  <td>admin@me.com</td>
                  <td>@admin123</td>
                  <td>UAE</td>
                  <td>active</td>
                  <td>test</td>

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

export default AuctioneerList