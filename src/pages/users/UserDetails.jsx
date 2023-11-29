import Breadcrumbs from "../../components/Common/Breadcrumb"
import React from 'react';
import { Col,Row,Card, CardBody } from 'reactstrap';

const UserDetails = () => {
    document.title = "User Details | Bsstah"
    return (
        <div className="page-content">
            <React.Fragment>
                <div className="container-fluid">
                    <Breadcrumbs title="User" breadcrumbItem="User Details"/>
                        <Row>
                            <Col md={4}>
                                <Card>
                                    <CardBody>
                                    <div>
                                        User details
                                    </div>
                                    </CardBody>
                                    
                                </Card>
                            </Col>
                            <Col md={6}>
                            </Col>
                        </Row>
                  </div>
            </React.Fragment>
        </div>
    )
}

export default UserDetails;