import React,{useState} from 'react'
import Breadcrumbs from "../../components/Common/Breadcrumb"
import DeleteModal from '../../components/Common/DeleteModal'
import CategoryModel from './ConfigModel/CategoryModel'
import CategoryTable from './ConfigTable/CategoryTable'
import SubCategoryTable from './ConfigTable/SubCategoryTable'
import SubCategoryModel from './ConfigModel/SubCategoryModel'

const AuctionConfig = () => {
    document.title = "Auction Config | Bsstah"
    const [deleteModel, setDeleteModel] = useState(false)
  
    const [subCategoryModelShow, setSubCategoryModelShow] = useState(false)
    // Delete function
    const onHandleDelete = () =>{
        setDeleteModel(true)
    }
   
  return (
    <div className="page-content">
        <React.Fragment>
            <div className="container-fluid">
            <Breadcrumbs title="Auction Config" breadcrumbItem="Auction Config"/>
            {/* Tables */}
                <div className="mb-5">
                <CategoryTable
                 deleteRecord={onHandleDelete}
               />
                </div>
                        
                <div className=''>
                <SubCategoryTable deleteRecord={onHandleDelete} toggleModel={()=>setSubCategoryModelShow(!subCategoryModelShow)}/>
                </div>
                    
            </div>
            <div>
                {/* Models */}
                
                <SubCategoryModel show={subCategoryModelShow} toggle={()=>setSubCategoryModelShow(!subCategoryModelShow)}/>
            </div>
        </React.Fragment>
       
    </div>
  )
}

export default AuctionConfig