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
  updateAuctioneerRequest as onUpdateAuctioneerHouse,
  uploadFileRequested as onUploadFile

} from "/src/store/actions";
import InputText from '../../Form/InputText';
import InputEmail from '../../Form/InputEmail';
import InputPassword from '../../Form/InputPassword';
import InputCheck from '../../Form/InputCheck';
import InputDate from '../../Form/InputDate';


const AuctioneerFormWizard = ({auctioneerId}) => {
    const dispatch = useDispatch();
    const [activeTab, setactiveTab] = useState(1)
    const [passedSteps, setPassedSteps] = useState([1])
    const [file, setfile] = useState()
    const newauctioneer = useSelector(state => state.AuctioneerReducer.auctioneer);
    const auctioneer = useSelector(state => state.AuctioneerReducer.auctioneerDetails); 
    const auctionHouse = useSelector(state => state.auctionHouseReducer.auctionHouse); 
    const success = useSelector(state => state.AuctioneerReducer.success);
    const fileUrl = useSelector(state => state.fileReducer?.file)
    const isEditing = Boolean(auctioneerId);
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
     const validationSchemaAuctionHouse = Yup.object().shape({
      auctionHouseName: Yup.string().required("Please Enter Auction House Name"),
      tradeLicensesName: Yup.string().required("Please Enter License Name"),
      tradeLicensesNumber: Yup.string().required("Please Enter License Number"),
      registerationDate: Yup.string().required("Please select registeration date"),
      expiryDate: Yup.string().required("Please select expiry date"),
      country: Yup.string().required("Please select country"),
      state: Yup.string().required("Please select state"),
      address: Yup.string().required("Please Enter address")

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
        id:auctionHouse? auctionHouse.id:newauctioneer.id,
        auctionHouseName:auctionHouse? auctionHouse.auctionHouseName :"",
        tradeLicensesName:auctionHouse? auctionHouse.tradeLicensesName:"",
        tradeLicensesNumber:auctionHouse? auctionHouse.tradeLicensesNumber:"",
        tradeLicensesDocument:auctionHouse? auctionHouse.tradeLicensesDocument:"",
        registerationDate:auctionHouse? auctionHouse.registerationDate:"",
        expiryDate:auctionHouse? auctionHouse.expiryDate:"",
        country:auctionHouse? auctionHouse.country:"",
        state:auctionHouse? auctionHouse.state:"",
        address:auctionHouse? auctionHouse.address:"",
        numberOfBusinessPartner:auctionHouse? auctionHouse.numberOfBusinessPartner:0,
        licenseVerified:auctionHouse? auctionHouse.licenseVerified:true,
      },
       validationSchema:validationSchemaAuctionHouse,
      onSubmit:(values) => {
        console.log(values,"values")
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
           formik.handleSubmit();
        if(formik.isValid && formik.dirty){
          toggleTab(activeTab + 1);
        }
             
          
        }
        else if(activeTab == 2){
          console.log("create auction house")
          auctionHouseForm.handleSubmit()
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

      useEffect(()=>{
        if(newauctioneer){
          console.log(newauctioneer.id,"newauctioneerId useeffect")
          auctionHouseForm.setValues((prevValues)=>({
            ...prevValues,
            id:newauctioneer.id,
          }))
        }
      }, [newauctioneer])

      // useEffect(() =>{
      //   if(isEditing && auctionHouse){
      //     auctionHouseForm.setValues((prevValues)=>({
      //      ...prevValues,
      //       id:auctionHouse.id,
      //       auctionHouseName:auctionHouse.auctionHouseName,
      //       tradeLicensesName:auctionHouse.tradeLicensesName,
      //       tradeLicensesNumber:auctionHouse.tradeLicensesNumber,
      //       tradeLicensesDocument:auctionHouse.tradeLicensesDocument,
      //       registerationDate:auctionHouse.registerationDate,
      //       expiryDate:auctionHouse.expiryDate,
      //       country:auctionHouse.country,
      //       state:auctionHouse.state,
      //       address:auctionHouse.address,
      //       numberOfBusinessPartner:auctionHouse.numberOfBusinessPartner,
      //       licenseVerified:auctionHouse.licenseVerified,
      //     }))
      //   }
      // },[isEditing,auctionHouse])

    useEffect(() => {
    if(fileUrl){
      auctionHouseForm.setValues((prevValues)=>({
        ...prevValues,
        tradeLicensesDocument:fileUrl.url,
      }))
    }
    }, [fileUrl])

      const handleFileChange = (event)=>{
        const selectedFile = event.target.files[0]
        setfile(selectedFile)
      }
      useEffect(() => {
        if (file) {
          const formData = new FormData();
          formData.append('file', file);
          dispatch(onUploadFile(formData))
          setfile(null)
        }
      }, [file]); 
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
                            <InputText
                             name="EN - Full name"
                             validation={formik.getFieldProps('fullName.en')}
                             metaProps={formik.getFieldMeta('fullName.en')}
                             disabled={isEditing ?true:false}
                             />
                       
                          </Col>
                          <Col md={6}>
                          <InputText name="AR - Full name"
                             validation={formik.getFieldProps('fullName.ar')}
                             metaProps={formik.getFieldMeta('fullName.ar')}
                             disabled={isEditing ?true:false}
                             />
                       
                          </Col>
                      </Row>
                      <Row>
                          <Col md={6}>
                          <InputText name="Phone"
                             validation={formik.getFieldProps('phoneNumber')}
                             metaProps={formik.getFieldMeta('phoneNumber')}
                             disabled={isEditing ?true:false}
                             />
                      
                          </Col>
                          <Col md={6}>
                            <InputEmail
                            name="Email"
                             validation={formik.getFieldProps('email')}
                             metaProps={formik.getFieldMeta('email')}
                             disabled={isEditing ?true:false}
                             />
                       
                          </Col>
                      </Row>
                      <Row>
                          <Col md={6}>
                            <InputPassword
                            name="Password"
                            validation={formik.getFieldProps('password')}
                            metaProps={formik.getFieldMeta('password')}
                            disabled={isEditing ?true:false}
                            hidden={isEditing? true : false}
                            />
                          
                          </Col>
                          <Col md={6}>
                            <InputPassword
                             name="Confirm Password"
                             validation={formik.getFieldProps('confirmPassword')}
                             metaProps={formik.getFieldMeta('confirmPassword')}
                             disabled={isEditing ?true:false}
                             hidden={isEditing? true : false}
                             />
                       
                          </Col>
                      </Row>
                    
                           
                    </Form>
                  </TabPane>
                  <TabPane tabId={2}>
                          <div>
                            <Form>
                                  <Row>
                                    <Col md={6}>
                                    <InputText
                                      name="Auction House Name"
                                      validation={auctionHouseForm.getFieldProps('auctionHouseName')}
                                      metaProps={auctionHouseForm.getFieldMeta('auctionHouseName')}
                                      />

                                   
                                    </Col>
                                    <Col md={6}>
                                    <InputText
                                      name="Trade License Name"
                                      validation={auctionHouseForm.getFieldProps('tradeLicensesName')}
                                      metaProps={auctionHouseForm.getFieldMeta('tradeLicensesName')}
                                      />
                                   
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                    <InputText
                                      name="Trade License Number"
                                      validation={auctionHouseForm.getFieldProps('tradeLicensesNumber')}
                                      metaProps={auctionHouseForm.getFieldMeta('tradeLicensesNumber')}
                                      />
                                     
                                    </Col>
                                    <Col md={6}>
                                      <Row>
                                        <Col md={8}>
                                        <FormGroup className="mb-3">
                                      <Label htmlFor='tradeLicensesDocument'>Trade License Document</Label>
                                      <input type="file" className='form-control' onChange={handleFileChange} />
                                   
                                  
                                      </FormGroup>
                                        </Col>
            
                                        <Col md={4} className='d-flex align-items-center form-check-success'>
                                          <InputCheck 
                                          name="License Verified"
                                          validation={auctionHouseForm.getFieldProps('licenseVerified')}
                                          metaProps={auctionHouseForm.getFieldMeta('licenseVerified')}
                                          />
                                       
                                        </Col>
                                      </Row>
                                   
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                    <InputDate 
                                          name="Registration Date"
                                          validation={auctionHouseForm.getFieldProps('registerationDate')}
                                          metaProps={auctionHouseForm.getFieldMeta('registerationDate')}
                                          />
                                    </Col>
                                    <Col md={6}>
                                    <InputDate 
                                          name="Expiry Date"
                                          validation={auctionHouseForm.getFieldProps('expiryDate')}
                                          metaProps={auctionHouseForm.getFieldMeta('expiryDate')}
                                          />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                    <InputText 
                                          name="Country"
                                          validation={auctionHouseForm.getFieldProps('country')}
                                          metaProps={auctionHouseForm.getFieldMeta('country')}
                                          />
                                    </Col>
                                    <Col md={6}>
                                    <InputText 
                                          name="State"
                                          validation={auctionHouseForm.getFieldProps('state')}
                                          metaProps={auctionHouseForm.getFieldMeta('state')}
                                          />
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
                                <Row>
                                  <Col md={12}>
                                    <InputText
                                    name="Address"
                                    validation={auctionHouseForm.getFieldProps('address')}
                                    metaProps={auctionHouseForm.getFieldMeta('address')}
                                    />
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