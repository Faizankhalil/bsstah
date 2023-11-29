import React,{useEffect,useState} from 'react'
import {
    Table,
    Row,
    Col,
    Card,
    UncontrolledTooltip,
    Button,
    Spinner
  } from "reactstrap"
  import { Link } from 'react-router-dom'
  import {getCategoriess as onGetCategories,deleteCategory as onDeleteCategory} from "/src/store/actions";
  import { useSelector, useDispatch } from "react-redux";
  import CategoryModel from '../ConfigModel/CategoryModel';
  import DeleteModal from '../../../components/Common/DeleteModal';
  import CustomPagination from '../../../components/Common/Pagination';


const CategoryTable = ({deleteRecord}) => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.CategoriesReducer.categories?.data?.rows);
  const count = useSelector(state => state.CategoriesReducer.categories?.data?.count);
  const [categoryModelShow, setCategoryModelShow] = useState(false);
  const [deleteModel, setDeleteModel] = useState(false)
  const [CategoryObj,setCategory] = useState({})
  const [CategoryId,setCategoryId] = useState(0)
  const [isEdit, setIsEdit] = useState(false)
  // const [filteredCategories, setFilteredCategories] = useState([]);
  // const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(onGetCategories(10,1))
  }, [dispatch])

  // useEffect(() => {
  //   if(categories)  {
  //   const filteredCategories = categories.filter(category => category.parentId === 0);
  //   setFilteredCategories(filteredCategories);
  //   setCount(filteredCategories.length);
  //   }else{
  //     console.log("categories not available")
  //   }
    
  // }, [categories]);
  const toggle = ()=>{
    if(categoryModelShow){
      setCategoryModelShow(false);
      setCategory(null)
      setIsEdit(false)
    }else{
      setCategoryModelShow(true)
    }
  }
  const handleEditCategory = (obj) =>{
    setIsEdit(true)
    setCategory(obj);
    toggle()

  }
  const openDeleteModel =(Id)=>{
    setCategoryId(Id)
    setDeleteModel(true);
  }
  const onHandleDelete = () =>{
    dispatch(onDeleteCategory(CategoryId))
    setDeleteModel(false);
}
  return (
    <>
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
                        <Button
                            type="button"
                            color="success"
                            className="btn-rounded  mb-2 me-2"
                            onClick={toggle}
                        >
                        <i className="mdi mdi-plus me-1" />
                            Category
                        </Button>
                        </div>
              </div>
            </Card>
            {
              categories ? (
                <div className="table-responsive">
                     <Table className="table mb-0">
                     <thead className="table-light">
                        <tr>
                          <th>ID</th>
                          <th>Category</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                      { categories.map((category) => (
                              <tr  key={category.id}>
                                <td>{category.id}</td>
                                <td>{category.name}</td>
                                <td>
                                  <div className="d-flex gap-3">
                                  <Link to="#" className="text-success" onClick={()=>{
                                    handleEditCategory(category)
                                  }}>
                                  <i className="mdi mdi-pencil font-size-18" id="edittooltip" />
                                  <UncontrolledTooltip placement="top" target="edittooltip">
                                      Edit
                                  </UncontrolledTooltip>
                                  </Link>
                                  <Link to="#" className="text-danger" onClick={() => {
                                   openDeleteModel(category.id)
                                    }}>
                                  <i className="mdi mdi-delete font-size-18" id={`deletetooltip-${category.id}`}  />
                                  <UncontrolledTooltip placement="top" target={`deletetooltip-${category.id}`}>
                                      Delete
                                  </UncontrolledTooltip>
                                  </Link>
                                  </div>
                                </td>
                              </tr>
                              
                            ))
                      }
                      </tbody>
                     </Table>
                     <CustomPagination arrayCount={count} getNewReord={onGetCategories}/>
                </div>
              ):(
                <div>
                   <div className='d-flex justify-content-center align-items-center p-5'>
                              <Spinner
                                color="primary"
                                style={{
                                  height: '3rem',
                                  width: '3rem'
                                }}
                              >
                                Loading...
                              </Spinner>
                      </div>
                </div>
              )
            }
                 
              </Card>
            </Col>
            </Row>

            <DeleteModal show={deleteModel}  onDeleteClick={onHandleDelete} onCloseClick={()=>setDeleteModel(false)}/>
            <CategoryModel show={categoryModelShow} toggleModel={toggle} category={CategoryObj} isEdit={isEdit}/>
    </>
  )
}

export default CategoryTable