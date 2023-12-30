import React,{useState} from 'react'
import Breadcrumb from '../../components/Common/Breadcrumb'
import { Button, Card, Col, Row, Table, } from 'reactstrap';
import { Link } from 'react-router-dom';
import MemberModel from './MemberModel';

const MemberList = () => {
    const [memberModel, setMemberModel] = useState(false)
  
  return (
    <>
    <div className='page-content'>
        <div className="container-fluid">
        <Breadcrumb title="Member" breadcrumbItem="Member List"/>
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
                          <Button onClick={()=>setMemberModel(!memberModel)} className="btn btn-primary text-white btn-rounded">
                            <i className='mdi mdi-plus me-1'></i>
                            Add Member
                          </Button>
                        </div>
              </div>
            </Card>
            
              <div className="table-responsive">
              <Table className="table mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Auctioneer ID </th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </Table>
            </div>
            
            </Card>
          </Col>
        </Row>
        </div>
    </div>
    <MemberModel show={memberModel} toggleModel={()=>setMemberModel(!memberModel)}/>
    </>
  )
}

export default MemberList