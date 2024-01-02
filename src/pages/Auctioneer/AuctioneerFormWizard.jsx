import React,{useState,useEffect} from 'react'
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
import { Field, useFormik } from 'formik'
import * as Yup from 'yup';
import {useSelector, useDispatch } from 'react-redux';
import {
  createAuctioneerRequest as onCreateAuctioneer,
  updateAuctioneerRequest as onUpdateAuctioneerHouse
} from "/src/store/actions";


const AuctioneerFormWizard = ({auctioneerId}) => {
    const dispatch = useDispatch();
    const [activeTab, setactiveTab] = useState(1)
    const [passedSteps, setPassedSteps] = useState([1])
    const [license, setLicense] = useState(false)
    const auctioneer = useSelector(state => state.AuctioneerReducer.auctioneerDetails); 
    // console.log(auctioneer)
    // console.log(auctioneerId)
    const isEditing = Boolean(auctioneerId);
    console.log(isEditing,"isediting")
    const validationSchema = Yup.object().shape({
      fullName: Yup.object().shape({
        en:Yup.string().required("Please Enter Full Name in English"),
        ar:Yup.string().required("Please Enter Full Name in Arabic")
      }),
      email:Yup.string()
      .email("Must be a valid Email")
      .required("Please Enter Email"),
      password:isEditing ? Yup.string() : Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required("Please Enter password"),
      confirmPassword:isEditing ? Yup.string() :Yup.string()
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
        // dispatch(onCreateAuctioneer(values))
      }
    })

    const auctionHouseForm = useFormik({
      enableReinitialize: true,
      initialValues:{
        id:0,
        auctionHouseName:"",
        tradeLicensesName:"",
        tradeLicensesNumber:"",
        tradeLicensesDocument:"",
        registerationDate:"",
        expiryDate:"",
        country:"",
        state:"",
        address:"",
        numberOfBusinessPartner:0,
        license:false,
      },
      onSubmit:(values) => {
        console.log(values,"valuesss")
        dispatch(onUpdateAuctioneerHouse(values))
      }
    })
    const handlePersonalInfo = async () => {
      if(isEditing){
        if(activeTab == 1){
          toggleTab(activeTab + 1);
        }else if(activeTab == 2){
          console.log("tab 2 button from edit");
          auctionHouseForm.handleSubmit()
        }
      }else{
        if(activeTab == 1)
        {
          formik.handleSubmit()
          if (formik.isValid && formik.dirty && success) {
          toggleTab(activeTab + 1);
          }
        }
        else if(activeTab == 2){
        //  auctionHouseForm.handleSubmit()
            } 
        }
    }
    const toggleTab =(tab)=> {
        if (activeTab !== tab) {
          var modifiedSteps = [...passedSteps, tab]
          if (tab >= 1 && tab <= 4) {
            setactiveTab(tab)
            setPassedSteps(modifiedSteps)
          }
        }
      }
      useEffect(() => {
        if (isEditing && auctioneer) {
          formik.setValues((prevValues) => ({
            ...prevValues,
            fullName: {
              en: auctioneer.fullName.en,
              ar: auctioneer.fullName.ar,
            },
            email: auctioneer.email,
            phoneNumber: auctioneer.userName,
            countryCode: auctioneer.countryCode,
          }));
        }
      }, [isEditing, auctioneer]);

      useEffect(() =>{
        if(isEditing && auctioneer){
          auctionHouseForm.setValues((prevValues)=>({
            ...prevValues,
            id:auctioneer.id,
            tradeLicensesNumber:auctioneer.tradeLicensesNumber,
            registerationDate:auctioneer.registerationDate,
            expiryDate:auctioneer.expiryDate,
          }))
        }
      },[isEditing,auctioneer])
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
                            disabled={isEditing ? true :false}
                              name='fullName.en'
                              placeholder='Full Name - EN'
                              type='text'
                              className='form-control'
                              id='fullName.en'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.fullName.en || ""}
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
                             disabled={isEditing ? true :false}
                              name='fullName.ar'
                              placeholder='Full Name - AR'
                              type='text'
                              className='form-control'
                              id='fullName.ae'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.fullName.ar || ""}
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
                             disabled={isEditing ? true :false}
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
                             disabled={isEditing ? true :false}
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
                             disabled={isEditing ? true :false}
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
                              disabled={isEditing ? true :false}
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
                    
                           
                    </Form>
                  </TabPane>
                  <TabPane tabId={2}>
                          <div>
                            <Form>
                                  <Row>
                                    <Col md={6}>
                                      <FormGroup className="mb-3">
                                      <Label htmlFor='auctionHouseName'>Auction House Name</Label>
                                      <Input 
                                        name='auctionHouseName'
                                        type='text'
                                        className='form-control'
                                        id='auctionHouseName'
                                        onChange={auctionHouseForm.handleChange}
                                        onBlur={auctionHouseForm.handleBlur}
                                        value={auctionHouseForm.values.auctionHouseName || ""}
                                        invalid={auctionHouseForm.touched.auctionHouseName && auctionHouseForm.errors.auctionHouseName ? true : false}
                                        />
                                        {auctionHouseForm.touched.auctionHouseName && auctionHouseForm.errors.auctionHouseName ?(
                                            <FormFeedback type="invalid">{auctionHouseForm.errors.auctionHouseName}</FormFeedback>
                                        ):null}
                                  
                                      </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                    <FormGroup className="mb-3">
                                      <Label htmlFor='tradeLicensesName'>Trade License Name</Label>
                                      <Input 
                                        name='tradeLicensesName'
                                        type='text'
                                        className='form-control'
                                        id='tradeLicensesName'
                                        onChange={auctionHouseForm.handleChange}
                                        onBlur={auctionHouseForm.handleBlur}
                                        value={auctionHouseForm.values.tradeLicensesName || ""}
                                        invalid={auctionHouseForm.touched.tradeLicensesName && auctionHouseForm.errors.tradeLicensesName ? true : false}
                                        />
                                      {
                                        auctionHouseForm.touched.tradeLicensesName && auctionHouseForm.errors.tradeLicensesName ? (
                                          <FormFeedback type="invalid">{auctionHouseForm.errors.tradeLicensesName}</FormFeedback>
                                        ):
                                        null
                                      }
                                  
                                      </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                      <FormGroup className="mb-3">
                                      <Label htmlFor='tradeLicensesNumber'>Trade License Number</Label>
                                      <Input 
                                        name='tradeLicensesNumber'
                                        type='text'
                                        className='form-control'
                                        id='tradeLicensesNumber'
                                        onChange={auctionHouseForm.handleChange}
                                        onBlur={auctionHouseForm.handleBlur}
                                        value={auctionHouseForm.values.tradeLicensesNumber || ""}
                                        invalid={auctionHouseForm.touched.tradeLicensesNumber && auctionHouseForm.errors.tradeLicensesNumber ? true : false}
                                        />
                                        {auctionHouseForm.touched.tradeLicensesNumber && auctionHouseForm.errors.tradeLicensesNumber ?(
                                            <FormFeedback type="invalid">{auctionHouseForm.errors.tradeLicensesNumber}</FormFeedback>
                                        ):null}
                                  
                                      </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                      <Row>
                                        <Col md={8}>
                                        <FormGroup className="mb-3">
                                      <Label htmlFor='tradeLicensesDocument'>Trade License Document</Label>
                                      <Input 
                                        name='tradeLicensesDocument'
                                        type='file'
                                        className='form-control'
                                        id='tradeLicensesDocument'
                                        onChange={auctionHouseForm.handleChange}
                                        onBlur={auctionHouseForm.handleBlur}
                                        value={auctionHouseForm.values.tradeLicensesDocument || ""}
                                        invalid={auctionHouseForm.touched.tradeLicensesDocument && auctionHouseForm.errors.tradeLicensesDocument ? true : false}
                                        />
                                      {
                                        auctionHouseForm.touched.tradeLicensesDocument && auctionHouseForm.errors.tradeLicensesDocument ? (
                                          <FormFeedback type="invalid">{auctionHouseForm.errors.tradeLicensesDocument}</FormFeedback>
                                        ):
                                        null
                                      }
                                  
                                      </FormGroup>
                                        </Col>
            
                                        <Col md={4} className='d-flex align-items-center form-check-success'>
                                        <FormGroup check>
                                          <Label check >
                                          <Input
                                                  type="checkbox"
                                                  name="license"
                                                  checked={auctionHouseForm.getFieldProps("license").value}
                                                  {...auctionHouseForm.getFieldProps("license")}
                                                  
                                                />{' '}
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
                                      <Label htmlFor='registerationDate'>Registration Date</Label>
                                      <Input 
                                        name='registerationDate'
                                        type='date'
                                        className='form-control'
                                        id='registerationDate'
                                        onChange={auctionHouseForm.handleChange}
                                        onBlur={auctionHouseForm.handleBlur}
                                        value={auctionHouseForm.values.registerationDate || ""}
                                        invalid={auctionHouseForm.touched.registerationDate && auctionHouseForm.errors.registerationDate ? true : false}
                                        />
                                        {auctionHouseForm.touched.registerationDate && auctionHouseForm.errors.registerationDate ?(
                                            <FormFeedback type="invalid">{auctionHouseForm.errors.registerationDate}</FormFeedback>
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
                                      <Label htmlFor='numberOfBusinessPartner'>Number Of business partner</Label>
                                      <Input 
                                        name='numberOfBusinessPartner'
                                        type='select'
                                        className='form-control'
                                        id='numberOfBusinessPartner'
                                        onChange={auctionHouseForm.handleChange}
                                        onBlur={auctionHouseForm.handleBlur}
                                        value={auctionHouseForm.values.numberOfBusinessPartner || ""}
                                        invalid={auctionHouseForm.touched.numberOfBusinessPartner && auctionHouseForm.errors.numberOfBusinessPartner ? true : false}
                                        >
                                          <option value={1}>
                                            1
                                          </option>
                                          <option value={2}>
                                            2
                                          </option>
                                          <option value={3}>
                                            3
                                          </option>
                                          <option value={4}>
                                            4
                                          </option>
                                          <option value={5}>
                                            5
                                          </option>
                                          <option value={5}>
                                            5
                                          </option>
                                          <option value={6}>
                                            6
                                          </option>
                                          <option value={7}>
                                            7
                                          </option>
                                          <option value={8}>
                                            8
                                          </option>
                                          <option value={9}>
                                            9
                                          </option>
                                        </Input>
                                        {auctionHouseForm.touched.numberOfBusinessPartner && auctionHouseForm.errors.numberOfBusinessPartner ?(
                                            <FormFeedback type="invalid">{auctionHouseForm.errors.numberOfBusinessPartner}</FormFeedback>
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
                                      
                                        name='subcategories'
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