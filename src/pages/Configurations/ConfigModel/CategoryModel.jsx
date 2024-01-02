import React,{useEffect, useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import {
  addCategory as onAddCategory,
  updateCategory as onUpdateCategory,
} from "/src/store/actions";


const CategoryModel = ({show,toggleModel,category,isEdit}) => {
    const dispatch = useDispatch();
   const validationSchema = Yup.object().shape({
    name: Yup.object().shape({
      en:Yup.string().required("Please Enter Category Name")
    })
   })

    const closeBtn = (
        <button className="close" onClick={toggleModel} type="button">
          &times;
        </button>
    );
 
    const validation = useFormik({
      enableReinitialize: true,
        initialValues:{
          name: {
            en: (category && category.name) || "",
            ar: ""
          },
          description: {
            en: (category && category.description) || "",
            ar: ""
          },
          image: (category && category.image) || "",
          parentId: (category && category.parentId) || 0,
          ...(isEdit ? { id: (category && category.id) || 0 } : {})
        },
     validationSchema:validationSchema,
        onSubmit: (values,{ resetForm }) => {
          if(!isEdit){
            dispatch(onAddCategory(values));
            toggleModel();
            validation.resetForm();
            resetForm();
            console.log(values,"new form submit")
          }else{
            console.log(values,"Edit form submit")
            dispatch(onUpdateCategory(values))
            toggleModel();
            validation.resetForm();
            resetForm();
          }
          resetForm();
        }
      });

      const handleFormSubmit =()=>{
        validation.handleSubmit();
      }
   

  return (
    <>
 
    <Modal isOpen={show} toggle={toggleModel} centered={true}>
    <ModalHeader toggle={toggleModel} close={closeBtn}>
      {isEdit && isEdit ? "Edit Category" : "Add Category"}
    </ModalHeader>

        <ModalBody>

         <Form className="needs-validation">
                <FormGroup className="mb-3">
                    <Label htmlFor='name.en'>Category Name</Label>
                    <Input 
                    name='name.en'
                    placeholder='Category Name'
                    type='text'
                    className='form-control'
                    id='name.en'
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.name?.en || ""}
                    invalid={validation.touched.name?.en && validation.errors.name?.en ? true : false}
                    />
                    {validation.touched.name?.en && validation.errors.name?.en ?(
                        <FormFeedback type="invalid">{validation.errors.name?.en}</FormFeedback>
                    ):null}
                </FormGroup>

                <div className='float-end'>
                <Button type="button" color="primary" onClick={handleFormSubmit}>
                    Add
                </Button>
                {' '}
                <Button color="secondary" onClick={toggleModel}>
                    Close
                </Button>
                </div>
         
        </Form>
        </ModalBody>
    </Modal>
   
    </>
  )
}
CategoryModel.propTypes = {
    className: PropTypes.string,
    show:PropTypes.bool,
    toggleModel:PropTypes.func
}

export default CategoryModel