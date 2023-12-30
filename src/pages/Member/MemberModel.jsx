import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, FormFeedback, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

const MemberModel = ({show,toggleModel}) => {
    const closeBtn = (
        <button className="close" onClick={toggleModel} type="button">
          &times;
        </button>
    );
  return (
    <>
    <Modal isOpen={show} toggle={toggleModel} centered={true}>
        <ModalHeader toggle={toggleModel} close={closeBtn}>
            Add Member
        </ModalHeader>
        <ModalBody>
        <Form className="needs-validation">
            <Row>
                <Col>
                <FormGroup className="mb-3">
                    <Label>Auctioneer Name</Label>
                    <Input type='select'/>
                </FormGroup>
                </Col>
                <Col>
                <FormGroup className="mb-3">
                    <Label>Percentage</Label>
                    <Input type='text'/>
                </FormGroup>
                </Col>
                <Col>
                <FormGroup className="mb-3">
                    <Label>Role</Label>
                    <Input type='select'/>
                </FormGroup>
                </Col>
            </Row>
            <div>
                <Button className='bg-primary btn-outline-primary'>Create</Button>
            </div>
            </Form>
            
        </ModalBody>
    </Modal>
    </>
  )
}

export default MemberModel