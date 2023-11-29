import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Col,Row, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const SubCategoryModel = ({show,toggle}) => {
    const closeBtn = (
        <button className="close" onClick={toggle} type="button">
          &times;
        </button>
    );
    const validation = useFormik({
        initialValues:{
            categoryName:"",
            subCategoryName:""
        },
        validationSchema:Yup.object({
            categoryName: Yup.string().required("Please Select Category Name"),
            subCategoryName: Yup.string().required("Please Enter Sub Category Name"),
        }),
        onSubmit: (values) => {
            console.log("values", values);
          }
    })
  return (
    <>
 
    <Modal isOpen={show} toggle={toggle} centered={true}>
    <ModalHeader toggle={toggle} close={closeBtn}>
    Add Sub category
    </ModalHeader>

        <ModalBody>
        <Form className="needs-validation" onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}>
                        <Row>
                            <Col md={6}>
                                <FormGroup className="mb-3">
                                    <Label htmlFor='categoryName'>Category Name</Label>
                                    <Input 
                                    name='categoryName'
                                    placeholder='Category Name'
                                    type='select'
                                    className='form-control'
                                    id='categoryName'
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.categoryName || ""}
                                    invalid={validation.touched.categoryName && validation.errors.categoryName ? true : false}
                                    />
                                    {validation.touched.categoryName && validation.errors.categoryName ?(
                                        <FormFeedback type="invalid">{validation.errors.categoryName}</FormFeedback>
                                    ):null}
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup className="mb-3">
                                    <Label htmlFor='subCategoryName'>Sub Category Name</Label>
                                    <Input 
                                    name='subCategoryName'
                                    placeholder='Sub Category Name'
                                    type='text'
                                    className='form-control'
                                    id='subCategoryName'
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.subCategoryName || ""}
                                    invalid={validation.touched.subCategoryName && validation.errors.subCategoryName ? true : false}
                                    />
                                    {validation.touched.subCategoryName && validation.errors.subCategoryName ?(
                                        <FormFeedback type="invalid">{validation.errors.subCategoryName}</FormFeedback>
                                    ):null}
                                </FormGroup>
                            </Col>
                        </Row>
               
                
                            <div className='float-end'>
                            <Button type="submit" color="primary">
                                Add
                            </Button>
                            {' '}
                            <Button color="secondary" onClick={toggle}>
                                Close
                            </Button>
                            </div>
         
        </Form>
        </ModalBody>
    </Modal>
   
    </>
  )
}

export default SubCategoryModel