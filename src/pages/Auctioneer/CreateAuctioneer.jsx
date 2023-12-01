import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row,FormFeedback,InputGroup, Table, Button} from 'reactstrap';

const CreateAuctioneer = () => {
  const validationSchema = Yup.object().shape({
    fullName: Yup.object().shape({
      en:Yup.string().required("Please Enter Full Name in English"),
      ar:Yup.string().required("Please Enter Full Name in Arabic")
    })
   })
  const formik = useFormik({
    enableReinitialize: true,
    initialValues:{
      fullName:{
        en:"",
        ar:""
      }
    },
    validationSchema:validationSchema
  })
  return (
    <>
    <div className='page-content'>
      <div className='conatiner-fluid'>
        <Form className="needs-validation">
        <div  className='mb-4 d-flex justify-content-between'>
            <h5>ADD AUCTIONEER </h5>
            <div>
            <button className='btn btn-outline-primary me-2'>Discard</button>
            <button className='btn btn-primary ms-2'>Create</button>
            </div>
        </div>
          {/* Personal Details */}
          <Card>
            <CardBody>
            <div  className='mb-4'>
                <h5>Personal Details </h5>
            </div>
              <Row>
                <Col md={6}>
                  <FormGroup className="mb-3">
                  <Label htmlFor='fullName.en'>EN - Full name</Label>
                  <Input 
                    name='fullName.en'
                    placeholder='Full Name - EN'
                    type='text'
                    className='form-control'
                    id='fullName.en'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName?.en || ""}
                    invalid={formik.touched.fullName?.en && formik.errors.fullName?.en ? true : false}
                    />
                    {formik.touched.fullName?.en && formik.errors.fullName?.en ?(
                        <FormFeedback type="invalid">{formik.errors.fullName?.en}</FormFeedback>
                    ):null}
               
                  </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup className="mb-3">
                  <Label htmlFor='fullName.ar'>AR - Full name</Label>
                  <Input 
                    name='fullName.ar'
                    placeholder='Full Name - AR'
                    type='text'
                    className='form-control'
                    id='fullName.ae'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName?.ar || ""}
                    invalid={formik.touched.fullName?.ar && formik.errors.fullName?.ar ? true : false}
                    />
                    {formik.touched.fullName?.ar && formik.errors.fullName?.ar ?(
                        <FormFeedback type="invalid">{formik.errors.fullName?.ar}</FormFeedback>
                    ):null}
               
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup className="mb-3">
                  <Label htmlFor='fullName.en'>EN - Full name - Official</Label>
                  <Input 
                    name='fullName.en'
                    placeholder='Full Name - EN'
                    type='text'
                    className='form-control'
                    id='fullName.en'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName?.en || ""}
                    invalid={formik.touched.fullName?.en && formik.errors.fullName?.en ? true : false}
                    />
                    {formik.touched.fullName?.en && formik.errors.fullName?.en ?(
                        <FormFeedback type="invalid">{formik.errors.fullName?.en}</FormFeedback>
                    ):null}
               
                  </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup className="mb-3">
                  <Label htmlFor='fullName.ar'>AR - Full name - Official</Label>
                  <Input 
                    name='fullName.ar'
                    placeholder='Full Name - AR'
                    type='text'
                    className='form-control'
                    id='fullName.ae'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName?.ar || ""}
                    invalid={formik.touched.fullName?.ar && formik.errors.fullName?.ar ? true : false}
                    />
                    {formik.touched.fullName?.ar && formik.errors.fullName?.ar ?(
                        <FormFeedback type="invalid">{formik.errors.fullName?.ar}</FormFeedback>
                    ):null}
               
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                <FormGroup className="mb-3">
                  <Label htmlFor='nationality'>Nationality</Label>
                  <Input 
                    name='nationality'
                    placeholder='Nationality'
                    type='select'
                    className='form-control'
                    id='nationality'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.nationality || ""}
                    invalid={formik.touched.nationality && formik.errors.nationality ? true : false}
                    />
                    {formik.touched.nationality && formik.errors.nationality ?(
                        <FormFeedback type="invalid">{formik.errors.nationality}</FormFeedback>
                    ):null}
               
                  </FormGroup>
                </Col>
                <Col>
                <FormGroup className="mb-3">
                  <Label htmlFor='gender'>Gender</Label>
                  <Input 
                    name='gender'
                    placeholder='gender'
                    type='select'
                    className='form-control'
                    id='gender'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.gender || ""}
                    invalid={formik.touched.gender && formik.errors.gender ? true : false}
                    >
                        <option>
                Male
               </option>
               <option>
                Female
               </option>
                    </Input>
                    {formik.touched.gender && formik.errors.gender ?(
                        <FormFeedback type="invalid">{formik.errors.gender}</FormFeedback>
                    ):null}
             
                  </FormGroup>
                </Col>
                <Col>
                <FormGroup  className="mb-3">
                <Label htmlFor='Username'>Username</Label>
                <InputGroup>
                  <Label className="input-group-text">@</Label>
                  <Input type="text" className="form-control" />
                  </InputGroup>
                </FormGroup>
               
                </Col>
              </Row>
            </CardBody>
          </Card>
          {/* conatct Details and Preferences */}
          <Row>
            {/* Contact Details */}
            <Col>
            <Card>
            <CardBody>
              <div  className='mb-4'>
                <h5>Contact Details </h5>
              </div>
            <div className='d-flex align-items-center'>
                <Col md={8}>
                  <FormGroup className="mb-3">
                  <Label htmlFor='email'>Email</Label>
                  <Input 
                    name='email'
                    placeholder='Enter Your Email'
                    type='email'
                    className='form-control'
                    id='email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email || ""}
                    invalid={formik.touched.email && formik.errors.email ? true : false}
                    />
                    {formik.touched.email && formik.errors.email ?(
                        <FormFeedback type="invalid">{formik.errors.email}</FormFeedback>
                    ):null}
               
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className='mt-3 mx-4'>
                  <div className="form-check form-check-success">
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="emailVerified"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="emailVerified"
                            >
                            Email Verified
                            </Label>
                  </div>
                  </FormGroup>
                </Col>
             </div>
             <div className='d-flex align-items-center'>
                <Col md={8}>
                  <FormGroup className="mb-3">
                  <Label htmlFor='mainPhoneNumber'>Main Phone Number</Label>
                  <Input 
                    name='mainPhoneNumber'
                    placeholder='Enter Your Main Phone Number'
                    type='text'
                    className='form-control'
                    id='mainPhoneNumber'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.mainPhoneNumber || ""}
                    invalid={formik.touched.mainPhoneNumber && formik.errors.mainPhoneNumber ? true : false}
                    />
                    {formik.touched.mainPhoneNumber && formik.errors.mainPhoneNumber ?(
                        <FormFeedback type="invalid">{formik.errors.mainPhoneNumber}</FormFeedback>
                    ):null}
               
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className='mt-3 mx-4'>
                  <div className="form-check form-check-success">
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="phoneVerified"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="phoneVerified"
                            >
                            Phone Verified
                            </Label>
                  </div>
                  </FormGroup>
                </Col>
             </div>
             <div className='d-flex align-items-center'>
                <Col md={8}>
                  <FormGroup className="mb-3">
                  <Label htmlFor='secondaryPhoneNumber'>Secondary Phone Number</Label>
                  <Input 
                    name='secondaryPhoneNumber'
                    placeholder='Enter Your Secondary Phone Number'
                    type='text'
                    className='form-control'
                    id='secondaryPhoneNumber'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.secondaryPhoneNumber || ""}
                    invalid={formik.touched.secondaryPhoneNumber && formik.errors.secondaryPhoneNumber ? true : false}
                    />
                    {formik.touched.secondaryPhoneNumber && formik.errors.secondaryPhoneNumber ?(
                        <FormFeedback type="invalid">{formik.errors.secondaryPhoneNumber}</FormFeedback>
                    ):null}
               
                  </FormGroup>
                </Col>
              
             </div>
            </CardBody>
          </Card>
            </Col>
              {/* Preferences */}
          <Col>
            <Card>
              <CardBody>
              <div className='mb-4'>
                <h5>Preferences </h5>
              </div>
              <FormGroup className='mb-3'>
                <Label htmlFor='role'>Role</Label>
                <Input 
                className="form-control"
                type='select'
                name='role'>
                  <option>Auctioneer</option>
                  <option>Bidder</option>
                </Input>
                {formik.touched.role && formik.errors.role ?(
                        <FormFeedback type="invalid">{formik.errors.role}</FormFeedback>
                    ):null}
              </FormGroup>
              <FormGroup className='mb-3'>
                <Label htmlFor='accountStatus'>Account Status</Label>
                <Input 
                className="form-control"
                type='select'
                name='role'
                >
                  <option>Active</option>
                  <option>InActive</option>
                </Input>
                {formik.touched.accountStatus && formik.errors.accountStatus ?(
                        <FormFeedback type="invalid">{formik.errors.accountStatus}</FormFeedback>
                    ):null}
              </FormGroup>

              </CardBody>
            </Card>
          </Col>
          </Row>

          {/* Address and Category */}

          <Row>
            {/* Address */}
            <Col>
            <Card>
              <CardBody>
              <div className='mb-4'>
                <h5>Address</h5>
              </div>
              <FormGroup className='mb-3'>
                <Label htmlFor='accountStatus'>Country</Label>
                <Input 
                className="form-control"
                type='select'
                name='role'
                >
                  <option>Active</option>
                  <option>InActive</option>
                </Input>
                {formik.touched.accountStatus && formik.errors.accountStatus ?(
                        <FormFeedback type="invalid">{formik.errors.accountStatus}</FormFeedback>
                    ):null}
              </FormGroup>
              <FormGroup className='mb-3'>
                <Label htmlFor='accountStatus'>State</Label>
                <Input 
                className="form-control"
                type='select'
                name='role'
                >
                  <option>Active</option>
                  <option>InActive</option>
                </Input>
                {formik.touched.accountStatus && formik.errors.accountStatus ?(
                        <FormFeedback type="invalid">{formik.errors.accountStatus}</FormFeedback>
                    ):null}
              </FormGroup>
              <FormGroup className='mb-3'>
                <Label htmlFor='accountStatus'>Address</Label>
                <Input 
                className="form-control"
                type='select'
                name='role'
                >
                  <option>Active</option>
                  <option>InActive</option>
                </Input>
                {formik.touched.accountStatus && formik.errors.accountStatus ?(
                        <FormFeedback type="invalid">{formik.errors.accountStatus}</FormFeedback>
                    ):null}
              </FormGroup>
               
              </CardBody>
            </Card>
            </Col>
            {/* Category */}
            <Col>
            <Card>
              <CardBody>
              <div className='mb-4 d-flex justify-content-between'>
                <h5>Category</h5>
                <button className='btn btn-primary'>Add</button>
              </div>
              </CardBody>
              <div className="table-responsive">
                <Table>
                  <thead className="table-light">
                    <tr>
                    <th>Sub Category</th>
                    <th>Main Category</th>
                    <th>Actions</th>
                    </tr>
                  </thead>
                </Table>
              </div>
            </Card>
            </Col>
          </Row>
          {/* Documents */}
          <Row>
            <Col>
            <Card>
            <CardBody>
            <div className='mb-4 d-flex justify-content-between'>
                <h5>Documents</h5>
                <button className='btn btn-primary'>Add</button>
              </div>
            </CardBody>
            <div className="table-responsive">
                <Table>
                  <thead className="table-light">
                    <tr>
                    <th>Doc ID</th>
                    <th>Title</th>
                    <th>Doc Number</th>
                    <th>Expiry Date</th>
                    <th>Actions</th>
                    </tr>
                  </thead>
                </Table>
              </div>
              </Card>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
    </>
  )
}

export default CreateAuctioneer