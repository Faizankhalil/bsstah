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
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    FormFeedback } from 'reactstrap';
    import classnames from "classnames"
import { Link } from 'react-router-dom';
import { useFormik } from 'formik'
import * as Yup from 'yup';
import {useSelector, useDispatch } from 'react-redux';
import {
  createAuctioneerRequest as onCreateAuctioneer,
} from "/src/store/actions";


const AuctioneerFormWizard = () => {
  const dispatch = useDispatch();
  const success = useSelector(state => state.AuctioneerReducer.success)
    const [activeTab, setactiveTab] = useState(1)

    const [passedSteps, setPassedSteps] = useState([1])

    const validationSchema = Yup.object().shape({
      fullName: Yup.object().shape({
        en:Yup.string().required("Please Enter Full Name in English"),
        ar:Yup.string().required("Please Enter Full Name in Arabic")
      }),
      email:Yup.string()
      .email("Must be a valid Email")
      .required("Please Enter Email"),
      password:Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required("Please Enter password"),
      confirmPassword:Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required("Please Re-Enter password"),
      phoneNumber:Yup.string().required("Please Enter Phone Number"),
     })
    const formik = useFormik({
      enableReinitialize: true,
      initialValues:{
        fullName:{
          en:"",
          ar:""
        },
        email:"",
        password:"",
        confirmPassword:"",
        phoneNumber:"",
        countryCode:"+971",

      },
      validationSchema:validationSchema,
      onSubmit:(values) => {
        console.log(values)
        dispatch(onCreateAuctioneer(values))
      }
    })

    const auctionHouseForm = useFormik({
      enableReinitialize: true,
      initialValues:{
        
      }
    })
    const handlePersonalInfo = async () => {
      if(activeTab == 1)
      {
        // formik.handleSubmit()
        // if (formik.isValid && formik.dirty && success) {
        toggleTab(activeTab + 1);
        // }
      }
      else if(activeTab == 2){
            console.log("tab 2 button")
           } 
    }

    const handleAuctionHouse = () =>{
      auctionHouseForm.handleSubmit();
    }

    function toggleTab(tab) {
        if (activeTab !== tab) {
          var modifiedSteps = [...passedSteps, tab]
          if (tab >= 1 && tab <= 4) {
            setactiveTab(tab)
            setPassedSteps(modifiedSteps)
          }
        }
      }
  return (
    <>
    <Row>
        <Col>
        <Card>
            <CardBody>
            <div className="wizard clearfix">
                <div className="steps clearfix">
                <ul>
                        <NavItem
                          className={classnames({ current: activeTab === 1 })}
                        >
                          <NavLink
                            className={classnames({ current: activeTab === 1 })}
                            onClick={() => {
                              setactiveTab(1)
                            }}
                            disabled={!(passedSteps || []).includes(1)}
                          >
                            <span className="number">1.</span> Personal Info
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({ current: activeTab === 2 })}
                        >
                          <NavLink
                            className={classnames({ active: activeTab === 2 })}
                            onClick={() => {
                              setactiveTab(2)
                            }}
                            disabled={!(passedSteps || []).includes(2)}
                          >
                            <span className="number ms-2">02</span> Auction House
                          </NavLink>
                        </NavItem>
                        
                      </ul>
                </div>
                <div className="content clearfix mt-4">
                <TabContent activeTab={activeTab}>
                  <TabPane tabId={1}>
                    <Form>
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
                            <Label htmlFor='phoneNumber'>Phone</Label>
                            <Input 
                              name='phoneNumber'
                              type='text'
                              className='form-control'
                              id='phoneNumber'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.phoneNumber || ""}
                              invalid={formik.touched.phoneNumber && formik.errors.phoneNumber ? true : false}
                              />
                              {formik.touched.phoneNumber && formik.errors.phoneNumber ?(
                                  <FormFeedback type="invalid">{formik.errors.phoneNumber}</FormFeedback>
                              ):null}
                        
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                          <FormGroup className="mb-3">
                            <Label htmlFor='email'>Email</Label>
                            <Input 
                              name='email'
                              type='email'
                              className='form-control'
                              id='email'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.email || ""}
                              invalid={formik.touched.email && formik.errors.email ? true : false}
                              />
                             {
                              formik.touched.email && formik.errors.email ? (
                                <FormFeedback type="invalid">{formik.errors.email}</FormFeedback>
                              ):
                              null
                             }
                        
                            </FormGroup>
                          </Col>
                      </Row>
                      <Row>
                          <Col md={6}>
                            <FormGroup className="mb-3">
                            <Label htmlFor='password'>Password</Label>
                            <Input 
                              name='password'
                              type="password"
                              className='form-control'
                              id='password'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.password || ""}
                              invalid={formik.touched.password && formik.errors.password ? true : false}
                              />
                              {formik.touched.password && formik.errors.password ?(
                                  <FormFeedback type="invalid">{formik.errors.password}</FormFeedback>
                              ):null}
                        
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                          <FormGroup className="mb-3">
                            <Label htmlFor='confirmPassword'>Confirm Password</Label>
                            <Input
                             
                              name='confirmPassword'
                              type='Password'
                              className='form-control'
                              id='confirmPassword'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.confirmPassword || ""}
                              invalid={formik.touched.confirmPassword && formik.errors.confirmPassword ? true : false}
                              />
                             {
                              formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                <FormFeedback type="invalid">{formik.errors.confirmPassword}</FormFeedback>
                              ):
                              null
                             }
                        
                            </FormGroup>
                          </Col>
                      </Row>
                      {/* <Row>
                          <Col md={6}>
                            <FormGroup className="mb-3">
                            <Label htmlFor='country'>Country</Label>
                            <Input 
                              name='country'
                              type="select"
                              className='form-control'
                              id='country'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.country || ""}
                              invalid={formik.touched.country && formik.errors.country ? true : false}
                              />
                              {formik.touched.country && formik.errors.country ?(
                                  <FormFeedback type="invalid">{formik.errors.country}</FormFeedback>
                              ):null}
                        
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                          <FormGroup className="mb-3">
                            <Label htmlFor='state'>State</Label>
                            <Input 
                              name='state'
                              type='select'
                              className='form-control'
                              id='state'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.state || ""}
                              invalid={formik.touched.state && formik.errors.state ? true : false}
                              />
                             {
                              formik.touched.state && formik.errors.state ? (
                                <FormFeedback type="invalid">{formik.errors.state}</FormFeedback>
                              ):
                              null
                             }
                        
                            </FormGroup>
                          </Col>
                      </Row> */}
                      {/* <Row>
                      <Col md={12}>
                          <FormGroup className="mb-3">
                            <Label htmlFor='address'>Address</Label>
                            <Input 
                              name='address'
                              type='text'
                              className='form-control'
                              id='address'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.address || ""}
                              invalid={formik.touched.address && formik.errors.address ? true : false}
                              />
                             {
                              formik.touched.address && formik.errors.address ? (
                                <FormFeedback type="invalid">{formik.errors.address}</FormFeedback>
                              ):
                              null
                             }
                        
                            </FormGroup>
                          </Col>
                      </Row> */}
                           
                    </Form>
                  </TabPane>
                  <TabPane tabId={2}>
                          <div>
                            <Form>
                                  <Row>
                                    <Col md={6}>
                                      <FormGroup className="mb-3">
                                      <Label htmlFor='auctionHoseName'>Auction House Name</Label>
                                      <Input 
                                        name='auctionHoseName'
                                        type='text'
                                        className='form-control'
                                        id='auctionHoseName'
                                        onChange={auctionHouseForm.handleChange}
                                        onBlur={auctionHouseForm.handleBlur}
                                        value={auctionHouseForm.values.auctionHoseName || ""}
                                        invalid={auctionHouseForm.touched.auctionHoseName && auctionHouseForm.errors.auctionHoseName ? true : false}
                                        />
                                        {auctionHouseForm.touched.auctionHoseName && auctionHouseForm.errors.auctionHoseName ?(
                                            <FormFeedback type="invalid">{auctionHouseForm.errors.auctionHoseName}</FormFeedback>
                                        ):null}
                                  
                                      </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                    <FormGroup className="mb-3">
                                      <Label htmlFor='tradeLicenseName'>Trade License Name</Label>
                                      <Input 
                                        name='tradeLicenseName'
                                        type='text'
                                        className='form-control'
                                        id='tradeLicenseName'
                                        onChange={auctionHouseForm.handleChange}
                                        onBlur={auctionHouseForm.handleBlur}
                                        value={auctionHouseForm.values.tradeLicenseName || ""}
                                        invalid={auctionHouseForm.touched.tradeLicenseName && auctionHouseForm.errors.tradeLicenseName ? true : false}
                                        />
                                      {
                                        auctionHouseForm.touched.tradeLicenseName && auctionHouseForm.errors.tradeLicenseName ? (
                                          <FormFeedback type="invalid">{auctionHouseForm.errors.tradeLicenseName}</FormFeedback>
                                        ):
                                        null
                                      }
                                  
                                      </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                      <FormGroup className="mb-3">
                                      <Label htmlFor='tradeLicenseNumber'>Trade License Number</Label>
                                      <Input 
                                        name='tradeLicenseNumber'
                                        type='text'
                                        className='form-control'
                                        id='tradeLicenseNumber'
                                        onChange={auctionHouseForm.handleChange}
                                        onBlur={auctionHouseForm.handleBlur}
                                        value={auctionHouseForm.values.tradeLicenseNumber || ""}
                                        invalid={auctionHouseForm.touched.tradeLicenseNumber && auctionHouseForm.errors.tradeLicenseNumber ? true : false}
                                        />
                                        {auctionHouseForm.touched.tradeLicenseNumber && auctionHouseForm.errors.tradeLicenseNumber ?(
                                            <FormFeedback type="invalid">{auctionHouseForm.errors.tradeLicenseNumber}</FormFeedback>
                                        ):null}
                                  
                                      </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                      <Row>
                                        <Col md={8}>
                                        <FormGroup className="mb-3">
                                      <Label htmlFor='tradeLicenseDocument'>Trade License Document</Label>
                                      <Input 
                                        name='tradeLicenseDocument'
                                        type='file'
                                        className='form-control'
                                        id='tradeLicenseDocument'
                                        onChange={auctionHouseForm.handleChange}
                                        onBlur={auctionHouseForm.handleBlur}
                                        value={auctionHouseForm.values.tradeLicenseDocument || ""}
                                        invalid={auctionHouseForm.touched.tradeLicenseDocument && auctionHouseForm.errors.tradeLicenseDocument ? true : false}
                                        />
                                      {
                                        auctionHouseForm.touched.tradeLicenseDocument && auctionHouseForm.errors.tradeLicenseDocument ? (
                                          <FormFeedback type="invalid">{auctionHouseForm.errors.tradeLicenseDocument}</FormFeedback>
                                        ):
                                        null
                                      }
                                  
                                      </FormGroup>
                                        </Col>
                                        <Col md={4} className='d-flex align-items-center form-check-success'>
                                        <FormGroup check>
                                          <Label check >
                                            <Input type="checkbox"/>{' '}
                                            License Verified
                                          </Label>
                                        </FormGroup>
                                        </Col>
                                      </Row>
                                   
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                      <FormGroup className="mb-3">
                                      <Label htmlFor='registrationDate'>Registration Date</Label>
                                      <Input 
                                        name='registrationDate'
                                        type='date'
                                        className='form-control'
                                        id='registrationDate'
                                        onChange={auctionHouseForm.handleChange}
                                        onBlur={auctionHouseForm.handleBlur}
                                        value={auctionHouseForm.values.registrationDate || ""}
                                        invalid={auctionHouseForm.touched.registrationDate && auctionHouseForm.errors.registrationDate ? true : false}
                                        />
                                        {auctionHouseForm.touched.registrationDate && auctionHouseForm.errors.registrationDate ?(
                                            <FormFeedback type="invalid">{auctionHouseForm.errors.registrationDate}</FormFeedback>
                                        ):null}
                                  
                                      </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                    <FormGroup className="mb-3">
                                      <Label htmlFor='expiryDate'>Expiry Date</Label>
                                      <Input 
                                        name='expiryDate'
                                        type='date'
                                        className='form-control'
                                        id='expiryDate'
                                        onChange={auctionHouseForm.handleChange}
                                        onBlur={auctionHouseForm.handleBlur}
                                        value={auctionHouseForm.values.expiryDate || ""}
                                        invalid={auctionHouseForm.touched.expiryDate && auctionHouseForm.errors.expiryDate ? true : false}
                                        />
                                      {
                                        auctionHouseForm.touched.expiryDate && auctionHouseForm.errors.expiryDate ? (
                                          <FormFeedback type="invalid">{auctionHouseForm.errors.expiryDate}</FormFeedback>
                                        ):
                                        null
                                      }
                                  
                                      </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                      <FormGroup className="mb-3">
                                      <Label htmlFor='noPartner'>Number Of business partner</Label>
                                      <Input 
                                        name='noPartner'
                                        type='select'
                                        className='form-control'
                                        id='noPartner'
                                        onChange={auctionHouseForm.handleChange}
                                        onBlur={auctionHouseForm.handleBlur}
                                        value={auctionHouseForm.values.noPartner || ""}
                                        invalid={auctionHouseForm.touched.noPartner && auctionHouseForm.errors.noPartner ? true : false}
                                        />
                                        {auctionHouseForm.touched.noPartner && auctionHouseForm.errors.noPartner ?(
                                            <FormFeedback type="invalid">{auctionHouseForm.errors.noPartner}</FormFeedback>
                                        ):null}
                                  
                                      </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                      <Row>
                                        <Col md={6}>
                                      <FormGroup className="mb-3">
                                      <Label htmlFor='categories'>Categories</Label>
                                      <Input 
                                        name='categories'
                                        type='select'
                                        className='form-control'
                                        id='categories'
                                        onChange={auctionHouseForm.handleChange}
                                        onBlur={auctionHouseForm.handleBlur}
                                        value={auctionHouseForm.values.categories || ""}
                                        invalid={auctionHouseForm.touched.categories && auctionHouseForm.errors.categories ? true : false}
                                        />
                                      {
                                        auctionHouseForm.touched.categories && auctionHouseForm.errors.categories ? (
                                          <FormFeedback type="invalid">{auctionHouseForm.errors.categories}</FormFeedback>
                                        ):
                                        null
                                      }
                                  
                                      </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                        <FormGroup className="mb-3">
                                      <Label htmlFor='subcategories'>Sub Category</Label>
                                      <Input 
                                      
                                        name='categories'
                                        type='select'
                                        className='form-control'
                                        id='subcategories'
                                        onChange={auctionHouseForm.handleChange}
                                        onBlur={auctionHouseForm.handleBlur}
                                        value={auctionHouseForm.values.categories || ""}
                                        invalid={auctionHouseForm.touched.categories && auctionHouseForm.errors.categories ? true : false}
                                        />
                                      {
                                        auctionHouseForm.touched.categories && auctionHouseForm.errors.categories ? (
                                          <FormFeedback type="invalid">{auctionHouseForm.errors.categories}</FormFeedback>
                                        ):
                                        null
                                      }
                                  
                                      </FormGroup>
                                        </Col>
                                      </Row>
                                    
                                    </Col>
                                </Row>
                              
                              
                            </Form>
                          </div>
                        </TabPane>
                </TabContent>
                </div>
                <div className="actions clearfix">
                      <ul>
                        <li
                          className={
                            activeTab === 1 ? "previous disabled" : "previous"
                          }
                        >
                          <Link
                            to="#"
                            onClick={() => {
                              toggleTab(activeTab - 1)
                            }}
                          >
                            Previous
                          </Link>
                        </li>
                        <li
                          className="next"
                        >
                          <Link
                            to="#"
                            onClick={handlePersonalInfo}
                         
                          >
                            { activeTab === 1 ? "next" :"Create"}
                          </Link>
                        </li>
                      </ul>
                    </div>
            </div>
            </CardBody>
        </Card>
        </Col>
    </Row>
    </>
  )
}

export default AuctioneerFormWizard